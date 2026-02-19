import { useState } from 'react';

export function CTAContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    alert('문의가 접수되었습니다. 담당자가 빠른 시일 내 연락드리겠습니다.');
    setFormData({ name: '', email: '', company: '', message: '' });
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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-3xl mx-auto">
          {/* CTA Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-gray-900">
              데이터로 시작하는 변화
            </h2>
            <p className="text-lg text-gray-600">
              귀사의 탄소중립 목표 달성을 위한 맞춤 솔루션을 제안합니다.
              <br className="hidden sm:block" />
              지금 바로 문의하세요.
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-white border border-gray-200 p-8 sm:p-12">
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
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-900 transition-colors"
                  placeholder="홍길동"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                  이메일 *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-900 transition-colors"
                  placeholder="your@company.com"
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
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-900 transition-colors"
                  placeholder="회사명을 입력하세요"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                  문의 내용 *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-900 transition-colors resize-none"
                  placeholder="문의 내용을 입력하세요"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-gray-900 text-white hover:bg-gray-800 transition-colors"
              >
                문의 제출
              </button>
            </div>

            {/* Privacy Notice */}
            <p className="text-xs text-gray-500 mt-4 text-center">
              제출하신 정보는 문의 응대 목적으로만 사용되며, 개인정보처리방침에 따라 보호됩니다.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
