import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-[#080808]">
      {/* Subtle warm amber/gold atmospheric vignette */}
      <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[900px] h-[550px] rounded-full bg-gradient-to-b from-[#e5b85c]/[0.06] to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute top-[45%] -right-[15%] w-[600px] h-[600px] rounded-full bg-[#e5b85c]/[0.03] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[5%] -left-[10%] w-[500px] h-[500px] rounded-full bg-[#e5b85c]/[0.025] blur-[140px] pointer-events-none" />

      {/* Ultra-subtle architectural grid line texture */}
      <div 
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, #000 60%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, #000 60%, transparent 100%)'
        }}
      />

      {/* Film grain / dark vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/40 via-transparent to-[#080808]" />
    </div>
  );
};

export default AnimatedBackground;