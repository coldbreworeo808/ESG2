export function Problem() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 text-gray-900">
              매년 증가하는
              <br />
              탄소발자국
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              전통적인 에너지 시스템은 연간 평균 12%씩 탄소배출을 증가시키고 있습니다.
              이는 환경뿐만 아니라 기업의 지속가능성 목표 달성을 위협합니다.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-gray-900 mt-2 mr-3 flex-shrink-0"></span>
                <span>화석연료 의존도 87% (2024 기준)</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-gray-900 mt-2 mr-3 flex-shrink-0"></span>
                <span>에너지 손실률 평균 34%</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-gray-900 mt-2 mr-3 flex-shrink-0"></span>
                <span>탄소중립 목표 미달성률 68%</span>
              </li>
            </ul>
          </div>

          {/* Graph Placeholder */}
          <div className="border-2 border-gray-300 border-dashed h-[400px] flex items-center justify-center bg-gray-50">
            <div className="text-center text-gray-400">
              <div className="mb-2 text-sm">[ 그래프 영역 ]</div>
              <div className="text-xs">탄소배출 증가 추이 차트</div>
              <div className="text-xs">2020-2025</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
