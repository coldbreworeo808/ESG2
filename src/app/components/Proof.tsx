export function Proof() {
  const partners = [
    'Partner A',
    'Partner B',
    'Partner C',
    'Partner D',
    'Partner E',
    'Partner F',
  ];

  const certifications = ['ISO 14001', 'ISO 50001', 'GRI Standards', 'CDP A Grade'];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Trust Statement */}
        <div className="text-center mb-12">
          <p className="text-xl sm:text-2xl text-gray-700 mb-2">
            글로벌 기업과 정부기관이 신뢰하는
          </p>
          <p className="text-xl sm:text-2xl text-gray-900">
            검증된 재생에너지 파트너
          </p>
        </div>

        {/* Partner Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="border border-gray-200 h-24 flex items-center justify-center bg-gray-50 hover:border-gray-400 transition-colors"
            >
              <div className="text-xs text-gray-400 text-center">
                [ 로고 ]<br />{partner}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="border-t border-gray-200 pt-12">
          <div className="text-center mb-8">
            <h3 className="text-lg text-gray-700">인증 및 검증</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="px-6 py-3 border border-gray-300 bg-gray-50 text-sm text-gray-700"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>

        {/* Additional Trust Elements */}
        <div className="mt-12 text-center text-sm text-gray-600 space-y-2">
          <p>제3자 검증: SGS, TÜV Rheinland</p>
          <p>탄소배출 측정: 국제 GHG 프로토콜 준수</p>
          <p>데이터 투명성: 월간 리포트 공개</p>
        </div>
      </div>
    </section>
  );
}
