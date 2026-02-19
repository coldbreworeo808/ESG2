interface HeroProps {
  onDownloadReport: () => void;
}

export function Hero({ onDownloadReport }: HeroProps) {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Slogan */}
        <div className="text-center mb-8">
          <div className="text-sm text-gray-500 mb-4 tracking-widest">
            THE RIPPLE MAKERS
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 text-gray-900 leading-tight">
            작은 파장이 만드는 내일
          </h1>
        </div>

        {/* Declaration */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            지속가능한 소재로 산업의 기준을 바꿉니다.
            <br className="hidden sm:block" />
            우리가 만드는 하나의 선택이 모여, 더 나은 미래를 만듭니다.
          </p>
        </div>

        {/* Ripple Visual Placeholder */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="aspect-[3/2] border-2 border-gray-300 border-dashed bg-gray-50 flex items-center justify-center">
            <div className="text-center text-gray-400">
              <div className="mb-2 text-sm">[ 리플 비주얼 ]</div>
              <div className="text-xs">수면에 퍼지는 물결 이미지</div>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('#material')}
            className="w-full sm:w-auto px-8 py-4 bg-gray-900 text-white hover:bg-gray-700 transition-colors"
          >
            소재 보기
          </button>
          <button
            onClick={onDownloadReport}
            className="w-full sm:w-auto px-8 py-4 border-2 border-gray-900 text-gray-900 hover:bg-gray-50 transition-colors"
          >
            임팩트 리포트
          </button>
        </div>
      </div>
    </section>
  );
}
