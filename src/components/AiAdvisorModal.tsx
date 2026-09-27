import React, { useState, useRef, useEffect } from 'react';
import { useKindergarten } from '../context/KindergartenContext';
import { X, Send, Sparkles, Bot, User, Phone, CheckCircle, ArrowRight } from 'lucide-react';

interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}

export const AiAdvisorModal: React.FC = () => {
  const { siteInfo, isAiModalOpen, setIsAiModalOpen } = useKindergarten();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      content: `안녕하십니까! 공립 단설 경산유치원 24시간 AI 입학 상담 멘토 '경산이음'입니다.\n\n사랑하는 자녀의 2026학년도 입학, 단설유치원만의 우수한 교육환경, 영남대 숲체험 & 3층 디지털 미래교실, 학부모 부담금 0원(전액 무료), 67인승/25인승 무료 통학버스 노선 등 예비학부모님께서 궁금하신 점을 편안하게 물어보세요!`,
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestedQuestions = [
    '2026학년도 신입원아 모집 일정과 학부모 부담금 0원 혜택이 궁금해요',
    '대형 67인승 / 중형 25인승 무료 통학버스 노선과 탑승 장소는 어디인가요?',
    '맞벌이 가정을 위한 아침·저녁 안심돌봄(07:30~19:00)과 방학 중 운영이 가능한가요?',
    '영남대 숲체험과 3층 디지털 미래교실(VR/로봇코딩)은 어떻게 진행되나요?',
    '영양사 단독 직영 안심 급식과 정규 간호사 보건교사 상주 케어가 궁금해요',
    '단설유치원의 장점과 국가 임용고시 합격 정규 교사진에 대해 알려주세요',
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isAiModalOpen) {
      scrollToBottom();
    }
  }, [messages, isAiModalOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const question = textToSend || inputText;
    if (!question.trim() || isLoading) return;

    const newMessages: ChatMessage[] = [...messages, { role: 'user', content: question }];
    setMessages(newMessages);
    setInputText('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/gemini/advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userQuestion: question,
          messages: newMessages.slice(-6),
        }),
      });

      if (!response.ok) {
        throw new Error('AI 서비스 통신 오류가 발생했습니다.');
      }

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        {
          role: 'model',
          content: data.reply || '답변을 불러오는 중 문제가 발생했습니다.',
        },
      ]);
    } catch (err: any) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'model',
          content: '죄송합니다. AI 상담 시스템에 일시적인 연결 지연이 발생했습니다. 원무실(053-810-7000)로 연락 주시면 상세히 안내해 드리겠습니다.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isAiModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full h-[85vh] max-h-[700px] flex flex-col shadow-2xl overflow-hidden border border-slate-200 animate-in fade-in duration-200">
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-5 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-bold text-white">
                  경산유치원 AI 입학상담실
                </h3>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-semibold px-2 py-0.5 rounded border border-emerald-400/30">
                  실시간 운영중
                </span>
              </div>
              <p className="text-[11px] text-slate-300">
                입학 절차 · 숲체험 & 몬테소리 · 급식 · 통학버스 24시 안내
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsAiModalOpen(false)}
            className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message Stream */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-slate-50/50">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-3 ${
                msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${
                  msg.role === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-900 text-white shadow-sm'
                }`}
              >
                {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div
                className={`max-w-[82%] rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed whitespace-pre-wrap ${
                  msg.role === 'user'
                    ? 'bg-blue-600 text-white rounded-tr-none'
                    : 'bg-white text-slate-800 border border-slate-200/80 shadow-sm rounded-tl-none'
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-white border border-slate-200 px-4 py-3 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-bounce" />
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-bounce [animation-delay:0.2s]" />
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-bounce [animation-delay:0.4s]" />
                <span className="text-xs text-slate-500 ml-1">경산유치원 교육정보 확인 중...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Quick Question Chips */}
        <div className="px-4 py-2 bg-slate-100/70 border-t border-slate-200 overflow-x-auto flex gap-1.5 scrollbar-none">
          {suggestedQuestions.map((q, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleSendMessage(q)}
              className="text-[11px] bg-white hover:bg-blue-50 hover:text-blue-700 text-slate-600 px-3 py-1.5 rounded-lg border border-slate-200 whitespace-nowrap transition-colors"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="p-3 sm:p-4 bg-white border-t border-slate-200 flex items-center gap-2"
        >
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="입학 및 교육과정에 대해 궁금한 점을 입력해 주세요..."
            className="flex-1 px-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={!inputText.trim() || isLoading}
            className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-colors"
          >
            <Send className="w-4 h-4" />
            <span className="hidden sm:inline">전송</span>
          </button>
        </form>

        {/* Footer Direct Phone Hint */}
        <div className="px-4 py-2 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
          <span>대면 상담 및 1:1 원 투어: <strong>053-810-7000</strong></span>
          <button
            onClick={() => {
              setIsAiModalOpen(false);
              const el = document.getElementById('admissions');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-blue-700 font-bold hover:underline"
          >
            원서 접수 폼 바로가기 &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};
