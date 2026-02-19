import { Play } from 'lucide-react';

export function VideoSection() {
  return (
    <section id="video" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-gray-900">
            30초로 보는 VERDANT
          </h2>
          <p className="text-lg text-gray-600">
            우리의 이야기, 우리의 여정
          </p>
        </div>

        {/* Video Embed */}
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video bg-gray-200 border-2 border-gray-300 flex items-center justify-center group cursor-pointer hover:border-gray-500 transition-colors">
            {/* Thumbnail */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-gray-400 text-center">
                <div className="text-sm mb-2">[ 영상 썸네일 ]</div>
                <div className="text-xs">리플 모티프 + 제조 현장</div>
              </div>
            </div>

            {/* Play Button */}
            <div className="relative z-10 w-20 h-20 bg-white rounded-full flex items-center justify-center border-2 border-gray-900 group-hover:bg-gray-900 transition-colors">
              <Play className="w-8 h-8 text-gray-900 group-hover:text-white ml-1 transition-colors" />
            </div>
          </div>

          {/* Video Info */}
          <div className="mt-6 text-center text-sm text-gray-600">
            <p>VERDANT Story 2025 - The Ripple Makers</p>
            <p className="text-xs text-gray-500 mt-1">30초 · 한국어 자막</p>
          </div>
        </div>
      </div>
    </section>
  );
}
