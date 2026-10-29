import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-[#080808] flex items-center justify-center z-50">
      <div className="flex flex-col items-center max-w-sm px-6 text-center">
        {/* Minimal geometric loader */}
        <div className="relative w-12 h-12 mb-8">
          <div className="absolute inset-0 rounded-full border border-white/10" />
          <motion.div
            className="absolute inset-0 rounded-full border-t border-[#e5b85c]"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-[#e5b85c] mb-2">
            Prem Mishra
          </p>
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-[#f4f4f5]">
            Java Backend Developer
          </h2>
          <div className="w-12 h-[1px] bg-white/15 mx-auto my-4" />
          <p className="text-xs text-neutral-400 font-mono tracking-wider">
            Initializing Portfolio...
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Loading;