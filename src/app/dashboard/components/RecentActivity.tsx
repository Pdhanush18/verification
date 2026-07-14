import Icon from "../../../components/ui/Icon";

type Activity = {
  icon: string;
  title: string;
  requestedBy: string;
  status: "Verified" | "Pending";
  time: string;
};

const ACTIVITIES: Activity[] = [
  {
    icon: "description",
    title: "ISO-9001 Compliance Audit",
    requestedBy: "Global Logistics Ltd.",
    status: "Verified",
    time: "2 mins ago",
  },
  {
    icon: "school",
    title: "Master of Science Degree",
    requestedBy: "TechCorp HR",
    status: "Pending",
    time: "1 hour ago",
  },
];

const STATUS_STYLES: Record<Activity["status"], string> = {
  Verified: "bg-green-100 text-green-700 border-green-200",
  Pending: "bg-yellow-100 text-yellow-700 border-yellow-200",
};

export default function RecentActivity() {
  return (
    <div className="lg:col-span-2 bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden flex flex-col">
      <div className="px-lg py-md border-b border-outline-variant flex justify-between items-center bg-surface-container-low/30">
        <h4 className="font-title-md text-title-md text-on-surface">
          Recent Verification Activity
        </h4>
        <button className="text-primary font-label-md text-label-md hover:underline">
          View All
        </button>
      </div>

      <div className="divide-y divide-outline-variant">
        {ACTIVITIES.map((activity) => (
          <div
            key={activity.title}
            className="px-lg py-md flex items-center justify-between hover:bg-surface-container-low transition-colors"
          >
            <div className="flex items-center gap-md">
              <div className="w-10 h-10 bg-primary/5 text-primary rounded-full flex items-center justify-center">
                <Icon name={activity.icon} className="text-[20px]" />
              </div>
              <div>
                <p className="font-label-md text-label-md text-on-surface">
                  {activity.title}
                </p>
                <p className="text-[12px] text-on-surface-variant">
                  Requested by: {activity.requestedBy}
                </p>
              </div>
            </div>
            <div className="text-right">
              <span
                className={`px-sm py-1 font-label-sm text-label-sm rounded border ${STATUS_STYLES[activity.status]}`}
              >
                {activity.status}
              </span>
              <p className="text-[10px] text-on-surface-variant mt-1">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}