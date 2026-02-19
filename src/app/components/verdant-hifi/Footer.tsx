import { Linkedin, Instagram, Youtube, Facebook } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    company: [
      { label: '회사 소개', href: '#' },
      { label: '연구소', href: '#' },
      { label: '채용', href: '#' },
      { label: '뉴스', href: '#' },
    ],
    products: [
      { label: '소재 카탈로그', href: '#' },
      { label: '인증서', href: '#' },
      { label: '샘플 요청', href: '#' },
    ],
    resources: [
      { label: '임팩트 리포트', href: '#' },
      { label: '백서', href: '#' },
      { label: '캠페인', href: '#' },
    ],
    legal: [
      { label: '개인정보처리방침', href: '#' },
      { label: '이용약관', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn' },
    { icon: Instagram, label: 'Instagram' },
    { icon: Youtube, label: 'YouTube' },
    { icon: Facebook, label: 'Facebook' },
  ];

  return (
    <footer className="bg-stone-100 text-stone-600 py-16 px-4 sm:px-6 lg:px-8 border-t border-stone-200">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-700 to-green-800 rounded-sm opacity-90"></div>
              <span className="text-xl font-medium tracking-wider text-stone-800">VERDANT</span>
            </div>
            <p className="text-sm text-stone-600 mb-6 leading-relaxed font-light">
              작은 파장이 만드는 내일.
              <br />
              지속가능한 소재로 산업의 기준을 바꿉니다.
            </p>
            <div className="text-sm text-stone-500 space-y-1">
              <p>서울특별시 마포구 월드컵북로 396</p>
              <p>VERDANT 연구소 빌딩</p>
              <p className="mt-3 text-stone-600">contact@verdant.com</p>
              <p className="text-stone-600">02-3456-7890</p>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-medium text-stone-800 mb-4">회사</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-stone-600 hover:text-emerald-700 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="text-sm font-medium text-stone-800 mb-4">제품</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-stone-600 hover:text-emerald-700 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Legal Links */}
          <div>
            <h4 className="text-sm font-medium text-stone-800 mb-4">리소스</h4>
            <ul className="space-y-3 mb-6">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-stone-600 hover:text-emerald-700 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <h4 className="text-sm font-medium text-stone-800 mb-4">법적 고지</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-stone-600 hover:text-emerald-700 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-stone-200 pt-8 mb-8">
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href="#"
                  aria-label={social.label}
                  className="w-10 h-10 border-2 border-stone-300 rounded-full flex items-center justify-center hover:border-emerald-700 hover:bg-emerald-50 transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 text-stone-600 group-hover:text-emerald-700 transition-colors" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-stone-200 pt-8 text-center text-sm text-stone-500">
          <p>© 2026 VERDANT Inc. All rights reserved.</p>
          <p className="mt-2 text-xs">
            사업자등록번호: 234-56-78901 | 대표: 김소재
          </p>
          <p className="mt-4 text-xs text-stone-600 italic font-light">
            "The Ripple Makers" — 작은 변화가 만드는 큰 파장
          </p>
        </div>
      </div>
    </footer>
  );
}
