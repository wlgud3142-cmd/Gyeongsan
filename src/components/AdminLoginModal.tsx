import React, { useState, useEffect, useRef } from 'react';
import { useKindergarten } from '../context/KindergartenContext';
import { Lock, Shield, Eye, EyeOff, AlertCircle, X, KeyRound, Sparkles } from 'lucide-react';

export const AdminLoginModal: React.FC = () => {
  const {
    isAdminModalOpen,
    setIsAdminModalOpen,
    loginAdmin,
    adminEmail,
    siteInfo,
  } = useKindergarten();

  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isShaking, setIsShaking] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isAdminModalOpen) {
      setPassword('');
      setErrorMsg(null);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isAdminModalOpen]);

  if (!isAdminModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!password.trim()) {
      setErrorMsg('비밀번호를 입력해 주세요.');
      inputRef.current?.focus();
      return;
    }

    const success = loginAdmin(password);
    if (!success) {
      setErrorMsg('비밀번호가 일치하지 않습니다. 다시 확인해 주세요.');
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
      inputRef.current?.focus();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="admin-auth-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        className={`bg-white rounded-3xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden transition-transform duration-200 ${
          isShaking ? 'animate-bounce' : ''
        }`}
      >
        {/* Modal Top Header */}
        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white p-6 relative">
          <button
            onClick={() => setIsAdminModalOpen(false)}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
            aria-label="닫기"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="w-12 h-12 rounded-2xl bg-blue-600/30 border border-blue-400/40 flex items-center justify-center mb-3">
            <Lock className="w-6 h-6 text-blue-300" />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-400/30 uppercase tracking-wider">
              원무 보안 인증
            </span>
            <span className="text-xs text-slate-400">교직원 전용</span>
          </div>

          <h2 id="admin-auth-title" className="text-xl font-bold mt-1 text-white tracking-tight">
            {siteInfo.name} 관리자 로그인
          </h2>
          <p className="text-xs text-slate-300 mt-1 leading-relaxed">
            원아 모집 현황, 예비학부모 원서 확인 및 사이트 콘텐츠 수정을 위해 관리자 비밀번호를 입력해 주세요.
          </p>
        </div>

        {/* Modal Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Registered Admin Account Badge */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-slate-600">
              <Shield className="w-4 h-4 text-blue-600 shrink-0" />
              <span className="font-semibold text-slate-700">관리자 계정:</span>
            </div>
            <span className="font-mono text-blue-700 font-semibold truncate max-w-[200px]">
              {adminEmail}
            </span>
          </div>

          {/* Password Input */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700">
              관리자 비밀번호
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <KeyRound className="w-4 h-4" />
              </div>
              <input
                ref={inputRef}
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errorMsg) setErrorMsg(null);
                }}
                placeholder="비밀번호 입력"
                className="w-full pl-10 pr-10 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600"
                tabIndex={-1}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Error Message */}
          {errorMsg && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2 animate-in fade-in">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Reassurance Tip */}
          <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100 text-xs text-blue-900 leading-relaxed">
            <div className="flex items-center gap-1.5 font-bold text-blue-800 mb-0.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>안내</span>
            </div>
            <p className="text-[11px] text-blue-700">
              초기 기본 비밀번호는 <strong className="font-mono bg-blue-100 px-1 py-0.5 rounded text-blue-900">1234</strong> 입니다.
              (로그인 후 관리자 대시보드에서 안전한 비밀번호로 즉시 변경 가능합니다.)
            </p>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => setIsAdminModalOpen(false)}
              className="w-1/3 py-2.5 px-4 text-xs font-semibold text-slate-600 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
            >
              닫기
            </button>
            <button
              type="submit"
              className="w-2/3 py-2.5 px-4 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>관리자 로그인</span>
            </button>
          </div>
        </form>

        {/* Footer Security Note */}
        <div className="bg-slate-50 px-6 py-3 border-t border-slate-100 text-center">
          <p className="text-[10px] text-slate-400">
            🔒 외부 공유 시 일반 학부모님에게는 관리자 버튼이 표시되지 않습니다.
          </p>
        </div>
      </div>
    </div>
  );
};
