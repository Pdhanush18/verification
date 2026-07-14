import Icon from "@/components/ui/Icon";

export default function Hero() {
  return (
    <section className="hero-gradient relative py-24 md:py-32 overflow-hidden flex items-center min-h-[90vh]">
      <div className="w-full max-w-container-max mx-auto px-lg grid grid-cols-1 lg:grid-cols-2 gap-xl items-center relative z-10">

        {/* Left Section */}
        <div className="w-full flex flex-col items-center lg:items-start space-y-8">
          <div className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container px-4 py-2 rounded-full">
            <Icon name="verified" className="text-[16px]" filled />
            <span className="text-sm">
              Enterprise-Grade Verification Protocol
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-center lg:text-left">
            The Gold Standard for
            <br />
            <span className="text-primary">
              Credential Trust
            </span>
          </h1>

          <p className="w-full max-w-[650px] text-lg leading-8 text-on-surface-variant text-center lg:text-left">
            Join 400+ world-class institutions. Instant,
            blockchain-anchored verification for academic and
            professional certifications that are impossible to
            counterfeit.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:shadow-lg transition-all">
              Verify Now
              <Icon name="arrow_forward" />
            </button>

            <button className="border border-outline-variant px-8 py-4 rounded-xl font-bold hover:bg-surface-container-low transition-all">
              View Demo
            </button>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-4">
            <div className="flex items-center gap-2">
              <Icon name="task_alt" className="text-primary" />
              <span>1.2M+ Daily Checks</span>
            </div>

            <div className="flex items-center gap-2">
              <Icon name="speed" className="text-primary" />
              <span>&lt; 1s Response Time</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative flex justify-center lg:justify-end w-full">
          <div className="animate-float w-full max-w-[430px] rounded-[40px] bg-white/60 backdrop-blur-xl border border-white/60 shadow-2xl p-8">

            <div className="bg-slate-50 rounded-3xl p-6 space-y-6">

              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-semibold tracking-wider text-gray-500">
                  Validation Hub
                </span>

                <Icon
                  name="qr_code_scanner"
                  className="text-primary text-2xl"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-600">
                  Certificate ID
                </label>

                <input
                  type="text"
                  defaultValue="CRT-992-001"
                  className="w-full h-12 rounded-lg border border-gray-300 bg-white px-4 text-base focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <button className="w-full h-12 rounded-lg bg-primary text-white font-semibold shadow-md hover:opacity-90 transition">
                Run Deep Verify
              </button>

              <div className="flex items-center gap-2 border-t border-gray-200 pt-4 text-sm text-gray-600">
                <Icon
                  name="check_circle"
                  className="text-green-600 text-lg"
                />
                <span>System status: Optimized</span>
              </div>

            </div>
          </div>

          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px]" />
        </div>

      </div>

      {/* Background Blur */}
      <div className="absolute -top-64 -right-64 w-[800px] h-[800px] bg-primary opacity-[0.03] rounded-full blur-[140px]" />
    </section>
  );
}