import React, { useState } from 'react';
import { useKindergarten } from '../../context/KindergartenContext';
import { Notice } from '../../types';
import { Plus, Trash2, Pin, Sparkles, Wand2, FileText, Check, AlertCircle } from 'lucide-react';

export const NoticeManagerTab: React.FC = () => {
  const { notices, addNotice, updateNotice, deleteNotice } = useKindergarten();

  const [isCreating, setIsCreating] = useState(false);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);

  // Form states
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<Notice['category']>('가정통신문');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('교육연구부');
  const [pinned, setPinned] = useState(false);

  // AI Helper inputs
  const [aiTopic, setAiTopic] = useState('');
  const [aiKeyPoints, setAiKeyPoints] = useState('');
  const [aiTone, setAiTone] = useState('따뜻하고 신뢰감 있는');
  const [showAiHelper, setShowAiHelper] = useState(false);

  const handleGenerateWithAi = async () => {
    if (!aiTopic.trim() || !aiKeyPoints.trim()) {
      alert('주제와 주요 핵심 내용을 간단히 입력해 주세요.');
      return;
    }

    setIsAiLoading(true);
    setAiError(null);

    try {
      const res = await fetch('/api/gemini/announcement-helper', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          category,
          title: aiTopic,
          keyPoints: aiKeyPoints,
          tone: aiTone,
        }),
      });

      if (!res.ok) throw new Error('AI 생성에 실패했습니다.');

      const data = await res.json();
      if (data.content) {
        setTitle(aiTopic);
        setContent(data.content);
        setShowAiHelper(false);
      }
    } catch (err: any) {
      setAiError('AI 작성 도우미 호출 중 문제가 발생했습니다: ' + err.message);
    } finally {
      setIsAiLoading(false);
    }
  };

  const handleSaveNotice = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert('제목과 본문을 입력해 주세요.');
      return;
    }

    const today = new Date();
    const formatted = `${today.getFullYear()}. ${String(today.getMonth() + 1).padStart(2, '0')}. ${String(today.getDate()).padStart(2, '0')}`;

    addNotice({
      title,
      category,
      content,
      author,
      pinned,
      date: formatted,
    });

    // Reset
    setTitle('');
    setContent('');
    setIsCreating(false);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-200">
        <div>
          <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">
            알림 및 소통 마당
          </span>
          <h3 className="text-xl font-bold text-slate-900 mt-1">
            가정통신문 및 공지사항 관리
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Gemini AI 작성 도우미로 계절별 안내문과 공지사항 초안을 1분 만에 완성할 수 있습니다.
          </p>
        </div>

        <button
          onClick={() => {
            setIsCreating(!isCreating);
            setShowAiHelper(false);
          }}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 transition-colors self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>{isCreating ? '작성 취소' : '새 공지 등록'}</span>
        </button>
      </div>

      {/* Notice Creation Box */}
      {isCreating && (
        <div className="bg-white rounded-2xl border-2 border-blue-500/40 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-600" />
              <span>새로운 공지 / 가정통신문 작성</span>
            </h4>
            <button
              type="button"
              onClick={() => setShowAiHelper(!showAiHelper)}
              className="px-3 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold rounded-lg flex items-center gap-1.5 shadow-sm hover:opacity-95"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Gemini AI 자동작성 도우미 {showAiHelper ? '닫기' : '열기'}</span>
            </button>
          </div>

          {/* AI Drafting Assistant Helper Drawer */}
          {showAiHelper && (
            <div className="p-5 bg-gradient-to-br from-blue-50/70 to-indigo-50/50 rounded-xl border border-blue-200/80 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-900">
                  <Wand2 className="w-4 h-4 text-blue-600" />
                  <span>경산유치원 AI 공문서 작성 도우미</span>
                </div>
                <span className="text-[11px] text-blue-700">Gemini 3.8 Flash 탑재</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    주제 및 행사명
                  </label>
                  <input
                    type="text"
                    placeholder="예: 10월 성암산 가을 단풍 숲체험 및 밤줍기"
                    value={aiTopic}
                    onChange={(e) => setAiTopic(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-blue-200 rounded-lg text-xs focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    희망 문체 및 분위기
                  </label>
                  <select
                    value={aiTone}
                    onChange={(e) => setAiTone(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-blue-200 rounded-lg text-xs"
                  >
                    <option value="따뜻하고 신뢰감 있는">따뜻하고 다정한 유치원 공문체</option>
                    <option value="정중하고 격식 있는">정중하고 공식적인 입학/행정 공문체</option>
                    <option value="발랄하고 친근한">생기 넘치고 친근한 활동 안내체</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    반드시 들어갈 핵심 일정 및 준비사항
                  </label>
                  <textarea
                    rows={2}
                    placeholder="예: 일시: 10월 16일(금) 오전 10시, 장소: 성암산 숲놀이터, 준비물: 편한 운동화와 개인 물통, 비고: 우천 시 실내 교구 프로그램으로 대체"
                    value={aiKeyPoints}
                    onChange={(e) => setAiKeyPoints(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-blue-200 rounded-lg text-xs focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {aiError && (
                <div className="text-xs text-red-600 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4" />
                  <span>{aiError}</span>
                </div>
              )}

              <button
                type="button"
                onClick={handleGenerateWithAi}
                disabled={isAiLoading}
                className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                {isAiLoading ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>경산유치원 공식 공문 양식으로 본문 생성 중...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>AI로 가정통신문 본문 즉시 완성하기</span>
                  </>
                )}
              </button>
            </div>
          )}

          {/* Standard Form */}
          <form onSubmit={handleSaveNotice} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  분류 카테고리
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as any)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold"
                >
                  <option value="가정통신문">가정통신문</option>
                  <option value="공지사항">공지사항</option>
                  <option value="식단안내">식단안내</option>
                  <option value="행사안내">행사안내</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  작성 부서 / 담당자
                </label>
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold"
                />
              </div>

              <div className="flex items-center pt-6">
                <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-800">
                  <input
                    type="checkbox"
                    checked={pinned}
                    onChange={(e) => setPinned(e.target.checked)}
                    className="w-4 h-4 text-blue-600 rounded"
                  />
                  <span>상단 중요 공지로 고정 (Pin)</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                공지 제목
              </label>
              <input
                type="text"
                required
                placeholder="공지사항 제목을 입력해 주세요"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-bold text-slate-900"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                공지 본문 내용
              </label>
              <textarea
                rows={8}
                required
                placeholder="본문 내용을 입력하세요. (위의 AI 도우미를 이용하면 자동으로 완성됩니다)"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm leading-relaxed"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setIsCreating(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg"
              >
                취소
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg shadow-sm"
              >
                공지사항 즉시 게시
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Notice List */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden divide-y divide-slate-100">
        <div className="p-4 bg-slate-50 text-xs font-bold text-slate-500 uppercase flex justify-between">
          <span>게시물 목록 ({notices.length})</span>
          <span>관리 액션</span>
        </div>

        {notices.map((n) => (
          <div key={n.id} className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs">
                {n.pinned && (
                  <span className="flex items-center gap-1 text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    <Pin className="w-3 h-3" />
                    상단고정
                  </span>
                )}
                <span className="font-semibold text-blue-700">[{n.category}]</span>
                <span className="text-slate-400 font-mono text-[11px]">{n.date}</span>
                <span className="text-slate-400 text-[11px]">작성자: {n.author}</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900">{n.title}</h4>
              <p className="text-xs text-slate-500 line-clamp-1 max-w-xl">{n.content}</p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => updateNotice(n.id, { pinned: !n.pinned })}
                className={`p-2 rounded-lg border text-xs font-medium flex items-center gap-1 ${
                  n.pinned
                    ? 'bg-amber-50 text-amber-800 border-amber-200'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                }`}
                title={n.pinned ? '고정 해제' : '상단 고정'}
              >
                <Pin className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{n.pinned ? '고정해제' : '고정'}</span>
              </button>

              <button
                onClick={() => {
                  if (confirm(`'${n.title}' 공지를 삭제하시겠습니까?`)) {
                    deleteNotice(n.id);
                  }
                }}
                className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 border border-red-200 text-xs"
                title="삭제"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
