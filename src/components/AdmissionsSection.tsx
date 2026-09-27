import React, { useState } from 'react';
import { useKindergarten } from '../context/KindergartenContext';
import { getAccentStyles } from '../utils/themeHelper';
import { AdmissionApplication } from '../types';
import { CheckCircle2, Phone, FileCheck, Send, Sparkles, AlertCircle, ShieldCheck } from 'lucide-react';

export const AdmissionsSection: React.FC = () => {
  const { siteInfo, themeConfig, addApplication, setIsAiModalOpen } = useKindergarten();
  const accent = getAccentStyles(themeConfig.accentColor);

  const [formData, setFormData] = useState({
    childName: '',
    childBirth: '',
    childGender: '남' as '남' | '여',
    ageGroup: '만 3세 (예쁜반/튼튼반)' as AdmissionApplication['ageGroup'],
    parentName: '',
    phone: '',
    email: '',
    address: '',
    preferredTourDate: '',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.childName || !formData.parentName || !formData.phone) {
      alert('필수 입력 항목(원아 이름, 보호자 성함, 연락처)을 확인해 주세요.');
      return;
    }

    addApplication({
      childName: formData.childName,
      childBirth: formData.childBirth || '2022-01-01',
      childGender: formData.childGender,
      ageGroup: formData.ageGroup,
      parentName: formData.parentName,
      phone: formData.phone,
      email: formData.email,
      address: formData.address,
      preferredTourDate: formData.preferredTourDate || '추후 협의',
      notes: formData.notes,
    });

    setIsSubmitted(true);
  };

  const steps = [
    {
      num: '01',
      title: '온라인 원서 및 상담 접수',
      desc: '홈페이지 또는 유선(053-818-8551)으로 원아 정보 접수',
    },
    {
      num: '02',
      title: '1:1 방문 상담 & 시설 투어',
      desc: '1~3층 교실, 미래교실, 강당, 실외놀이터 관람',
    },
    {
      num: '03',
      title: '서류 확인 및 신입생 등록',
      desc: '공립단설 입학 서류 확인 및 반 배정 협의 (학부모 부담금 0원)',
    },
    {
      num: '04',
      title: '학부모 OT & 하이클래스 연동',
      desc: '신학기 적응 프로그램 및 공인 알림장 앱 연결',
    },
  ];

  return (
    <section id="admissions" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <span className="text-blue-700 font-bold">2026학년도 신입원아 모집</span>
            <span aria-hidden="true">·</span>
            <span>공립 단설 경산유치원</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            놀이로 배우고 세계로 자라는 아이들,<br />
            경산유치원의 문은 활짝 열려있습니다
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            만 3세부터 5세까지 총 6학급 정원 120명으로 편성되어 있습니다.
            학부모 부담금 0원의 혜택과 임용고시로 선발된 우수한 공립 교사진의 사랑 가득한 배움터에 지원하세요.
          </p>
        </div>

        {/* 4-Step Process */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {steps.map((step) => (
            <div key={step.num} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-blue-700 block mb-3">
                  STEP {step.num}
                </span>
                <h4 className="text-sm font-bold text-slate-900 mb-1.5">{step.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Form and Quick Desk */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Form */}
          <div className="lg:col-span-8 bg-slate-50/70 rounded-2xl border border-slate-200 p-6 sm:p-8">
            <div className="flex items-center justify-between pb-6 border-b border-slate-200 mb-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  신입원아 입학원서 & 개별 상담 사전신청
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  접수 후 24시간 이내에 교무실 담당 선생님이 안내 전화를 드립니다.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsAiModalOpen(true)}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>AI 상담 먼저 받기</span>
              </button>
            </div>

            {isSubmitted ? (
              <div className="p-8 bg-white rounded-xl border border-emerald-200 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">
                  입학 상담 신청이 정상 접수되었습니다!
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  <strong>{formData.childName}</strong> 어린이의 공립 단설 경산유치원 입학을 환영합니다.<br />
                  보호자님({formData.parentName})의 연락처(<strong>{formData.phone}</strong>)로
                  교무실(053-818-8551)에서 친절히 연락드리겠습니다.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      childName: '',
                      childBirth: '',
                      childGender: '남',
                      ageGroup: '만 3세 (예쁜반/튼튼반)',
                      parentName: '',
                      phone: '',
                      email: '',
                      address: '',
                      preferredTourDate: '',
                      notes: '',
                    });
                  }}
                  className="px-5 py-2.5 text-xs font-semibold bg-slate-900 text-white rounded-lg hover:bg-slate-800"
                >
                  새로운 상담 신청하기
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* 1. Child Info */}
                <div>
                  <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wide mb-3">
                    1. 원아 기본 정보
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        원아 성명 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="예: 김민준"
                        value={formData.childName}
                        onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        생년월일
                      </label>
                      <input
                        type="date"
                        value={formData.childBirth}
                        onChange={(e) => setFormData({ ...formData, childBirth: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        성별
                      </label>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, childGender: '남' })}
                          className={`flex-1 py-2 rounded-xl text-xs font-semibold border ${
                            formData.childGender === '남'
                              ? 'bg-blue-600 text-white border-blue-600'
                              : 'bg-white text-slate-600 border-slate-200'
                          }`}
                        >
                          남아
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, childGender: '여' })}
                          className={`flex-1 py-2 rounded-xl text-xs font-semibold border ${
                            formData.childGender === '여'
                              ? 'bg-blue-600 text-white border-blue-600'
                              : 'bg-white text-slate-600 border-slate-200'
                          }`}
                        >
                          여아
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Age group */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    희망 지원 학급반 <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[
                      '만 3세 (예쁜반/튼튼반)',
                      '만 4세 (밝은반/고운반)',
                      '만 5세 (정다운반/즐거운반)',
                    ].map((age) => (
                      <button
                        key={age}
                        type="button"
                        onClick={() => setFormData({ ...formData, ageGroup: age as any })}
                        className={`p-2.5 rounded-xl text-xs font-semibold border text-center transition-all ${
                          formData.ageGroup === age
                            ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                            : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        {age}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Parent Info */}
                <div>
                  <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wide mb-3">
                    2. 보호자 정보 및 통학버스 희망
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        보호자 성함 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="예: 김선우 (학부모)"
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        휴대폰 번호 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="010-0000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        거주지 아파트/동 (통학버스 코스 매칭용)
                      </label>
                      <input
                        type="text"
                        placeholder="예: 사동 부영, 중산자이, 펜타힐즈, 신대팰리스 등"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        희망 방문상담 일시
                      </label>
                      <input
                        type="text"
                        placeholder="예: 10월 10일(금) 오전 11:00"
                        value={formData.preferredTourDate}
                        onChange={(e) => setFormData({ ...formData, preferredTourDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Inquiry */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    사전 문의사항 (아침/저녁 돌봄교실 희망, 특성화 프로그램 문의 등)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="돌봄교실 신청 여부나 통학버스 승강장 문의 등을 적어주시면 상세히 준비해 드립니다."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className={`w-full py-3.5 text-xs sm:text-sm font-bold text-white ${accent.bgPrimary} ${accent.bgPrimaryHover} rounded-xl shadow-md transition-all flex items-center justify-center gap-2`}
                  >
                    <Send className="w-4 h-4" />
                    <span>2026학년도 신입원아 입학원서 제출하기</span>
                  </button>
                  <p className="text-[11px] text-slate-400 text-center mt-2">
                    입력하신 정보는 공립 단설 경산유치원 신입생 입학 상담 및 행정 용도로만 안전하게 활용됩니다.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Right: Desk */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-sm space-y-4">
              <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider block">
                PUBLIC ADMISSIONS DESK
              </span>
              <h4 className="text-lg font-bold">경산유치원 교무실</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                궁금하신 사항은 언제든지 유치원으로 전화 주시면 친절하게 안내해 드리겠습니다.
              </p>

              <div className="pt-2 space-y-2.5 text-xs border-t border-white/10">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <a href={`tel:${siteInfo.phone}`} className="font-extrabold text-white text-base hover:text-blue-300 font-mono">
                    {siteInfo.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2.5 text-slate-300">
                  <FileCheck className="w-4 h-4 text-blue-400" />
                  <span>공립 단설: 학부모 부담금 0원 (전액 지원)</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`tel:${siteInfo.phone}`}
                  className="block w-full py-2.5 text-center text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 rounded-lg transition-colors"
                >
                  교무실 전화 바로 걸기 (053-818-8551)
                </a>
              </div>
            </div>

            {/* Zero Tuition Banner */}
            <div className="bg-blue-50 p-5 rounded-2xl border border-blue-200 space-y-2">
              <h5 className="text-xs font-bold text-blue-900 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-700" />
                학부모 부담금 일체 없음 (0원)
              </h5>
              <p className="text-xs text-blue-800 leading-relaxed">
                입학금, 정규 수업료, 단독조리 급식비, 우유·간식비, 현장체험비, 특성화비 전액 지원!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
