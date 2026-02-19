import { Play } from 'lucide-react';
import { motion } from 'motion/react';

export function VideoSection() {
  return (
    <section id="video" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-cyan-50">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-cyan-50 border border-cyan-200 rounded-full mb-4">
            <span className="text-sm font-semibold text-cyan-700">Video</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-slate-900">
            30초로 보는 NEXWAVE
          </h2>
          <p className="text-xl text-slate-600">
            데이터가 증명하는 재생에너지 전환
          </p>
        </motion.div>

        {/* Video Embed */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative aspect-video bg-gradient-to-br from-slate-800 to-cyan-900 rounded-2xl overflow-hidden shadow-2xl border-2 border-cyan-500/30 group cursor-pointer">
            {/* Thumbnail Background Pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwZjc3YTgiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMTZjMC0xLjEtLjktMi0yLTJzLTIgLjktMiAyIC45IDIgMiAyIDItLjkgMi0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
            
            {/* Mock Thumbnail Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-cyan-200/50">
                <div className="text-6xl font-bold mb-2">73%</div>
                <div className="text-sm">탄소배출 감소 실측 데이터</div>
              </div>
            </div>

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-emerald-500 transition-all duration-300"
              >
                <Play className="w-8 h-8 text-slate-900 group-hover:text-white ml-1 transition-colors" />
              </motion.div>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>

            {/* Duration Badge */}
            <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-lg text-white text-sm font-medium">
              0:30
            </div>
          </div>

          {/* Video Caption */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-center"
          >
            <p className="text-slate-700 font-medium">
              NEXWAVE Energy Impact Report 2025 - 측정 가능한 변화
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
