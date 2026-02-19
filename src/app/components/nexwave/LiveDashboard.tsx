import { Activity, Zap, TrendingUp, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const energyData = [
  { time: '00:00', production: 180, consumption: 150 },
  { time: '04:00', production: 160, consumption: 120 },
  { time: '08:00', production: 220, consumption: 200 },
  { time: '12:00', production: 280, consumption: 240 },
  { time: '16:00', production: 260, consumption: 230 },
  { time: '20:00', production: 210, consumption: 195 },
];

const efficiencyData = [
  { location: '서울', efficiency: 94 },
  { location: '부산', efficiency: 91 },
  { location: '대구', efficiency: 88 },
  { location: '인천', efficiency: 92 },
];

const liveData = [
  { location: '서울 강남구', efficiency: '94%', reduction: '1,234 tCO₂', status: '운영 중' },
  { location: '부산 해운대', efficiency: '91%', reduction: '987 tCO₂', status: '운영 중' },
  { location: '대구 수성구', efficiency: '88%', reduction: '756 tCO₂', status: '운영 중' },
  { location: '인천 연수구', efficiency: '92%', reduction: '1,045 tCO₂', status: '운영 중' },
];

export function LiveDashboard() {
  return (
    <section id="dashboard" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-900/30 border border-cyan-500/30 rounded-full mb-4">
            <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="text-sm font-semibold text-cyan-300">Live Monitoring</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            실시간 제어실
          </h2>
          <p className="text-xl text-slate-400">
            24/7 모니터링 · 데이터 기반 운영
          </p>
        </motion.div>

        {/* KPI Widgets */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-900/50 to-slate-900/50 border border-cyan-500/30 rounded-xl p-6 backdrop-blur-sm"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-cyan-500/20 rounded-lg">
                <Zap className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="flex items-center gap-1 text-emerald-400 text-sm">
                <TrendingUp className="w-4 h-4" />
                <span>+5.2%</span>
              </div>
            </div>
            <div className="text-4xl font-bold text-white mb-1">234.5 MW</div>
            <div className="text-sm text-slate-400">현재 생산량</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-emerald-900/50 to-slate-900/50 border border-emerald-500/30 rounded-xl p-6 backdrop-blur-sm"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-emerald-500/20 rounded-lg">
                <Activity className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="flex items-center gap-1 text-emerald-400 text-sm">
                <TrendingUp className="w-4 h-4" />
                <span>+3.1%</span>
              </div>
            </div>
            <div className="text-4xl font-bold text-white mb-1">198.3 MW</div>
            <div className="text-sm text-slate-400">현재 공급량</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-blue-900/50 to-slate-900/50 border border-blue-500/30 rounded-xl p-6 backdrop-blur-sm"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-blue-500/20 rounded-lg">
                <Activity className="w-6 h-6 text-blue-400" />
              </div>
              <div className="flex items-center gap-1 text-emerald-400 text-sm">
                <TrendingUp className="w-4 h-4" />
                <span>+1.8%</span>
              </div>
            </div>
            <div className="text-4xl font-bold text-white mb-1">91.2%</div>
            <div className="text-sm text-slate-400">평균 효율</div>
          </motion.div>
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Line Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 border border-cyan-500/30 rounded-xl p-6 backdrop-blur-sm"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-white">에너지 생산·소비</h3>
                <p className="text-sm text-slate-400">실시간 모니터링 (MW)</p>
              </div>
              <div className="flex gap-4 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                  <span className="text-slate-400">생산</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  <span className="text-slate-400">소비</span>
                </div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={240}>
              <LineChart data={energyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="time" stroke="#94a3b8" style={{ fontSize: '12px' }} />
                <YAxis stroke="#94a3b8" style={{ fontSize: '12px' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0f172a',
                    border: '1px solid #0e7490',
                    borderRadius: '8px',
                    color: '#fff',
                  }}
                />
                <Line type="monotone" dataKey="production" stroke="#06b6d4" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="consumption" stroke="#10b981" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Bar Chart */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 border border-cyan-500/30 rounded-xl p-6 backdrop-blur-sm"
          >
            <div className="mb-6">
              <h3 className="text-lg font-bold text-white">지역별 운영 효율</h3>
              <p className="text-sm text-slate-400">실시간 설비 효율 (%)</p>
            </div>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={efficiencyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="location" stroke="#94a3b8" style={{ fontSize: '12px' }} />
                <YAxis stroke="#94a3b8" style={{ fontSize: '12px' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0f172a',
                    border: '1px solid #0e7490',
                    borderRadius: '8px',
                    color: '#fff',
                  }}
                />
                <Bar dataKey="efficiency" fill="url(#colorGradient)" radius={[8, 8, 0, 0]} />
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Data Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900/50 border border-cyan-500/30 rounded-xl overflow-hidden backdrop-blur-sm"
        >
          {/* Table Header */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-slate-800/50 border-b border-cyan-500/20">
            <div className="text-sm font-semibold text-cyan-400">설비 위치</div>
            <div className="text-sm font-semibold text-cyan-400">운영 효율</div>
            <div className="text-sm font-semibold text-cyan-400 hidden sm:block">절감량</div>
            <div className="text-sm font-semibold text-cyan-400 hidden sm:block">상태</div>
          </div>

          {/* Table Rows */}
          {liveData.map((row, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 border-b border-slate-800 hover:bg-slate-800/30 transition-colors"
            >
              <div className="text-sm text-slate-300">{row.location}</div>
              <div className="text-sm font-semibold text-emerald-400">{row.efficiency}</div>
              <div className="text-sm text-slate-300 hidden sm:block">{row.reduction}</div>
              <div className="hidden sm:flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                <span className="text-sm text-slate-300">{row.status}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
