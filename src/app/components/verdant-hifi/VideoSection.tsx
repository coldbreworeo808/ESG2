import { Play } from 'lucide-react';
import { motion } from 'motion/react';

export function VideoSection() {
  return (
    <section id="video" className="py-24 px-4 sm:px-6 lg:px-8 bg-stone-50">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-emerald-50 rounded-full mb-6">
            <span className="text-sm font-medium text-emerald-800">Video Story</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-light mb-6 text-stone-800 leading-tight">
            30초로 보는 VERDANT
          </h2>
          <p className="text-xl text-stone-600 font-light">
            우리의 이야기, 우리의 여정
          </p>
        </motion.div>

        {/* Video Embed */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative aspect-video bg-gradient-to-br from-stone-200 to-emerald-100 rounded-3xl overflow-hidden shadow-2xl border border-stone-200 group cursor-pointer">
            {/* Subtle Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute inset-0 border border-emerald-600 rounded-full"
                    style={{
                      width: `${60 + i * 20}%`,
                      height: `${60 + i * 20}%`,
                      top: `${20 - i * 10}%`,
                      left: `${20 - i * 10}%`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail Text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-stone-400">
                <div className="text-sm mb-2">[ 영상 썸네일 ]</div>
                <div className="text-xs">리플 모티프 + 제조 현장</div>
              </div>
            </div>

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:bg-emerald-700 transition-all duration-300"
              >
                <Play className="w-8 h-8 text-emerald-700 group-hover:text-white ml-1 transition-colors" />
              </motion.div>
            </div>

            {/* Duration Badge */}
            <div className="absolute bottom-4 right-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-stone-700 text-sm font-medium shadow-lg">
              0:30
            </div>
          </div>

          {/* Video Caption */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-center"
          >
            <p className="text-stone-700 font-medium mb-1">
              VERDANT Story 2025 - The Ripple Makers
            </p>
            <p className="text-sm text-stone-500">
              작은 파장이 만드는 내일을 30초로 만나보세요
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
