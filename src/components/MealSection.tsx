import React, { useState } from 'react';
import { useKindergarten } from '../context/KindergartenContext';
import { getAccentStyles } from '../utils/themeHelper';
import { Apple, ShieldCheck, Heart, Info, Calendar, Sparkles } from 'lucide-react';

export const MealSection: React.FC = () => {
  const { meals, themeConfig } = useKindergarten();
  const accent = getAccentStyles(themeConfig.accentColor);
  const [selectedMealIndex, setSelectedMealIndex] = useState<number>(0);

  const currentMeal = meals[selectedMealIndex] || meals[0];

  return (
    <section id="meals" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
              <span className="text-blue-700 font-bold">100% 친환경 안심 급식</span>
              <span aria-hidden="true">·</span>
              <span>상주 전문 영양사 당일 직조리</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              성장기 아이의 평생 식습관을 만드는<br />
              정성 가득 영양 안심 식단
            </h2>
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-500 bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-200">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>경산 친환경 로컬푸드 제휴 / 식품알레르기 1:1 케어</span>
          </div>
        </div>

        {/* Day-of-week Selector Tabs */}
        <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-xl overflow-x-auto max-w-xl mb-8">
          {meals.map((meal, idx) => (
            <button
              key={meal.id}
              onClick={() => setSelectedMealIndex(idx)}
              className={`flex-1 py-2 px-3 text-xs font-bold rounded-lg transition-all whitespace-nowrap ${
                selectedMealIndex === idx
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>{meal.dayOfWeek}</span>
              <span className="hidden sm:inline text-[11px] font-normal text-slate-400 ml-1">
                ({meal.date.slice(5)})
              </span>
            </button>
          ))}
        </div>

        {/* Meal Content Card */}
        {currentMeal && (
          <div className="rounded-2xl border border-slate-200/90 bg-slate-50/50 p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Visual Kids Stainless Tray Simulation (7 cols) */}
              <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-slate-900">{currentMeal.dayOfWeek} 추천 점심</span>
                    <span className="text-xs text-slate-400 font-mono">({currentMeal.date})</span>
                  </div>
                  <div className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/60">
                    친환경 인증 급식
                  </div>
                </div>

                {/* Simulated Kids Stainless Meal Tray Layout */}
                <div className="my-6 p-4 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 border-2 border-slate-300 shadow-inner">
                  {/* Top 3 small compartments for side dishes & dessert */}
                  <div className="grid grid-cols-3 gap-3 mb-3">
                    <div className="bg-white/90 rounded-xl p-3 text-center border border-slate-300 shadow-sm flex flex-col justify-center min-h-[75px]">
                      <span className="text-[10px] text-slate-400 font-semibold mb-0.5">단백질 메인</span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                        {currentMeal.menuList[2] || '수제 반찬'}
                      </span>
                    </div>
                    <div className="bg-white/90 rounded-xl p-3 text-center border border-slate-300 shadow-sm flex flex-col justify-center min-h-[75px]">
                      <span className="text-[10px] text-slate-400 font-semibold mb-0.5">제철 나물채소</span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                        {currentMeal.menuList[3] || '비타민 채소'}
                      </span>
                    </div>
                    <div className="bg-white/90 rounded-xl p-3 text-center border border-slate-300 shadow-sm flex flex-col justify-center min-h-[75px]">
                      <span className="text-[10px] text-slate-400 font-semibold mb-0.5">안심 김치/디저트</span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                        {currentMeal.menuList[5] || currentMeal.menuList[4]}
                      </span>
                    </div>
                  </div>

                  {/* Bottom 2 large compartments for Rice & Soup */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/90 rounded-xl p-4 text-center border border-slate-300 shadow-sm flex flex-col justify-center min-h-[90px]">
                      <span className="text-[10px] text-slate-400 font-semibold mb-0.5">친환경 밥</span>
                      <span className="text-sm sm:text-base font-bold text-slate-900">
                        {currentMeal.menuList[0]}
                      </span>
                    </div>
                    <div className="bg-white/90 rounded-xl p-4 text-center border border-slate-300 shadow-sm flex flex-col justify-center min-h-[90px]">
                      <span className="text-[10px] text-slate-400 font-semibold mb-0.5">영양 맑은 국</span>
                      <span className="text-sm sm:text-base font-bold text-slate-900">
                        {currentMeal.menuList[1]}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Calories and Full Menu List */}
                <div className="flex flex-wrap items-center justify-between pt-2 text-xs text-slate-600 gap-2">
                  <div className="flex items-center gap-1.5 font-medium">
                    <span className="font-semibold text-slate-900">제공 메뉴:</span>
                    <span>{currentMeal.menuList.join(', ')}</span>
                  </div>
                  <div className="font-mono font-bold text-slate-900 bg-slate-100 px-2.5 py-1 rounded">
                    열량: {currentMeal.calories}
                  </div>
                </div>
              </div>

              {/* Right Column: Origin & Allergen & Nutritionist Note (5 cols) */}
              <div className="lg:col-span-5 space-y-4">
                {/* Chef Note */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-700 mb-2">
                    <Heart className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <span>영양교사의 따뜻한 식단 한마디</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                    "{currentMeal.chefNote}"
                  </p>
                </div>

                {/* Origin Info */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                  <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <Apple className="w-4 h-4 text-blue-600" />
                    <span>주요 식재료 원산지 정보</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {currentMeal.originInfo}
                  </p>
                </div>

                {/* Allergens Notice */}
                <div className="bg-amber-50/70 p-5 rounded-2xl border border-amber-200/70 space-y-2">
                  <div className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                    <Info className="w-4 h-4 text-amber-700" />
                    <span>식품 알레르기 유발 물질 안내</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {currentMeal.allergens.map((alg, idx) => (
                      <span key={idx} className="bg-white text-amber-900 text-[11px] font-semibold px-2 py-0.5 rounded border border-amber-200">
                        {alg}
                      </span>
                    ))}
                  </div>
                  <p className="text-[11px] text-amber-800 leading-normal pt-1">
                    * 알레르기가 등록된 원아는 해당 메뉴 제외 및 안전 대체식(계란·우유·갑각류 등)을 전담 조리하여 제공합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
