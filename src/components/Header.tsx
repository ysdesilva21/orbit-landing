import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Product", href: "#product" },
    { label: "Solutions", href: "#solutions" },
    { label: "Resources", href: "#resources" },
    { label: "Pricing", href: "#pricing" },
  ];

  return (
    <header className="relative w-full bg-white">
      <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2.5 no-underline"
        >
          <img
            src="/orbit-logo.png"
            alt="Orbit"
            className="block h-9 w-9 object-contain"
          />

          <span className="text-[24px] font-semibold leading-none tracking-[-0.03em] text-[var(--primary)]">
            Orbit
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="
                header-link
                relative
                text-[16px]
                font-medium
                leading-none
              "
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <button
          type="button"
          className="
            primary-button
            hidden
            rounded-lg
            px-5
            py-2.5
            text-[16px]
            font-medium
            leading-none
            md:block
          "
        >
          Start Free
        </button>

        {/* Tablet / Mobile Menu */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            block
            text-[16px]
            font-medium
            text-[var(--primary)]
            md:hidden
          "
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Tablet / Mobile Menu */}
      <div
        className={`
          absolute
          left-0
          top-full
          z-50
          w-full
          overflow-hidden
          border-t
          border-black/5
          bg-white
          transition-all
          duration-300
          md:hidden
          ${
            menuOpen
              ? "max-h-[500px] opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }
        `}
      >
        <div className="mx-auto max-w-7xl px-6 py-5">

          {/* Navigation Links */}
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="
                  header-link
                  border-b
                  border-black/5
                  py-4
                  text-[16px]
                  font-medium
                "
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Menu CTA */}
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="
              primary-button
              mt-5
              w-full
              rounded-lg
              px-5
              py-3
              text-[16px]
              font-medium
            "
          >
            Start Free
          </button>

        </div>
      </div>
    </header>
  );
}