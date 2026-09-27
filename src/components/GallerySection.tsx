import React, { useState } from 'react';
import { useKindergarten } from '../context/KindergartenContext';
import { GalleryPhoto } from '../types';
import { Camera, Eye, X, Image as ImageIcon, Sparkles, ZoomIn, Calendar, Tag } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const { gallery } = useKindergarten();
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);

  // Dynamically compute unique categories from registered gallery photos
  const dynamicCategories = [
    '전체',
    ...Array.from(new Set(gallery.map((p) => p.category).filter(Boolean))),
  ];

  const filteredPhotos =
    selectedCategory === '전체'
      ? gallery
      : gallery.filter((p) => p.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-slate-50/50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
              <span className="text-blue-700 font-bold">생생한 원생활</span>
              <span aria-hidden="true">·</span>
              <span>아이들의 행복한 순간</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              매일 새로운 배움과 즐거움이 피어나는<br />
              <span className="text-blue-700">경산유치원 포토 갤러리</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-500">
              숲체험, 미래교실 코딩, 생태 텃밭 가꾸기, 다문화 축제 등 아이들의 주도적인 놀이 순간을 담았습니다.
            </p>
          </div>

          {/* Dynamic Category Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-200/80 rounded-xl overflow-x-auto max-w-full">
            {dynamicCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`py-2 px-3.5 text-xs font-bold rounded-lg transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-white text-blue-900 shadow-sm border border-slate-200 font-extrabold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        {filteredPhotos.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center text-slate-400">
            <Camera className="w-10 h-10 mx-auto mb-3 opacity-40" />
            <p className="text-sm font-semibold">선택하신 카테고리에 등록된 사진이 없습니다.</p>
            <p className="text-xs text-slate-400 mt-1">상단 [관리자 CMS] &gt; [포토 갤러리 관리]에서 새 사진을 등록해 보세요.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setActivePhoto(photo)}
                className="group cursor-pointer rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                {/* Visual Card Media Container */}
                <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                  {photo.imageUrl ? (
                    <img
                      src={photo.imageUrl}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div
                      className={`w-full h-full bg-gradient-to-br ${photo.colorGradient} p-6 flex flex-col justify-between text-white`}
                    >
                      <div className="flex justify-between items-center relative z-10">
                        <span className="bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded text-[11px] font-medium text-white border border-white/20">
                          {photo.category}
                        </span>
                        <span className="text-xs font-mono text-white/80">{photo.date}</span>
                      </div>

                      <div className="flex items-center justify-center py-4">
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white transform group-hover:scale-110 transition-transform">
                          <Camera className="w-6 h-6" />
                        </div>
                      </div>

                      <div>
                        <span className="text-xs font-medium text-white/90 block truncate">
                          {photo.caption || photo.title}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold flex items-center gap-1.5 shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>크게 보기</span>
                    </span>
                  </div>

                  {/* Corner Badge on image */}
                  {photo.imageUrl && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-md text-[11px] font-semibold text-white">
                        {photo.category}
                      </span>
                    </div>
                  )}
                  {photo.imageUrl && (
                    <div className="absolute top-3 right-3">
                      <span className="bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-md text-[10px] font-mono text-white/90">
                        {photo.date}
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Meta & Title */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 leading-snug mb-1.5 group-hover:text-blue-700 transition-colors">
                      {photo.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {photo.description}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-700">
                    <span className="text-[11px] text-slate-400 font-normal">경산유치원 놀이 앨범</span>
                    <span className="flex items-center gap-1 group-hover:underline">
                      <span>사진 자세히 보기</span>
                      <Eye className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Lightbox Modal */}
        {activePhoto && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={() => setActivePhoto(null)}
          >
            <div
              className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200 border border-slate-200 max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Media View */}
              <div className="relative bg-slate-950 flex items-center justify-center max-h-[55vh] overflow-hidden">
                {activePhoto.imageUrl ? (
                  <img
                    src={activePhoto.imageUrl}
                    alt={activePhoto.title}
                    className="max-h-[55vh] w-auto object-contain mx-auto"
                  />
                ) : (
                  <div
                    className={`w-full py-20 bg-gradient-to-br ${activePhoto.colorGradient} text-white flex flex-col items-center justify-center p-8`}
                  >
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-4">
                      <Camera className="w-8 h-8" />
                    </div>
                    <span className="text-sm font-semibold text-white/90">{activePhoto.caption}</span>
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => setActivePhoto(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition-colors"
                  aria-label="닫기"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Information Panel */}
              <div className="p-6 sm:p-7 overflow-y-auto space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-800 border border-blue-200 px-3 py-1 rounded-md text-xs font-bold">
                      <Tag className="w-3 h-3" />
                      <span>{activePhoto.category}</span>
                    </span>
                    <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      <span>{activePhoto.date}</span>
                    </span>
                  </div>
                  <span className="text-xs text-slate-400">경산유치원 공식 갤러리</span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                    {activePhoto.title}
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                    {activePhoto.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400">※ 관리자 CMS에서 사진 및 설명을 언제든지 수정하실 수 있습니다.</span>
                  <button
                    type="button"
                    onClick={() => setActivePhoto(null)}
                    className="px-5 py-2.5 text-xs font-bold bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors shadow-xs"
                  >
                    확인 및 닫기
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
