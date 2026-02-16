export default function Marquee() {
  return (
    <div className="w-full bg-red-500 overflow-hidden h-23 flex items-center">
      <div
        className="flex whitespace-nowrap"
        style={{
          animation: "marquee 15s linear infinite",
        }}
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="text-white font-bold text-xl mx-6">
            Fresh fast delivered
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
