export function Story() {
  return (
    <section id="story" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Ripple Visual */}
          <div className="order-2 lg:order-1">
            <div className="aspect-square border-2 border-gray-300 border-dashed bg-white flex items-center justify-center">
              <div className="text-center text-gray-400">
                <div className="mb-2 text-sm">[ 물방울 비주얼 ]</div>
                <div className="text-xs">수면에 생기는 동심원</div>
                <div className="text-xs mt-1">리플 이펙트</div>
              </div>
            </div>
          </div>

          {/* Story Text */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-8 text-gray-900 leading-tight">
              하나의 물방울이
              <br />
              만드는 변화
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                VERDANT는 2019년, 플라스틱 대안을 찾는 작은 연구실에서 시작되었습니다.
              </p>
              <p>
                우리는 친환경 필름을 개발하며, 산업 전반에 새로운 기준을 제시하고 있습니다.
              </p>
              <p>
                작은 선택이 모여 큰 파장을 만든다는 믿음으로, 우리는 오늘도 내일을 설계합니다.
              </p>
            </div>

            {/* Quote */}
            <div className="mt-8 pl-6 border-l-2 border-gray-300">
              <p className="text-gray-700 italic">
                "진정한 혁신은 거창한 선언이 아니라,
                <br />
                일상에서 실천할 수 있는 작은 변화에서 시작됩니다."
              </p>
              <p className="text-sm text-gray-500 mt-2">— VERDANT 창립자</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
