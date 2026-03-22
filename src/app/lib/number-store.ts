export async function getRandomNumber() {
    await new Promise((r) => setTimeout(r, 2000));
    return Math.random();
}
