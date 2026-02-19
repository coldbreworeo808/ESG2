export function LiveDashboard() {
  const liveData = [
    { location: '서울 강남구', efficiency: '94%', reduction: '1,234 tCO₂', status: '운영 중' },
    { location: '부산 해운대', efficiency: '91%', reduction: '987 tCO₂', status: '운영 중' },
    { location: '대구 수성구', efficiency: '88%', reduction: '756 tCO₂', status: '운영 중' },
    { location: '인천 연수구', efficiency: '92%', reduction: '1,045 tCO₂', status: '운영 중' },
  ];

  return (
    <section id="dashboard" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
            실시간 제어실
          </h2>
          <p className="text-lg text-gray-400">
            Live Dashboard · 24/7 Monitoring
          </p>
        </div>

        {/* Dashboard Content */}
        <div className="space-y-8">
          {/* Chart Placeholder */}
          <div className="border-2 border-gray-700 border-dashed h-[300px] flex items-center justify-center bg-gray-800">
            <div className="text-center text-gray-500">
              <div className="mb-2">[ 실시간 차트 영역 ]</div>
              <div className="text-sm">시간별 에너지 생산량 · 소비량 · 효율</div>
            </div>
          </div>

          {/* Data Table */}
          <div className="bg-gray-800 border border-gray-700 overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-gray-700 text-sm font-medium">
              <div>설비 위치</div>
              <div>운영 효율</div>
              <div className="hidden sm:block">절감량</div>
              <div className="hidden sm:block">상태</div>
            </div>

            {/* Table Rows */}
            {liveData.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 border-t border-gray-700 text-sm hover:bg-gray-750 transition-colors"
              >
                <div className="text-gray-300">{row.location}</div>
                <div className="text-white font-medium">{row.efficiency}</div>
                <div className="hidden sm:block text-gray-300">{row.reduction}</div>
                <div className="hidden sm:flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-gray-300">{row.status}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-gray-800 border border-gray-700 p-6">
              <div className="text-3xl text-white mb-2">234.5 MW</div>
              <div className="text-sm text-gray-400">현재 생산량</div>
            </div>
            <div className="bg-gray-800 border border-gray-700 p-6">
              <div className="text-3xl text-white mb-2">198.3 MW</div>
              <div className="text-sm text-gray-400">현재 공급량</div>
            </div>
            <div className="bg-gray-800 border border-gray-700 p-6">
              <div className="text-3xl text-white mb-2">91.2%</div>
              <div className="text-sm text-gray-400">평균 효율</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
