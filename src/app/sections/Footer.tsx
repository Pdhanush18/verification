import Icon from "@/components/ui/Icon";

const FOOTER_COLUMNS = [
  {
    title: "Product",
    links: ["Validator Hub", "API Access", "Enterprise"],
  },
  {
    title: "Security",
    links: ["Privacy Policy", "Security Whitepaper", "Compliance"],
  },
  {
    title: "Resources",
    links: ["Documentation", "Help Center", "System Status"],
  },
  {
    title: "Company",
    links: ["About Us", "Partners", "Contact"],
  },
];

export default function Footer() {
  return (
    <footer className="w-full px-lg py-32 flex flex-col items-center gap-lg text-center bg-surface border-t border-outline-variant">
      {/* Logo */}
      <div className="flex items-center gap-sm mb-lg">
        <Icon name="verified_user" className="text-primary text-3xl" />
        <span className="text-title-md font-bold text-on-surface">
          CertVerify Systems
        </span>
      </div>

      {/* Footer Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-xl max-w-[1000px] w-full text-left mb-xl">
        {FOOTER_COLUMNS.map((col) => (
          <div key={col.title} className="space-y-md">
            <h4 className="font-bold text-on-surface">{col.title}</h4>

            <nav className="flex flex-col gap-sm">
              {col.links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-on-surface-variant hover:text-primary transition-colors text-body-md"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="w-full max-w-container-max pt-xl border-t border-outline-variant/30 mt-xl flex flex-col md:flex-row justify-between items-center gap-md">
        <p className="text-on-surface-variant text-body-md">
          © 2024 CertVerify Systems. Institutional Trust & Precision.
        </p>

        <div className="flex gap-md">
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary hover:text-white transition-all"
          >
            <Icon name="language" className="text-[20px]" />
          </a>

          <a
            href="#"
            className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary hover:text-white transition-all"
          >
            <Icon name="share" className="text-[20px]" />
          </a>
        </div>
      </div>
    </footer>
  );
}