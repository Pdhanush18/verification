import Icon from "@/components/ui/Icon";

const PILLARS = [
  {
    icon: "shield_lock",
    title: "Immutable Security",
    description:
      "Every credential is cryptographically hashed and anchored to a distributed ledger, making alterations impossible to go undetected.",
  },
  {
    icon: "bolt",
    title: "Real-time Validation",
    description:
      "Instant sub-second verification through our global CDN nodes. No manual processing, no delays, no wait times for verification results.",
  },
  {
    icon: "public",
    title: "Global Acceptance",
    description:
      "Compliant with international digital identity standards (W3C DID/VC), ensuring your credentials are recognized by institutions worldwide.",
  },
];

export default function Pillars() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-container-max mx-auto px-lg text-center mb-24">
        <h2 className="text-headline-lg text-on-surface mb-md">Built for the Future of Verification</h2>
        <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Our infrastructure is designed to eliminate fraud while maximizing operational efficiency for
          organizations of all sizes.
        </p>
      </div>

      <div className="max-w-container-max mx-auto px-lg grid grid-cols-1 md:grid-cols-3 gap-xl">
        {PILLARS.map((pillar) => (
          <div
            key={pillar.title}
            className="group p-xl rounded-2xl bg-surface-container-low hover:bg-primary transition-all duration-300"
          >
            <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-xl group-hover:bg-white/20 transition-colors">
              <Icon name={pillar.icon} className="text-white text-3xl" />
            </div>
            <h3 className="text-title-md font-bold mb-md text-on-surface group-hover:text-white transition-colors">
              {pillar.title}
            </h3>
            <p className="text-body-md text-on-surface-variant group-hover:text-white/80 transition-colors">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}