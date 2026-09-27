import React, { useState } from 'react';
import { useKindergarten } from '../context/KindergartenContext';
import { Notice } from '../types';
import { Search, Pin, FileText, Download, X, Calendar, Eye, ArrowRight } from 'lucide-react';

export const NoticesSection: React.FC = () => {
  const { notices } = useKindergarten();
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeNotice, setActiveNotice] = useState<Notice | null>(null);

  const categories = ['전체', '공지사항', '가정통신문', '식단안내', '행사안내'];

  const filteredNotices = notices.filter((n) => {
    const matchesCategory = selectedCategory === '전체' || n.category === selectedCategory;
    const matchesSearch =
      n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="notices" className="py-20 bg-slate-50/50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
              <span className="text-blue-700 font-bold">열린 소통 마당</span>
              <span aria-hidden="true">·</span>
              <span>가정통신문 & 알림마당</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              가정과 원이 하나 되어 나누는<br />
              경산유치원 공식 알림장
            </h2>
          </div>

          {/* Search bar */}
          <div className="relative max-w-xs w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="알림장 제목 및 내용 검색..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Filter categories */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-200/70 rounded-xl max-w-fit mb-6 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`py-1.5 px-3.5 text-xs font-bold rounded-lg transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Notice List Table Card */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden divide-y divide-slate-100">
          {filteredNotices.length === 0 ? (
            <div className="p-12 text-center text-slate-400 text-xs sm:text-sm">
              검색 조건에 맞는 공지사항이 없습니다.
            </div>
          ) : (
            filteredNotices.map((notice) => (
              <div
                key={notice.id}
                onClick={() => setActiveNotice(notice)}
                className="p-5 sm:p-6 hover:bg-slate-50/80 transition-colors cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-2 text-xs">
                    {notice.pinned && (
                      <span className="flex items-center gap-1 text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        <Pin className="w-3 h-3" />
                        주요공지
                      </span>
                    )}
                    <span className="font-semibold text-blue-700">[{notice.category}]</span>
                    <span aria-hidden="true" className="text-slate-300">·</span>
                    <span className="text-slate-400 font-mono text-[11px]">{notice.date}</span>
                    <span aria-hidden="true" className="text-slate-300">·</span>
                    <span className="text-slate-400 text-[11px]">{notice.author}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 hover:text-blue-700 transition-colors leading-snug">
                    {notice.title}
                  </h3>

                  <p className="text-xs text-slate-500 line-clamp-1 max-w-2xl leading-relaxed">
                    {notice.content}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-xs text-slate-400 shrink-0">
                  {notice.attachments && notice.attachments.length > 0 && (
                    <span className="flex items-center gap-1 text-slate-500 bg-slate-100 px-2 py-1 rounded text-[11px]">
                      <FileText className="w-3.5 h-3.5 text-blue-600" />
                      <span>첨부 {notice.attachments.length}</span>
                    </span>
                  )}
                  <span className="font-mono tabular-nums text-[11px]">조회 {notice.views}</span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Notice Reading Modal */}
        {activeNotice && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl p-6 sm:p-8 animate-in fade-in duration-150">
              <div className="flex items-start justify-between pb-4 border-b border-slate-200">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-bold text-blue-700">[{activeNotice.category}]</span>
                    <span className="text-slate-400 font-mono">{activeNotice.date}</span>
                    <span className="text-slate-400">작성자: {activeNotice.author}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{activeNotice.title}</h3>
                </div>
                <button
                  onClick={() => setActiveNotice(null)}
                  className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600"
                  aria-label="닫기"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Notice Body */}
              <div className="py-6 text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">
                {activeNotice.content}
              </div>

              {/* Attachments if any */}
              {activeNotice.attachments && activeNotice.attachments.length > 0 && (
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2 mb-6">
                  <span className="text-xs font-bold text-slate-700 block">
                    첨부파일 안내
                  </span>
                  <div className="space-y-1.5">
                    {activeNotice.attachments.map((att, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-2 bg-white rounded-lg border border-slate-200 text-xs text-slate-700"
                      >
                        <div className="flex items-center gap-2 truncate">
                          <FileText className="w-4 h-4 text-blue-600 shrink-0" />
                          <span className="truncate font-medium">{att}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => alert(`'${att}' 다운로드가 시작되었습니다.`)}
                          className="flex items-center gap-1 text-blue-700 font-semibold hover:underline shrink-0"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>다운로드</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setActiveNotice(null)}
                  className="px-5 py-2.5 text-xs font-semibold bg-slate-900 text-white rounded-lg hover:bg-slate-800"
                >
                  목록으로 닫기
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
