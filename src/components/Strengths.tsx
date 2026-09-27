import React, { useState } from 'react';
import { useKindergarten } from '../context/KindergartenContext';
import { getAccentStyles } from '../utils/themeHelper';
import { initialSpecialActivities } from '../data/initialData';
import {
  Building2,
  Brain,
  Sparkles,
  ShieldCheck,
  Sprout,
  Sun,
  Globe,
  Trees,
  Palette,
  Coffee,
  Cpu,
  Activity,
  ChevronRight,
  Check,
  Heart,
  Phone,
} from 'lucide-react';

export const Strengths: React.FC = () => {
  const { strengths, themeConfig, siteInfo } = useKindergarten();
  const accent = getAccentStyles(themeConfig.accentColor);
  const [activeStrengthId, setActiveStrengthId] = useState<string>(
    strengths[0]?.id || 'public-trust'
  );

  const getPillarIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Building2 className="w-6 h-6" />;
      case 1:
        return <Brain className="w-6 h-6" />;
      case 2:
        return <Sparkles className="w-6 h-6" />;
      case 3:
      default:
        return <ShieldCheck className="w-6 h-6" />;
    }
  };

  const getActivityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sprout':
        return <Sprout className="w-5 h-5 text-emerald-600" />;
      case 'Sun':
        return <Sun className="w-5 h-5 text-amber-500" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-sky-600" />;
      case 'Trees':
        return <Trees className="w-5 h-5 text-emerald-700" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-purple-600" />;
      case 'Coffee':
        return <Coffee className="w-5 h-5 text-amber-700" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-indigo-600" />;
      case 'Activity':
      default:
        return <Activity className="w-5 h-5 text-rose-500" />;
    }
  };

  return (
    <section id="strengths" className="py-20 bg-slate-50/60 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Poster Top Callouts Header */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-pink-700 text-xs font-bold shadow-sm">
            <Heart className="w-3.5 h-3.5 fill-pink-500 text-pink-500" />
            <span>경산유치원은요! 믿음직한 공립 교육환경 속에서 아이의 놀이와 배움을 응원합니다.</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold shadow-sm">
            <Globe className="w-3.5 h-3.5 text-blue-600" />
            <span>이런 점이 특별해요! 다양한 체험과 글로벌 교육으로 더 넓은 세상을 만납니다.</span>
          </div>
        </div>

        {/* Section Title */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight [text-wrap:balance]">
            경산유치원에서 시작하는 특별한 하루<br />
            <span className="text-blue-700">믿고 맡기는 공립, 세계를 향해 자라는 아이들</span>
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed [text-wrap:balance]">
            임용고시 선발 우수 교사진의 정성 어린 지도, 풍성한 놀이와 특성화 교육과정,
            학부모 부담금 ZERO(0원), 그리고 보건교사와 영양사가 상주하는 가장 안전한 교육환경을 제공합니다.
          </p>
        </div>

        {/* 4 Pillars Grid (01 to 04 exactly matching the poster) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((item, index) => {
            const isSelected = activeStrengthId === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setActiveStrengthId(item.id)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-200 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xl -translate-y-1'
                    : 'bg-white hover:bg-slate-50 text-slate-900 border-slate-200/90 hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className={`text-xs font-mono font-bold tracking-wider ${
                        isSelected ? 'text-blue-400' : 'text-slate-400'
                      }`}
                    >
                      0{index + 1}
                    </span>
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                        isSelected
                          ? 'bg-white/10 text-white'
                          : 'bg-blue-50 text-blue-700 shadow-sm border border-slate-200/60'
                      }`}
                    >
                      {getPillarIcon(index)}
                    </div>
                  </div>

                  <span
                    className={`text-[11px] font-semibold tracking-wide uppercase block mb-1 ${
                      isSelected ? 'text-blue-300' : 'text-blue-700'
                    }`}
                  >
                    {item.badge}
                  </span>
                  <h3 className="text-lg font-bold tracking-tight mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p
                    className={`text-xs leading-relaxed mb-4 line-clamp-3 ${
                      isSelected ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {item.subtitle}
                  </p>
                </div>

                <div
                  className={`pt-3 border-t text-xs font-semibold flex items-center justify-between ${
                    isSelected ? 'border-white/15 text-blue-300' : 'border-slate-100 text-slate-500'
                  }`}
                >
                  <span>상세 내용 보기</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Pillar Detailed Inspection Drawer */}
        {(() => {
          const selected = strengths.find((s) => s.id === activeStrengthId) || strengths[0];
          if (!selected) return null;

          return (
            <div className="mt-8 rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider">
                    <span>공식 특장점 세부 안내</span>
                    <span aria-hidden="true">·</span>
                    <span>{selected.badge}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {selected.title} : {selected.subtitle}
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {selected.description}
                  </p>

                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selected.points.map((pt, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200/70"
                      >
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 bg-slate-50 p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                      공립 단설 무상 혜택
                    </span>
                    <div className="text-2xl font-extrabold text-blue-700">
                      학부모 부담금 0원
                    </div>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      입학금, 수업료, 급·간식비, 체험학습비, 방과후 특성화비 전액 지원으로 교육비 부담이 일체 없습니다.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                    <span className="text-slate-600">입학상담 직통</span>
                    <a
                      href={`tel:${siteInfo.phone}`}
                      className="font-bold text-blue-700 hover:text-blue-900 font-mono flex items-center gap-1"
                    >
                      <Phone className="w-3 h-3" />
                      <span>{siteInfo.phone} &rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}

        {/* Special Activities (포스터 하단 8대 특별한 체험 활동) Grid */}
        <div className="mt-18 pt-16 border-t border-slate-200">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">
              다양한 경험이 아이의 세상을 넓혀요!
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">
              놀이는 세상을 만나는 가장 멋진 방법! ♥
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              자연 생태, 친환경 공간, 글로벌 영어, 숲체험, 전담교사 특별체험, 전통 다도, 코딩로봇, 방송댄스까지 경산 어린이들의 8가지 특별한 하루입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {initialSpecialActivities.map((act) => (
              <div
                key={act.id}
                className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                      {getActivityIcon(act.iconName)}
                    </div>
                    <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                      {act.badge}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1.5">{act.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{act.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Slogan Banner at bottom */}
          <div className="mt-10 rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-800 text-white p-5 text-center shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <span className="text-xs text-blue-200 font-semibold block">경산유치원의 약속</span>
              <p className="text-base font-bold">함께 존중하며 세계를 꿈꾸는 경산유치원</p>
            </div>
            <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/15 text-xs font-bold backdrop-blur-sm border border-white/20">
              <Heart className="w-4 h-4 fill-pink-300 text-pink-300" />
              <span>작은 오늘이 큰 꿈이 되는 곳 · 경산유치원 ♥</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
