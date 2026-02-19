export function Footer() {
  const footerLinks = {
    company: [
      { label: '회사 소개', href: '#' },
      { label: '채용', href: '#' },
      { label: '뉴스룸', href: '#' },
    ],
    legal: [
      { label: '개인정보처리방침', href: '#' },
      { label: '이용약관', href: '#' },
      { label: '쿠키 정책', href: '#' },
    ],
    resources: [
      { label: '리포트', href: '#' },
      { label: '백서', href: '#' },
      { label: '문의', href: '#' },
    ],
  };

  const socialLinks = ['LinkedIn', 'Twitter', 'YouTube', 'Instagram'];

  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="text-xl text-white mb-4">NEXWAVE Energy</div>
            <p className="text-sm text-gray-400 mb-4">
              측정 가능한 변화로 증명하는
              <br />
              재생에너지 솔루션
            </p>
            <div className="text-sm text-gray-500">
              <p>서울특별시 강남구</p>
              <p>테헤란로 427</p>
              <p className="mt-2">info@nexwave.energy</p>
              <p>02-1234-5678</p>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm text-white mb-4">회사</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-sm text-white mb-4">법적 고지</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-sm text-white mb-4">리소스</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {socialLinks.map((social, index) => (
              <div
                key={index}
                className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:border-gray-500 transition-colors"
              >
                <span className="text-xs text-gray-500">[ {social[0]} ]</span>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>© 2026 NEXWAVE Energy. All rights reserved.</p>
          <p className="mt-2 text-xs">
            사업자등록번호: 123-45-67890 | 대표: 홍길동
          </p>
        </div>
      </div>
    </footer>
  );
}
