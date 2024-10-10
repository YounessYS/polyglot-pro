export default function Header() {
  return (
    <header className="flex items-center justify-between gap-4 p-4">
      <h1 className="font-medium">
        Polyglot<span className="text-white bold">Pro</span>
      </h1>
      <button className="flex items-center gap-2 btn text-sm px-3 py-2 rounded-lg text-black">
        <p>New</p>
        <i className="fa-solid fa-plus"></i>
      </button>
    </header>
  );
}
