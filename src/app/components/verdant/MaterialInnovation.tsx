export function MaterialInnovation() {
  const materials = [
    {
      title: '생분해 필름',
      feature: '12개월 내 100% 자연 분해',
      tech: '미생물 발효 기반 바이오 폴리머',
      application: '식품 포장, 농업용 필름, 물류 포장재',
    },
    {
      title: '재활용 복합소재',
      feature: '87% 재활용 원료 사용',
      tech: '고분자 결합 강화 기술',
      application: '건축 자재, 산업용 필름, 내장재',
    },
    {
      title: '무독성 코팅',
      feature: '화학 첨가제 0%',
      tech: '천연 왁스 기반 표면 처리',
      application: '의료용 포장, 유아용품, 화장품 용기',
    },
  ];

  return (
    <section id="material" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-gray-900">
            친환경 소재 혁신
          </h2>
          <p className="text-lg text-gray-600">
            자연으로 돌아가는 소재, 순환하는 가치
          </p>
        </div>

        {/* Material Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {materials.map((material, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 p-8 hover:border-gray-400 transition-colors"
            >
              {/* Number */}
              <div className="text-sm text-gray-400 mb-4">0{index + 1}</div>

              {/* Title */}
              <h3 className="text-2xl mb-6 text-gray-900">{material.title}</h3>

              {/* Image Placeholder */}
              <div className="border-2 border-gray-300 border-dashed h-48 mb-6 flex items-center justify-center bg-white">
                <div className="text-gray-400 text-xs">[ 소재 이미지 ]</div>
              </div>

              {/* Details */}
              <div className="space-y-4">
                <div>
                  <div className="text-xs text-gray-500 mb-1">특징</div>
                  <div className="text-sm text-gray-700">{material.feature}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">기술</div>
                  <div className="text-sm text-gray-700">{material.tech}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">적용처</div>
                  <div className="text-sm text-gray-700">{material.application}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
