import { motion } from 'motion/react';

export function Story() {
  return (
    <section id="story" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Ripple Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="relative aspect-square bg-gradient-to-br from-stone-100 to-emerald-50 rounded-3xl overflow-hidden shadow-xl">
              {/* Ripple Animation */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: [0, 0.6, 0], scale: [0, 1.5, 2] }}
                    transition={{
                      duration: 3,
                      delay: i * 0.8,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                    className="absolute w-32 h-32 -translate-x-1/2 -translate-y-1/2 border-2 border-emerald-600 rounded-full"
                  />
                ))}
                <div className="w-4 h-4 bg-emerald-600 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              </div>
            </div>
          </motion.div>

          {/* Story Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-block px-4 py-2 bg-emerald-50 rounded-full mb-6">
              <span className="text-sm font-medium text-emerald-800">Our Story</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-light mb-10 text-stone-800 leading-tight">
              하나의 물방울이
              <br />
              만드는 변화
            </h2>
            
            <div className="space-y-6 text-lg text-stone-600 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                VERDANT는 2019년, 플라스틱 대안을 찾는 작은 연구실에서 시작되었습니다.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                우리는 친환경 필름을 개발하며, 산업 전반에 새로운 기준을 제시하고 있습니다.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                작은 선택이 모여 큰 파장을 만든다는 믿음으로, 우리는 오늘도 내일을 설계합니다.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="font-medium text-stone-700"
              >
                진정한 변화는 거창한 선언이 아닌, 일상의 실천에서 시작됩니다.
              </motion.p>
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-10 pl-6 border-l-4 border-emerald-700"
            >
              <p className="text-stone-700 italic leading-relaxed">
                "진정한 혁신은 거창한 선언이 아니라,
                <br />
                일상에서 실천할 수 있는 작은 변화에서 시작됩니다."
              </p>
              <p className="text-sm text-stone-500 mt-3">— VERDANT 창립자</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
