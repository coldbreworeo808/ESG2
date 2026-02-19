import { Send, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';

export function CTAContact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    usage: '',
    contact: '',
  });

  const [errors, setErrors] = useState({
    contact: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.contact) && !formData.contact.match(/^\d{2,3}-\d{3,4}-\d{4}$/)) {
      setErrors({ contact: '올바른 이메일 또는 전화번호 형식을 입력해주세요' });
      return;
    }

    alert('샘플 요청이 접수되었습니다. 담당자가 3일 이내 연락드리겠습니다.');
    setFormData({ name: '', company: '', usage: '', contact: '' });
    setErrors({ contact: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    
    // Clear error when user types
    if (e.target.name === 'contact') {
      setErrors({ contact: '' });
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-3xl mx-auto">
          {/* CTA Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-2 bg-emerald-50 rounded-full mb-6">
              <span className="text-sm font-medium text-emerald-800">Contact</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-light mb-6 text-stone-800 leading-tight">
              작은 시작을 함께
            </h2>
            <p className="text-xl text-stone-600 font-light leading-relaxed">
              VERDANT의 친환경 소재를 직접 경험해보세요.
              <br className="hidden sm:block" />
              샘플을 요청하시면 맞춤 상담과 함께 제공해드립니다.
            </p>
          </motion.div>

          {/* Sample Request Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-stone-50 rounded-3xl p-8 sm:p-12 border border-stone-200"
          >
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-3">
                  이름 <span className="text-emerald-700">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border-2 border-stone-300 text-stone-800 rounded-2xl focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-stone-400"
                  placeholder="홍길동"
                />
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-stone-700 mb-3">
                  회사명 <span className="text-emerald-700">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border-2 border-stone-300 text-stone-800 rounded-2xl focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-stone-400"
                  placeholder="회사명을 입력하세요"
                />
              </div>

              {/* Usage */}
              <div>
                <label htmlFor="usage" className="block text-sm font-medium text-stone-700 mb-3">
                  사용 용도 <span className="text-emerald-700">*</span>
                </label>
                <textarea
                  id="usage"
                  name="usage"
                  required
                  value={formData.usage}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white border-2 border-stone-300 text-stone-800 rounded-2xl focus:outline-none focus:border-emerald-500 transition-colors resize-none placeholder:text-stone-400"
                  placeholder="어떤 제품이나 용도로 사용하실 예정인지 간단히 설명해주세요"
                />
              </div>

              {/* Contact */}
              <div>
                <label htmlFor="contact" className="block text-sm font-medium text-stone-700 mb-3">
                  연락처 <span className="text-emerald-700">*</span>
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  required
                  value={formData.contact}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white border-2 ${
                    errors.contact ? 'border-red-500' : 'border-stone-300'
                  } text-stone-800 rounded-2xl focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-stone-400`}
                  placeholder="이메일 또는 전화번호"
                />
                {errors.contact && (
                  <div className="flex items-center gap-2 mt-2 text-sm text-red-600">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.contact}</span>
                  </div>
                )}
                <p className="text-xs text-stone-500 mt-2">
                  예: your@company.com 또는 010-1234-5678
                </p>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-emerald-700 text-white font-medium rounded-full hover:bg-emerald-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                샘플 요청하기
              </motion.button>
            </div>

            {/* Privacy Notice */}
            <p className="text-xs text-stone-500 mt-6 text-center leading-relaxed">
              제출하신 정보는 샘플 발송 및 상담 목적으로만 사용되며,
              <br className="sm:hidden" />
              개인정보처리방침에 따라 안전하게 보호됩니다.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
