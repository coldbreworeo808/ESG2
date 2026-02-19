import { useState } from 'react';

export function CTAContact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    usage: '',
    contact: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('샘플 요청이 접수되었습니다. 담당자가 3일 이내 연락드리겠습니다.');
    setFormData({ name: '', company: '', usage: '', contact: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-3xl mx-auto">
          {/* CTA Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-gray-900">
              작은 시작을 함께
            </h2>
            <p className="text-lg text-gray-600">
              VERDANT의 친환경 소재를 직접 경험해보세요.
              <br className="hidden sm:block" />
              샘플을 요청하시면 맞춤 상담과 함께 제공해드립니다.
            </p>
          </div>

          {/* Sample Request Form */}
          <form onSubmit={handleSubmit} className="bg-gray-50 border border-gray-200 p-8 sm:p-12">
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                  이름 *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:border-gray-900 transition-colors"
                  placeholder="홍길동"
                />
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm text-gray-700 mb-2">
                  회사명 *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:border-gray-900 transition-colors"
                  placeholder="회사명을 입력하세요"
                />
              </div>

              {/* Usage */}
              <div>
                <label htmlFor="usage" className="block text-sm text-gray-700 mb-2">
                  사용 용도 *
                </label>
                <textarea
                  id="usage"
                  name="usage"
                  required
                  value={formData.usage}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:border-gray-900 transition-colors resize-none"
                  placeholder="어떤 제품이나 용도로 사용하실 예정인지 간단히 설명해주세요"
                />
              </div>

              {/* Contact */}
              <div>
                <label htmlFor="contact" className="block text-sm text-gray-700 mb-2">
                  연락처 *
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  required
                  value={formData.contact}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:border-gray-900 transition-colors"
                  placeholder="이메일 또는 전화번호"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-gray-900 text-white hover:bg-gray-700 transition-colors"
              >
                샘플 요청하기
              </button>
            </div>

            {/* Privacy Notice */}
            <p className="text-xs text-gray-500 mt-4 text-center">
              제출하신 정보는 샘플 발송 및 상담 목적으로만 사용됩니다.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
