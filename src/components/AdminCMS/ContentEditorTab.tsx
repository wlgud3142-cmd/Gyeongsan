import React, { useState } from 'react';
import { useKindergarten } from '../../context/KindergartenContext';
import {
  Save,
  RefreshCw,
  CheckCircle,
  Info,
  Building,
  Heart,
  Users,
  HeartPulse,
  Utensils,
  GraduationCap,
  Sparkles,
} from 'lucide-react';

export const ContentEditorTab: React.FC = () => {
  const {
    siteInfo,
    updateSiteInfo,
    strengths,
    updateStrength,
    visions,
    updateVisions,
    classStatus,
    updateClassStatus,
    healthInfo,
    updateHealthInfo,
    nutritionInfo,
    updateNutritionInfo,
    admissionGuide,
    updateAdmissionGuide,
    triggerSaveFeedback,
  } = useKindergarten();

  const [activeSubTab, setActiveSubTab] = useState<
    'basic' | 'strengths' | 'visions' | 'classes' | 'health' | 'nutrition' | 'admissions'
  >('basic');

  // Form states
  const [basicForm, setBasicForm] = useState(siteInfo);
  const [visionForm, setVisionForm] = useState(visions);
  const [classForm, setClassForm] = useState(classStatus);
  const [healthForm, setHealthForm] = useState(healthInfo);
  const [nutritionForm, setNutritionForm] = useState(nutritionInfo);
  const [admissionForm, setAdmissionForm] = useState(admissionGuide);

  // Handlers
  const handleSaveBasic = (e: React.FormEvent) => {
    e.preventDefault();
    updateSiteInfo(basicForm);
  };

  const handleSaveVisions = (e: React.FormEvent) => {
    e.preventDefault();
    updateVisions(visionForm);
  };

  const handleSaveClasses = (e: React.FormEvent) => {
    e.preventDefault();
    updateClassStatus(classForm);
  };

  const handleSaveHealth = (e: React.FormEvent) => {
    e.preventDefault();
    updateHealthInfo(healthForm);
  };

  const handleSaveNutrition = (e: React.FormEvent) => {
    e.preventDefault();
    updateNutritionInfo(nutritionForm);
  };

  const handleSaveAdmissions = (e: React.FormEvent) => {
    e.preventDefault();
    updateAdmissionGuide(admissionForm);
  };

  return (
    <div className="space-y-6">
      {/* Sub navigation bar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-2 shadow-xs">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          <button
            type="button"
            onClick={() => setActiveSubTab('basic')}
            className={`py-2 px-3.5 text-xs font-bold rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 ${
              activeSubTab === 'basic'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Building className="w-3.5 h-3.5" />
            <span>기본 정보 & 문구</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveSubTab('strengths')}
            className={`py-2 px-3.5 text-xs font-bold rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 ${
              activeSubTab === 'strengths'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>4대 특장점</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveSubTab('visions')}
            className={`py-2 px-3.5 text-xs font-bold rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 ${
              activeSubTab === 'visions'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Heart className="w-3.5 h-3.5" />
            <span>교육 비전 & 원훈</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveSubTab('classes')}
            className={`py-2 px-3.5 text-xs font-bold rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 ${
              activeSubTab === 'classes'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>학급 및 원아 정원</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveSubTab('health')}
            className={`py-2 px-3.5 text-xs font-bold rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 ${
              activeSubTab === 'health'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <HeartPulse className="w-3.5 h-3.5" />
            <span>보건 안심 케어</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveSubTab('nutrition')}
            className={`py-2 px-3.5 text-xs font-bold rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 ${
              activeSubTab === 'nutrition'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Utensils className="w-3.5 h-3.5" />
            <span>영양 직영 급식</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveSubTab('admissions')}
            className={`py-2 px-3.5 text-xs font-bold rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 ${
              activeSubTab === 'admissions'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>2027 입학 요강</span>
          </button>
        </div>
      </div>

      <div className="bg-blue-50/70 border border-blue-200 px-4 py-3 rounded-xl flex items-center gap-2 text-xs text-blue-900">
        <Info className="w-4 h-4 text-blue-700 shrink-0" />
        <span>
          소개글이 너무 길게 느껴지실 경우 각 항목의 글자수를 줄여 핵심만 간결하게 요약 편집하실 수 있습니다.
        </span>
      </div>

      {/* 1. Basic Info Form */}
      {activeSubTab === 'basic' && (
        <form onSubmit={handleSaveBasic} className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-100 gap-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900">유치원 기본 정보 및 메인 문구 수정</h3>
              <p className="text-xs text-slate-500 mt-0.5">
                공식 명칭, 슬로건, 전화번호(053-818-8551), 메인 카피를 실시간으로 변경합니다.
              </p>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-colors"
            >
              <Save className="w-4 h-4" />
              <span>기본 정보 저장</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">유치원 명칭 (국문)</label>
              <input
                type="text"
                value={basicForm.name}
                onChange={(e) => setBasicForm({ ...basicForm, name: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">설립 유형</label>
              <input
                type="text"
                value={basicForm.institutionType}
                onChange={(e) => setBasicForm({ ...basicForm, institutionType: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">교육비 지원 문구</label>
              <input
                type="text"
                value={basicForm.tuitionNotice}
                onChange={(e) => setBasicForm({ ...basicForm, tuitionNotice: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">대표 문의전화번호</label>
              <input
                type="text"
                value={basicForm.phone}
                onChange={(e) => setBasicForm({ ...basicForm, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-bold text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-700 mb-1">대표 소개글 (Tagline)</label>
              <input
                type="text"
                value={basicForm.tagline}
                onChange={(e) => setBasicForm({ ...basicForm, tagline: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-700 mb-1">메인 헤드카피 (Headline)</label>
              <input
                type="text"
                value={basicForm.heroHeadCopy}
                onChange={(e) => setBasicForm({ ...basicForm, heroHeadCopy: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-700 mb-1">메인 서브카피 (Sub-Headline)</label>
              <input
                type="text"
                value={basicForm.heroSubCopy}
                onChange={(e) => setBasicForm({ ...basicForm, heroSubCopy: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-700 mb-1">상단 띠배너 공지 문구 (모집 상태)</label>
              <input
                type="text"
                value={basicForm.enrollmentStatus}
                onChange={(e) => setBasicForm({ ...basicForm, enrollmentStatus: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="sm:col-span-2 bg-red-50/60 p-4 rounded-2xl border border-red-200 space-y-2">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-bold text-red-800 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                  <span>🎬 유치원 환경 둘러보기 유튜브 영상 링크 (YouTube URL)</span>
                </label>
                {basicForm.youtubeTourUrl && (
                  <a
                    href={basicForm.youtubeTourUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-red-700 hover:text-red-900 flex items-center gap-1 underline"
                  >
                    <span>새 창으로 링크 테스트</span>
                  </a>
                )}
              </div>
              <input
                type="url"
                placeholder="예: https://www.youtube.com/watch?v=... 또는 https://youtu.be/..."
                value={basicForm.youtubeTourUrl || ''}
                onChange={(e) => setBasicForm({ ...basicForm, youtubeTourUrl: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-white border border-red-300 rounded-xl text-xs sm:text-sm font-mono text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500 shadow-xs"
              />
              <span className="text-[11px] text-red-700/80 block">
                * 여기에 입력하신 유튜브 영상 주소로 홈페이지 유치원 소개 섹션의 <strong>"유치원 환경 둘러보기 영상 시청하기"</strong> 버튼이 자동 연결됩니다.
              </span>
            </div>
          </div>
        </form>
      )}

      {/* 2. Strengths Editor */}
      {activeSubTab === 'strengths' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900">4대 특장점 파스텔 카드 내용 편집</h3>
            <p className="text-xs text-slate-500 mt-0.5">
              각 특장점의 배지, 제목, 부제목, 상세설명, 세부 포인트 항목을 편집할 수 있습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {strengths.map((item) => (
              <div key={item.id} className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">구분 배지</span>
                    <input
                      type="text"
                      value={item.badge}
                      onChange={(e) => updateStrength(item.id, { badge: e.target.value })}
                      className="px-2 py-1 bg-white border border-slate-200 rounded text-xs font-bold text-blue-700"
                    />
                  </div>
                  <span className="text-[11px] text-slate-400 font-mono">ID: {item.id}</span>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-0.5">제목</label>
                  <input
                    type="text"
                    value={item.title}
                    onChange={(e) => updateStrength(item.id, { title: e.target.value })}
                    className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-0.5">부제목 (간결한 핵심 문구)</label>
                  <input
                    type="text"
                    value={item.subtitle}
                    onChange={(e) => updateStrength(item.id, { subtitle: e.target.value })}
                    className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-0.5">상세 설명</label>
                  <textarea
                    rows={3}
                    value={item.description}
                    onChange={(e) => updateStrength(item.id, { description: e.target.value })}
                    className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-0.5">핵심 포인트 (줄바꿈으로 구분)</label>
                  <textarea
                    rows={4}
                    value={item.points.join('\n')}
                    onChange={(e) =>
                      updateStrength(item.id, {
                        points: e.target.value.split('\n').filter((p) => p.trim().length > 0),
                      })
                    }
                    className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 font-sans"
                    placeholder="포인트 항목을 한 줄씩 입력하세요"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. Visions Editor */}
      {activeSubTab === 'visions' && (
        <form onSubmit={handleSaveVisions} className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-100 gap-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900">교육 비전 & 원훈 (Motto) 편집</h3>
              <p className="text-xs text-slate-500 mt-0.5">
                유치원 원훈 및 4대 지향상(유아상, 교사상, 학부모상, 유치원상)의 글을 간결하게 축소/편집합니다.
              </p>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-colors"
            >
              <Save className="w-4 h-4" />
              <span>비전 정보 저장</span>
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                유치원 대표 원훈 (MOTTO)
              </label>
              <input
                type="text"
                value={visionForm.motto}
                onChange={(e) => setVisionForm({ ...visionForm, motto: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-emerald-800 mb-1">
                  유아상 (맘껏 놀이하는 어린이)
                </label>
                <textarea
                  rows={3}
                  value={visionForm.childImage}
                  onChange={(e) => setVisionForm({ ...visionForm, childImage: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-sky-800 mb-1">
                  교사상 (배움을 실천하는 선생님)
                </label>
                <textarea
                  rows={3}
                  value={visionForm.teacherImage}
                  onChange={(e) => setVisionForm({ ...visionForm, teacherImage: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-amber-800 mb-1">
                  학부모상 (소통과 공감의 학부모)
                </label>
                <textarea
                  rows={3}
                  value={visionForm.parentImage}
                  onChange={(e) => setVisionForm({ ...visionForm, parentImage: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-purple-800 mb-1">
                  유치원상 (행복이 가득한 배움터)
                </label>
                <textarea
                  rows={3}
                  value={visionForm.kindergartenImage}
                  onChange={(e) => setVisionForm({ ...visionForm, kindergartenImage: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </form>
      )}

      {/* 4. Classes & Quota Editor */}
      {activeSubTab === 'classes' && (
        <form onSubmit={handleSaveClasses} className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-100 gap-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900">학급 및 원아 정원 편성 편집</h3>
              <p className="text-xs text-slate-500 mt-0.5">
                만 3세, 만 4세, 만 5세 반 이름, 학급당 정원, 연령별 특색 설명을 수정합니다.
              </p>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-colors"
            >
              <Save className="w-4 h-4" />
              <span>학급 정원 저장</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {classForm.map((cls, idx) => (
              <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                <span className="text-xs font-bold text-blue-700 block">{cls.ageGroup}</span>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-0.5">
                    반 이름 (쉼표로 구분)
                  </label>
                  <input
                    type="text"
                    value={cls.classes.join(', ')}
                    onChange={(e) => {
                      const updated = [...classForm];
                      updated[idx].classes = e.target.value.split(',').map((s) => s.trim());
                      setClassForm(updated);
                    }}
                    className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded text-xs"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-0.5">
                      학급당 정원
                    </label>
                    <input
                      type="number"
                      value={cls.capacityPerClass}
                      onChange={(e) => {
                        const updated = [...classForm];
                        const cap = parseInt(e.target.value) || 0;
                        updated[idx].capacityPerClass = cap;
                        updated[idx].totalCapacity = cap * updated[idx].classes.length;
                        setClassForm(updated);
                      }}
                      className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-0.5">
                      총 정원 (명)
                    </label>
                    <input
                      type="number"
                      value={cls.totalCapacity}
                      onChange={(e) => {
                        const updated = [...classForm];
                        updated[idx].totalCapacity = parseInt(e.target.value) || 0;
                        setClassForm(updated);
                      }}
                      className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded text-xs font-bold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-0.5">
                    연령별 교육 특징 설명
                  </label>
                  <textarea
                    rows={2}
                    value={cls.description}
                    onChange={(e) => {
                      const updated = [...classForm];
                      updated[idx].description = e.target.value;
                      setClassForm(updated);
                    }}
                    className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded text-xs"
                  />
                </div>
              </div>
            ))}
          </div>
        </form>
      )}

      {/* 5. Health Care Editor */}
      {activeSubTab === 'health' && (
        <form onSubmit={handleSaveHealth} className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-100 gap-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900">보건 · 안전 안심케어 내용 편집</h3>
              <p className="text-xs text-slate-500 mt-0.5">
                정규 보건교사 소개, 보건실 위치, 실천 사항(체격검사, 방역소독, 투약의뢰)을 수정합니다.
              </p>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-colors"
            >
              <Save className="w-4 h-4" />
              <span>보건 정보 저장</span>
            </button>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">섹션 제목</label>
                <input
                  type="text"
                  value={healthForm.title}
                  onChange={(e) => setHealthForm({ ...healthForm, title: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">배지 문구</label>
                <input
                  type="text"
                  value={healthForm.badge}
                  onChange={(e) => setHealthForm({ ...healthForm, badge: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">보건교사 대표 타이틀</label>
              <input
                type="text"
                value={healthForm.nurseTitle}
                onChange={(e) => setHealthForm({ ...healthForm, nurseTitle: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">보건실 운영 상세 설명</label>
              <textarea
                rows={3}
                value={healthForm.description}
                onChange={(e) => setHealthForm({ ...healthForm, description: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs leading-relaxed"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                주요 실천 사항 (줄바꿈으로 구분)
              </label>
              <textarea
                rows={5}
                value={healthForm.points.join('\n')}
                onChange={(e) =>
                  setHealthForm({
                    ...healthForm,
                    points: e.target.value.split('\n').filter((p) => p.trim().length > 0),
                  })
                }
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">비상 응급 대응 프로토콜 가이드</label>
              <input
                type="text"
                value={healthForm.emergencyGuide}
                onChange={(e) => setHealthForm({ ...healthForm, emergencyGuide: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs"
              />
            </div>
          </div>
        </form>
      )}

      {/* 6. Nutrition Editor */}
      {activeSubTab === 'nutrition' && (
        <form onSubmit={handleSaveNutrition} className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-100 gap-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900">친환경 영양 직영급식 내용 편집</h3>
              <p className="text-xs text-slate-500 mt-0.5">
                영양사 직조리 원칙, 오전/오후 간식 안내, 로컬푸드 식자재, 알레르기 케어 방침을 편집합니다.
              </p>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-colors"
            >
              <Save className="w-4 h-4" />
              <span>영양 급식 저장</span>
            </button>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">섹션 제목</label>
                <input
                  type="text"
                  value={nutritionForm.title}
                  onChange={(e) => setNutritionForm({ ...nutritionForm, title: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">배지 문구</label>
                <input
                  type="text"
                  value={nutritionForm.badge}
                  onChange={(e) => setNutritionForm({ ...nutritionForm, badge: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">영양사 대표 타이틀</label>
              <input
                type="text"
                value={nutritionForm.chefTitle}
                onChange={(e) => setNutritionForm({ ...nutritionForm, chefTitle: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">급식실 운영 상세 설명</label>
              <textarea
                rows={3}
                value={nutritionForm.description}
                onChange={(e) => setNutritionForm({ ...nutritionForm, description: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs leading-relaxed"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                5대 급식 안심 원칙 (줄바꿈으로 구분)
              </label>
              <textarea
                rows={5}
                value={nutritionForm.points.join('\n')}
                onChange={(e) =>
                  setNutritionForm({
                    ...nutritionForm,
                    points: e.target.value.split('\n').filter((p) => p.trim().length > 0),
                  })
                }
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">간식 시간 가이드</label>
                <input
                  type="text"
                  value={nutritionForm.dailySnackGuide}
                  onChange={(e) => setNutritionForm({ ...nutritionForm, dailySnackGuide: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">친환경 제휴 파트너</label>
                <input
                  type="text"
                  value={nutritionForm.organicPartner}
                  onChange={(e) => setNutritionForm({ ...nutritionForm, organicPartner: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">식품 알레르기 케어 방침</label>
              <input
                type="text"
                value={nutritionForm.allergenPolicy}
                onChange={(e) => setNutritionForm({ ...nutritionForm, allergenPolicy: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs"
              />
            </div>
          </div>
        </form>
      )}

      {/* 7. Admissions 2027 Editor */}
      {activeSubTab === 'admissions' && (
        <form onSubmit={handleSaveAdmissions} className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-100 gap-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900">2027학년도 입학 안내 요강 편집</h3>
              <p className="text-xs text-slate-500 mt-0.5">
                모집 학년도, 정원 안내 문구, 교육지원 혜택 문구를 수정합니다.
              </p>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-colors"
            >
              <Save className="w-4 h-4" />
              <span>입학 요강 저장</span>
            </button>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">모집 학년도</label>
                <input
                  type="text"
                  value={admissionForm.year}
                  onChange={(e) => setAdmissionForm({ ...admissionForm, year: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold text-blue-700"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">모집 정원 안내</label>
                <input
                  type="text"
                  value={admissionForm.quotaNotice}
                  onChange={(e) => setAdmissionForm({ ...admissionForm, quotaNotice: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">입학 안내 대표 제목</label>
              <input
                type="text"
                value={admissionForm.title}
                onChange={(e) => setAdmissionForm({ ...admissionForm, title: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">교육과정 및 학비 지원 안내</label>
              <input
                type="text"
                value={admissionForm.feeNotice}
                onChange={(e) => setAdmissionForm({ ...admissionForm, feeNotice: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">통학차량 안심 운영 안내</label>
              <input
                type="text"
                value={admissionForm.busNotice}
                onChange={(e) => setAdmissionForm({ ...admissionForm, busNotice: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">입학 요강 상세 안내문</label>
              <textarea
                rows={3}
                value={admissionForm.description}
                onChange={(e) => setAdmissionForm({ ...admissionForm, description: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs leading-relaxed"
              />
            </div>
          </div>
        </form>
      )}
    </div>
  );
};
