import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <Link href="/" className="brand">
          <span className="brand-icon">🍴</span> NextBites
        </Link>
        <nav className="nav-links">
          <Link href="/">Recipes</Link>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}