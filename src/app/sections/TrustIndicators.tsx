import Icon from "@/components/ui/Icon";

const TRUST_INDICATORS = [
  { icon: "lock", title: "Secure Socket", subtitle: "256-bit Encryption" },
  { icon: "gpp_good", title: "ISO 27001", subtitle: "Security Management" },
  { icon: "account_balance", title: "Institutional", subtitle: "Global Partner Network" },
  { icon: "cloud_done", title: "Uptime 99.99%", subtitle: "Enterprise SLA" },
];

export default function TrustIndicators() {
  return (
    <section className="py-24 border-t border-outline-variant bg-surface-container-low">
      <div className="max-w-container-max mx-auto px-lg text-center mb-16">
        <h2 className="text-headline-lg mb-4">Uncompromising Standards</h2>
      </div>
      <div className="max-w-container-max mx-auto px-lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-xl opacity-70">
          {TRUST_INDICATORS.map((item) => (
            <div key={item.title} className="flex items-center gap-md trust-badge-glow">
              <Icon name={item.icon} className="text-[40px] text-outline" />
              <div className="text-left">
                <p className="text-label-md font-bold text-on-surface">{item.title}</p>
                <p className="text-label-sm text-on-surface-variant">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}