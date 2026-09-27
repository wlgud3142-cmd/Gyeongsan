import React, { useState } from 'react';
import { useKindergarten } from '../context/KindergartenContext';
import { getAccentStyles } from '../utils/themeHelper';
import {
  Building2,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  Clock,
  BookOpen,
  Award,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

export const DanseolIntroSection: React.FC = () => {
  const { themeConfig } = useKindergarten();
  const accent = getAccentStyles(themeConfig.accentColor);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const danseolPillars = [
    {
      icon: <Building2 className="w-6 h-6 text-blue-700" />,
      title: '유아만을 위한 독립 기관',
      subtitle: '유아 전문 단독 교육기관',
      description:
        '유아의 발달과 성장에 온전히 집중할 수 있도록 설립된 전문 교육기관으로, 유아 중심의 행정·재정 지원과 39명의 교직원이 원팀으로 최적의 교육 환경을 제공합니다.',
      tags: ['유아 전용 독립 건물', '유아 맞춤 행정 지원', '전문 교직원 39명 상주'],
    },
    {
      icon: <Sparkles className="w-6 h-6 text-amber-600" />,
      title: '유아 중심의 교육과정',
      subtitle: '2019 개정 누리과정 전문 운영',
      description:
        '유아의 발달 단계와 무한한 흥미를 깊이 있게 고려한 유아 주도 놀이 중심 교육과정을 전문적으로 운영하며, 풍부한 놀이자료와 교사의 따뜻한 상호작용으로 배움을 확장합니다.',
      tags: ['충분한 놀이시간 보장', '유아 주도 놀이자람', '풍성한 특성화 프로그램'],
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      title: '안전하고 쾌적한 교육 환경',
      subtitle: '유아 신체 눈높이 맞춤 시설',
      description:
        '유아만을 위한 전용 공간과 안전 시설 속에서 더 안전하고 쾌적하게 배움이 이루어집니다. 정규 보건교사와 영양사가 상주하며, 2026 교육환경 개선사업 선정으로 미래형 배움터를 선사합니다.',
      tags: ['정규 보건교사 상주', '영양사 단독 직영 급식', '3층 미래교실 구축'],
    },
  ];

  const faqs = [
    {
      q: '공립유치원은 프로그램이 적지 않을까요?',
      subQ: '다양한 활동이 부족할까 염려되시나요?',
      answer:
        'NO! 다양한 교육청 공모사업 선정으로 더욱 풍성하게 운영됩니다. 2026학년도 다문화교육 선도학교, 방과후 특색유치원, 유·초이음교육, 교육발전특구 오감놀이, 지속가능발전 유아 생태전환교육 등 다채로운 특색 프로그램과 현장체험학습이 가득합니다.',
      badges: ['다문화 선도학교', '방과후 특색유치원', '유·초이음 공모', '오감놀이 공모', '생태전환교육'],
    },
    {
      q: '공립유치원은 방학이 길지 않을까요?',
      subQ: '방학 중 맞벌이 돌봄이 걱정되시나요?',
      answer:
        'NO! 방학은 있어도 아이들을 위한 안심 돌봄은 단 하루도 멈추지 않습니다! 방학 중 방과후과정과 함께 아침(07:30~08:30)부터 저녁(16:30~19:00)까지 엄마품 돌봄유치원을 연중무휴(토·공휴일 제외)로 운영하여 맞벌이 가정의 돌봄 공백을 완벽히 해결합니다.',
      badges: ['연중 안심 돌봄', '아침 07:30~08:30', '저녁 16:30~19:00', '방학 중 방과후 운영'],
    },
    {
      q: '공립유치원은 세심한 교육이 어려울까요?',
      subQ: '아이 한 명 한 명을 잘 챙겨줄 수 있을까요?',
      answer:
        'NO! 국가 임용고시로 선발된 전문성을 갖춘 정규 교사가 함께합니다. 전 학급 국가 임용시험 합격 정규 교사진이 아이들의 개별 발달과 놀이를 세심하게 관찰하고 기록하며, 학부모님과 매일 모바일 알림장(하이클래스)으로 긴밀히 소통합니다.',
      badges: ['국가 임용시험 합격 정규교사', '전문 놀이관찰', '1:1 성장지원', '하이클래스 매일 소통'],
    },
    {
      q: '공립은 한글을 가르치지 않는다는데 맞나요?',
      subQ: '초등학교 입학 전 한글 교육이 걱정되시나요?',
      answer:
        'NO! 무리한 주입식이 아닌 놀이와 경험으로 자연스럽고 탄탄하게 배웁니다! 풍부한 그림책 읽기, 글자놀이, 생활 속 언어 탐색, 재미있는 우리말 보물찾기, 생각대통령 말놀이 및 키즈토리 역사이야기 활동을 통해 문해력과 표현력이 쑥쑥 자랍니다.',
      badges: ['그림책 놀이', '글자놀이', '생활 속 언어', '재미있는 우리말', '문해력 쑥쑥'],
    },
  ];

  return (
    <section id="danseol" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <span className="text-blue-700 font-bold bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
              공립 단설의 가치
            </span>
            <span aria-hidden="true">·</span>
            <span>경산유치원</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight [text-wrap:balance]">
            단설유치원이란?<br />
            <span className="text-blue-700">유아만을 위해 단독으로 설립·운영</span>되는 공립유치원입니다.
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed [text-wrap:balance]">
            경산유치원은 유아의 발달과 성장에 온전히 집중할 수 있도록 단독으로 설립된 공립 교육기관입니다.
            유아 맞춤형 전용 시설, 전문 정규 교사진, 그리고 전액 무상 지원(학부모 부담금 0원)으로
            아이의 가장 행복하고 안전한 하루를 열어줍니다.
          </p>
        </div>

        {/* 3 Core Pillars of Danseol Kindergarten */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {danseolPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 hover:bg-white rounded-2xl p-7 border border-slate-200/80 hover:border-blue-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center">
                    {pillar.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    PILLAR 0{idx + 1}
                  </span>
                </div>

                <span className="text-[11px] font-semibold text-blue-700 uppercase tracking-wide block mb-1">
                  {pillar.subtitle}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60 space-y-1.5">
                {pillar.tags.map((tag, tIdx) => (
                  <div key={tIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{tag}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Danseol Kindergarten Q&A Box (학부모님들이 자주 궁금해하는 4가지 오해와 진실) */}
        <div className="rounded-3xl bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-900 text-white p-7 sm:p-10 shadow-xl overflow-hidden relative">
          <div className="relative z-10">
            <div className="max-w-2xl mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-blue-200 text-xs font-semibold mb-3 border border-white/15">
                <HelpCircle className="w-3.5 h-3.5 text-blue-300" />
                <span>단설유치원, 이렇게 생각하셨나요?</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                학부모님들이 자주 궁금해하는 4가지 오해와 진실
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                공립 단설 경산유치원에 대한 궁금증을 입학설명회 공식 자료를 토대로 명쾌하게 안내해 드립니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className={`cursor-pointer rounded-2xl p-5 transition-all border ${
                      isOpen
                        ? 'bg-white text-slate-900 border-white shadow-lg'
                        : 'bg-white/10 hover:bg-white/15 text-white border-white/15'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <span
                          className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                            isOpen ? 'bg-blue-600 text-white' : 'bg-white/20 text-white'
                          }`}
                        >
                          0{idx + 1}
                        </span>
                        <div>
                          <h4 className="text-sm font-bold leading-snug">
                            {faq.q}
                          </h4>
                          <span
                            className={`text-[11px] block mt-0.5 ${
                              isOpen ? 'text-slate-500' : 'text-slate-300'
                            }`}
                          >
                            {faq.subQ}
                          </span>
                        </div>
                      </div>
                      <div className="shrink-0 mt-1">
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-blue-600" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-400" />
                        )}
                      </div>
                    </div>

                    {isOpen && (
                      <div className="mt-4 pt-4 border-t border-slate-100 space-y-3 animate-in fade-in duration-150">
                        <p className="text-xs text-slate-700 leading-relaxed">
                          {faq.answer}
                        </p>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {faq.badges.map((b, bIdx) => (
                            <span
                              key={bIdx}
                              className="px-2 py-0.5 bg-blue-50 text-blue-800 text-[10px] font-bold rounded border border-blue-200"
                            >
                              #{b}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
