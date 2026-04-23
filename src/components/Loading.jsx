import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-dark-bg flex items-center justify-center z-50">
      <div className="text-center">

        <motion.div
          className="w-16 h-16 border-4 border-neon-blue/20 border-t-neon-blue rounded-full mb-4"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />

        <motion.h2 className="text-2xl font-bold text-neon-blue">
          Loading Portfolio...
        </motion.h2>

        <p className="text-gray-400 mt-2">
          Preparing an amazing experience
        </p>

      </div>
    </div>
  );
};

export default Loading;