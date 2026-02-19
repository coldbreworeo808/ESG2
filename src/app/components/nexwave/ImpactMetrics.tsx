import { TrendingDown, Users, Target, Leaf, Gauge, Award } from 'lucide-react';
import { motion } from 'motion/react';

export function ImpactMetrics() {
  const metrics = [
    {
      icon: TrendingDown,
      value: '73%',
      label: '탄소배출 감소',
      detail: '2023-2025 누적',
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-cyan-50',
    },
    {
      icon: Users,
      value: '12,000',
      label: '가구 청정에너지 공급',
      detail: '누적 연결 가구',
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50',
    },
    {
      icon: Target,
      value: '2024',
      label: '탄소중립 목표',
      detail: '스코프 1·2 달성',
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Leaf,
      value: '15,000',
      unit: 'tCO₂',
      label: '연간 절감',
      detail: '검증 완료 수치',
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'bg-teal-50',
    },
    {
      icon: Gauge,
      value: '92%',
      label: '재생에너지 비율',
      detail: '전체 에너지 중',
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50',
    },
    {
      icon: Award,
      value: '89%',
      label: '설비 운영 효율',
      detail: '업계 평균 대비 +24%',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
    },
  ];

  return (
    <section id="impact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-cyan-50">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full mb-4">
            <span className="text-sm font-semibold text-emerald-700">Impact Metrics</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-slate-900">
            측정 가능한 변화
          </h2>
          <p className="text-xl text-slate-600">
            투명한 데이터로 증명하는 실질적 임팩트
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${metric.color} opacity-10 rounded-full blur-2xl`}></div>
                
                <div className="relative">
                  {/* Icon */}
                  <div className={`inline-flex p-3 bg-gradient-to-br ${metric.color} rounded-lg mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Value */}
                  <div className="text-5xl font-bold text-slate-900 mb-2">
                    {metric.value}
                    {metric.unit && <span className="text-2xl ml-1 text-slate-600">{metric.unit}</span>}
                  </div>

                  {/* Label */}
                  <div className="text-lg font-semibold text-slate-700 mb-1">{metric.label}</div>

                  {/* Detail */}
                  <div className="text-sm text-slate-500">{metric.detail}</div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Verification Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-full shadow-md">
            <Award className="w-4 h-4 text-emerald-600" />
            <span className="text-sm text-slate-700">
              제3자 검증기관(SGS, TÜV) 검증 완료
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
