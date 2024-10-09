export default function HomePage() {
  return (
    <main className="flex-1 p-4 flex flex-col gap-3 text-center sm:gap-4 md:gap-5 justify-center">
      <h1 className="font-semibold text-5xl sm:text-6xl md:text-7xl">
        Polyglot<span className="text-white bold">Pro</span>
      </h1>
      <h3 className="font-medium">
        Record <span className="text-white">&rarr;</span> Transcribe{" "}
        <span className="text-white">&rarr;</span> Translate
      </h3>
    </main>
  );
}
