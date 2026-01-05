export function HeroBanner() {
  return (
    <div className="relative h-[220px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&h=400&fit=crop')",
        }}
      ></div>

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 z-20 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)",
        }}
      ></div>

      <div className="relative z-30 h-full flex items-center px-8">
        <div>
          <h2 className="text-white text-5xl font-black tracking-tight">
            TODAY&apos;S
            <br />
            <span className="inline-block bg-red-500 px-6 py-1.5 rounded-full text-white mt-2 text-base font-bold">
              STEAK SOCIETY
            </span>
          </h2>
        </div>

        <div className="absolute right-16 top-1/2 -translate-y-1/2">
          <div className="text-white text-6xl font-black tracking-wider">
            OFFER!
          </div>
        </div>
      </div>
    </div>
  );
}
