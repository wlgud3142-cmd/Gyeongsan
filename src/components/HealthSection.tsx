import React, { useState } from 'react';
import { useKindergarten } from '../context/KindergartenContext';
import {
  HeartPulse,
  ShieldCheck,
  CheckCircle,
  FileText,
  Activity,
  AlertTriangle,
  Phone,
  ChevronRight,
  X,
  Stethoscope,
  Sparkles,
} from 'lucide-react';

export const HealthSection: React.FC = () => {
  const { siteInfo, healthInfo } = useKindergarten();
  const [showHealthModal, setShowHealthModal] = useState(false);

  return (
    <section id="health" className="py-20 bg-rose-50/30 border-b border-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-rose-700 uppercase tracking-wider mb-2">
              <span className="bg-rose-100/90 text-rose-800 font-bold px-2.5 py-0.5 rounded border border-rose-200">
                보건 · 안전 안심케어
              </span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-600">간호사 면허 정규 보건교사 상주</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {healthInfo.title}<br />
              <span className="text-rose-700">아이의 건강과 안전을 지키는 1:1 세심한 돌봄</span>
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              {healthInfo.description}
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-rose-900 bg-white px-4 py-2.5 rounded-xl border border-rose-200 shadow-xs self-start lg:self-auto">
            <Stethoscope className="w-4 h-4 text-rose-600 shrink-0" />
            <span>본관 3층 전용 보건실 완비 · 상시 응급처치</span>
          </div>
        </div>

        {/* 3 Core Health Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: 정규 보건교사 1:1 케어 */}
          <div className="bg-white rounded-2xl border border-rose-200/80 p-6 sm:p-7 shadow-sm flex flex-col justify-between space-y-5 hover:shadow-md transition-shadow">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
                <HeartPulse className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-rose-800 bg-rose-50 px-2 py-0.5 rounded border border-rose-200 inline-block">
                전문 면허 보유
              </span>
              <h3 className="text-lg font-bold text-slate-900 leading-snug">
                정규 간호사 보건교사 상주
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                간호사 면허와 교원 자격을 갖춘 정규 보건교사가 하루 종일 상주하여 유아의 투약 의뢰, 상처 치료, 발열 및 컨디션을 1:1로 밀착 관리합니다.
              </p>

              <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span>학부모 투약의뢰서 확인 후 정밀 투약</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span>유아 맞춤 응급 외상 소독 및 냉온 찜질</span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={() => setShowHealthModal(true)}
              className="text-xs font-bold text-rose-700 hover:text-rose-900 flex items-center gap-1 pt-3 border-t border-rose-100"
            >
              <span>보건실 상세 운영 방침 보기</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 2: 연 2회 체격검사 & 보건소식지 */}
          <div className="bg-white rounded-2xl border border-rose-200/80 p-6 sm:p-7 shadow-sm flex flex-col justify-between space-y-5 hover:shadow-md transition-shadow">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <Activity className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 inline-block">
                성장 발달 정밀 기록
              </span>
              <h3 className="text-lg font-bold text-slate-900 leading-snug">
                연 2회 체격검사 & 월 1회 보건소식
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                신장, 체중, 시력 등 성장기 유아의 신체 발달 추이를 정기 측정하여 가정으로 상세 안내서를 발송하고, 계절별 유행성 질환 예방 가이드를 제공합니다.
              </p>

              <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>상·하반기 체격 및 발달 검사 실시</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>월 1회 가정연계 보건소식지 발행</span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={() => setShowHealthModal(true)}
              className="text-xs font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1 pt-3 border-t border-emerald-100"
            >
              <span>발달 검사 일정 및 절차 보기</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 3: 전 구역 방역 & 응급대응 체계 */}
          <div className="bg-white rounded-2xl border border-rose-200/80 p-6 sm:p-7 shadow-sm flex flex-col justify-between space-y-5 hover:shadow-md transition-shadow">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-blue-800 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 inline-block">
                안전 방역 인증
              </span>
              <h3 className="text-lg font-bold text-slate-900 leading-snug">
                유치원 전 구역 청정 & 응급 비상망
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                모든 교실에 공기청정 환기 시스템을 상시 가동하며, 정기 전문 소독과 자동심장충격기(AED) 구비, 인근 119 안전센터 긴급 후송 연계 체계를 완비했습니다.
              </p>

              <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>어린이 전용 침상 및 자동심장충격기(AED)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>비상벨 및 119 협력병원 직통 긴급 후송망</span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={() => setShowHealthModal(true)}
              className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1 pt-3 border-t border-blue-100"
            >
              <span>안전 비상 프로토콜 보기</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Health Detail Points Banner */}
        <div className="mt-8 rounded-2xl bg-white border border-rose-200 p-6 sm:p-7 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-rose-100">
            <div>
              <span className="text-xs font-bold text-rose-700 block mb-1">
                {healthInfo.nurseTitle}
              </span>
              <h4 className="text-base font-extrabold text-slate-900">
                보건실 주요 운영 원칙 및 케어 시스템
              </h4>
            </div>
            <button
              type="button"
              onClick={() => setShowHealthModal(true)}
              className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-xl transition-colors self-start sm:self-auto flex items-center gap-1.5 shadow-xs"
            >
              <span>상세내용 팝업 보기</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-4">
            {healthInfo.points.map((pt, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 text-xs text-slate-700 bg-rose-50/40 p-3 rounded-xl border border-rose-100"
              >
                <CheckCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span className="leading-snug font-medium">{pt}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Detail Modal for Health */}
      {showHealthModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setShowHealthModal(false)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between pb-3 border-b border-slate-100">
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded border border-rose-200 inline-block">
                  {healthInfo.badge}
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  {healthInfo.nurseTitle}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  {healthInfo.facilityLocation}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowHealthModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-colors"
                aria-label="닫기"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700">
              <div className="bg-rose-50/60 p-4 rounded-2xl border border-rose-200">
                <h4 className="font-bold text-rose-950 mb-1">
                  1:1 맞춤 보건실 운영 체계
                </h4>
                <p className="text-xs leading-relaxed text-rose-900">
                  {healthInfo.description}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-2">
                  보건 및 안전 실천 사항
                </h4>
                <ul className="space-y-2">
                  {healthInfo.points.map((pt, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-xs text-slate-700"
                    >
                      <CheckCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-1.5 text-xs">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>비상 응급 대응 프로토콜</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {healthInfo.emergencyGuide}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <a
                href={`tel:${siteInfo.phone}`}
                className="text-xs font-bold text-rose-700 flex items-center gap-1 hover:underline"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>보건실 문의 {siteInfo.phone}</span>
              </a>
              <button
                type="button"
                onClick={() => setShowHealthModal(false)}
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
