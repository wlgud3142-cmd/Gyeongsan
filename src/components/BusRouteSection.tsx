import React, { useState } from 'react';
import { initialBusRoutes } from '../data/initialData';
import { Bus, Clock, ShieldCheck, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';

export const BusRouteSection: React.FC = () => {
  const [selectedBus, setSelectedBus] = useState<'1호차' | '2호차'>('1호차');

  const filteredRoutes = initialBusRoutes.filter((r) =>
    selectedBus === '1호차' ? r.busNumber.includes('1호차') : r.busNumber.includes('2호차')
  );

  return (
    <section id="bus-routes" className="py-20 bg-slate-50/60 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <span className="text-blue-700 font-bold">안심 통학버스 노선</span>
            <span aria-hidden="true">·</span>
            <span>경산 전역 5개 맞춤 코스</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            대형 67인승 & 중형 25인승 통학버스<br />
            안전 동승보호자와 함께 안심 등하원
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            경산유치원은 대형버스 1대(67인승)와 중형버스 1대(25인승) 총 2대의 전용 통학차량을 운행하며,
            모든 차량에 전문 안전 동승보호자가 탑승하여 집 앞 승강장부터 교실까지 안전하게 인솔합니다 (차량비 무료).
          </p>
        </div>

        {/* Bus Selector Tabs */}
        <div className="flex items-center gap-2 p-1.5 bg-slate-200/70 rounded-xl max-w-sm mb-8">
          <button
            onClick={() => setSelectedBus('1호차')}
            className={`flex-1 py-2.5 px-4 text-xs sm:text-sm font-bold rounded-lg transition-all ${
              selectedBus === '1호차'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            🚌 1호차 (대형 67인승)
          </button>
          <button
            onClick={() => setSelectedBus('2호차')}
            className={`flex-1 py-2.5 px-4 text-xs sm:text-sm font-bold rounded-lg transition-all ${
              selectedBus === '2호차'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            🚐 2호차 (중형 25인승)
          </button>
        </div>

        {/* Bus Routes Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRoutes.map((route, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between space-y-5"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-xs">
                      <Bus className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{route.courseName}</h4>
                      <span className="text-[11px] text-slate-400 font-mono">{route.busType}</span>
                    </div>
                  </div>

                  <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2 py-1 rounded flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {route.departureTime} 출발
                  </span>
                </div>

                {/* Stops Timeline */}
                <div className="pt-4 space-y-2 relative before:absolute before:left-3 before:top-6 before:bottom-4 before:w-0.5 before:bg-blue-100">
                  {route.stops.map((stop, sIdx) => {
                    const isLast = sIdx === route.stops.length - 1;
                    return (
                      <div key={sIdx} className="flex items-start gap-3 relative z-10">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-[10px] font-bold ${
                            isLast
                              ? 'bg-emerald-600 text-white shadow-sm'
                              : 'bg-white border-2 border-blue-400 text-blue-700 shadow-sm'
                          }`}
                        >
                          {isLast ? '도착' : sIdx + 1}
                        </div>
                        <span
                          className={`text-xs pt-0.5 leading-snug ${
                            isLast ? 'font-bold text-emerald-800' : 'text-slate-700 font-medium'
                          }`}
                        >
                          {stop}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  동승보호자 상시 탑승
                </span>
                <span>승차 무료</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bus Safety Notice */}
        <div className="mt-8 p-4 bg-white rounded-xl border border-slate-200 text-xs text-slate-500 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span className="flex items-center gap-1.5">
            <AlertCircle className="w-4 h-4 text-amber-500 shrink-0" />
            ※ 통학차량 노선 및 승하차 시간은 매 학년도 원아 거주지 분포 및 도로 상황에 따라 일부 조정될 수 있습니다.
          </span>
          <a
            href="tel:053-818-8551"
            className="text-blue-700 font-bold hover:underline shrink-0"
          >
            노선 경유 문의: 053-818-8551 &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};
