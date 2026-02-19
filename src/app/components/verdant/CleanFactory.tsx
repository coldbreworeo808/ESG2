export function CleanFactory() {
  const processes = [
    {
      step: '01',
      title: '원료 선별',
      description: '재활용·바이오 기반 원료만 사용',
    },
    {
      step: '02',
      title: '무공해 제조',
      description: '100% 재생에너지 공장 운영',
    },
    {
      step: '03',
      title: '품질 검증',
      description: '국제 친환경 인증 기준 준수',
    },
    {
      step: '04',
      title: '순환 물류',
      description: '생산-배송-회수 전 과정 탄소 관리',
    },
  ];

  return (
    <section id="factory" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-gray-900">
            깨끗한 제조 공정
          </h2>
          <p className="text-lg text-gray-600">
            투명하고 책임 있는 생산 시스템
          </p>
        </div>

        {/* Factory Image */}
        <div className="mb-16">
          <div className="aspect-[21/9] border-2 border-gray-300 border-dashed bg-white flex items-center justify-center">
            <div className="text-center text-gray-400">
              <div className="mb-2 text-sm">[ 공장 전경 이미지 ]</div>
              <div className="text-xs">클린룸·제조 설비 파노라마</div>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((process, index) => (
            <div key={index} className="bg-white border border-gray-200 p-6">
              {/* Step Number */}
              <div className="text-4xl text-gray-300 mb-4">{process.step}</div>

              {/* Title */}
              <h3 className="text-xl mb-3 text-gray-900">{process.title}</h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {process.description}
              </p>

              {/* Icon Placeholder */}
              <div className="mt-4 w-12 h-12 border border-gray-300 flex items-center justify-center">
                <span className="text-xs text-gray-400">[ icon ]</span>
              </div>
            </div>
          ))}
        </div>

        {/* Certification Note */}
        <div className="mt-12 text-center text-sm text-gray-500">
          ISO 14001, FSC 인증, 탄소중립 공장 운영 중
        </div>
      </div>
    </section>
  );
}
