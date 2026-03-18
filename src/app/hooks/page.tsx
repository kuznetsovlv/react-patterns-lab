import TransitionDemo from './components/TransitionTaskDemo';
import DeferredSearchDemo from './components/DeferredSearchDemo';
import ImperativeHandleDemo from './components/ImperativeHandleDemo';
import ActionStateDemo from './components/ActionStateDemo';

export default function HookPage() {
    return (
        <div className="mx-auto max-w-5xl px-6 py-10 space-y-10">
            <h1 className="text-3xl font-bold tracking-tight">
                React Hooks Playground
            </h1>

            <section className="rounded-2xl border p-6 shadow-sm space-y-4">
                <h2 className="text-xl font-semibold">useTransition</h2>
                <TransitionDemo />
            </section>

            <section className="rounded-2xl border p-6 shadow-sm space-y-4">
                <h2 className="text-xl font-semibold">useDeferredValue</h2>
                <DeferredSearchDemo />
            </section>

            <section className="rounded-2xl border p-6 shadow-sm space-y-4">
                <h2 className="text-xl font-semibold">useImperativeHandle</h2>
                <ImperativeHandleDemo />
            </section>

            <section className="rounded-2xl border p-6 shadow-sm space-y-4">
                <h2 className="text-xl font-semibold">useActionState</h2>
                <ActionStateDemo />
            </section>
        </div>
    );
}
