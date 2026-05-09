"use client";

export default function SplashScreen({
  show,
}: {
  show: boolean;
}) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-black text-white">
          KCET Predictor
        </h1>

        <p className="mt-4 text-slate-400 text-lg">
          Predict colleges based on your KCET rank
        </p>
      </div>
    </div>
  );
}