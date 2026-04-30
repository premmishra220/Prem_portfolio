import { motion } from "framer-motion";

const Ribbon = ({ className, duration, delay }) => {
  return (
    <motion.div
      animate={{
        x: ["-10%", "10%", "-10%"],
        y: ["0%", "-5%", "0%"],
        rotate: [0, 2, -2, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    />
  );
};

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-black">

      <div className="absolute inset-0 bg-[#050505]" />

      <Ribbon
        duration={6}
        delay={0}
        className="
          absolute
          bottom-[8%]
          left-[-10%]
          w-[140%]
          h-[180px]
          opacity-70
          blur-[18px]
          rounded-[100%]
          bg-gradient-to-r
          from-cyan-300/40
          via-purple-400/40
          to-pink-400/30
          rotate-[-8deg]
        "
      />

      <Ribbon
        duration={8}
        delay={0.5}
        className="
          absolute
          bottom-[16%]
          left-[-5%]
          w-[130%]
          h-[130px]
          opacity-50
          blur-[16px]
          rounded-[100%]
          bg-gradient-to-r
          from-pink-300/30
          via-purple-400/35
          to-cyan-300/25
          rotate-[7deg]
        "
      />

      <Ribbon
        duration={7}
        delay={1}
        className="
          absolute
          bottom-[24%]
          left-[5%]
          w-[120%]
          h-[90px]
          opacity-30
          blur-[14px]
          rounded-[100%]
          bg-gradient-to-r
          from-cyan-200/20
          via-purple-300/25
          to-pink-300/20
          rotate-[-4deg]
        "
      />

      <div className="absolute inset-0 bg-black/35 backdrop-blur-[30px]" />
    </div>
  );
};

export default AnimatedBackground;