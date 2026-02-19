import { X } from 'lucide-react';
import { useState } from 'react';

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ReportModal({ isOpen, onClose }: ReportModalProps) {
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`임팩트 리포트가 ${email}로 전송되었습니다.`);
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-60"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white max-w-md w-full p-8 border border-gray-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5 text-gray-900" />
        </button>

        {/* Header */}
        <h3 className="text-2xl text-gray-900 mb-4">임팩트 리포트</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          VERDANT의 2025 지속가능성 리포트를 이메일로 받아보세요.
        </p>

        {/* Report Info */}
        <div className="bg-gray-50 border border-gray-200 p-4 mb-6">
          <div className="text-sm text-gray-700 space-y-1 leading-relaxed">
            <p>• 친환경 소재 개발 여정</p>
            <p>• 탄소배출 절감 성과 데이터</p>
            <p>• 커뮤니티 캠페인 임팩트</p>
            <p>• 2026 지속가능성 목표</p>
            <p className="text-xs text-gray-500 mt-2">32페이지 PDF (4.1MB)</p>
          </div>
        </div>

        {/* Email Form */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="modal-email" className="block text-sm text-gray-700 mb-2">
            이메일 주소
          </label>
          <input
            type="email"
            id="modal-email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-900 transition-colors mb-4"
            placeholder="your@company.com"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gray-900 text-white hover:bg-gray-700 transition-colors"
          >
            리포트 받기
          </button>
        </form>

        {/* Privacy Notice */}
        <p className="text-xs text-gray-500 mt-4 text-center">
          이메일은 리포트 전송 목적으로만 사용됩니다.
        </p>
      </div>
    </div>
  );
}
