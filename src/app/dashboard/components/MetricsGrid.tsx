import Icon from "../../../components/ui/Icon";

export default function MetricsGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-lg">
      <div className="bg-surface-container-lowest border border-outline-variant p-lg rounded-xl flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
        <div className="flex justify-between items-start">
          <span className="p-md bg-primary/10 text-primary rounded-lg">
            <Icon name="verified_user" />
          </span>
          <span className="font-label-sm text-label-sm flex items-center text-green-600">
            <Icon name="trending_up" className="text-[16px] mr-1" /> +12%
          </span>
        </div>
        <div className="mt-xl">
          <p className="font-label-md text-label-md text-on-surface-variant">
            Total Verified
          </p>
          <h3 className="font-display-lg text-[40px] leading-tight text-on-surface">
            14,282
          </h3>
        </div>
      </div>

      <div className="bg-surface-container-lowest border border-outline-variant p-lg rounded-xl flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
        <div className="flex justify-between items-start">
          <span className="p-md bg-secondary/10 text-secondary rounded-lg">
            <Icon name="pending_actions" />
          </span>
          <span className="font-label-sm text-label-sm text-on-surface-variant">
            Real-time
          </span>
        </div>
        <div className="mt-xl">
          <p className="font-label-md text-label-md text-on-surface-variant">
            Active Requests
          </p>
          <h3 className="font-display-lg text-[40px] leading-tight text-on-surface">
            142
          </h3>
        </div>
      </div>
    </section>
  );
}