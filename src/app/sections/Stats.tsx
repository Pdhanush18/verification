const STATS = [
  { value: "5M+", label: "Verified Certificates" },
  { value: "400+", label: "Partner Institutions" },
  { value: "99.9%", label: "System Uptime" },
  { value: "0.0%", label: "Counterfeit Rate" },
];

export default function Stats() {
  return (
    <section className="py-24 bg-surface-container-low border-y border-outline-variant/30">
      <div className="max-w-container-max mx-auto px-lg">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-xl text-center">
          {STATS.map((stat) => (
            <div key={stat.label} className="space-y-xs">
              <p className="text-[56px] font-bold leading-none text-primary">{stat.value}</p>
              <p className="text-label-md font-bold uppercase text-on-surface-variant tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}