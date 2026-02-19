export function ImpactMetrics() {
  const metrics = [
    {
      value: '8,450',
      unit: 'tCO₂',
      label: '탄소배출 절감',
      detail: '2020-2025 누적',
    },
    {
      value: '87%',
      unit: '',
      label: '재활용 원료 사용률',
      detail: '업계 평균 대비 +42%',
    },
    {
      value: '64%',
      unit: '',
      label: '생산 공정 에너지 절감',
      detail: '전통 소재 대비',
    },
    {
      value: '156',
      unit: '개',
      label: '협력 파트너사',
      detail: '12개국',
    },
  ];

  return (
    <section id="impact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-gray-900">
            측정 가능한 임팩트
          </h2>
          <p className="text-lg text-gray-600">
            작은 파장이 만들어낸 구체적 변화
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 p-8 text-center hover:border-gray-400 transition-colors"
            >
              <div className="text-4xl sm:text-5xl text-gray-900 mb-2">
                {metric.value}
                {metric.unit && <span className="text-2xl ml-1">{metric.unit}</span>}
              </div>
              <div className="text-lg text-gray-700 mb-2">{metric.label}</div>
              <div className="text-sm text-gray-500">{metric.detail}</div>
            </div>
          ))}
        </div>

        {/* Verification Note */}
        <div className="mt-12 text-center text-sm text-gray-500">
          * 제3자 검증기관(SGS, Bureau Veritas) 검증 완료
        </div>
      </div>
    </section>
  );
}
