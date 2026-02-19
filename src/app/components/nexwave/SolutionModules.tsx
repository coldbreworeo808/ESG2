import { Wind, Zap, Network } from 'lucide-react';
import { motion } from 'motion/react';

export function SolutionModules() {
  const modules = [
    {
      icon: Wind,
      title: '화석연료 대체',
      description: '태양광·풍력 기반 100% 재생에너지 전환',
      metrics: ['재생에너지 비율 92%', '화석연료 의존 8%로 감소', '연간 15,000tCO₂ 절감'],
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-cyan-50',
      borderColor: 'border-cyan-200',
    },
    {
      icon: Zap,
      title: '에너지 손실 75% 감소',
      description: 'AI 기반 스마트그리드 실시간 최적화',
      metrics: ['송배전 손실 6%로 감소', '피크 수요 예측 정확도 94%', '설비 효율 89% 달성'],
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
    },
    {
      icon: Network,
      title: '전국 네트워크 확산',
      description: '123개 지역 청정에너지 공급 인프라',
      metrics: ['12,000 가구 연결', '17개 시·도 커버리지', '2026년 확장 목표 +40%'],
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
  ];

  return (
    <section id="solution" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-cyan-50 border border-cyan-200 rounded-full mb-4">
            <span className="text-sm font-semibold text-cyan-700">Solutions</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-slate-900">
            데이터 기반 재생에너지 전환
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            측정 가능한 혁신으로 산업의 미래를 설계합니다
          </p>
        </motion.div>

        {/* Module Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`bg-white border-2 ${module.borderColor} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300`}
              >
                {/* Icon */}
                <div className={`inline-flex p-4 bg-gradient-to-br ${module.color} rounded-xl mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Number Badge */}
                <div className="text-sm font-bold text-slate-400 mb-3">0{index + 1}</div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{module.title}</h3>

                {/* Description */}
                <p className="text-slate-600 mb-6 leading-relaxed">{module.description}</p>

                {/* Metrics */}
                <div className="space-y-3">
                  {module.metrics.map((metric, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className={`w-1.5 h-1.5 bg-gradient-to-br ${module.color} rounded-full mt-2 flex-shrink-0`}></div>
                      <div className="text-sm text-slate-700">{metric}</div>
                    </div>
                  ))}
                </div>

                {/* Progress Indicator */}
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <div className="flex justify-between items-center text-xs mb-2">
                    <span className="text-slate-600">목표 달성률</span>
                    <span className="font-bold text-slate-900">{92 + index * 2}%</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${92 + index * 2}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className={`h-full bg-gradient-to-r ${module.color} rounded-full`}
                    ></motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
