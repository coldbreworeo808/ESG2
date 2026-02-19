import { AlertTriangle, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const chartData = [
  { year: '2020', emissions: 100 },
  { year: '2021', emissions: 112 },
  { year: '2022', emissions: 125 },
  { year: '2023', emissions: 140 },
  { year: '2024', emissions: 157 },
  { year: '2025', emissions: 176 },
];

export function Problem() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Alert Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-full mb-6">
              <AlertTriangle className="w-4 h-4 text-red-600" />
              <span className="text-sm font-medium text-red-700">긴급 과제</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-slate-900 leading-tight">
              매년 증가하는
              <br />
              탄소발자국
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              전통적인 에너지 시스템은 연간 평균 12%씩 탄소배출을 증가시키고 있습니다.
              이는 환경뿐만 아니라 기업의 지속가능성 목표 달성을 위협합니다.
            </p>
            
            {/* Stats */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <div className="font-semibold text-slate-900">화석연료 의존도 87%</div>
                  <div className="text-sm text-slate-600">2024 기준</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <div className="font-semibold text-slate-900">에너지 손실률 평균 34%</div>
                  <div className="text-sm text-slate-600">송배전 과정</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <div className="font-semibold text-slate-900">탄소중립 목표 미달성률 68%</div>
                  <div className="text-sm text-slate-600">글로벌 기업 평균</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900">탄소배출 증가 추이</h3>
                <p className="text-sm text-slate-600">2020-2025 (기준년 대비 %)</p>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-red-50 rounded-lg">
                <TrendingUp className="w-4 h-4 text-red-600" />
                <span className="text-sm font-semibold text-red-700">+76%</span>
              </div>
            </div>
            
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis 
                  dataKey="year" 
                  stroke="#64748b"
                  style={{ fontSize: '12px' }}
                />
                <YAxis 
                  stroke="#64748b"
                  style={{ fontSize: '12px' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1e293b', 
                    border: 'none', 
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="emissions" 
                  stroke="#ef4444" 
                  strokeWidth={3}
                  dot={{ fill: '#ef4444', r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
