import { Send, Mail, Building2, User, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';

export function CTAContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-cyan-950">
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* CTA Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-2 bg-cyan-900/30 border border-cyan-500/30 rounded-full mb-6">
              <span className="text-sm font-semibold text-cyan-300">Contact Us</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              데이터로 시작하는 변화
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              귀사의 탄소중립 목표 달성을 위한 맞춤 솔루션을 제안합니다.
              <br className="hidden sm:block" />
              지금 바로 문의하세요.
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-slate-800/50 backdrop-blur-sm border-2 border-cyan-500/30 rounded-2xl p-8 sm:p-12 shadow-2xl"
          >
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="flex items-center gap-2 text-sm font-semibold text-slate-200 mb-3">
                  <User className="w-4 h-4 text-cyan-400" />
                  이름
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-900/50 border-2 border-slate-700 text-white rounded-lg focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-500"
                  placeholder="홍길동"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="flex items-center gap-2 text-sm font-semibold text-slate-200 mb-3">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  이메일
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-900/50 border-2 border-slate-700 text-white rounded-lg focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-500"
                  placeholder="your@company.com"
                />
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="flex items-center gap-2 text-sm font-semibold text-slate-200 mb-3">
                  <Building2 className="w-4 h-4 text-cyan-400" />
                  회사명
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-900/50 border-2 border-slate-700 text-white rounded-lg focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-500"
                  placeholder="회사명을 입력하세요"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="flex items-center gap-2 text-sm font-semibold text-slate-200 mb-3">
                  <MessageSquare className="w-4 h-4 text-cyan-400" />
                  문의 내용
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-900/50 border-2 border-slate-700 text-white rounded-lg focus:outline-none focus:border-cyan-500 transition-colors resize-none placeholder:text-slate-500"
                  placeholder="문의 내용을 입력하세요"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-cyan-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-emerald-500 transition-all duration-200 shadow-xl shadow-cyan-900/30 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                문의 제출
              </motion.button>
            </div>

            {/* Privacy Notice */}
            <p className="text-xs text-slate-400 mt-6 text-center leading-relaxed">
              제출하신 정보는 문의 응대 목적으로만 사용되며, 개인정보처리방침에 따라 보호됩니다.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
