import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import MetricsGrid from "./components/MetricsGrid";
import RecentActivity from "./components/RecentActivity";
import QuickAction from "./components/QuickAction";
import Icon from "../../components/ui/Icon";

export default function DashboardPage() {
  return (
    <div className="bg-background text-on-surface flex h-screen overflow-hidden">
      <Sidebar active="home" />

      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <Topbar />

        <div className="flex-1 overflow-y-auto p-lg">
          <div className="max-w-[1200px] mx-auto space-y-xl">
            {/* Welcome Section */}
            <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-md">
              <div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface">
                  Welcome Back, Institutional Admin
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mt-xs">
                  Here is what happened since your last login on Oct 24, 2023.
                </p>
              </div>
              <button className="bg-primary hover:bg-primary-container text-on-primary px-lg py-sm rounded-lg flex items-center gap-sm transition-all shadow-sm active:scale-95 font-label-md text-label-md">
                <Icon name="add" />
                Issue New Certificate
              </button>
            </section>

            <MetricsGrid />

            <section className="grid grid-cols-1 lg:grid-cols-3 gap-lg h-full">
              <RecentActivity />
              <QuickAction />
            </section>

            <div className="h-16" />
          </div>
        </div>
      </main>

      {/* FAB */}
      <button className="fixed bottom-lg right-lg w-14 h-14 bg-primary-container text-on-primary-container rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50 group">
        <Icon name="qr_code_scanner" className="text-[28px]" />
        <span className="absolute right-full mr-4 bg-on-surface text-surface px-md py-1 rounded-lg text-[12px] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Scan Certificate
        </span>
      </button>
    </div>
  );
}