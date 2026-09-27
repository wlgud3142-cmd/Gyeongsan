import React, { useState } from 'react';
import { useKindergarten } from '../../context/KindergartenContext';
import { GalleryPhoto } from '../../types';
import {
  Camera,
  Plus,
  Trash2,
  Edit2,
  Save,
  X,
  Image as ImageIcon,
  Upload,
  CheckCircle,
  Eye,
  Sparkles,
} from 'lucide-react';

const GRADIENT_PRESETS = [
  { label: '에메랄드 그린', value: 'from-emerald-700 to-teal-900' },
  { label: '사파이어 블루', value: 'from-blue-700 to-indigo-900' },
  { label: '따뜻한 살구', value: 'from-amber-600 to-orange-800' },
  { label: '바이올렛 퍼플', value: 'from-violet-700 to-purple-900' },
  { label: '골든 옐로우', value: 'from-yellow-700 to-amber-900' },
  { label: '스카이 블루', value: 'from-sky-700 to-blue-900' },
];

const PRESET_CATEGORIES = [
  '자연생태숲놀이',
  '미래교실코딩',
  '특성화프로그램',
  '원내문화행사',
  '공모사업활동',
  '일상놀이',
];

export const GalleryManagerTab: React.FC = () => {
  const { gallery, addGalleryPhoto, updateGalleryPhoto, deleteGalleryPhoto } = useKindergarten();

  const [isAddingNew, setIsAddingNew] = useState(false);
  const [editingPhoto, setEditingPhoto] = useState<GalleryPhoto | null>(null);

  // New photo form state
  const [formData, setFormData] = useState({
    title: '',
    category: '자연생태숲놀이',
    date: new Date().toISOString().slice(0, 10).replace(/-/g, '. '),
    description: '',
    caption: '',
    colorGradient: 'from-emerald-700 to-teal-900',
    imageUrl: '',
  });

  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    target: 'new' | 'edit'
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert('파일 크기가 5MB를 초과합니다. 더 작은 이미지를 선택해 주세요.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (uploadEvent) => {
      const result = uploadEvent.target?.result as string;
      if (target === 'new') {
        setFormData((prev) => ({ ...prev, imageUrl: result }));
      } else if (editingPhoto) {
        setEditingPhoto({ ...editingPhoto, imageUrl: result });
      }
    };
    reader.readAsDataURL(file);
  };

  const handleAddNew = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      alert('사진 제목을 입력해 주세요.');
      return;
    }

    addGalleryPhoto({
      title: formData.title.trim(),
      category: formData.category.trim() || '원생활',
      date: formData.date.trim() || new Date().toISOString().slice(0, 10).replace(/-/g, '. '),
      description: formData.description.trim() || formData.title.trim(),
      caption: formData.caption.trim() || formData.title.trim(),
      colorGradient: formData.colorGradient,
      imageUrl: formData.imageUrl.trim() || undefined,
    });

    setFormData({
      title: '',
      category: '자연생태숲놀이',
      date: new Date().toISOString().slice(0, 10).replace(/-/g, '. '),
      description: '',
      caption: '',
      colorGradient: 'from-emerald-700 to-teal-900',
      imageUrl: '',
    });
    setIsAddingNew(false);
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingPhoto) return;
    if (!editingPhoto.title.trim()) {
      alert('사진 제목을 입력해 주세요.');
      return;
    }

    updateGalleryPhoto(editingPhoto.id, {
      title: editingPhoto.title.trim(),
      category: editingPhoto.category.trim(),
      date: editingPhoto.date.trim(),
      description: editingPhoto.description.trim(),
      caption: editingPhoto.caption.trim(),
      colorGradient: editingPhoto.colorGradient,
      imageUrl: editingPhoto.imageUrl?.trim() || undefined,
    });

    setEditingPhoto(null);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
              포토 갤러리 관리
            </span>
            <span className="text-xs text-slate-500 font-semibold">총 {gallery.length}장의 사진 등록됨</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
            원 생활 & 활동 사진 실시간 등록·편집
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            숲체험, 미래교실 코딩, 생태 텃밭, 원내 행사 등 사진을 직접 업로드하거나 내용을 언제든지 자유롭게 추가·수정할 수 있습니다.
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            setIsAddingNew(!isAddingNew);
            setEditingPhoto(null);
          }}
          className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 shadow-sm shrink-0 self-start sm:self-auto"
        >
          {isAddingNew ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
          <span>{isAddingNew ? '등록 닫기' : '새 사진 등록하기'}</span>
        </button>
      </div>

      {/* New Photo Registration Form */}
      {isAddingNew && (
        <form
          onSubmit={handleAddNew}
          className="bg-white rounded-2xl border-2 border-blue-400 p-6 sm:p-7 shadow-md space-y-5 animate-in slide-in-from-top-3 duration-200"
        >
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Camera className="w-4 h-4 text-blue-600" />
              <span>새로운 원 생활 사진 추가</span>
            </h3>
            <span className="text-xs text-slate-400">* 등록 즉시 홈페이지 갤러리에 노출됩니다</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                사진 제목 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="예: 영남대 숲과 함께하는 사계절 숲놀이"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                카테고리 (직접 입력 또는 선택)
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  list="new-categories"
                  placeholder="카테고리명 입력"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-blue-500"
                />
                <datalist id="new-categories">
                  {PRESET_CATEGORIES.map((cat) => (
                    <option key={cat} value={cat} />
                  ))}
                </datalist>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">촬영 / 활동 날짜</label>
              <input
                type="text"
                placeholder="예: 2026. 09. 28"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Photo File Upload & URL Input */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                사진 이미지 (내 PC/휴대폰에서 사진 파일 첨부)
              </label>
              <div className="flex items-center gap-2">
                <label className="px-3.5 py-2.5 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 rounded-xl text-xs font-bold cursor-pointer flex items-center gap-1.5 transition-colors shrink-0">
                  <Upload className="w-3.5 h-3.5" />
                  <span>사진 파일 선택</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e, 'new')}
                    className="hidden"
                  />
                </label>
                <input
                  type="url"
                  placeholder="또는 이미지 웹 URL 주소 입력"
                  value={formData.imageUrl}
                  onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                  className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-500 font-mono"
                />
              </div>
              {formData.imageUrl && (
                <div className="mt-2 flex items-center gap-2">
                  <img
                    src={formData.imageUrl}
                    alt="미리보기"
                    className="w-12 h-12 rounded-lg object-cover border border-slate-200 shadow-xs"
                  />
                  <span className="text-[11px] text-emerald-700 font-bold">이미지가 첨부되었습니다.</span>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, imageUrl: '' })}
                    className="text-[11px] text-red-600 underline ml-auto"
                  >
                    삭제
                  </button>
                </div>
              )}
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-700 mb-1">
                간단 캡션 문구 (카드 하단에 작게 표시)
              </label>
              <input
                type="text"
                placeholder="예: 영남대 숲에서 만나는 자연체험"
                value={formData.caption}
                onChange={(e) => setFormData({ ...formData, caption: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-700 mb-1">
                상세 활동 설명 (사진 클릭 시 팝업에 표시)
              </label>
              <textarea
                rows={3}
                placeholder="아이들이 어떤 활동을 주도적으로 진행했는지 상세히 설명해 주세요."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                대표 배경 그래디언트 테마 (이미지가 없을 때 적용)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-6 gap-2">
                {GRADIENT_PRESETS.map((g) => (
                  <button
                    key={g.value}
                    type="button"
                    onClick={() => setFormData({ ...formData, colorGradient: g.value })}
                    className={`p-2.5 rounded-xl border text-center transition-all ${
                      formData.colorGradient === g.value
                        ? 'border-blue-600 ring-2 ring-blue-400 font-bold'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className={`h-8 rounded-lg bg-gradient-to-r ${g.value} mb-1.5 shadow-xs`} />
                    <span className="text-[10px] text-slate-600 block truncate">{g.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={() => setIsAddingNew(false)}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl text-xs font-semibold"
            >
              취소
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm"
            >
              <Save className="w-4 h-4" />
              <span>사진 등록 완료</span>
            </button>
          </div>
        </form>
      )}

      {/* Edit Photo Form Modal */}
      {editingPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setEditingPhoto(null)}
        >
          <form
            onSubmit={handleSaveEdit}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-7 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto space-y-4"
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Edit2 className="w-4 h-4 text-blue-600" />
                <span>사진 내용 및 이미지 수정</span>
              </h3>
              <button
                type="button"
                onClick={() => setEditingPhoto(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">사진 제목</label>
              <input
                type="text"
                required
                value={editingPhoto.title}
                onChange={(e) => setEditingPhoto({ ...editingPhoto, title: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">카테고리</label>
                <input
                  type="text"
                  list="edit-categories"
                  value={editingPhoto.category}
                  onChange={(e) => setEditingPhoto({ ...editingPhoto, category: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-blue-500"
                />
                <datalist id="edit-categories">
                  {PRESET_CATEGORIES.map((cat) => (
                    <option key={cat} value={cat} />
                  ))}
                </datalist>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">날짜</label>
                <input
                  type="text"
                  value={editingPhoto.date}
                  onChange={(e) => setEditingPhoto({ ...editingPhoto, date: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                사진 변경 (새 파일 첨부 또는 이미지 URL 입력)
              </label>
              <div className="flex items-center gap-2">
                <label className="px-3.5 py-2.5 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 rounded-xl text-xs font-bold cursor-pointer flex items-center gap-1.5 transition-colors shrink-0">
                  <Upload className="w-3.5 h-3.5" />
                  <span>새 파일 선택</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e, 'edit')}
                    className="hidden"
                  />
                </label>
                <input
                  type="url"
                  placeholder="이미지 URL 주소"
                  value={editingPhoto.imageUrl || ''}
                  onChange={(e) => setEditingPhoto({ ...editingPhoto, imageUrl: e.target.value })}
                  className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-500 font-mono"
                />
              </div>
              {editingPhoto.imageUrl && (
                <div className="mt-2 flex items-center gap-2">
                  <img
                    src={editingPhoto.imageUrl}
                    alt="미리보기"
                    className="w-12 h-12 rounded-lg object-cover border border-slate-200 shadow-xs"
                  />
                  <span className="text-[11px] text-emerald-700 font-bold">이미지가 적용되었습니다.</span>
                  <button
                    type="button"
                    onClick={() => setEditingPhoto({ ...editingPhoto, imageUrl: '' })}
                    className="text-[11px] text-red-600 underline ml-auto"
                  >
                    이미지 제거
                  </button>
                </div>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">캡션 문구</label>
              <input
                type="text"
                value={editingPhoto.caption}
                onChange={(e) => setEditingPhoto({ ...editingPhoto, caption: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">상세 활동 설명</label>
              <textarea
                rows={3}
                value={editingPhoto.description}
                onChange={(e) => setEditingPhoto({ ...editingPhoto, description: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => setEditingPhoto(null)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl text-xs font-semibold"
              >
                취소
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm"
              >
                <Save className="w-4 h-4" />
                <span>수정 내용 저장</span>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Gallery Photos List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {gallery.map((photo) => (
          <div
            key={photo.id}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            {/* Visual Thumbnail */}
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
              {photo.imageUrl ? (
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div
                  className={`w-full h-full bg-gradient-to-br ${photo.colorGradient} p-4 flex flex-col justify-between text-white`}
                >
                  <div className="flex justify-between items-center text-xs">
                    <span className="bg-white/20 px-2 py-0.5 rounded text-[10px] font-semibold backdrop-blur-xs">
                      {photo.category}
                    </span>
                    <span className="text-[11px] opacity-80 font-mono">{photo.date}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Camera className="w-8 h-8 opacity-70" />
                  </div>
                  <span className="text-xs truncate opacity-90">{photo.caption}</span>
                </div>
              )}
            </div>

            {/* Content & Actions */}
            <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                  <span className="font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                    {photo.category}
                  </span>
                  <span className="font-mono">{photo.date}</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 leading-snug line-clamp-1 mt-1">
                  {photo.title}
                </h4>
                <p className="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">
                  {photo.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <button
                  type="button"
                  onClick={() => {
                    setEditingPhoto({ ...photo });
                    setIsAddingNew(false);
                  }}
                  className="px-3 py-1.5 bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 rounded-lg text-xs font-bold flex items-center gap-1 transition-colors"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                  <span>수정</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (confirm(`'${photo.title}' 사진을 갤러리에서 삭제하시겠습니까?`)) {
                      deleteGalleryPhoto(photo.id);
                    }
                  }}
                  className="px-2.5 py-1 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>삭제</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
