import { X, Download, FileText, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ReportModal({ isOpen, onClose }: ReportModalProps) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`리포트가 ${email}로 전송되었습니다.`);
    setEmail('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-gradient-to-br from-slate-900 to-cyan-950 max-w-lg w-full rounded-2xl border-2 border-cyan-500/30 shadow-2xl overflow-hidden"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-2xl blur-xl opacity-20"></div>
            
            <div className="relative p-8">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 hover:bg-slate-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-slate-400 hover:text-white" />
              </button>

              {/* Icon */}
              <div className="inline-flex p-4 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-xl mb-6">
                <FileText className="w-8 h-8 text-white" />
              </div>

              {/* Header */}
              <h3 className="text-3xl font-bold text-white mb-3">리포트 다운로드</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                NEXWAVE Energy Impact Report 2025를 이메일로 받아보세요.
              </p>

              {/* Report Features */}
              <div className="bg-slate-800/50 border border-cyan-500/30 rounded-xl p-6 mb-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-300">탄소배출 73% 감소 실측 데이터</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-300">재생에너지 전환 케이스 스터디</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-300">2025년 임팩트 성과 분석</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-300">24페이지 PDF (3.2MB)</span>
                  </div>
                </div>
              </div>

              {/* Email Form */}
              <form onSubmit={handleSubmit}>
                <label htmlFor="modal-email" className="block text-sm font-semibold text-slate-200 mb-3">
                  이메일 주소
                </label>
                <input
                  type="email"
                  id="modal-email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-900/50 border-2 border-slate-700 text-white rounded-lg focus:outline-none focus:border-cyan-500 transition-colors mb-4 placeholder:text-slate-500"
                  placeholder="your@company.com"
                />

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-gradient-to-r from-cyan-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-emerald-500 transition-all duration-200 shadow-lg shadow-cyan-900/30 flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  리포트 받기
                </motion.button>
              </form>

              {/* Privacy Notice */}
              <p className="text-xs text-slate-500 mt-4 text-center leading-relaxed">
                이메일은 리포트 전송 목적으로만 사용됩니다.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
