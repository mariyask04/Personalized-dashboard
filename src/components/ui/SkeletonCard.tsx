export default function SkeletonCard() {
  return (
    <div className="animate-pulse bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800">

      <div className="h-52 bg-zinc-300 dark:bg-zinc-700" />

      <div className="p-5">

        <div className="h-5 w-24 rounded bg-zinc-300 dark:bg-zinc-700 mb-4" />

        <div className="h-6 w-full rounded bg-zinc-300 dark:bg-zinc-700 mb-3" />

        <div className="h-4 w-full rounded bg-zinc-300 dark:bg-zinc-700 mb-2" />

        <div className="h-4 w-3/4 rounded bg-zinc-300 dark:bg-zinc-700 mb-5" />

        <div className="h-10 w-32 rounded-xl bg-zinc-300 dark:bg-zinc-700" />

      </div>
    </div>
  );
}