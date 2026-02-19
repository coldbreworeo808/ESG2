import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export function CleanFactory() {
  const processes = [
    {
      step: '01',
      title: '원료 선별',
      description: '재활용·바이오 기반 원료만 사용',
    },
    {
      step: '02',
      title: '무공해 제조',
      description: '100% 재생에너지 공장 운영',
    },
    {
      step: '03',
      title: '품질 검증',
      description: '국제 친환경 인증 기준 준수',
    },
    {
      step: '04',
      title: '순환 물류',
      description: '생산-배송-회수 전 과정 탄소 관리',
    },
  ];

  return (
    <section id="factory" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-emerald-50 rounded-full mb-6">
            <span className="text-sm font-medium text-emerald-800">Clean Manufacturing</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-light mb-6 text-stone-800 leading-tight">
            깨끗한 제조 공정
          </h2>
          <p className="text-xl text-stone-600 font-light">
            투명하고 책임 있는 생산 시스템
          </p>
        </motion.div>

        {/* Factory Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="aspect-[21/9] bg-gradient-to-br from-stone-100 to-emerald-50 rounded-3xl shadow-2xl flex items-center justify-center">
            <div className="text-center text-stone-400">
              <div className="text-sm mb-2">[ 공장 전경 이미지 ]</div>
              <div className="text-xs">클린룸·제조 설비 파노라마</div>
            </div>
          </div>
        </motion.div>

        {/* Process Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {processes.map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-stone-50 rounded-2xl p-8 border border-stone-200 hover:border-emerald-300 transition-all duration-300"
            >
              {/* Step Number */}
              <div className="text-5xl font-light text-stone-300 mb-4">{process.step}</div>

              {/* Title */}
              <h3 className="text-xl font-medium mb-3 text-stone-800">{process.title}</h3>

              {/* Description */}
              <p className="text-sm text-stone-600 leading-relaxed mb-6">
                {process.description}
              </p>

              {/* Check Icon */}
              <div className="absolute bottom-6 right-6">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center bg-emerald-50 rounded-2xl p-8"
        >
          <p className="text-stone-700 leading-relaxed">
            투명한 제조 과정을 통해 신뢰를 만듭니다.
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> · </span>
            ISO 14001, FSC 인증 · 탄소중립 공장 운영
          </p>
        </motion.div>
      </div>
    </section>
  );
}
