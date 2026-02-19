import { Leaf, Recycle, Droplet } from 'lucide-react';
import { motion } from 'motion/react';

export function MaterialInnovation() {
  const materials = [
    {
      icon: Leaf,
      title: '생분해 필름',
      feature: '12개월 내 100% 자연 분해',
      tech: '미생물 발효 기반 바이오 폴리머',
      application: '식품 포장, 농업용 필름, 물류 포장재',
      value: '환경 부담 최소화',
      color: 'emerald',
    },
    {
      icon: Recycle,
      title: '재활용 복합소재',
      feature: '87% 재활용 원료 사용',
      tech: '고분자 결합 강화 기술',
      application: '건축 자재, 산업용 필름, 내장재',
      value: '순환 경제 실현',
      color: 'teal',
    },
    {
      icon: Droplet,
      title: '무독성 코팅',
      feature: '화학 첨가제 0%',
      tech: '천연 왁스 기반 표면 처리',
      application: '의료용 포장, 유아용품, 화장품 용기',
      value: '안전성 최우선',
      color: 'green',
    },
  ];

  return (
    <section id="material" className="py-24 px-4 sm:px-6 lg:px-8 bg-stone-50">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-emerald-50 rounded-full mb-6">
            <span className="text-sm font-medium text-emerald-800">Material Innovation</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-light mb-6 text-stone-800 leading-tight">
            친환경 소재 혁신
          </h2>
          <p className="text-xl text-stone-600 font-light">
            자연으로 돌아가는 소재, 순환하는 가치
          </p>
        </motion.div>

        {/* Material Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {materials.map((material, index) => {
            const Icon = material.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-stone-200"
              >
                {/* Icon */}
                <div className={`inline-flex p-4 bg-${material.color}-50 rounded-2xl mb-6`}>
                  <Icon className={`w-8 h-8 text-${material.color}-700`} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-medium mb-6 text-stone-800">{material.title}</h3>

                {/* Details Grid */}
                <div className="space-y-5 mb-6">
                  <div className="pb-4 border-b border-stone-100">
                    <div className="text-xs text-stone-500 mb-2 tracking-wide uppercase">특징</div>
                    <div className="text-sm font-medium text-stone-700">{material.feature}</div>
                  </div>
                  <div className="pb-4 border-b border-stone-100">
                    <div className="text-xs text-stone-500 mb-2 tracking-wide uppercase">적용처</div>
                    <div className="text-sm text-stone-700 leading-relaxed">{material.application}</div>
                  </div>
                  <div>
                    <div className="text-xs text-stone-500 mb-2 tracking-wide uppercase">가치</div>
                    <div className={`text-sm font-medium text-${material.color}-700`}>{material.value}</div>
                  </div>
                </div>

                {/* Tech Badge */}
                <div className={`bg-${material.color}-50 rounded-xl p-4`}>
                  <div className="text-xs text-stone-600 leading-relaxed">{material.tech}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
