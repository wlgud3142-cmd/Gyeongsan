import React, { useState } from 'react';
import { useKindergarten } from '../../context/KindergartenContext';
import { Save, RefreshCw, CheckCircle, Info } from 'lucide-react';

export const ContentEditorTab: React.FC = () => {
  const { siteInfo, updateSiteInfo, strengths, updateStrength, triggerSaveFeedback } = useKindergarten();
  const [formData, setFormData] = useState(siteInfo);

  const handleSaveBasic = (e: React.FormEvent) => {
    e.preventDefault();
    updateSiteInfo(formData);
  };

  return (
    <div className="space-y-10">
      {/* Basic Kindergarten Info Form */}
      <form onSubmit={handleSaveBasic} className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-100 gap-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              유치원 기본 정보 및 메인 문구 수정
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              공립 단설 경산유치원 공식 명칭, 슬로건, 전화번호(053-818-8551), 메인 카피를 실시간으로 변경합니다.
            </p>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-colors self-start sm:self-auto"
          >
            <Save className="w-4 h-4" />
            <span>기본 정보 저장</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              유치원 명칭 (국문)
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              설립 유형
            </label>
            <input
              type="text"
              value={formData.institutionType}
              onChange={(e) => setFormData({ ...formData, institutionType: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              영문 명칭
            </label>
            <input
              type="text"
              value={formData.englishName}
              onChange={(e) => setFormData({ ...formData, englishName: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              교육비 지원 문구
            </label>
            <input
              type="text"
              value={formData.tuitionNotice}
              onChange={(e) => setFormData({ ...formData, tuitionNotice: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-bold text-slate-700 mb-1">
              대표 소개글 (Tagline)
            </label>
            <input
              type="text"
              value={formData.tagline}
              onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-bold text-slate-700 mb-1">
              메인 헤드카피 (Headline)
            </label>
            <input
              type="text"
              value={formData.heroHeadCopy}
              onChange={(e) => setFormData({ ...formData, heroHeadCopy: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-bold text-slate-700 mb-1">
              메인 서브카피 (Sub-Headline)
            </label>
            <input
              type="text"
              value={formData.heroSubCopy}
              onChange={(e) => setFormData({ ...formData, heroSubCopy: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              대표 문의전화번호
            </label>
            <input
              type="text"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-bold text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              팩스번호
            </label>
            <input
              type="text"
              value={formData.fax}
              onChange={(e) => setFormData({ ...formData, fax: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              캠퍼스 기본 주소
            </label>
            <input
              type="text"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              상세 위치 안내
            </label>
            <input
              type="text"
              value={formData.addressDetail}
              onChange={(e) => setFormData({ ...formData, addressDetail: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-bold text-slate-700 mb-1">
              상단 띠배너 공지 문구 (신입원아 모집 상태)
            </label>
            <input
              type="text"
              value={formData.enrollmentStatus}
              onChange={(e) => setFormData({ ...formData, enrollmentStatus: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </form>

      {/* 4 Pillars Content Customizer */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
        <div>
          <h3 className="text-lg font-bold text-slate-900">
            4대 특장점 내용 편집
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            공식 포스터 기반 4대 특장점 (01 믿고 맡길 수 있는 공립, 02 놀이하며 배우는 교육과정, 03 교육비 부담 ZERO, 04 안전·최첨단 교육환경)의 배지, 제목, 설명, 포인트를 실시간 수정합니다.
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
                <label className="block text-[11px] font-bold text-slate-600 mb-0.5">
                  제목
                </label>
                <input
                  type="text"
                  value={item.title}
                  onChange={(e) => updateStrength(item.id, { title: e.target.value })}
                  className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-0.5">
                  부제목
                </label>
                <input
                  type="text"
                  value={item.subtitle}
                  onChange={(e) => updateStrength(item.id, { subtitle: e.target.value })}
                  className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-0.5">
                  상세 설명
                </label>
                <textarea
                  rows={3}
                  value={item.description}
                  onChange={(e) => updateStrength(item.id, { description: e.target.value })}
                  className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-0.5">
                  핵심 포인트 (줄바꿈으로 구분)
                </label>
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
    </div>
  );
};
