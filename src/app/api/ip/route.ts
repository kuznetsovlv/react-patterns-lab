import {isIP} from 'node:net';

export async function GET(request: Request) {
    const forwarded = request.headers.get('forwarded');
    const xForwardedFor = request.headers.get('x-forwarded-for');
    const xRealIp = request.headers.get('x-real-ip');

    const candidates = [
        ...getIpsFromForwarded(forwarded),
        ...getIpsFromXForwardedFor(xForwardedFor),
        ...getIpsFromSingleHeader(xRealIp),
    ];

    let ipv4: string | null = null;
    let ipv6: string | null = null;

    for (const candidate of candidates) {
        const normalized = normalizeIp(candidate);

        if (!normalized) {
            continue;
        }

        if (!ipv4 && normalized.ipv4) {
            ipv4 = normalized.ipv4;
        }

        if (!ipv6 && normalized.ipv6) {
            ipv6 = normalized.ipv6;
        }

        if (ipv4 && ipv6) {
            break;
        }
    }

    return Response.json({
        ip: ipv4 ?? ipv6 ?? null,
        ipv4,
        ipv6,
    });
}

function getIpsFromXForwardedFor(header: string | null): string[] {
    if (!header) {
        return [];
    }

    return header
        .split(',')
        .map((part) => part.trim())
        .filter(Boolean);
}

function getIpsFromSingleHeader(header: string | null): string[] {
    if (!header) {
        return [];
    }

    return [header.trim()].filter(Boolean);
}

function getIpsFromForwarded(header: string | null): string[] {
    if (!header) {
        return [];
    }

    const matches = [
        ...header.matchAll(/for=(?:"?\[?)([a-zA-Z0-9:.%-]+)(?:\]?"?)/gi),
    ];
    return matches.map((match) => match[1]).filter(Boolean);
}

function normalizeIp(
    raw: string
): {ipv4: string | null; ipv6: string | null} | null {
    const value = raw.trim();

    if (!value || value.toLowerCase() === 'unknown') {
        return null;
    }

    // IPv4-mapped IPv6, например ::ffff:127.0.0.1
    const mappedIpv4Match = value.match(/^::ffff:(\d+\.\d+\.\d+\.\d+)$/i);
    if (mappedIpv4Match) {
        return {
            ipv4: mappedIpv4Match[1],
            ipv6: value,
        };
    }

    const version = isIP(value);

    if (version === 4) {
        return {
            ipv4: value,
            ipv6: null,
        };
    }

    if (version === 6) {
        return {
            ipv4: null,
            ipv6: value,
        };
    }

    return null;
}
