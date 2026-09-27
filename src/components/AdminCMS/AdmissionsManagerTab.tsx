import React, { useState } from 'react';
import { useKindergarten } from '../../context/KindergartenContext';
import { AdmissionApplication } from '../../types';
import { Search, Download, Trash2, Phone, Mail, MapPin, Calendar, CheckCircle2, MessageSquare, Filter } from 'lucide-react';

export const AdmissionsManagerTab: React.FC = () => {
  const { applications, updateApplicationStatus, deleteApplication } = useKindergarten();

  const [selectedAge, setSelectedAge] = useState<string>('전체');
  const [selectedStatus, setSelectedStatus] = useState<string>('전체');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeApp, setActiveApp] = useState<AdmissionApplication | null>(null);
  const [editingNote, setEditingNote] = useState<string>('');

  const filtered = applications.filter((app) => {
    const matchAge = selectedAge === '전체' || app.ageGroup === selectedAge;
    const matchStatus = selectedStatus === '전체' || app.status === selectedStatus;
    const matchSearch =
      app.childName.includes(searchQuery) ||
      app.parentName.includes(searchQuery) ||
      app.phone.includes(searchQuery) ||
      app.address.includes(searchQuery);
    return matchAge && matchStatus && matchSearch;
  });

  const handleExportCsv = () => {
    const headers = ['접수번호,원아명,성별,생년월일,연령반,보호자명,연락처,이메일,주소,희망투어일,접수일시,상태\n'];
    const rows = applications.map((a) =>
      `"${a.id}","${a.childName}","${a.childGender}","${a.childBirth}","${a.ageGroup}","${a.parentName}","${a.phone}","${a.email}","${a.address}","${a.preferredTourDate || ''}","${a.submittedAt}","${a.status}"`
    );
    const blob = new Blob(['\uFEFF' + headers.concat(rows).join('\n')], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `경산유치원_신입생_상담원서목록_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-200">
        <div>
          <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">
            원아 모집 행정
          </span>
          <h3 className="text-xl font-bold text-slate-900 mt-1">
            신입원아 입학원서 & 방문상담 관리
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            학부모가 제출한 상담 신청을 확인하고 상태 업데이트 및 교사 상담 일지를 기록합니다.
          </p>
        </div>

        <button
          onClick={handleExportCsv}
          className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 transition-colors self-start sm:self-auto"
        >
          <Download className="w-4 h-4" />
          <span>신청자 명단 CSV 다운로드</span>
        </button>
      </div>

      {/* Filter Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1 text-xs text-slate-500 font-semibold mr-1">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            <span>필터:</span>
          </div>

          <select
            value={selectedAge}
            onChange={(e) => setSelectedAge(e.target.value)}
            className="px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg font-semibold"
          >
            <option value="전체">모든 연령반</option>
            <option value="만 3세 (5세반)">만 3세 (5세반)</option>
            <option value="만 4세 (6세반)">만 4세 (6세반)</option>
            <option value="만 5세 (7세반)">만 5세 (7세반)</option>
          </select>

          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg font-semibold"
          >
            <option value="전체">모든 진행상태</option>
            <option value="접수완료">접수완료</option>
            <option value="상담예정">상담예정</option>
            <option value="면담완료">면담완료</option>
            <option value="등록확정">등록확정</option>
          </select>
        </div>

        <div className="relative max-w-xs w-full">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="원아명, 보호자명, 연락처 검색..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Applications Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase font-semibold">
              <tr>
                <th className="py-3 px-4">번호</th>
                <th className="py-3 px-4">원아 정보</th>
                <th className="py-3 px-4">연령반</th>
                <th className="py-3 px-4">보호자 / 연락처</th>
                <th className="py-3 px-4">거주지</th>
                <th className="py-3 px-4">희망 투어일</th>
                <th className="py-3 px-4">진행 상태</th>
                <th className="py-3 px-4 text-center">상세/관리</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-12 text-center text-slate-400">
                    해당 조건의 입학 신청 내역이 없습니다.
                  </td>
                </tr>
              ) : (
                filtered.map((app) => (
                  <tr key={app.id} className="hover:bg-slate-50/80">
                    <td className="py-3 px-4 font-mono font-medium text-slate-400">{app.id}</td>
                    <td className="py-3 px-4">
                      <span className="font-bold text-slate-900 block text-xs">
                        {app.childName} ({app.childGender})
                      </span>
                      <span className="text-[11px] text-slate-400 font-mono">{app.childBirth}</span>
                    </td>
                    <td className="py-3 px-4 font-semibold text-slate-800">{app.ageGroup}</td>
                    <td className="py-3 px-4">
                      <span className="font-medium text-slate-900">{app.parentName}</span>
                      <a
                        href={`tel:${app.phone}`}
                        className="text-blue-700 block font-mono text-[11px] hover:underline"
                      >
                        {app.phone}
                      </a>
                    </td>
                    <td className="py-3 px-4 text-slate-600 max-w-[130px] truncate">
                      {app.address || '-'}
                    </td>
                    <td className="py-3 px-4 text-slate-600">
                      {app.preferredTourDate || '협의 필요'}
                    </td>
                    <td className="py-3 px-4">
                      <select
                        value={app.status}
                        onChange={(e) => updateApplicationStatus(app.id, e.target.value as any)}
                        className={`text-xs font-semibold px-2 py-1 rounded-md border ${
                          app.status === '등록확정'
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                            : app.status === '상담예정'
                            ? 'bg-blue-50 text-blue-700 border-blue-200'
                            : app.status === '면담완료'
                            ? 'bg-purple-50 text-purple-700 border-purple-200'
                            : 'bg-amber-50 text-amber-700 border-amber-200'
                        }`}
                      >
                        <option value="접수완료">접수완료</option>
                        <option value="상담예정">상담예정</option>
                        <option value="면담완료">면담완료</option>
                        <option value="등록확정">등록확정</option>
                      </select>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        <button
                          onClick={() => {
                            setActiveApp(app);
                            setEditingNote(app.notes || '');
                          }}
                          className="px-2.5 py-1 text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md"
                        >
                          상세보기
                        </button>
                        <button
                          onClick={() => {
                            if (confirm(`'${app.childName}' 원아의 신청서를 삭제하시겠습니까?`)) {
                              deleteApplication(app.id);
                            }
                          }}
                          className="p-1 text-slate-400 hover:text-red-600 rounded"
                          title="삭제"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detail Application Modal */}
      {activeApp && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-7 shadow-2xl space-y-5 animate-in fade-in duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div>
                <span className="text-xs font-mono text-blue-700">접수번호: {activeApp.id}</span>
                <h4 className="text-lg font-bold text-slate-900">
                  {activeApp.childName} 어린이 입학 상담 상세
                </h4>
              </div>
              <span className="text-xs font-mono text-slate-400">
                접수: {activeApp.submittedAt}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs bg-slate-50 p-4 rounded-xl border border-slate-200">
              <div>
                <span className="text-slate-400 block font-semibold">원아 성명 / 성별:</span>
                <span className="font-bold text-slate-900">{activeApp.childName} ({activeApp.childGender}아)</span>
              </div>
              <div>
                <span className="text-slate-400 block font-semibold">생년월일:</span>
                <span className="font-bold text-slate-900">{activeApp.childBirth}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-semibold">신청 연령반:</span>
                <span className="font-bold text-slate-900">{activeApp.ageGroup}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-semibold">보호자 성함:</span>
                <span className="font-bold text-slate-900">{activeApp.parentName}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-semibold">보호자 연락처:</span>
                <a href={`tel:${activeApp.phone}`} className="font-bold text-blue-700 underline">
                  {activeApp.phone}
                </a>
              </div>
              <div>
                <span className="text-slate-400 block font-semibold">보호자 이메일:</span>
                <span className="font-bold text-slate-900">{activeApp.email || '-'}</span>
              </div>
              <div className="col-span-2">
                <span className="text-slate-400 block font-semibold">거주지 주소:</span>
                <span className="font-bold text-slate-900">{activeApp.address || '-'}</span>
              </div>
              <div className="col-span-2">
                <span className="text-slate-400 block font-semibold">희망 방문 투어 일시:</span>
                <span className="font-bold text-slate-900">{activeApp.preferredTourDate || '협의 필요'}</span>
              </div>
            </div>

            {/* Teacher Consultation Notes */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
                <span>교사 상담 일지 및 특이사항 메모</span>
              </label>
              <textarea
                rows={3}
                value={editingNote}
                onChange={(e) => setEditingNote(e.target.value)}
                placeholder="상담 통화 내용, 알레르기 유무, 셔틀버스 정류장 협의 사항 등을 입력하세요."
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="pt-2 flex justify-between items-center">
              <button
                type="button"
                onClick={() => {
                  updateApplicationStatus(activeApp.id, activeApp.status, editingNote);
                  setActiveApp(null);
                }}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg shadow-sm"
              >
                메모 저장 및 닫기
              </button>
              <button
                type="button"
                onClick={() => setActiveApp(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
