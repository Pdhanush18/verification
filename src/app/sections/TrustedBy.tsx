import Icon from "@/components/ui/Icon";

const TRUSTED_BY = [
  { label: "ACADEMIA", icon: "account_balance" },
  { label: "ENTERPRISE", icon: "corporate_fare" },
  { label: "GOV.ID", icon: "policy" },
  { label: "UNIV.SYS", icon: "school" },
  { label: "CERT.HUB", icon: "workspace_premium" },
];

export default function TrustedBy() {
  return (
    <section className="py-24 border-y border-outline-variant bg-surface">
      <div className="max-w-container-max mx-auto px-lg">
        <p className="text-center text-label-md font-bold text-outline uppercase tracking-widest mb-xl">
          Trusted by Industry Leaders & Institutions
        </p>
        <div className="flex flex-wrap justify-center items-center gap-xl md:gap-[100px] opacity-40 grayscale">
          {TRUSTED_BY.map((item) => (
            <div key={item.label} className="flex items-center gap-sm font-bold text-xl">
              <Icon name={item.icon} className="text-3xl" /> {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}