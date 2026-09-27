import React, { useState } from 'react';
import { useKindergarten } from '../context/KindergartenContext';
import {
  Apple,
  ShieldCheck,
  Heart,
  Info,
  Utensils,
  Smartphone,
  CheckCircle,
  X,
  ChevronRight,
  Phone,
  Milk,
  Sparkles,
} from 'lucide-react';

export const MealSection: React.FC = () => {
  const { nutritionInfo, siteInfo } = useKindergarten();
  const [showMealModal, setShowMealModal] = useState<boolean>(false);

  return (
    <section id="meals" className="py-20 bg-[#FFFDF9] border-b border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 uppercase tracking-wider mb-2">
              <span className="bg-amber-100/90 text-amber-800 font-bold px-2.5 py-0.5 rounded border border-amber-200">
                100% 친환경 안심 직영급식
              </span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-600">상주 전문 영양사 당일 직조리</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {nutritionInfo.title}<br />
              <span className="text-amber-700">단독 조리실에서 매일 정성껏 짓는 건강 식탁</span>
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              {nutritionInfo.description}
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs text-amber-900 bg-white px-4 py-2.5 rounded-xl border border-amber-200 shadow-xs self-start lg:self-auto">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>경산 친환경 로컬푸드 제휴 · 알레르기 1:1 대체식</span>
          </div>
        </div>

        {/* 4 Core Nutrition Highlights Cards (Clean, informative layout without daily Mon~Fri menu) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {/* Card 1: 단독 직영 조리 */}
          <div className="bg-white rounded-2xl border border-amber-200/80 p-6 shadow-xs flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow">
            <div className="space-y-2.5">
              <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                <Utensils className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">단독 조리 직영 급식실</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                외부 위탁 도시락 배달 없이, 본원 1층 단독 조리실에서 영양사와 조리사가 매일 직접 위생 조리합니다.
              </p>
            </div>
            <div className="text-[11px] text-amber-800 font-semibold pt-2 border-t border-slate-100 flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5 text-amber-600" />
              <span>법정 보존식 냉동 보관 준수</span>
            </div>
          </div>

          {/* Card 2: 오전/오후 2회 간식 */}
          <div className="bg-white rounded-2xl border border-amber-200/80 p-6 shadow-xs flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow">
            <div className="space-y-2.5">
              <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <Apple className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">매일 오전/오후 2회 간식</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                오전 10:00 친환경 흰우유, 오후 14:30 수제 제철 생과일, 유기농 베이커리, 영양떡을 전액 지원합니다.
              </p>
            </div>
            <div className="text-[11px] text-emerald-800 font-semibold pt-2 border-t border-slate-100 flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>건강한 영양 맞춤 안심 간식</span>
            </div>
          </div>

          {/* Card 3: 하이클래스 사진 공개 */}
          <div className="bg-white rounded-2xl border border-amber-200/80 p-6 shadow-xs flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow">
            <div className="space-y-2.5">
              <div className="w-11 h-11 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">하이클래스 매일 사진 공개</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                매일 실제로 완성된 급식과 간식 사진, 원산지, 영양표를 하이클래스 모바일 앱에 투명하게 공지합니다.
              </p>
            </div>
            <div className="text-[11px] text-sky-800 font-semibold pt-2 border-t border-slate-100 flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5 text-sky-600" />
              <span>실시간 투명 식단 알림</span>
            </div>
          </div>

          {/* Card 4: 알레르기 1:1 대체식 */}
          <div className="bg-white rounded-2xl border border-amber-200/80 p-6 shadow-xs flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow">
            <div className="space-y-2.5">
              <div className="w-11 h-11 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">알레르기 1:1 대체식 조리</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                식품 알레르기가 등록된 유아에게는 해당 식재료를 엄격히 분리하여 영양사가 전담 대체식을 제공합니다.
              </p>
            </div>
            <div className="text-[11px] text-rose-800 font-semibold pt-2 border-t border-slate-100 flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5 text-rose-600" />
              <span>안전 분리 배식 원칙 준수</span>
            </div>
          </div>
        </div>

        {/* Detailed Principles Banner */}
        <div className="rounded-2xl border border-amber-200/90 bg-white p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
                  {nutritionInfo.badge}
                </span>
                <span className="text-xs text-slate-500 font-semibold">경산유치원 식단 원칙</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                {nutritionInfo.chefTitle}
              </h3>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                성장기 유아의 올바른 식습관 형성을 위해 인공 조미료를 배제하고 자연 그대로의 감칠맛을 살려 조리합니다.
                영양교사가 매일 영양 균형과 열량을 세심하게 계산하여 성장기 발달에 꼭 필요한 필수 영양소를 공급합니다.
              </p>

              {/* 5 Principles Checklist */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {nutritionInfo.points.map((pt, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 text-xs text-slate-700 bg-amber-50/50 p-3 rounded-xl border border-amber-200/70"
                  >
                    <CheckCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span className="leading-snug font-medium">{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Summary Card */}
            <div className="lg:col-span-4 bg-amber-50/50 p-6 rounded-2xl border border-amber-200 space-y-4">
              <div className="space-y-3">
                <div className="text-xs font-bold text-amber-950 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>식재료 및 간식 운영 요약</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="bg-white p-3 rounded-xl border border-amber-100">
                    <span className="font-bold text-slate-900 block mb-0.5">안심 식재료:</span>
                    <span className="text-slate-600">{nutritionInfo.organicPartner}</span>
                  </div>

                  <div className="bg-white p-3 rounded-xl border border-amber-100">
                    <span className="font-bold text-slate-900 block mb-0.5">간식 제공:</span>
                    <span className="text-slate-600">{nutritionInfo.dailySnackGuide}</span>
                  </div>

                  <div className="bg-white p-3 rounded-xl border border-amber-100">
                    <span className="font-bold text-slate-900 block mb-0.5">알레르기 케어:</span>
                    <span className="text-slate-600">{nutritionInfo.allergenPolicy}</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowMealModal(true)}
                className="w-full py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-xs"
              >
                <span>친환경 급식 위생 검수 상세 원칙 보기</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Detail Modal for Nutrition */}
      {showMealModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setShowMealModal(false)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between pb-3 border-b border-slate-100">
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200 inline-block">
                  {nutritionInfo.badge}
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  {nutritionInfo.chefTitle}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  경산유치원 1층 단독 직영 급식실
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowMealModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-colors"
                aria-label="닫기"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700">
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-200">
                <h4 className="font-bold text-amber-950 mb-1">
                  100% 친환경 안심 먹거리 원칙
                </h4>
                <p className="text-xs leading-relaxed text-amber-900">
                  {nutritionInfo.description}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-2">
                  급식 및 간식 안심 기준
                </h4>
                <ul className="space-y-2">
                  {nutritionInfo.points.map((pt, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-xs text-slate-700"
                    >
                      <CheckCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
                <div className="text-xs">
                  <span className="font-bold text-slate-900 block">제휴 식자재:</span>
                  <span className="text-slate-600">{nutritionInfo.organicPartner}</span>
                </div>
                <div className="text-xs">
                  <span className="font-bold text-slate-900 block">간식 제공 시간:</span>
                  <span className="text-slate-600">{nutritionInfo.dailySnackGuide}</span>
                </div>
                <div className="text-xs">
                  <span className="font-bold text-slate-900 block">알레르기 케어 방침:</span>
                  <span className="text-slate-600">{nutritionInfo.allergenPolicy}</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <a
                href={`tel:${siteInfo.phone}`}
                className="text-xs font-bold text-amber-700 flex items-center gap-1 hover:underline"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>급식실 문의 {siteInfo.phone}</span>
              </a>
              <button
                type="button"
                onClick={() => setShowMealModal(false)}
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-colors"
              >
                확인 및 닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
