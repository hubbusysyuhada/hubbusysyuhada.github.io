export default function AnimatedDots() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 100 }).map((_, i) => (
        <div
          key={i}
          className={`absolute rounded-full animate-float-extreme`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
            background: [
              "radial-gradient(circle, rgba(74, 144, 226, 0.9) 0%, rgba(74, 144, 226, 0.5) 100%)",
              "radial-gradient(circle, rgba(226, 74, 144, 0.9) 0%, rgba(226, 74, 144, 0.5) 100%)",
              "radial-gradient(circle, rgba(226, 196, 74, 0.9) 0%, rgba(226, 196, 74, 0.5) 100%)",
              "radial-gradient(circle, rgba(74, 226, 144, 0.9) 0%, rgba(74, 226, 144, 0.5) 100%)",
              "radial-gradient(circle, rgba(144, 74, 226, 0.9) 0%, rgba(144, 74, 226, 0.5) 100%)",
              "radial-gradient(circle, rgba(255, 140, 0, 0.9) 0%, rgba(255, 140, 0, 0.5) 100%)",
              "radial-gradient(circle, rgba(0, 191, 255, 0.9) 0%, rgba(0, 191, 255, 0.5) 100%)",
            ][Math.floor(Math.random() * 7)],
            boxShadow: [
              "0 0 15px rgba(74, 144, 226, 0.8)",
              "0 0 15px rgba(226, 74, 144, 0.8)",
              "0 0 15px rgba(226, 196, 74, 0.8)",
              "0 0 15px rgba(74, 226, 144, 0.8)",
              "0 0 15px rgba(144, 74, 226, 0.8)",
              "0 0 15px rgba(255, 140, 0, 0.8)",
              "0 0 15px rgba(0, 191, 255, 0.8)",
            ][Math.floor(Math.random() * 7)],
            animationDuration: `${20 + Math.random() * 12}s`,
            animationDelay: `${Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );
}
