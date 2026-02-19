import { ArrowRight, Download } from 'lucide-react';
import { motion } from 'motion/react';
import imgRipple from "figma:asset/ea126a9dee2d9354f9fb83b72d65dd92c9329d3f.png";

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
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-stone-50">
      <div className="max-w-[1440px] mx-auto">
        {/* Slogan & Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="text-sm tracking-[0.3em] text-emerald-700 mb-6 font-medium uppercase">
            The Ripple Makers
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light mb-8 text-stone-800 leading-tight tracking-tight">
            작은 파장이
            <br />
            만드는 내일
          </h1>
          <p className="text-xl sm:text-2xl text-stone-600 max-w-3xl mx-auto leading-relaxed font-light">
            지속가능한 소재로 산업의 기준을 바꿉니다
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto mb-12"
        >
          <div className="relative aspect-[21/9] bg-gradient-to-br from-stone-200 to-emerald-100 rounded-3xl overflow-hidden shadow-2xl">
            {/* Placeholder Text */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Background image */}
              <img
                src={imgRipple}
                alt="물결 리플 이펙트"
                className="absolute inset-0 w-full h-full object-cover rounded-[24px]"
              />

              {/* Figma Container1 — 원형 리플 테두리 오버레이 (opacity-20 wrapper) */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                {/* 모든 원은 이미지 중앙에서 렌더링 */}
                <div className="absolute top-1/2 left-1/2">
                  {/* Container3: 384px */}
                  <div
                    className="absolute border-2 border-[#096] rounded-full opacity-30"
                    style={{ width: 384, height: 384, left: -192, top: -192 }}
                  />
                  {/* Container4: 494px */}
                  <div
                    className="absolute border border-[#096] rounded-full opacity-30"
                    style={{ width: 494.459, height: 494.459, left: -247.23, top: -247.23 }}
                  />
                  {/* Container5: 567px */}
                  <div
                    className="absolute border border-[#096] rounded-full opacity-[0.28]"
                    style={{ width: 567.589, height: 567.589, left: -283.795, top: -283.795 }}
                  />
                  {/* Container6: 590px */}
                  <div
                    className="absolute border border-[#096] rounded-full opacity-[0.24]"
                    style={{ width: 590.435, height: 590.435, left: -295.218, top: -295.218 }}
                  />
                  {/* Container7: 556px */}
                  <div
                    className="absolute border border-[#096] rounded-full opacity-20"
                    style={{ width: 556.726, height: 556.726, left: -278.363, top: -278.363 }}
                  />
                </div>
              </div>

              {/* Animation layer — 최상단 렌더링 */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 0.3, scale: 1 + i * 0.3 }}
                      transition={{
                        duration: 2,
                        delay: i * 0.3,
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}
                      className="absolute inset-0 border-2 border-emerald-600 rounded-full"
                      style={{ borderWidth: `${2 - i * 0.3}px` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => scrollToSection('#material')}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-emerald-700 text-white font-medium rounded-full hover:bg-emerald-800 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            소재 보기
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={onDownloadReport}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-stone-300 text-stone-700 font-medium rounded-full hover:border-emerald-700 hover:text-emerald-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <Download className="w-5 h-5" />
            임팩트 리포트
          </button>
        </motion.div>
      </div>
    </section>
  );
}