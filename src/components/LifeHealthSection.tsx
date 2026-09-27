import React from 'react';
import { Utensils, HeartPulse, Sparkles, ShieldCheck, Check, Smartphone, FileSpreadsheet } from 'lucide-react';

export const LifeHealthSection: React.FC = () => {
  return (
    <section id="life-health" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <span className="text-blue-700 font-bold">원생활 및 복지</span>
            <span aria-hidden="true">·</span>
            <span>급식 · 보건 · 교육비 전액 지원</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            건강한 몸과 마음을 기르는 안심 케어<br />
            학부모 부담금 0원의 든든한 공립 복지
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            영양사의 단독 직영 친환경 급식과 정규 간호사 보건교사의 1:1 건강 관리,
            그리고 입학금부터 특성화 프로그램까지 전액 국가가 지원하는 공립 유치원의 혜택을 누리세요.
          </p>
        </div>

        {/* 3 Core Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1: Meals & Snacks */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                  <Utensils className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
                  단독 조리 직영 급식
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900">안심 급식 및 간식</h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  친환경 및 제철 식재료만을 고집하여 전문 영양사와 조리사가 매일 직접 조리합니다.
                </p>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>오전/오후 간식 매일 제공:</strong> 오전 우유, 오후 영양 빵·떡·생과일·제철 음료</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>하이클래스 앱 투명 공개:</strong> 매일 조리된 실제 식단 사진과 메뉴 공지</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>위생 관리 철저:</strong> 전 구역 소독 및 법정 보존식 냉동 보관 규정 100% 준수</span>
                </li>
              </ul>
            </div>

            <div className="pt-3 border-t border-slate-200 flex items-center gap-1.5 text-[11px] text-blue-700 font-semibold">
              <Smartphone className="w-3.5 h-3.5" />
              <span>하이클래스 앱으로 매일 식단 사진 확인</span>
            </div>
          </div>

          {/* Card 2: Professional Health & Safety */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-rose-800 bg-rose-50 px-2.5 py-0.5 rounded border border-rose-200">
                  정규 보건교사 상주
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900">전문 보건 · 안전 관리</h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  간호사 면허를 소지한 정규 보건교사가 상시 상주하며 유아 건강을 1:1로 보살핍니다.
                </p>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>'건강유치원 만들기':</strong> 유아 맞춤형 감염병 예방 및 올바른 위생 보건 교육</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>연 2회 체격검사:</strong> 신장, 체중 등 성장 발달 추이를 정밀 기록·가정 안내</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>월 1회 보건소식지 발송:</strong> 계절별 유행성 질환 예방 및 유아 건강 정보 전달</span>
                </li>
              </ul>
            </div>

            <div className="pt-3 border-t border-slate-200 flex items-center gap-1.5 text-[11px] text-emerald-700 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>3층 전용 보건실 완비 및 상시 응급처치</span>
            </div>
          </div>

          {/* Card 3: Zero Tuition (0 won) */}
          <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white rounded-2xl p-6 sm:p-7 shadow-md flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center font-bold">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-blue-200 bg-white/10 px-2.5 py-0.5 rounded border border-white/20">
                  공립단설 무상 혜택
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">교육비 전액 지원 (0원)</h3>
                <p className="text-xs text-blue-200 mt-1 leading-relaxed">
                  국가 유아학비 전액 지원으로 학부모님의 경제적 부담이 전혀 발생하지 않습니다.
                </p>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-200">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>입학금 및 수업료:</strong> 100% 전액 면제 (학부모 부담금 0원)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>교육과정비 지원:</strong> 급식비, 우유간식, 교재·교구, 현장학습비, 체험차량비 전액 지원</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>방과후과정비 지원:</strong> 오후 간식비, 방과후 교재비, 특성화 프로그램비 전액 지원</span>
                </li>
              </ul>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-blue-200">
              <span>문의전화: 053-818-8551</span>
              <span className="text-white font-bold">학부모 부담금 ZERO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
