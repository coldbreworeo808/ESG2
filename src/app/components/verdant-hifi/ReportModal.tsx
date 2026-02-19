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
    alert(`임팩트 리포트가 ${email}로 전송되었습니다.`);
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
            className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white max-w-lg w-full rounded-3xl shadow-2xl overflow-hidden border border-stone-200"
          >
            <div className="p-8 sm:p-10">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 hover:bg-stone-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-stone-600 hover:text-stone-900" />
              </button>

              {/* Icon */}
              <div className="inline-flex p-4 bg-emerald-50 rounded-2xl mb-6">
                <FileText className="w-8 h-8 text-emerald-700" />
              </div>

              {/* Header */}
              <h3 className="text-3xl font-light text-stone-800 mb-3">임팩트 리포트</h3>
              <p className="text-stone-600 mb-6 leading-relaxed">
                VERDANT의 2025 지속가능성 리포트를 이메일로 받아보세요.
              </p>

              {/* Report Features */}
              <div className="bg-stone-50 rounded-2xl p-6 mb-6 border border-stone-200">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-stone-700">친환경 소재 개발 여정</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-stone-700">탄소배출 절감 성과 데이터</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-stone-700">커뮤니티 캠페인 임팩트</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-stone-700">2026 지속가능성 목표</span>
                  </div>
                </div>
                <p className="text-xs text-stone-500 mt-4">32페이지 PDF (4.1MB)</p>
              </div>

              {/* Email Form */}
              <form onSubmit={handleSubmit}>
                <label htmlFor="modal-email" className="block text-sm font-medium text-stone-700 mb-3">
                  이메일 주소
                </label>
                <input
                  type="email"
                  id="modal-email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-stone-50 border-2 border-stone-300 text-stone-800 rounded-2xl focus:outline-none focus:border-emerald-500 transition-colors mb-4 placeholder:text-stone-400"
                  placeholder="your@company.com"
                />

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-emerald-700 text-white font-medium rounded-full hover:bg-emerald-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  리포트 받기
                </motion.button>
              </form>

              {/* Privacy Notice */}
              <p className="text-xs text-stone-500 mt-4 text-center leading-relaxed">
                이메일은 리포트 전송 목적으로만 사용됩니다.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
