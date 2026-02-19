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
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-[1440px] mx-auto">
        {/* Headline */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 text-gray-900 tracking-tight">
            73% Less. 100% Better.
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            측정 가능한 변화로 증명하는 재생에너지 솔루션.
            <br className="hidden sm:block" />
            투명한 데이터, 명확한 행동, 실질적 임팩트.
          </p>
        </div>

        {/* KPI Highlight */}
        <div className="bg-white border-2 border-gray-900 p-8 sm:p-12 mb-12 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-6xl sm:text-7xl lg:text-8xl text-gray-900 mb-4">
              73%
            </div>
            <div className="text-xl sm:text-2xl text-gray-700 mb-2">
              탄소배출 감소
            </div>
            <div className="text-sm text-gray-500">
              2023-2025 실측 데이터 기반
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('#solution')}
            className="w-full sm:w-auto px-8 py-4 bg-gray-900 text-white hover:bg-gray-800 transition-colors"
          >
            솔루션 보기
          </button>
          <button
            onClick={onDownloadReport}
            className="w-full sm:w-auto px-8 py-4 border-2 border-gray-900 text-gray-900 hover:bg-gray-50 transition-colors"
          >
            리포트 다운로드
          </button>
        </div>
      </div>
    </section>
  );
}
