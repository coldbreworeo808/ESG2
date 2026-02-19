import { TrendingDown, Users, Target, Award } from 'lucide-react';
import { motion } from 'motion/react';

export function ImpactMetrics() {
  const metrics = [
    {
      icon: TrendingDown,
      value: '8,450',
      unit: 'tCO₂',
      label: '탄소배출 절감',
      detail: '2020-2025 누적',
    },
    {
      icon: Users,
      value: '87%',
      label: '재활용 원료 사용률',
      detail: '업계 평균 대비 +42%',
    },
    {
      icon: Target,
      value: '64%',
      label: '생산 공정 에너지 절감',
      detail: '전통 소재 대비',
    },
    {
      icon: Award,
      value: '156',
      unit: '개',
      label: '협력 파트너사',
      detail: '12개국',
    },
  ];

  return (
    <section id="impact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-emerald-50 rounded-full mb-6">
            <span className="text-sm font-medium text-emerald-800">Impact Metrics</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-light mb-6 text-stone-800 leading-tight">
            측정 가능한 임팩트
          </h2>
          <p className="text-xl text-stone-600 font-light">
            작은 파장이 만들어낸 구체적 변화
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-stone-50 rounded-3xl p-8 text-center border border-stone-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300"
              >
                {/* Icon */}
                <div className="inline-flex p-3 bg-emerald-50 rounded-2xl mb-6">
                  <Icon className="w-6 h-6 text-emerald-700" />
                </div>

                {/* Value */}
                <div className="text-5xl font-light text-stone-800 mb-2">
                  {metric.value}
                  {metric.unit && <span className="text-2xl ml-1 text-stone-600">{metric.unit}</span>}
                </div>

                {/* Label */}
                <div className="text-base font-medium text-stone-700 mb-2">{metric.label}</div>

                {/* Detail */}
                <div className="text-sm text-stone-500">{metric.detail}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Verification Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center bg-emerald-50 rounded-2xl p-8"
        >
          <div className="inline-flex items-center gap-3 text-stone-700">
            <Award className="w-5 h-5 text-emerald-700" />
            <span className="text-sm">
              제3자 검증기관(SGS, Bureau Veritas) 검증 완료
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
