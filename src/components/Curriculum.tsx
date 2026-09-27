import React, { useState } from 'react';
import { useKindergarten } from '../context/KindergartenContext';
import { initialAfterSchoolPrograms } from '../data/initialData';
import { Clock, BookOpen, Sun, Sparkles, Compass, HeartHandshake, Shield, Smartphone } from 'lucide-react';

export const Curriculum: React.FC = () => {
  const [selectedSubTab, setSelectedSubTab] = useState<'nuri' | 'schedule' | 'afterschool' | 'care'>('nuri');

  const nuriPillars = [
    {
      num: '01',
      title: '놀이자람 교육과정',
      desc: '충분한 유아 주도 놀이 시간 확보, 유아의 경험과 흥미 중심 수업, 교사의 따뜻한 상호작용 및 자율적 공간·자료 지원',
      tag: '유아 주도 놀이',
    },
    {
      num: '02',
      title: '창의 · 인성 교육',
      desc: '매일 나누는 인성인사, 동생-형님 마음이음 성장놀이, 다도체험 및 전통놀이, 퍼포먼스 미술놀이 및 [경산 어린작가 예술전]',
      tag: '인성 & 예술 감성',
    },
    {
      num: '03',
      title: '미래 역량 함양',
      desc: '3층 미래교실 디지털 환경 구축, 코딩로봇 활용 놀이, 크로마키 가상 배경 놀이, 디지털 문해놀이 주간 운영',
      tag: '미래교실 & AI 로봇',
    },
    {
      num: '04',
      title: '다함께 교육 (이음 & 글로벌)',
      desc: '세계시민의식을 기르는 다문화 축제의 날, 장애인식개선교육, 사동초등학교와의 유·초 이음교육, 온가족 참여 행사',
      tag: '사동초 연계 & 다문화',
    },
    {
      num: '05',
      title: '특색 놀이 활동',
      desc: '초록품 자연놀이(영남대 숲 및 사과공원 연계 전문가 숲체험, 생태 캠페인), 몸·마음 튼튼 신체놀이(축구놀이, 3세 훌라후프, 4·5세 줄넘기)',
      tag: '영남대 숲 & 스포츠',
    },
  ];

  const dailySchedule = [
    {
      time: '08:00 ~ 08:30',
      period: '아침돌봄',
      title: '아침 돌봄 및 안심 맞이',
      desc: '돌봄전담교사의 따뜻한 맞이, 조용한 휴식 및 개별 자유놀이',
      highlight: true,
    },
    {
      time: '08:30 ~ 13:00',
      period: '교육과정',
      title: '정규 유치원 교육과정 (누리과정)',
      desc: '자유놀이, 오전 간식(우유), 대·소집단 활동(이야기나누기, 동화, 동시, 미술, 신체, 음악 등), 바깥놀이(영남대 숲놀이, 텃밭 가꾸기)',
      appNotice: '※ 매일 학급별 생생한 수업이야기는 [하이클래스(HiClass)] 앱을 통해 학부모님께 공유됩니다.',
    },
    {
      time: '13:00 ~ 16:30',
      period: '방과후과정',
      title: '방과후과정 & 전문 특성화 프로그램',
      desc: '누리과정 심화활동, 문해력·수해력 쑥쑥 한글/수놀이, 영양 오후 간식, 연령별 전문 강사 특성화 프로그램 (영어, 체육, 음악, 코딩블럭)',
    },
    {
      time: '16:30 ~ 19:00',
      period: '저녁돌봄',
      title: '저녁 돌봄 (연령 혼합 놀이중심)',
      desc: '독서, 블록놀이, 보드게임, 손끝놀이 등 편안한 가정식 돌봄, 든든한 돌봄간식 제공 (보호자 대면 귀가)',
      highlight: true,
    },
  ];

  return (
    <section id="curriculum" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <span className="text-blue-700 font-bold">교육과정 안내</span>
            <span aria-hidden="true">·</span>
            <span>2019 개정 누리과정 & 방과후과정</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            놀이가 배움이 되는 유아 중심 교육<br />
            아침부터 저녁까지 빈틈없는 안심 돌봄
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            자율적인 놀이자람 교육과정과 미래교실 코딩, 전문 강사 특성화,
            그리고 맞벌이 가정을 위해 방학 중에도 연중 상시 운영되는 아침·저녁 돌봄을 제공합니다.
          </p>
        </div>

        {/* Sub-tab controls */}
        <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-xl overflow-x-auto max-w-fit mb-8">
          <button
            onClick={() => setSelectedSubTab('nuri')}
            className={`py-2 px-4 text-xs font-bold rounded-lg transition-all whitespace-nowrap ${
              selectedSubTab === 'nuri'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            💡 2019 개정 누리과정 5대 축
          </button>
          <button
            onClick={() => setSelectedSubTab('schedule')}
            className={`py-2 px-4 text-xs font-bold rounded-lg transition-all whitespace-nowrap ${
              selectedSubTab === 'schedule'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            ⏰ 하루 일과 운영표 (08:00~19:00)
          </button>
          <button
            onClick={() => setSelectedSubTab('afterschool')}
            className={`py-2 px-4 text-xs font-bold rounded-lg transition-all whitespace-nowrap ${
              selectedSubTab === 'afterschool'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            🎨 방과후 특성화 프로그램
          </button>
          <button
            onClick={() => setSelectedSubTab('care')}
            className={`py-2 px-4 text-xs font-bold rounded-lg transition-all whitespace-nowrap ${
              selectedSubTab === 'care'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            🛡️ 365 안심 돌봄교실 안내
          </button>
        </div>

        {/* Sub-tab 1: Nuri Curriculum 5 Pillars */}
        {selectedSubTab === 'nuri' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-150">
            {nuriPillars.map((p) => (
              <div key={p.num} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-blue-700">PILLAR {p.num}</span>
                    <span className="text-[11px] font-semibold text-slate-600 bg-white px-2 py-0.5 rounded border border-slate-200">
                      {p.tag}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-2">{p.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Sub-tab 2: Daily Schedule Timeline */}
        {selectedSubTab === 'schedule' && (
          <div className="space-y-4 animate-in fade-in duration-150">
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl flex items-center justify-between text-xs text-blue-900">
              <span className="flex items-center gap-1.5 font-semibold">
                <Smartphone className="w-4 h-4 text-blue-700" />
                모든 정규 수업과 활동 사진은 공인 유치원 앱 [하이클래스(HiClass)]를 통해 매일 보호자님께 투명하게 전송됩니다.
              </span>
              <span className="font-bold text-blue-700 hidden sm:inline">알림장 100% 디지털 연계</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {dailySchedule.map((s, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl border flex flex-col justify-between ${
                    s.highlight
                      ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                      : 'bg-white text-slate-800 border-slate-200 shadow-sm'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-xs font-mono font-bold flex items-center gap-1.5 ${s.highlight ? 'text-blue-300' : 'text-blue-700'}`}>
                        <Clock className="w-3.5 h-3.5" />
                        {s.time}
                      </span>
                      <span className={`text-[11px] font-semibold px-2 py-0.5 rounded ${s.highlight ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700'}`}>
                        {s.period}
                      </span>
                    </div>

                    <h4 className="text-base font-bold mb-2">{s.title}</h4>
                    <p className={`text-xs leading-relaxed ${s.highlight ? 'text-slate-300' : 'text-slate-600'}`}>
                      {s.desc}
                    </p>

                    {s.appNotice && (
                      <p className="mt-3 text-[11px] font-semibold text-blue-600 bg-blue-50 p-2.5 rounded-lg border border-blue-100">
                        {s.appNotice}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Sub-tab 3: After School Specialty Programs */}
        {selectedSubTab === 'afterschool' && (
          <div className="space-y-6 animate-in fade-in duration-150">
            <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl text-xs text-amber-950 flex items-center justify-between">
              <span className="font-semibold">
                경산유치원 방과후 특성화 프로그램은 전액 무상 지원(학부모 수강료 부담금 0원)으로 운영됩니다.
              </span>
              <span className="font-bold text-amber-800">전문 강사진 직강</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {initialAfterSchoolPrograms.map((prog, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <span className="text-xs font-bold text-blue-700">[{prog.category}]</span>
                      <span className="text-[11px] font-mono text-slate-500">{prog.frequency}</span>
                    </div>
                    <h4 className="text-base font-bold text-slate-900 mt-2 mb-1">{prog.subject}</h4>
                    <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded inline-block mb-2">
                      대상: {prog.target}
                    </span>
                    <p className="text-xs text-slate-500 leading-relaxed">{prog.description}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-400">
                    * 정규 유치원 교실 및 강당, 미래교실 진행
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Sub-tab 4: Safe Care (돌봄교실) */}
        {selectedSubTab === 'care' && (
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 animate-in fade-in duration-150">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">
                맞벌이 가정을 위한 든든한 울타리
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                365 연중 안심 돌봄교실 운영 안내
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                학기 중뿐만 아니라 방학(여름, 겨울, 봄)과 재량휴업일에도 단 하루의 돌봄 공백 없이 책임집니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-slate-900 block">돌봄 대상 및 운영 시간</span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  맞벌이 가정, 저소득층, 한부모 가정 등 돌봄이 필요한 모든 원아를 대상으로
                  <strong> 아침(08:00~08:30)</strong> 및 <strong>저녁(16:30~19:00)</strong> 돌봄을 무료로 제공합니다.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-slate-900 block">연중 상시 운영 (방학 포함)</span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  여름방학, 겨울방학, 학년말 봄방학 및 학교 재량휴업일에도 동일하게 운영되어
                  일하는 학부모님의 육아 걱정을 덜어드립니다. (토요일 및 법정 공휴일 제외)
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-slate-900 block">놀이중심 돌봄 & 돌봄간식</span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  독서, 블록놀이, 보드게임, 손끝놀이 등 편안하고 아늑한 환경에서 돌봄전담교사가 지도하며
                  영양 가득한 맞춤 돌봄간식을 제공합니다.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-slate-900 block">안전한 대면 등하원 원칙</span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  유아의 신체 안전과 신원 확인을 위해 돌봄 시간 등하원은 보호자가 직접 인계하는
                  대면 등하원을 철저히 준수합니다.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
