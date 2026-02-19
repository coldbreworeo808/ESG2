export function CommunityAction() {
  const actions = [
    {
      title: '나무 심기 캠페인',
      description: '제품 판매 1kg당 나무 1그루 기부',
      metric: '누적 12,450그루 식수',
    },
    {
      title: '플라스틱 프리 챌린지',
      description: '고객과 함께하는 일회용 줄이기',
      metric: '참여 기업 87개사',
    },
    {
      title: '순환 경제 파트너십',
      description: '지역 재활용 센터 협력 프로그램',
      metric: '회수율 94% 달성',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-gray-900">
            함께 만드는 변화
          </h2>
          <p className="text-lg text-gray-600">
            우리만의 행동이 아닌, 모두의 참여로 만드는 미래
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16">
          <div className="aspect-[21/9] border-2 border-gray-300 border-dashed bg-white flex items-center justify-center">
            <div className="text-center text-gray-400">
              <div className="mb-2 text-sm">[ 커뮤니티 이미지 ]</div>
              <div className="text-xs">나무를 심는 사람들의 손</div>
            </div>
          </div>
        </div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {actions.map((action, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 p-8 text-center hover:border-gray-400 transition-colors"
            >
              {/* Icon Placeholder */}
              <div className="w-16 h-16 mx-auto mb-6 border border-gray-300 flex items-center justify-center">
                <span className="text-xs text-gray-400">[ icon ]</span>
              </div>

              {/* Title */}
              <h3 className="text-xl mb-4 text-gray-900">{action.title}</h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                {action.description}
              </p>

              {/* Metric */}
              <div className="text-2xl text-gray-900 mb-1">{action.metric}</div>
              <div className="text-xs text-gray-500">2024년 기준</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">지금 참여하고 함께 변화를 만드세요.</p>
          <button className="px-8 py-3 bg-gray-900 text-white hover:bg-gray-700 transition-colors">
            캠페인 참여하기
          </button>
        </div>
      </div>
    </section>
  );
}
