import Icon from "@/components/ui/Icon";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Validate", href: "#" },
  { label: "History", href: "#" },
  { label: "Security", href: "#" },
  { label: "Institutions", href: "#" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-lg py-sm bg-surface/80 backdrop-blur-md border-b border-outline-variant">
      {/* Logo */}
      <div className="flex items-center gap-sm">
        <Icon name="verified_user" className="text-primary" />
        <span className="text-title-md font-bold text-primary">
          CertVerify
        </span>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-xl">
        {NAV_LINKS.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            className={
              i === 0
                ? "text-primary font-bold transition-colors"
                : "text-on-surface-variant hover:bg-surface-container-low transition-colors px-2 py-1 rounded"
            }
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Right Side Buttons */}
      <div className="flex items-center gap-md">
        <Link
        href="/signup"
         className="flex items-center gap-xs text-label-md text-primary border border-primary px-md py-sm rounded-lg hover:bg-primary hover:text-white transition-all  "
        >
        <Icon name="person_add" className="text-[18px]" />
        Sign Up
        </Link>

        
        <Link
        href="/login"
         className="flex items-center gap-xs text-label-md text-primary border border-primary px-md py-sm rounded-lg hover:bg-primary hover:text-white transition-all  "
        >
        <Icon name="person_add" className="text-[18px]" />
        Login
        </Link>

        <button className="hidden md:flex items-center gap-xs text-label-md text-on-surface-variant px-md py-sm rounded-lg hover:bg-surface-container-low transition-all">
          <Icon name="contact_support" className="text-[18px]" />
          Help
        </button>

        <button className="p-xs text-on-surface hover:bg-surface-container-low rounded-full md:hidden">
          <Icon name="menu" />
        </button>
      </div>
    </header>
  );
}