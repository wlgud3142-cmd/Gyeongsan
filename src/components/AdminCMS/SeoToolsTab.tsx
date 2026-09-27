import React, { useState } from 'react';
import { useKindergarten } from '../../context/KindergartenContext';
import { Globe, Search, Share2, Sparkles, Check, Copy, ExternalLink, Code } from 'lucide-react';

export const SeoToolsTab: React.FC = () => {
  const { seoConfig, updateSeoConfig, siteInfo } = useKindergarten();
  const [formData, setFormData] = useState(seoConfig);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [aiSuggestions, setAiSuggestions] = useState<any>(null);
  const [copiedRobots, setCopiedRobots] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateSeoConfig(formData);
  };

  const handleAiOptimize = async () => {
    setIsOptimizing(true);
    setAiSuggestions(null);
    try {
      const res = await fetch('/api/gemini/seo-optimize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          currentTitle: formData.metaTitle,
          currentDesc: formData.metaDescription,
          focusKeyword: formData.keywords,
        }),
      });

      const data = await res.json();
      setAiSuggestions(data);
    } catch (err: any) {
      alert('AI SEO 최적화 도우미 호출에 실패했습니다: ' + err.message);
    } finally {
      setIsOptimizing(false);
    }
  };

  const applyAiSuggestion = () => {
    if (!aiSuggestions) return;
    const updated = {
      ...formData,
      metaTitle: aiSuggestions.optimizedTitle || formData.metaTitle,
      metaDescription: aiSuggestions.optimizedDescription || formData.metaDescription,
      kakaoShareTitle: aiSuggestions.optimizedTitle || formData.kakaoShareTitle,
      kakaoShareDesc: aiSuggestions.snsShareHook || formData.kakaoShareDesc,
      keywords: aiSuggestions.keywords ? aiSuggestions.keywords.join(', ') : formData.keywords,
    };
    setFormData(updated);
    updateSeoConfig(updated);
    setAiSuggestions(null);
  };

  const robotsTxtContent = `User-agent: *
Allow: /
Sitemap: ${formData.siteUrl}/sitemap.xml`;

  const sitemapXmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${formData.siteUrl}/</loc>
    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${formData.siteUrl}/#admissions</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${formData.siteUrl}/#meals</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;

  return (
    <div className="space-y-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-200">
        <div>
          <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">
            검색엔진 & SNS 최적화
          </span>
          <h3 className="text-xl font-bold text-slate-900 mt-1">
            SEO 메타 태그 & 소셜 공유 카드 도구
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            네이버·구글 검색 결과 노출 순위 향상 및 카카오톡 공유 시 매력적인 썸네일 카드를 설정합니다.
          </p>
        </div>

        <button
          onClick={handleAiOptimize}
          disabled={isOptimizing}
          className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 transition-all shadow-sm self-start sm:self-auto"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>{isOptimizing ? 'Gemini 분석 중...' : 'Gemini AI 검색엔진 최적화 제안'}</span>
        </button>
      </div>

      {/* AI Suggestion Banner */}
      {aiSuggestions && (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-blue-900 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-blue-600" />
              Gemini AI 검색엔진 최적화(SEO) 맞춤 분석 결과
            </span>
            <button
              onClick={() => setAiSuggestions(null)}
              className="text-xs text-slate-400 hover:text-slate-600"
            >
              닫기
            </button>
          </div>

          <div className="space-y-2 text-xs">
            <div>
              <span className="font-semibold text-slate-700">추천 타이틀:</span>
              <p className="text-sm font-bold text-slate-900 mt-0.5 bg-white p-2.5 rounded-lg border border-blue-100">
                {aiSuggestions.optimizedTitle}
              </p>
            </div>
            <div>
              <span className="font-semibold text-slate-700">추천 메타 설명문:</span>
              <p className="text-xs text-slate-700 mt-0.5 bg-white p-2.5 rounded-lg border border-blue-100 leading-relaxed">
                {aiSuggestions.optimizedDescription}
              </p>
            </div>
            {aiSuggestions.snsShareHook && (
              <div>
                <span className="font-semibold text-slate-700">카카오톡 SNS 공유 카피:</span>
                <p className="text-xs text-indigo-900 font-medium mt-0.5 bg-white p-2 rounded-lg border border-blue-100">
                  {aiSuggestions.snsShareHook}
                </p>
              </div>
            )}
          </div>

          <div className="pt-2 flex justify-end">
            <button
              onClick={applyAiSuggestion}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg shadow-sm flex items-center gap-1.5"
            >
              <Check className="w-4 h-4" />
              <span>추천 설정 1-클릭 일괄 적용하기</span>
            </button>
          </div>
        </div>
      )}

      {/* SEO Form & Live Previews Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Form (7 cols) */}
        <form onSubmit={handleSave} className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm space-y-5">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Globe className="w-4 h-4 text-blue-600" />
              <span>메타 데이터(Meta Tags) 설정</span>
            </h4>
            <button
              type="submit"
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-colors"
            >
              설정 저장
            </button>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-bold text-slate-700">
                SEO 메타 타이틀 (Title Tag)
              </label>
              <span className="text-[11px] font-mono text-slate-400">
                {formData.metaTitle.length}자 (30~45자 권장)
              </span>
            </div>
            <input
              type="text"
              value={formData.metaTitle}
              onChange={(e) => setFormData({ ...formData, metaTitle: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-bold text-slate-900"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-bold text-slate-700">
                SEO 메타 디스크립션 (Description Tag)
              </label>
              <span className="text-[11px] font-mono text-slate-400">
                {formData.metaDescription.length}자 (80~120자 권장)
              </span>
            </div>
            <textarea
              rows={3}
              value={formData.metaDescription}
              onChange={(e) => setFormData({ ...formData, metaDescription: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm leading-relaxed"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              타겟 검색 키워드 (Keywords, 쉼표 구분)
            </label>
            <input
              type="text"
              value={formData.keywords}
              onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm"
            />
          </div>

          <div className="pt-2 border-t border-slate-100">
            <h5 className="text-xs font-bold text-slate-700 mb-3 flex items-center gap-1.5">
              <Share2 className="w-3.5 h-3.5 text-blue-600" />
              <span>카카오톡 / 인스타그램 공유 전용 문구</span>
            </h5>
            <div className="space-y-3">
              <div>
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                  카카오톡 공유 카드 타이틀
                </label>
                <input
                  type="text"
                  value={formData.kakaoShareTitle}
                  onChange={(e) => setFormData({ ...formData, kakaoShareTitle: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                  카카오톡 공유 카드 본문 요약
                </label>
                <textarea
                  rows={2}
                  value={formData.kakaoShareDesc}
                  onChange={(e) => setFormData({ ...formData, kakaoShareDesc: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                />
              </div>
            </div>
          </div>
        </form>

        {/* Right Column: Visual SNS & Search Previews (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* KakaoTalk Share Card Preview */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                카카오톡 링크 공유 시 미리보기
              </span>
              <span className="text-[10px] text-slate-400">학부모 단톡방 시뮬레이션</span>
            </div>

            {/* Kakao Bubble */}
            <div className="bg-[#FFE812]/20 p-4 rounded-2xl border border-[#FFE812]/40">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200/80">
                {/* Image mockup */}
                <div className="aspect-[16/9] bg-gradient-to-br from-blue-900 to-indigo-950 p-4 flex flex-col justify-between text-white relative">
                  <div className="flex justify-between items-center text-[10px] text-blue-200">
                    <span>경산유치원 공식</span>
                    <span>2026 원아모집</span>
                  </div>
                  <div className="font-bold text-sm leading-snug">
                    성암산 2,000평 자연 숲놀이터<br />& 정통 몬테소리 교구 교육
                  </div>
                </div>

                <div className="p-3.5 space-y-1">
                  <h6 className="text-xs font-bold text-slate-900 line-clamp-1">
                    {formData.kakaoShareTitle || formData.metaTitle}
                  </h6>
                  <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                    {formData.kakaoShareDesc || formData.metaDescription}
                  </p>
                  <span className="text-[10px] text-slate-400 block pt-1 font-mono">
                    gyeongsan-kindergarten.edu.kr
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Naver Search Result Preview */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-2">
            <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              네이버 검색 결과 노출 시뮬레이션
            </span>
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/70 space-y-1">
              <span className="text-[11px] text-emerald-700 font-mono block">
                https://gyeongsan-kindergarten.edu.kr &gt; view
              </span>
              <h6 className="text-sm font-bold text-[#003399] hover:underline cursor-pointer line-clamp-1">
                {formData.metaTitle}
              </h6>
              <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                {formData.metaDescription}
              </p>
            </div>
          </div>

          {/* Robots.txt & Sitemap helper */}
          <div className="bg-slate-900 text-white rounded-2xl p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold flex items-center gap-1.5">
                <Code className="w-4 h-4 text-blue-400" />
                robots.txt & sitemap.xml
              </span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(robotsTxtContent + '\n\n' + sitemapXmlContent);
                  setCopiedRobots(true);
                  setTimeout(() => setCopiedRobots(false), 2000);
                }}
                className="text-[11px] text-blue-300 hover:text-white flex items-center gap-1"
              >
                <Copy className="w-3 h-3" />
                <span>{copiedRobots ? '복사완료!' : '코드 복사'}</span>
              </button>
            </div>
            <pre className="text-[10px] font-mono text-slate-300 bg-slate-950 p-3 rounded-lg overflow-x-auto">
              {robotsTxtContent}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};
