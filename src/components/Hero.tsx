import React from 'react';
import { useKindergarten } from '../context/KindergartenContext';
import { getAccentStyles } from '../utils/themeHelper';
import { ArrowRight, Sparkles, PhoneCall, QrCode, ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const { siteInfo, themeConfig, setIsAiModalOpen } = useKindergarten();
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
                2026학년도 공립 단설
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-700 font-bold">학부모 부담금 0원</span>
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
              {siteInfo.tagline} 국가 임용고시 합격 정규 교사진과 정규 보건교사가 상주하며,
              영남대 숲체험·미래교실·특성화·안심 돌봄교실(08:00~19:00)을 전액 지원으로 운영합니다.
            </p>

            {/* Quick trust metrics row */}
            <div className="grid grid-cols-3 gap-4 pt-2 border-y border-slate-200/80 py-4 max-w-xl">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-700 tabular-nums">
                  0<span className="text-sm font-medium text-slate-500 ml-0.5">원</span>
                </div>
                <div className="text-xs text-slate-600 mt-0.5 font-semibold">학부모 부담금 전액 지원</div>
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
                <div className="text-xs text-slate-500 mt-0.5">대형·중형 통학버스 운행</div>
              </div>
            </div>

            {/* Dual CTA Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#admissions"
                className={`px-6 py-3.5 text-xs sm:text-sm font-bold text-white ${accent.bgPrimary} ${accent.bgPrimaryHover} rounded-xl shadow-md shadow-blue-900/10 transition-all transform hover:-translate-y-0.5 flex items-center gap-2 whitespace-nowrap`}
              >
                <span>2026 원서접수 & 상담신청</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => setIsAiModalOpen(true)}
                className="px-5 py-3.5 text-xs sm:text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-sm transition-all flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>24시간 AI 입학상담실</span>
              </button>

              <a
                href={`tel:${siteInfo.phone}`}
                className="px-4 py-3.5 text-xs sm:text-sm font-bold text-blue-700 hover:text-blue-900 transition-colors flex items-center gap-1.5"
              >
                <PhoneCall className="w-4 h-4 text-blue-600" />
                <span>{siteInfo.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Poster Card & Intro (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-white border border-slate-200/90 shadow-xl overflow-hidden p-6 sm:p-7">
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <span className="text-xs font-extrabold text-blue-700 tracking-wide uppercase">
                    PUBLIC KINDERGARTEN
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">
                    2026 공립 단설 경산유치원
                  </h3>
                </div>
                <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>공립 단설</span>
                </div>
              </div>

              {/* Graphic Banner */}
              <div className="my-5 rounded-xl overflow-hidden relative aspect-[16/10] bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 text-white p-6 flex flex-col justify-between shadow-inner">
                <div className="relative z-10 flex justify-between items-start">
                  <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded text-[11px] font-semibold text-blue-200 border border-white/15">
                    교육비 전액 무상 지원
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-slate-300 font-mono">
                    <QrCode className="w-3.5 h-3.5 text-blue-300" />
                    <span>소개영상 QR</span>
                  </div>
                </div>

                <div className="relative z-10 space-y-1">
                  <span className="text-xs text-blue-300 font-bold tracking-wide">
                    함께 존중하며 세계를 꿈꾸는 유치원
                  </span>
                  <h4 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
                    아이의 가능성이<br />세상의 가능성으로
                  </h4>
                </div>

                <div className="relative z-10 pt-2 flex items-center justify-between border-t border-white/10 text-xs text-slate-300">
                  <span>정규 보건교사 상주</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    2026 환경개선 선정
                  </span>
                </div>
              </div>

              {/* Highlights List (4 Core Strengths from official poster) */}
              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                    1
                  </div>
                  <p className="leading-relaxed">
                    <strong className="text-slate-900 font-semibold">믿고 맡길 수 있는 공립:</strong> 임용고시 선발 우수 교사진 & 연중 안심 돌봄운영
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                    2
                  </div>
                  <p className="leading-relaxed">
                    <strong className="text-slate-900 font-semibold">놀이하며 배우는 교육과정:</strong> 다양한 체험 & 체육·코딩·방송댄스 & 글로벌 교육
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                    3
                  </div>
                  <p className="leading-relaxed">
                    <strong className="text-slate-900 font-semibold">교육비 부담 ZERO:</strong> 학부모 부담금 일체 없음 & 2대 통학차량 무료 운행
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                    4
                  </div>
                  <p className="leading-relaxed">
                    <strong className="text-slate-900 font-semibold">안전·최첨단 교육환경:</strong> 보건교사 상주 & 영양사 직영 급식 & 2026 환경개선 선정
                  </p>
                </div>
              </div>

              {/* Quick Contact Footer */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-700">
                  입학 및 교육상담 문의
                </span>
                <a
                  href={`tel:${siteInfo.phone}`}
                  className="text-xs font-extrabold text-blue-700 hover:text-blue-900 font-mono"
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
