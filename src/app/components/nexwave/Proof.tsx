import { Award, Shield, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export function Proof() {
  const partners = [
    'Global Energy Corp',
    'Tech Industries',
    'Green Solutions',
    'Future Systems',
    'Eco Partners',
    'Smart Grid Co',
  ];

  const certifications = [
    { name: 'ISO 14001', icon: Shield },
    { name: 'ISO 50001', icon: Shield },
    { name: 'GRI Standards', icon: CheckCircle2 },
    { name: 'CDP A Grade', icon: Award },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Trust Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full mb-6">
            <span className="text-sm font-semibold text-emerald-700">Trusted By</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            글로벌 기업과 정부기관이 신뢰하는
            <br />
            <span className="bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent">
              검증된 재생에너지 파트너
            </span>
          </h2>
        </motion.div>

        {/* Partner Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="h-24 bg-slate-50 border-2 border-slate-200 rounded-xl flex items-center justify-center hover:border-cyan-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-center px-4">
                <div className="text-xs font-bold text-slate-400 mb-1">[ LOGO ]</div>
                <div className="text-xs text-slate-600 leading-tight">{partner}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-50 to-cyan-50 border-2 border-cyan-100 rounded-2xl p-8 sm:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">인증 및 검증</h3>
            <p className="text-slate-600">국제 표준 준수 및 제3자 검증</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white border-2 border-emerald-200 rounded-xl p-6 text-center hover:border-emerald-400 hover:shadow-lg transition-all duration-300"
                >
                  <div className="inline-flex p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg mb-3">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="font-bold text-slate-900 text-sm">{cert.name}</div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Trust Elements */}
          <div className="mt-8 pt-8 border-t border-cyan-200">
            <div className="grid sm:grid-cols-3 gap-4 text-center text-sm">
              <div className="flex flex-col items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span className="text-slate-700">제3자 검증: SGS, TÜV Rheinland</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span className="text-slate-700">탄소배출: 국제 GHG 프로토콜</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span className="text-slate-700">월간 투명성 리포트 공개</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
