import React, { useState } from 'react';
import { useKindergarten } from '../../context/KindergartenContext';
import { MealItem } from '../../types';
import { Utensils, Plus, Trash2, Edit3, Sparkles, Check, Apple } from 'lucide-react';

export const MealManagerTab: React.FC = () => {
  const { meals, updateMeal, addMeal, deleteMeal } = useKindergarten();
  const [selectedMealId, setSelectedMealId] = useState<string>(meals[0]?.id || '');
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiSparkResult, setAiSparkResult] = useState<string | null>(null);

  const activeMeal = meals.find((m) => m.id === selectedMealId) || meals[0];

  const handleAiIdea = async () => {
    setIsAiLoading(true);
    setAiSparkResult(null);
    try {
      const res = await fetch('/api/gemini/activity-idea', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          season: '가을',
          ageGroup: '만 3~5세 전체',
          theme: '제철 유기농 식재료와 성암산 숲체험 연계',
        }),
      });
      const data = await res.json();
      setAiSparkResult(data.idea || '아이디어를 생성하지 못했습니다.');
    } catch {
      setAiSparkResult('AI 추천 아이디어 생성에 실패했습니다.');
    } finally {
      setIsAiLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-200">
        <div>
          <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">
            영양 & 조리 관리
          </span>
          <h3 className="text-xl font-bold text-slate-900 mt-1">
            친환경 안심 식단표 & 알레르기 관리
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            요일별 점심 및 간식 메뉴, 원산지 정보, 알레르기 유발 식품을 실시간으로 관리합니다.
          </p>
        </div>

        <button
          onClick={handleAiIdea}
          disabled={isAiLoading}
          className="px-3.5 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 transition-all self-start sm:self-auto"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>{isAiLoading ? 'AI 영양 아이디어 구상 중...' : 'AI 누리과정 연계 식단 아이디어'}</span>
        </button>
      </div>

      {/* AI Idea Output if generated */}
      {aiSparkResult && (
        <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-2 animate-in fade-in duration-200">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-900 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              Gemini AI 식단 연계 교육활동 추천안
            </span>
            <button
              onClick={() => setAiSparkResult(null)}
              className="text-xs text-emerald-700 font-semibold hover:underline"
            >
              닫기
            </button>
          </div>
          <div className="text-xs text-emerald-950 leading-relaxed whitespace-pre-wrap bg-white/70 p-4 rounded-xl border border-emerald-200/60">
            {aiSparkResult}
          </div>
        </div>
      )}

      {/* Day Selector */}
      <div className="flex items-center gap-2 p-1 bg-slate-100 rounded-xl overflow-x-auto">
        {meals.map((m) => (
          <button
            key={m.id}
            onClick={() => setSelectedMealId(m.id)}
            className={`py-2 px-4 text-xs font-bold rounded-lg transition-all whitespace-nowrap ${
              m.id === selectedMealId
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {m.dayOfWeek} 식단 ({m.date})
          </button>
        ))}
      </div>

      {/* Active Meal Form */}
      {activeMeal && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <h4 className="text-sm font-bold text-slate-900">
              {activeMeal.dayOfWeek} 메뉴 상세 편집
            </h4>
            <span className="text-xs text-slate-400 font-mono">식단 ID: {activeMeal.id}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                제공 일자 (YYYY-MM-DD)
              </label>
              <input
                type="text"
                value={activeMeal.date}
                onChange={(e) => updateMeal(activeMeal.id, { date: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                총 칼로리 (열량)
              </label>
              <input
                type="text"
                value={activeMeal.calories}
                onChange={(e) => updateMeal(activeMeal.id, { calories: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-700 mb-1">
                점심 메뉴 목록 (쉼표로 구분: 밥, 국, 메인반찬, 채소반찬, 김치/과일)
              </label>
              <input
                type="text"
                value={activeMeal.menuList.join(', ')}
                onChange={(e) =>
                  updateMeal(activeMeal.id, {
                    menuList: e.target.value.split(',').map((s) => s.trim()).filter(Boolean),
                  })
                }
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-bold text-slate-900"
              />
              <span className="text-[11px] text-slate-400 mt-1 block">
                순서대로 아이들 식판(밥, 국, 메인찬, 나물, 디저트) 시뮬레이터에 배치됩니다.
              </span>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-700 mb-1">
                알레르기 유발 성분 (쉼표로 구분: 난류, 대두, 우유, 쇠고기 등)
              </label>
              <input
                type="text"
                value={activeMeal.allergens.join(', ')}
                onChange={(e) =>
                  updateMeal(activeMeal.id, {
                    allergens: e.target.value.split(',').map((s) => s.trim()).filter(Boolean),
                  })
                }
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-amber-900 font-semibold"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-700 mb-1">
                식재료 원산지 정보
              </label>
              <input
                type="text"
                value={activeMeal.originInfo}
                onChange={(e) => updateMeal(activeMeal.id, { originInfo: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-700"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-700 mb-1">
                영양교사의 따뜻한 한마디 코멘트
              </label>
              <textarea
                rows={2}
                value={activeMeal.chefNote}
                onChange={(e) => updateMeal(activeMeal.id, { chefNote: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-700"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
