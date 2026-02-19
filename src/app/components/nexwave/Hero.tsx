import { ArrowRight, Download, TrendingDown } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onDownloadReport: () => void;
}

export function Hero({ onDownloadReport }: HeroProps) {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwZjc3YTgiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLS45LTItMi0ycy0yIC45LTIgMiAuOSAyIDIgMiAyLS45IDItMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
      
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-900/30 border border-cyan-500/30 rounded-full mb-6">
              <TrendingDown className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-300">측정 가능한 변화</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
              73% Less.
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                100% Better.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              투명한 데이터, 명확한 행동, 실질적 임팩트.
              <br />
              재생에너지로 산업의 미래를 만듭니다.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('#solution')}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-emerald-500 transition-all duration-200 shadow-xl shadow-cyan-900/30"
              >
                솔루션 보기
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={onDownloadReport}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-800/50 border-2 border-cyan-500/50 text-white font-semibold rounded-lg hover:bg-slate-800 hover:border-cyan-400 transition-all duration-200"
              >
                <Download className="w-5 h-5" />
                리포트 다운로드
              </button>
            </div>
          </motion.div>

          {/* Right: KPI Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Main KPI Card */}
            <div className="relative bg-gradient-to-br from-slate-900 to-cyan-950 border-2 border-cyan-500/30 rounded-2xl p-8 sm:p-12 shadow-2xl shadow-cyan-900/30">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-2xl blur-2xl opacity-20"></div>
              
              <div className="relative">
                <div className="text-8xl sm:text-9xl font-bold bg-gradient-to-br from-cyan-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent mb-4">
                  73%
                </div>
                <div className="text-2xl font-semibold text-white mb-2">
                  탄소배출 감소
                </div>
                <div className="text-sm text-slate-400 mb-6">
                  2023-2025 실측 데이터 기반
                </div>

                {/* Mini Stats */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-cyan-500/20">
                  <div>
                    <div className="text-2xl font-bold text-cyan-400">12,000</div>
                    <div className="text-xs text-slate-400 mt-1">가구 청정에너지 공급</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-400">2024</div>
                    <div className="text-xs text-slate-400 mt-1">탄소중립 목표</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 px-4 py-2 bg-emerald-600 text-white font-bold rounded-lg shadow-lg"
            >
              검증 완료
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
