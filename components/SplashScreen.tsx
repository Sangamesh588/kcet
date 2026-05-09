"use client";

import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function SplashScreen({
  show,
}: {
  show: boolean;
}) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9999] bg-white flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col items-center"
          >
            <div className="w-24 h-24 rounded-3xl bg-green-600 flex items-center justify-center shadow-2xl shadow-green-200">
              <GraduationCap className="w-12 h-12 text-white" />
            </div>

            <h1 className="mt-6 text-3xl font-black text-slate-800 tracking-tight">
              KCET<span className="text-green-600">Predict</span>
            </h1>

            <p className="mt-2 text-sm text-slate-400 font-medium">
              Smart College Prediction Platform
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}