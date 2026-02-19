export function ImpactMetrics() {
  const metrics = [
    {
      value: '73%',
      label: '탄소배출 감소',
      detail: '2023-2025 누적',
    },
    {
      value: '12,000',
      label: '가구 청정에너지 공급',
      detail: '누적 연결 가구',
    },
    {
      value: '2024',
      label: '탄소중립 목표',
      detail: '스코프 1·2 달성',
    },
    {
      value: '15,000',
      label: 'tCO₂ 연간 절감',
      detail: '검증 완료 수치',
    },
    {
      value: '92%',
      label: '재생에너지 비율',
      detail: '전체 에너지 중',
    },
    {
      value: '89%',
      label: '설비 운영 효율',
      detail: '업계 평균 대비 +24%',
    },
  ];

  return (
    <section id="impact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-gray-900">
            임팩트 지표
          </h2>
          <p className="text-lg text-gray-600">
            측정 가능한 변화, 투명한 결과
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 p-8 text-center hover:border-gray-900 transition-colors"
            >
              <div className="text-4xl sm:text-5xl text-gray-900 mb-3">
                {metric.value}
              </div>
              <div className="text-lg text-gray-700 mb-2">{metric.label}</div>
              <div className="text-sm text-gray-500">{metric.detail}</div>
            </div>
          ))}
        </div>

        {/* Data Source Note */}
        <div className="mt-12 text-center text-sm text-gray-500">
          * 모든 데이터는 제3자 검증기관(SGS, TÜV)의 검증을 완료했습니다.
        </div>
      </div>
    </section>
  );
}
