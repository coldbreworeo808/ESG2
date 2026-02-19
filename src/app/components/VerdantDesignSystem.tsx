import { Leaf, Send, ArrowRight, CheckCircle2 } from 'lucide-react';

/**
 * VERDANT Design System - Component Library
 * 
 * "조용한 자신감 + 자연광 + 소재의 촉감"
 * 오프화이트/웜그레이 베이스 + 포레스트 그린 포인트
 */

export function VerdantDesignSystem() {
  return (
    <div className="min-h-screen bg-stone-50 p-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-700 to-green-800 rounded-sm opacity-90"></div>
            <h1 className="text-4xl font-light text-stone-800">
              VERDANT Design System
            </h1>
          </div>
          <p className="text-lg text-stone-600 font-light">
            조용한 자신감 · 자연광 · 소재의 촉감
          </p>
        </div>

        {/* Brand Colors */}
        <section>
          <h2 className="text-2xl font-medium text-stone-800 mb-6">Color Palette</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <div className="h-32 bg-stone-50 rounded-2xl mb-3 border-2 border-stone-200"></div>
              <div className="text-sm font-medium text-stone-700">Stone 50</div>
              <div className="text-xs text-stone-500">오프화이트 베이스</div>
            </div>
            <div>
              <div className="h-32 bg-stone-100 rounded-2xl mb-3 border border-stone-200"></div>
              <div className="text-sm font-medium text-stone-700">Stone 100</div>
              <div className="text-xs text-stone-500">웜그레이 라이트</div>
            </div>
            <div>
              <div className="h-32 bg-emerald-700 rounded-2xl mb-3"></div>
              <div className="text-sm font-medium text-stone-700">Emerald 700</div>
              <div className="text-xs text-stone-500">포레스트 그린</div>
            </div>
            <div>
              <div className="h-32 bg-gradient-to-br from-emerald-700 to-green-800 rounded-2xl mb-3"></div>
              <div className="text-sm font-medium text-stone-700">Green Gradient</div>
              <div className="text-xs text-stone-500">브랜드 그라데이션</div>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section>
          <h2 className="text-2xl font-medium text-stone-800 mb-6">Typography</h2>
          <div className="space-y-6 bg-white p-8 rounded-3xl border border-stone-200">
            <div>
              <div className="text-6xl font-light text-stone-800 mb-3 tracking-tight">
                차분한 감성
              </div>
              <div className="text-sm text-stone-500">text-6xl font-light · Headline</div>
            </div>
            <div>
              <div className="text-4xl font-light text-stone-800 mb-3 leading-tight">
                Section Title
              </div>
              <div className="text-sm text-stone-500">text-4xl font-light · Section</div>
            </div>
            <div>
              <div className="text-2xl font-medium text-stone-800 mb-3">
                Card Title
              </div>
              <div className="text-sm text-stone-500">text-2xl font-medium · Cards</div>
            </div>
            <div>
              <div className="text-lg text-stone-600 mb-3 leading-relaxed font-light">
                본문 텍스트는 가독성을 최우선으로 합니다. 차분하고 편안한 느낌.
              </div>
              <div className="text-sm text-stone-500">text-lg font-light · Body</div>
            </div>
            <div>
              <div className="text-sm tracking-[0.3em] text-emerald-700 mb-2 font-medium uppercase">
                The Ripple Makers
              </div>
              <div className="text-sm text-stone-500">tracking-[0.3em] uppercase · Slogan</div>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section>
          <h2 className="text-2xl font-medium text-stone-800 mb-6">Buttons</h2>
          <div className="space-y-6">
            {/* Primary Button */}
            <div>
              <div className="text-sm font-medium text-stone-700 mb-3">Primary Button</div>
              <div className="flex flex-wrap gap-4">
                <button className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-700 text-white font-medium rounded-full hover:bg-emerald-800 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Primary Action
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-700 text-white font-medium rounded-full hover:bg-emerald-800 transition-all duration-300 shadow-md hover:shadow-lg">
                  Medium
                </button>
                <button className="inline-flex items-center gap-2 px-5 py-2 bg-emerald-700 text-white font-medium rounded-full hover:bg-emerald-800 transition-all duration-300">
                  Small
                </button>
              </div>
            </div>

            {/* Secondary Button */}
            <div>
              <div className="text-sm font-medium text-stone-700 mb-3">Secondary Button (Outline)</div>
              <div className="flex flex-wrap gap-4">
                <button className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-stone-300 text-stone-700 font-medium rounded-full hover:border-emerald-700 hover:text-emerald-700 transition-all duration-300 shadow-md hover:shadow-lg">
                  Secondary Action
                </button>
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-stone-50 border-2 border-stone-300 text-stone-700 font-medium rounded-full hover:border-emerald-700 transition-all duration-300">
                  Medium
                </button>
              </div>
            </div>

            {/* Form Button */}
            <div>
              <div className="text-sm font-medium text-stone-700 mb-3">Form Submit Button</div>
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-700 text-white font-medium rounded-full hover:bg-emerald-800 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto">
                <Send className="w-5 h-5" />
                제출하기
              </button>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section>
          <h2 className="text-2xl font-medium text-stone-800 mb-6">Cards</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Material Card */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-stone-200">
              <div className="inline-flex p-4 bg-emerald-50 rounded-2xl mb-6">
                <Leaf className="w-8 h-8 text-emerald-700" />
              </div>
              <h3 className="text-2xl font-medium mb-4 text-stone-800">소재 카드</h3>
              <p className="text-sm text-stone-600 leading-relaxed mb-4">
                친환경 소재의 특징과 가치를 담은 카드 컴포넌트
              </p>
              <div className="space-y-3">
                <div className="pb-3 border-b border-stone-100">
                  <div className="text-xs text-stone-500 mb-1 tracking-wide uppercase">특징</div>
                  <div className="text-sm font-medium text-stone-700">100% 생분해</div>
                </div>
                <div>
                  <div className="text-xs text-stone-500 mb-1 tracking-wide uppercase">가치</div>
                  <div className="text-sm font-medium text-emerald-700">환경 보호</div>
                </div>
              </div>
            </div>

            {/* Metric Card */}
            <div className="bg-stone-50 rounded-3xl p-8 text-center border border-stone-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300">
              <div className="inline-flex p-3 bg-emerald-50 rounded-2xl mb-6">
                <CheckCircle2 className="w-6 h-6 text-emerald-700" />
              </div>
              <div className="text-5xl font-light text-stone-800 mb-2">87%</div>
              <div className="text-base font-medium text-stone-700 mb-2">재활용률</div>
              <div className="text-sm text-stone-500">업계 평균 대비 +42%</div>
            </div>

            {/* Process Card */}
            <div className="relative bg-stone-50 rounded-2xl p-8 border border-stone-200 hover:border-emerald-300 transition-all duration-300">
              <div className="text-5xl font-light text-stone-300 mb-4">01</div>
              <h3 className="text-xl font-medium mb-3 text-stone-800">공정 단계</h3>
              <p className="text-sm text-stone-600 leading-relaxed mb-6">
                제조 공정의 각 단계를 나타내는 카드
              </p>
              <div className="absolute bottom-6 right-6">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Badges & Tags */}
        <section>
          <h2 className="text-2xl font-medium text-stone-800 mb-6">Badges & Tags</h2>
          <div className="flex flex-wrap gap-4">
            {/* Category Badge */}
            <div className="inline-block px-4 py-2 bg-emerald-50 rounded-full">
              <span className="text-sm font-medium text-emerald-800">Material Innovation</span>
            </div>

            {/* Section Badge */}
            <div className="inline-block px-4 py-2 bg-stone-100 border border-stone-200 rounded-full">
              <span className="text-sm font-medium text-stone-700">Clean Manufacturing</span>
            </div>

            {/* Slogan Badge */}
            <div className="inline-block px-4 py-2 bg-white border-2 border-emerald-700 rounded-full">
              <span className="text-sm tracking-[0.2em] text-emerald-700 font-medium uppercase">
                The Ripple Makers
              </span>
            </div>

            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-700 text-white rounded-full">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-sm font-medium">검증 완료</span>
            </div>
          </div>
        </section>

        {/* Ripple Divider */}
        <section>
          <h2 className="text-2xl font-medium text-stone-800 mb-6">Ripple Divider</h2>
          <div className="bg-white rounded-3xl overflow-hidden border border-stone-200">
            <div className="h-24 bg-stone-50"></div>
            <svg
              viewBox="0 0 1440 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-20"
              preserveAspectRatio="none"
            >
              <path
                d="M0,60 Q360,10 720,60 T1440,60 L1440,120 L0,120 Z"
                fill="#ffffff"
              />
            </svg>
            <div className="h-24 bg-white"></div>
          </div>
          <p className="text-sm text-stone-600 mt-4 text-center">
            섹션 전환에 사용되는 리플(물결) 모티프 디바이더
          </p>
        </section>

        {/* Form Elements */}
        <section>
          <h2 className="text-2xl font-medium text-stone-800 mb-6">Form Elements</h2>
          <div className="bg-white rounded-3xl p-8 border border-stone-200 space-y-6">
            {/* Input */}
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-3">
                텍스트 입력
              </label>
              <input
                type="text"
                placeholder="입력해주세요"
                className="w-full px-4 py-3 bg-stone-50 border-2 border-stone-300 text-stone-800 rounded-2xl focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-stone-400"
              />
            </div>

            {/* Textarea */}
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-3">
                긴 텍스트
              </label>
              <textarea
                rows={3}
                placeholder="내용을 입력해주세요"
                className="w-full px-4 py-3 bg-stone-50 border-2 border-stone-300 text-stone-800 rounded-2xl focus:outline-none focus:border-emerald-500 transition-colors resize-none placeholder:text-stone-400"
              />
            </div>

            {/* Input with Error */}
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-3">
                에러 상태
              </label>
              <input
                type="email"
                placeholder="이메일을 입력하세요"
                className="w-full px-4 py-3 bg-white border-2 border-red-500 text-stone-800 rounded-2xl focus:outline-none placeholder:text-stone-400"
              />
              <p className="text-xs text-red-600 mt-2">올바른 이메일 형식을 입력해주세요</p>
            </div>
          </div>
        </section>

        {/* Spacing */}
        <section>
          <h2 className="text-2xl font-medium text-stone-800 mb-6">Border Radius</h2>
          <div className="flex flex-wrap gap-6">
            <div>
              <div className="w-24 h-24 bg-emerald-700 rounded-2xl mb-2"></div>
              <div className="text-sm text-stone-700">rounded-2xl (16px)</div>
            </div>
            <div>
              <div className="w-24 h-24 bg-emerald-700 rounded-3xl mb-2"></div>
              <div className="text-sm text-stone-700">rounded-3xl (24px)</div>
            </div>
            <div>
              <div className="w-24 h-24 bg-emerald-700 rounded-full mb-2"></div>
              <div className="text-sm text-stone-700">rounded-full</div>
            </div>
          </div>
          <p className="text-sm text-stone-600 mt-6">
            부드러운 곡선으로 자연스럽고 차분한 느낌을 전달합니다.
          </p>
        </section>

        {/* Shadow System */}
        <section>
          <h2 className="text-2xl font-medium text-stone-800 mb-6">Shadow System</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-stone-200">
              <div className="text-sm font-medium text-stone-700 mb-2">shadow-lg</div>
              <div className="text-xs text-stone-500">기본 카드</div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-stone-200">
              <div className="text-sm font-medium text-stone-700 mb-2">shadow-xl</div>
              <div className="text-xs text-stone-500">강조 카드</div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-2xl border border-stone-200">
              <div className="text-sm font-medium text-stone-700 mb-2">shadow-2xl</div>
              <div className="text-xs text-stone-500">모달, 중요 요소</div>
            </div>
          </div>
          <p className="text-sm text-stone-600 mt-6">
            자연광을 닮은 부드러운 그림자로 깊이감을 표현합니다.
          </p>
        </section>
      </div>
    </div>
  );
}
