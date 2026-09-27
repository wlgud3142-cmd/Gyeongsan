import React from 'react';
import { useKindergarten } from '../context/KindergartenContext';
import { getAccentStyles } from '../utils/themeHelper';
import { ArrowRight, PhoneCall, ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const { siteInfo, themeConfig } = useKindergarten();
  const accent = getAccentStyles(themeConfig.accentColor);

  return (
    <section id="hero" className="relative pt-10 pb-16 md:pt-14 md:pb-24 overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white">
      {/* Subtle architectural background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#1e3a8a 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Proposition & CTA (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            {/* Unboxed Metadata Trust Bar */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              <span className="text-blue-700 font-extrabold bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                2027학년도 공립 단설
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-700 font-bold">아이 중심·놀이 중심 교육</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-500 font-mono">총 6학급 · 정원 120명</span>
            </div>

            {/* Slogan Pill */}
            <div className="text-xs font-semibold text-blue-800 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>Small Steps, Big World! | 오늘의 놀이가 내일의 더 큰 세상을 만듭니다</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-slate-900 tracking-tight leading-[1.18] [text-wrap:balance]">
              {siteInfo.heroHeadCopy}
            </h1>

            {/* Sub Copy */}
            <p className="text-base sm:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl [text-wrap:balance]">
              {siteInfo.heroSubCopy}
            </p>

            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xl">
              {siteInfo.tagline} 국가 임용고시 선발 우수한 정규 교사진과 정규 보건교사가 상주하며,
              영남대 숲체험·미래교실·자·신·감 특색놀이·안심 돌봄교실(08:00~19:00)을 내실 있게 운영합니다.
            </p>

            {/* Quick trust metrics row */}
            <div className="grid grid-cols-3 gap-4 pt-2 border-y border-slate-200/80 py-4 max-w-xl">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-700 tabular-nums">
                  3<span className="text-sm font-medium text-slate-500 ml-0.5">가지</span>
                </div>
                <div className="text-xs text-slate-600 mt-0.5 font-semibold">자·신·감 특색놀이</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums">
                  6<span className="text-sm font-medium text-slate-500 ml-0.5">학급</span>
                </div>
                <div className="text-xs text-slate-500 mt-0.5">정원 120명 (만 3~5세)</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums">
                  2<span className="text-sm font-medium text-slate-500 ml-0.5">대</span>
                </div>
                <div className="text-xs text-slate-500 mt-0.5">대형·중형 안심 통학차량</div>
              </div>
            </div>

            {/* Dual CTA Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#curriculum"
                className={`px-6 py-3.5 text-xs sm:text-sm font-bold text-white ${accent.bgPrimary} ${accent.bgPrimaryHover} rounded-xl shadow-md shadow-blue-900/10 transition-all transform hover:-translate-y-0.5 flex items-center gap-2 whitespace-nowrap`}
              >
                <span>교육과정 둘러보기</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`tel:${siteInfo.phone}`}
                className="px-5 py-3.5 text-xs sm:text-sm font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-xl shadow-xs transition-all flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-emerald-600" />
                <span>교무실 문의: {siteInfo.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Card (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md bg-white rounded-3xl p-6 sm:p-7 shadow-xl border border-slate-200">
              {/* Badge Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-extrabold text-sm">
                    경
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block leading-tight">
                      공립 단설 경산유치원
                    </span>
                    <span className="text-[10px] text-slate-400">경상북도교육청 인가 단독 교육기관</span>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  공식 홈페이지
                </span>
              </div>

              {/* Core summary list */}
              <div className="space-y-3.5">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-slate-900">내실 있는 공교육 과정</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      국공립 유아학비 지원 및 풍성한 체험·특색놀이 교육환경
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-slate-900">정규 교사진 & 보건교사 상주</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      국가 임용고시 합격 정규 교사진 및 간호사 면허 정규 보건교사 1:1 케어
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-slate-900">영남대 숲놀이 & 3층 미래교실</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      사계절 숲체험 활동, 코딩로봇, 크로마키 가상놀이, 전통 다도 및 방송댄스
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Call */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500">교무실 입학상담</span>
                <a
                  href={`tel:${siteInfo.phone}`}
                  className="font-bold text-blue-700 hover:text-blue-900 font-mono"
                >
                  {siteInfo.phone} &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
