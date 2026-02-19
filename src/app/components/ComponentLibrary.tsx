import { Download, ArrowRight, CheckCircle2, TrendingDown, Zap } from 'lucide-react';

/**
 * NEXWAVE Energy Design System - Component Library
 * 
 * This file showcases the reusable components and design tokens
 * used throughout the NEXWAVE Energy landing page.
 */

export function ComponentLibrary() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            NEXWAVE Energy Design System
          </h1>
          <p className="text-lg text-slate-600">
            Components, Buttons, Cards & Badges Reference
          </p>
        </div>

        {/* Colors */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Color Palette</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div>
              <div className="h-24 bg-slate-950 rounded-lg mb-2"></div>
              <div className="text-sm font-medium text-slate-700">Slate 950</div>
              <div className="text-xs text-slate-500">Primary Dark</div>
            </div>
            <div>
              <div className="h-24 bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-lg mb-2"></div>
              <div className="text-sm font-medium text-slate-700">Cyan to Emerald</div>
              <div className="text-xs text-slate-500">Primary Gradient</div>
            </div>
            <div>
              <div className="h-24 bg-cyan-500 rounded-lg mb-2"></div>
              <div className="text-sm font-medium text-slate-700">Cyan 500</div>
              <div className="text-xs text-slate-500">Accent</div>
            </div>
            <div>
              <div className="h-24 bg-emerald-500 rounded-lg mb-2"></div>
              <div className="text-sm font-medium text-slate-700">Emerald 500</div>
              <div className="text-xs text-slate-500">Success/Green</div>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Buttons</h2>
          <div className="space-y-6">
            {/* Primary Button */}
            <div>
              <div className="text-sm font-semibold text-slate-700 mb-3">Primary Button</div>
              <div className="flex flex-wrap gap-4">
                <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-emerald-500 transition-all duration-200 shadow-xl shadow-cyan-900/30">
                  Call to Action
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-emerald-500 transition-all duration-200 shadow-lg shadow-cyan-900/30">
                  Medium Size
                </button>
                <button className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-emerald-500 transition-all duration-200 shadow-lg shadow-cyan-900/30">
                  Small Size
                </button>
              </div>
            </div>

            {/* Secondary Button */}
            <div>
              <div className="text-sm font-semibold text-slate-700 mb-3">Secondary Button (Outline)</div>
              <div className="flex flex-wrap gap-4">
                <button className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800/50 border-2 border-cyan-500/50 text-white font-semibold rounded-lg hover:bg-slate-800 hover:border-cyan-400 transition-all duration-200">
                  <Download className="w-5 h-5" />
                  Download Report
                </button>
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-slate-300 text-slate-900 font-semibold rounded-lg hover:border-cyan-400 hover:bg-slate-50 transition-all duration-200">
                  Light Variant
                </button>
              </div>
            </div>

            {/* Icon Buttons */}
            <div>
              <div className="text-sm font-semibold text-slate-700 mb-3">Icon Buttons</div>
              <div className="flex flex-wrap gap-4">
                <button className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-white" />
                </button>
                <button className="w-10 h-10 border-2 border-slate-700 rounded-lg flex items-center justify-center hover:border-cyan-500 hover:bg-cyan-500/10 transition-all">
                  <Download className="w-5 h-5 text-slate-400" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Cards</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Metric Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <div className="inline-flex p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg mb-4">
                <TrendingDown className="w-6 h-6 text-white" />
              </div>
              <div className="text-5xl font-bold text-slate-900 mb-2">73%</div>
              <div className="text-lg font-semibold text-slate-700 mb-1">탄소배출 감소</div>
              <div className="text-sm text-slate-500">2023-2025 누적</div>
            </div>

            {/* Feature Card */}
            <div className="bg-white border-2 border-cyan-200 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="text-sm font-bold text-slate-400 mb-3">01</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Feature Title</h3>
              <p className="text-slate-600 mb-6">Brief description of the feature or solution module.</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full mt-2"></div>
                  <div className="text-sm text-slate-700">Key metric or benefit</div>
                </div>
              </div>
            </div>

            {/* Dashboard Widget */}
            <div className="bg-gradient-to-br from-slate-900 to-cyan-950 border border-cyan-500/30 rounded-xl p-6 text-white">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-cyan-500/20 rounded-lg">
                  <Zap className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-emerald-400 text-sm">+5.2%</div>
              </div>
              <div className="text-4xl font-bold mb-1">234.5 MW</div>
              <div className="text-sm text-slate-400">현재 생산량</div>
            </div>
          </div>
        </section>

        {/* Badges */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Badges & Tags</h2>
          <div className="flex flex-wrap gap-4">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-900/30 border border-cyan-500/30 rounded-full">
              <TrendingDown className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-300">측정 가능한 변화</span>
            </div>

            {/* Category Badge */}
            <div className="inline-block px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full">
              <span className="text-sm font-semibold text-emerald-700">Impact Metrics</span>
            </div>

            {/* Success Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white font-bold rounded-lg shadow-lg">
              <CheckCircle2 className="w-4 h-4" />
              검증 완료
            </div>

            {/* Alert Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-full">
              <span className="text-sm font-medium text-red-700">긴급 과제</span>
            </div>

            {/* Number Badge */}
            <div className="inline-flex items-center justify-center w-8 h-8 bg-slate-900 text-white text-sm font-bold rounded-full">
              01
            </div>
          </div>
        </section>

        {/* Typography */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Typography</h2>
          <div className="space-y-6 bg-white p-8 rounded-2xl border border-slate-200">
            <div>
              <div className="text-6xl font-bold text-slate-900 mb-2">
                H1 Headline
              </div>
              <div className="text-sm text-slate-500">text-6xl font-bold</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">
                H2 Section Title
              </div>
              <div className="text-sm text-slate-500">text-4xl font-bold</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900 mb-2">
                H3 Card Title
              </div>
              <div className="text-sm text-slate-500">text-2xl font-bold</div>
            </div>
            <div>
              <div className="text-lg text-slate-600 mb-2">
                Body Large - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
              <div className="text-sm text-slate-500">text-lg text-slate-600</div>
            </div>
            <div>
              <div className="text-base text-slate-700 mb-2">
                Body Medium - Regular text for content and descriptions.
              </div>
              <div className="text-sm text-slate-500">text-base text-slate-700</div>
            </div>
            <div>
              <div className="text-sm text-slate-500 mb-2">
                Caption - Small text for metadata and labels.
              </div>
              <div className="text-sm text-slate-500">text-sm text-slate-500</div>
            </div>
          </div>
        </section>

        {/* Spacing & Layout */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Spacing System</h2>
          <div className="bg-white p-8 rounded-2xl border border-slate-200">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-cyan-500"></div>
                <div className="text-sm text-slate-700">4px - gap-1, p-1</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-cyan-500"></div>
                <div className="text-sm text-slate-700">8px - gap-2, p-2</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-cyan-500"></div>
                <div className="text-sm text-slate-700">16px - gap-4, p-4</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-24 h-24 bg-cyan-500"></div>
                <div className="text-sm text-slate-700">24px - gap-6, p-6</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-32 h-32 bg-cyan-500"></div>
                <div className="text-sm text-slate-700">32px - gap-8, p-8</div>
              </div>
            </div>
          </div>
        </section>

        {/* Border Radius */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Border Radius</h2>
          <div className="flex flex-wrap gap-6">
            <div>
              <div className="w-24 h-24 bg-cyan-500 rounded-lg mb-2"></div>
              <div className="text-sm text-slate-700">rounded-lg (8px)</div>
            </div>
            <div>
              <div className="w-24 h-24 bg-cyan-500 rounded-xl mb-2"></div>
              <div className="text-sm text-slate-700">rounded-xl (12px)</div>
            </div>
            <div>
              <div className="w-24 h-24 bg-cyan-500 rounded-2xl mb-2"></div>
              <div className="text-sm text-slate-700">rounded-2xl (16px)</div>
            </div>
            <div>
              <div className="w-24 h-24 bg-cyan-500 rounded-full mb-2"></div>
              <div className="text-sm text-slate-700">rounded-full</div>
            </div>
          </div>
        </section>

        {/* Shadow System */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Shadow System</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-sm font-semibold text-slate-700 mb-2">shadow-lg</div>
              <div className="text-xs text-slate-500">Default cards</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-xl">
              <div className="text-sm font-semibold text-slate-700 mb-2">shadow-xl</div>
              <div className="text-xs text-slate-500">Hover states</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-2xl">
              <div className="text-sm font-semibold text-slate-700 mb-2">shadow-2xl</div>
              <div className="text-xs text-slate-500">Modals & overlays</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
