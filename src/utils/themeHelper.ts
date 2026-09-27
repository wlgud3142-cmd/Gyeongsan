import { AccentColor, FontStyle } from '../types';

export const getAccentStyles = (accent: AccentColor) => {
  switch (accent) {
    case 'classic-navy':
      return {
        bgPrimary: 'bg-[#0F275A]',
        bgPrimaryHover: 'hover:bg-[#0B1E45]',
        textPrimary: 'text-[#0F275A]',
        borderPrimary: 'border-[#0F275A]',
        bgLight: 'bg-[#F0F4FA]',
        borderLight: 'border-[#D4E0F0]',
        ringPrimary: 'focus:ring-[#0F275A]',
        hex: '#0F275A',
        name: '클래식 네이비',
      };
    case 'sapphire':
      return {
        bgPrimary: 'bg-[#0284C7]',
        bgPrimaryHover: 'hover:bg-[#0369A1]',
        textPrimary: 'text-[#0284C7]',
        borderPrimary: 'border-[#0284C7]',
        bgLight: 'bg-[#F0F9FF]',
        borderLight: 'border-[#BAE6FD]',
        ringPrimary: 'focus:ring-[#0284C7]',
        hex: '#0284C7',
        name: '사파이어 블루',
      };
    case 'midnight':
      return {
        bgPrimary: 'bg-[#1E293B]',
        bgPrimaryHover: 'hover:bg-[#0F172A]',
        textPrimary: 'text-[#1E293B]',
        borderPrimary: 'border-[#1E293B]',
        bgLight: 'bg-[#F8FAFC]',
        borderLight: 'border-[#E2E8F0]',
        ringPrimary: 'focus:ring-[#1E293B]',
        hex: '#1E293B',
        name: '미드나잇 오션',
      };
    case 'forest-blue':
      return {
        bgPrimary: 'bg-[#0E7490]',
        bgPrimaryHover: 'hover:bg-[#155E75]',
        textPrimary: 'text-[#0E7490]',
        borderPrimary: 'border-[#0E7490]',
        bgLight: 'bg-[#ECFEFF]',
        borderLight: 'border-[#CFFAFE]',
        ringPrimary: 'focus:ring-[#0E7490]',
        hex: '#0E7490',
        name: '포레스트 시안 블루',
      };
    case 'royal-blue':
    default:
      return {
        bgPrimary: 'bg-[#1D4ED8]',
        bgPrimaryHover: 'hover:bg-[#1E40AF]',
        textPrimary: 'text-[#1D4ED8]',
        borderPrimary: 'border-[#1D4ED8]',
        bgLight: 'bg-[#EFF6FF]',
        borderLight: 'border-[#DBEAFE]',
        ringPrimary: 'focus:ring-[#1D4ED8]',
        hex: '#1D4ED8',
        name: '로열 딥블루',
      };
  }
};

export const getFontFamilyClass = (font: FontStyle) => {
  switch (font) {
    case 'dodum':
      return 'font-dodum';
    case 'serif':
      return 'font-serif-kr';
    case 'pretendard':
    default:
      return 'font-sans';
  }
};
