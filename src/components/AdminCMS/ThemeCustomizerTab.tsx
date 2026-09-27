import React from 'react';
import { useKindergarten } from '../../context/KindergartenContext';
import { AccentColor, FontStyle } from '../../types';
import { getAccentStyles } from '../../utils/themeHelper';
import { Palette, Type, Check, Sparkles } from 'lucide-react';

export const ThemeCustomizerTab: React.FC = () => {
  const { themeConfig, updateThemeConfig, siteInfo } = useKindergarten();
  const currentAccent = getAccentStyles(themeConfig.accentColor);

  const colorOptions: { id: AccentColor; name: string; hex: string; desc: string }[] = [
    {
      id: 'royal-blue',
      name: '로열 딥블루 (Royal Blue)',
      hex: '#1D4ED8',
      desc: '신뢰감과 품격이 넘치는 경산유치원 공식 시그니처 블루',
    },
    {
      id: 'classic-navy',
      name: '클래식 네이비 (Classic Navy)',
      hex: '#0F275A',
      desc: '차분하고 권위 있는 정통 사립 명문 유치원 분위기',
    },
    {
      id: 'sapphire',
      name: '사파이어 스카이 (Sapphire)',
      hex: '#0284C7',
      desc: '밝고 맑은 아이들의 동심을 표현하는 청명한 블루',
    },
    {
      id: 'forest-blue',
      name: '포레스트 시안 블루 (Forest Cyan)',
      hex: '#0E7490',
      desc: '성암산 숲체험 생태 자연과 어우러지는 청록빛 딥블루',
    },
    {
      id: 'midnight',
      name: '미드나잇 오션 (Midnight)',
      hex: '#1E293B',
      desc: '모던 럭셔리 미니멀리즘과 하이엔드 모노톤 배색',
    },
  ];

  const fontOptions: { id: FontStyle; name: string; sample: string; desc: string }[] = [
    {
      id: 'pretendard',
      name: '프리텐다드 (Pretendard)',
      sample: '아이의 생각이 숲처럼 푸르게 자라납니다',
      desc: '가독성이 가장 뛰어난 프리미엄 모던 고딕체 (기본 권장)',
    },
    {
      id: 'dodum',
      name: '고운돋움 (Gowun Dodum)',
      sample: '아이의 생각이 숲처럼 푸르게 자라납니다',
      desc: '동화책처럼 다정하고 포근한 유아 교육 맞춤 감성 폰트',
    },
    {
      id: 'serif',
      name: '노토 세리프 (Noto Serif KR)',
      sample: '아이의 생각이 숲처럼 푸르게 자라납니다',
      desc: '기품 있는 사립 명문 교육기관의 우아한 명조체',
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">
          디자인 아이덴티티
        </span>
        <h3 className="text-xl font-bold text-slate-900 mt-1">
          브랜드 컬러 테마 및 서체(Font) 설정
        </h3>
        <p className="text-xs text-slate-500 mt-0.5">
          선택하신 포인트 컬러와 폰트는 즉시 홈페이지 전체 내비게이션, 버튼, 배너에 실시간 적용됩니다.
        </p>
      </div>

      {/* Color Accent Picker */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <Palette className="w-5 h-5 text-blue-600" />
          <h4 className="text-sm font-bold text-slate-900">
            1. 포인트 브랜드 컬러 (Blue Accent)
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {colorOptions.map((opt) => {
            const isSelected = themeConfig.accentColor === opt.id;
            return (
              <div
                key={opt.id}
                onClick={() => updateThemeConfig({ accentColor: opt.id })}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex items-start gap-3 ${
                  isSelected
                    ? 'border-blue-600 bg-blue-50/30 shadow-sm'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div
                  className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center text-white shadow-sm font-bold"
                  style={{ backgroundColor: opt.hex }}
                >
                  {isSelected && <Check className="w-5 h-5" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 truncate">
                      {opt.name}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">{opt.hex}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                    {opt.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Font Selector */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <Type className="w-5 h-5 text-blue-600" />
          <h4 className="text-sm font-bold text-slate-900">
            2. 대표 국문 타이포그래피 (Font)
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {fontOptions.map((opt) => {
            const isSelected = themeConfig.fontStyle === opt.id;
            return (
              <div
                key={opt.id}
                onClick={() => updateThemeConfig({ fontStyle: opt.id })}
                className={`p-5 rounded-xl border-2 cursor-pointer transition-all space-y-3 ${
                  isSelected
                    ? 'border-blue-600 bg-blue-50/30 shadow-sm'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900">{opt.name}</span>
                  {isSelected && (
                    <span className="text-[11px] font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded">
                      적용중
                    </span>
                  )}
                </div>
                <div
                  className={`text-sm text-slate-900 font-semibold p-3 bg-slate-50 rounded-lg border border-slate-100 ${
                    opt.id === 'dodum'
                      ? 'font-dodum'
                      : opt.id === 'serif'
                      ? 'font-serif-kr'
                      : 'font-sans'
                  }`}
                >
                  {opt.sample}
                </div>
                <p className="text-[11px] text-slate-500 leading-snug">{opt.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Live Preview Swatch */}
      <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-slate-700">
            현재 테마 실시간 컴포넌트 프리뷰
          </span>
          <span className="text-xs font-mono text-slate-400">
            테마: {currentAccent.name}
          </span>
        </div>

        <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-xl text-white flex items-center justify-center font-bold text-xl shadow-sm"
              style={{ backgroundColor: currentAccent.hex }}
            >
              경
            </div>
            <div>
              <div className="text-base font-bold text-slate-900">{siteInfo.name}</div>
              <div className="text-xs text-slate-500">2027학년도 신입원아 모집 및 원 투어</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              style={{ backgroundColor: currentAccent.hex }}
              className="px-4 py-2.5 text-xs font-bold text-white rounded-xl shadow-sm"
            >
              원서접수 신청
            </button>
            <div
              className="px-3 py-1.5 rounded-lg text-xs font-semibold"
              style={{
                backgroundColor: currentAccent.hex + '15',
                color: currentAccent.hex,
              }}
            >
              인증 우수기관
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
