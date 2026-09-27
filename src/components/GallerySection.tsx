import React, { useState } from 'react';
import { useKindergarten } from '../context/KindergartenContext';
import { GalleryPhoto } from '../types';
import { Camera, Eye, X, Image as ImageIcon, Sparkles } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const { gallery } = useKindergarten();
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);

  const categories = ['전체', '숲생태체험', '몬테소리교실', '창의아틀리에', '원내행사'];

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
              경산유치원 포토 갤러리
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-200/70 rounded-xl overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`py-1.5 px-3 text-xs font-bold rounded-lg transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setActivePhoto(photo)}
              className="group cursor-pointer rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 flex flex-col"
            >
              {/* Visual Card Media Container */}
              <div className={`relative aspect-[4/3] bg-gradient-to-br ${photo.colorGradient} p-6 flex flex-col justify-between text-white overflow-hidden`}>
                {/* Subtle visual texture */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />

                <div className="relative z-10 flex justify-between items-center">
                  <span className="bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded text-[11px] font-medium text-white border border-white/20">
                    {photo.category}
                  </span>
                  <span className="text-xs font-mono text-white/80">{photo.date}</span>
                </div>

                <div className="relative z-10 flex items-center justify-center py-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white transform group-hover:scale-110 transition-transform">
                    <Camera className="w-6 h-6" />
                  </div>
                </div>

                <div className="relative z-10">
                  <span className="text-xs font-medium text-white/90 block truncate">
                    {photo.caption}
                  </span>
                </div>
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

                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-blue-700">
                  <span>사진 자세히 보기</span>
                  <Eye className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activePhoto && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl animate-in fade-in duration-200">
              <div className={`p-8 bg-gradient-to-br ${activePhoto.colorGradient} text-white flex flex-col justify-between aspect-[16/9] relative`}>
                <button
                  onClick={() => setActivePhoto(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center text-white"
                  aria-label="닫기"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="inline-block bg-white/20 px-3 py-1 rounded text-xs font-medium max-w-fit">
                  {activePhoto.category}
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-mono text-white/80">{activePhoto.date}</span>
                  <h3 className="text-2xl font-bold text-white">{activePhoto.title}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm text-slate-700 leading-relaxed">
                  {activePhoto.description}
                </p>
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400">경산유치원 공식 원생활 앨범</span>
                  <button
                    onClick={() => setActivePhoto(null)}
                    className="px-4 py-2 text-xs font-semibold bg-slate-900 text-white rounded-lg hover:bg-slate-800"
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
