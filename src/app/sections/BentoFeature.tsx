import Icon from "@/components/ui/Icon";

export default function BentoFeature() {
  return (
    <section className="py-32">
      <div className="max-w-container-max mx-auto px-lg">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-lg h-auto md:h-[600px]">
          <div className="md:col-span-8 bg-primary-container rounded-3xl p-xl flex flex-col justify-end text-white overflow-hidden relative group">
            <div className="absolute inset-0 z-0 overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-40"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA-uWBdUH9_L3jWvn4Z-YFZ_4jUXsxL2Q4OigN_p6LnDNLYEH5x42mNTc2HhyZptWEcXPV6mKwJPnH9fYJq_Vk8z2WB9AeHiXUY0yi1XwuEL7QdrDOG6OLewk0GXHGezFxwLW0iBYMjm5VVV5la6rNlUW-JoszpHu60tAGK3Hf7C_TadgvpxPAhCK-lML89KN6il4iK1AhIb5PGK29IYQ7LKtnnirimOiuTYqT9NGVH9uaNBiCmgX4frAxEAJlTEXurgjjOWzNHKqc')",
                }}
              />
            </div>
            <div className="relative z-10">
              <h3 className="text-display-lg leading-tight mb-md">
                Immutable Proof <br /> of Authenticity
              </h3>
              <p className="text-body-lg text-primary-fixed max-w-lg">
                Every verification event is logged with timestamp precision, creating a transparent
                audit trail that institutions and employers can trust implicitly.
              </p>
            </div>
          </div>

          <div className="md:col-span-4 grid grid-rows-2 gap-lg">
            <div className="bg-surface-container-high border border-outline-variant rounded-3xl p-xl flex flex-col justify-center">
              <span className="text-display-lg text-primary">0.0%</span>
              <p className="text-title-md text-on-surface">False Positives</p>
              <p className="text-body-md text-on-surface-variant mt-xs">
                Validated by world-renowned certification boards.
              </p>
            </div>
            <div className="bg-surface-container-highest border border-outline-variant rounded-3xl p-xl flex flex-col justify-center overflow-hidden relative">
              <Icon
                name="history"
                filled
                className="text-primary text-[64px] absolute -right-4 -bottom-4 opacity-10 rotate-12"
              />
              <h3 className="text-title-md text-on-surface mb-xs">Audit Logs</h3>
              <p className="text-body-md text-on-surface-variant">
                Full traceability for every validation request across your enterprise account.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}