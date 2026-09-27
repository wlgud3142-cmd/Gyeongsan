import React from 'react';
import { useKindergarten } from '../context/KindergartenContext';
import { MapPin, Bus, Car, Navigation, Phone, ExternalLink } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const { siteInfo } = useKindergarten();

  return (
    <section id="location" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <span className="text-blue-700 font-bold">오시는 길</span>
            <span aria-hidden="true">·</span>
            <span>공립 단설 경산유치원</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            경산시 사동 백양로 35 (사동초 인근)<br />
            따뜻하고 밝은 배움터로 모십니다
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            사동초등학교와 인접하여 유·초 이음교육이 원활하며, 대형 63인승과 중형 25인승 통학버스가
            경산 전역(사동, 계양, 중산, 펜타힐즈, 신대, 압량, 대평, 정평, 백천, 옥산 등)을 안전하게 운행합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Map Simulation Box (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl border border-slate-200 overflow-hidden bg-slate-100 flex flex-col min-h-[380px] shadow-sm">
            <div className="bg-white p-4 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center font-bold text-xs">
                  N
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{siteInfo.name} (공립 단설)</h4>
                  <span className="text-[11px] text-slate-500">{siteInfo.address}</span>
                </div>
              </div>
              <a
                href={`https://map.naver.com/v5/search/${encodeURIComponent(siteInfo.name + ' ' + siteInfo.address)}`}
                target="_blank"
                rel="noreferrer noopener"
                className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 bg-emerald-50 px-2.5 py-1.5 rounded-lg border border-emerald-200"
              >
                <span>네이버 지도 바로보기</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Stylized Visual Map Display */}
            <div className="flex-1 bg-gradient-to-br from-slate-200 via-emerald-50 to-blue-50 relative p-6 flex flex-col items-center justify-center text-center">
              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage: 'linear-gradient(#94a3b8 1.5px, transparent 1.5px), linear-gradient(90deg, #94a3b8 1.5px, transparent 1.5px)',
                  backgroundSize: '40px 40px',
                }}
              />

              <div className="relative z-10 bg-white p-5 rounded-2xl shadow-xl border border-slate-300 max-w-sm w-full animate-bounce duration-1000">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-2 shadow-md">
                  <MapPin className="w-6 h-6" />
                </div>
                <h5 className="text-sm font-bold text-slate-900">{siteInfo.name}</h5>
                <p className="text-xs text-slate-500 mt-0.5">{siteInfo.addressDetail}</p>
                <div className="mt-3 pt-3 border-t border-slate-100 flex justify-center gap-4 text-xs font-semibold text-blue-700">
                  <span className="flex items-center gap-1">
                    <Navigation className="w-3.5 h-3.5" /> 사동초등학교 인근
                  </span>
                  <span className="flex items-center gap-1">
                    <Car className="w-3.5 h-3.5" /> 원내 안심 주차장 완비
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Transport Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wide block">
                주소 및 대표 문의처
              </span>
              <div>
                <div className="text-base font-bold text-slate-900">{siteInfo.address}</div>
                <div className="text-xs text-slate-500 mt-0.5">{siteInfo.addressDetail}</div>
              </div>
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-xs font-semibold text-slate-700">
                <a href={`tel:${siteInfo.phone}`} className="flex items-center gap-1.5 text-blue-700 font-bold hover:underline font-mono text-sm">
                  <Phone className="w-4 h-4 text-blue-600" />
                  교무실: {siteInfo.phone}
                </a>
                <span className="text-slate-400 font-mono">팩스: {siteInfo.fax}</span>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <Bus className="w-4 h-4 text-blue-600" />
                통학버스 및 대중교통 안내
              </span>
              <div className="space-y-2 text-xs text-slate-600">
                <p>
                  <strong className="text-slate-900 font-semibold">전용 통학버스:</strong> 대형(63인승) 1대, 중형(25인승) 1대 총 2대 운행, 안전 동승보호자 필수 탑승 (사동, 계양, 중산, 펜타힐즈, 신대, 압량, 대평, 정평, 백천 등 5개 코스)
                </p>
                <p>
                  <strong className="text-slate-900 font-semibold">자가용 방문:</strong> 경산 사동초등학교 맞은편 방향 진입, 원내 안전 지상 주차장 이용 가능
                </p>
              </div>
            </div>

            <div className="bg-slate-900 text-white p-5 rounded-2xl flex items-center justify-between text-xs">
              <div>
                <div className="font-bold">입학 및 교육상담 직통</div>
                <div className="text-blue-300 font-mono text-sm mt-0.5">☎ 053-818-8551</div>
              </div>
              <a
                href="#admissions"
                className="px-3.5 py-2 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-500 transition-colors whitespace-nowrap"
              >
                상담원서 접수
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
