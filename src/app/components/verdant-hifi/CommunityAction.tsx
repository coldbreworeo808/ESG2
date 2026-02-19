import { Sprout, Users, RefreshCcw } from 'lucide-react';
import { motion } from 'motion/react';

export function CommunityAction() {
  const actions = [
    {
      icon: Sprout,
      title: '나무 심기 캠페인',
      description: '제품 판매 1kg당 나무 1그루 기부',
      metric: '12,450',
      unit: '그루',
      detail: '누적 식수',
    },
    {
      icon: Users,
      title: '플라스틱 프리 챌린지',
      description: '고객과 함께하는 일회용 줄이기',
      metric: '87',
      unit: '개사',
      detail: '참여 기업',
    },
    {
      icon: RefreshCcw,
      title: '순환 경제 파트너십',
      description: '지역 재활용 센터 협력 프로그램',
      metric: '94%',
      unit: '',
      detail: '회수율 달성',
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-stone-50">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-emerald-50 rounded-full mb-6">
            <span className="text-sm font-medium text-emerald-800">Community Action</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-light mb-6 text-stone-800 leading-tight">
            함께 만드는 변화
          </h2>
          <p className="text-xl text-stone-600 font-light max-w-3xl mx-auto">
            작은 선택이 모여 큰 변화를 만듭니다.
            <br className="hidden sm:block" />
            우리만의 행동이 아닌, 모두의 참여로 만드는 미래입니다.
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="aspect-[21/9] bg-gradient-to-br from-emerald-100 to-stone-100 rounded-3xl shadow-xl flex items-center justify-center">
            <div className="text-center text-stone-400">
              <div className="text-sm mb-2">[ 커뮤니티 이미지 ]</div>
              <div className="text-xs">나무를 심는 사람들의 손</div>
            </div>
          </div>
        </motion.div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {actions.map((action, index) => {
            const Icon = action.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-stone-200"
              >
                {/* Icon */}
                <div className="inline-flex p-4 bg-emerald-50 rounded-2xl mb-6">
                  <Icon className="w-8 h-8 text-emerald-700" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-medium mb-4 text-stone-800">{action.title}</h3>

                {/* Description */}
                <p className="text-sm text-stone-600 mb-6 leading-relaxed">
                  {action.description}
                </p>

                {/* Metric */}
                <div className="bg-emerald-50 rounded-2xl p-6">
                  <div className="text-4xl font-light text-emerald-700 mb-2">
                    {action.metric}
                    {action.unit && <span className="text-2xl ml-1">{action.unit}</span>}
                  </div>
                  <div className="text-xs text-stone-600 tracking-wide">{action.detail}</div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center bg-gradient-to-r from-emerald-700 to-green-800 rounded-3xl p-12 text-white shadow-xl"
        >
          <p className="text-2xl font-light mb-6">
            지금 참여하고 함께 변화를 만드세요
          </p>
          <button className="px-8 py-4 bg-white text-emerald-700 font-medium rounded-full hover:bg-stone-50 transition-all duration-300 shadow-lg hover:shadow-xl">
            캠페인 참여하기
          </button>
        </motion.div>
      </div>
    </section>
  );
}
