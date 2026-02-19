export function PeopleResearch() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 text-gray-900 leading-tight">
              연구하는 사람들,
              <br />
              만드는 손들
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              VERDANT에는 소재 과학자, 화학 엔지니어, 환경 전문가들이 함께 일합니다.
              우리는 실험실에서, 공장 현장에서, 매일 더 나은 소재를 만듭니다.
            </p>

            {/* Quote */}
            <div className="bg-gray-50 border-l-4 border-gray-900 p-6">
              <p className="text-gray-700 italic mb-4">
                "기술만으로는 부족합니다. 진심을 담아야 진짜 변화가 시작됩니다."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-xs text-gray-600">[ 사진 ]</span>
                </div>
                <div>
                  <p className="text-sm text-gray-900">김연구, 소재연구소장</p>
                  <p className="text-xs text-gray-500">재직 7년</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div>
                <div className="text-3xl text-gray-900 mb-1">24명</div>
                <div className="text-sm text-gray-500">연구진</div>
              </div>
              <div>
                <div className="text-3xl text-gray-900 mb-1">127건</div>
                <div className="text-sm text-gray-500">특허</div>
              </div>
              <div>
                <div className="text-3xl text-gray-900 mb-1">6년</div>
                <div className="text-sm text-gray-500">평균 경력</div>
              </div>
            </div>
          </div>

          {/* Research Image */}
          <div className="space-y-4">
            <div className="aspect-[4/3] border-2 border-gray-300 border-dashed bg-gray-50 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <div className="mb-2 text-sm">[ 연구실 이미지 ]</div>
                <div className="text-xs">실험·검증 장면</div>
              </div>
            </div>
            <div className="aspect-[4/3] border-2 border-gray-300 border-dashed bg-gray-50 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <div className="mb-2 text-sm">[ 현장 이미지 ]</div>
                <div className="text-xs">제조 현장 모습</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
