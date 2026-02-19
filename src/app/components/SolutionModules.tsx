export function SolutionModules() {
  const modules = [
    {
      title: '화석연료 대체',
      description: '태양광·풍력 기반 100% 재생에너지 전환',
      metrics: ['재생에너지 비율 92%', '화석연료 의존 8%로 감소', '연간 15,000tCO₂ 절감'],
    },
    {
      title: '에너지 손실 75% 감소',
      description: 'AI 기반 스마트그리드 실시간 최적화',
      metrics: ['송배전 손실 6%로 감소', '피크 수요 예측 정확도 94%', '설비 효율 89% 달성'],
    },
    {
      title: '전국 네트워크 확산',
      description: '123개 지역 청정에너지 공급 인프라',
      metrics: ['12,000 가구 연결', '17개 시·도 커버리지', '2026년 확장 목표 +40%'],
      hasMap: true,
    },
  ];

  return (
    <section id="solution" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-gray-900">
            솔루션
          </h2>
          <p className="text-lg text-gray-600">
            데이터 기반 재생에너지 전환 시스템
          </p>
        </div>

        {/* Module Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 p-8 hover:border-gray-900 transition-colors"
            >
              {/* Card Number */}
              <div className="text-sm text-gray-500 mb-4">0{index + 1}</div>

              {/* Title */}
              <h3 className="text-2xl mb-4 text-gray-900">{module.title}</h3>

              {/* Description */}
              <p className="text-gray-600 mb-6">{module.description}</p>

              {/* Visual Placeholder */}
              {module.hasMap ? (
                <div className="border-2 border-gray-300 border-dashed h-[200px] mb-6 flex items-center justify-center bg-gray-50">
                  <div className="text-center text-gray-400 text-xs">
                    [ 지도 영역 ]
                    <div className="mt-1">전국 네트워크 분포도</div>
                  </div>
                </div>
              ) : (
                <div className="border-2 border-gray-300 border-dashed h-[200px] mb-6 flex items-center justify-center bg-gray-50">
                  <div className="text-gray-400 text-xs">[ 인포그래픽 ]</div>
                </div>
              )}

              {/* Metrics */}
              <ul className="space-y-2">
                {module.metrics.map((metric, i) => (
                  <li key={i} className="flex items-start text-sm text-gray-700">
                    <span className="inline-block w-1.5 h-1.5 bg-gray-900 mt-1.5 mr-2 flex-shrink-0"></span>
                    <span>{metric}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
