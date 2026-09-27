export type AccentColor = 'royal-blue' | 'classic-navy' | 'sapphire' | 'midnight' | 'forest-blue';
export type FontStyle = 'pretendard' | 'dodum' | 'serif';

export interface ThemeConfig {
  accentColor: AccentColor;
  fontStyle: FontStyle;
  borderRadius: 'standard' | 'minimal' | 'rounded';
}

export interface BusStop {
  stopName: string;
  isKey?: boolean;
}

export interface BusRouteInfo {
  busNumber: string;
  courseName: string;
  departureTime: string;
  busType: string;
  stops: string[];
}

export interface ClassInfo {
  ageGroup: string;
  classes: string[];
  capacityPerClass: number;
  totalCapacity: number;
  description: string;
}

export interface StaffBreakdown {
  department: string;
  roles: { role: string; count: number | string }[];
}

export interface FacilityFloor {
  floor: string;
  rooms: string[];
  description: string;
}

export interface SpecialActivity {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge: string;
}

export interface AfterSchoolProgram {
  category: string;
  subject: string;
  target: string;
  frequency: string;
  description: string;
}

export interface SiteInfo {
  name: string;
  institutionType: string; // "공립 단설"
  englishName: string;
  tagline: string;
  slogans: string[];
  heroHeadCopy: string;
  heroSubCopy: string;
  phone: string;
  fax: string;
  email: string;
  address: string;
  addressDetail: string;
  totalCapacity: number;
  totalClasses: number;
  enrollmentStatus: string;
  establishedYear: number;
  accreditation: string;
  tuitionNotice: string; // "학부모 부담금 0원"
  directorName: string;
  youtubeTourUrl?: string; // "유치원 환경 둘러보기 유튜브 영상 링크"
}

export interface StrengthItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  badge: string;
  iconName: string;
}

export interface Notice {
  id: string;
  title: string;
  category: '가정통신문' | '공지사항' | '식단안내' | '보건소식' | '행사안내';
  date: string;
  author: string;
  content: string;
  pinned?: boolean;
  views: number;
  attachments?: string[];
}

export interface MealItem {
  id: string;
  date: string;
  dayOfWeek: string;
  mealType: '점심' | '오전간식' | '오후간식';
  menuList: string[];
  calories: string;
  allergens: string[];
  originInfo: string;
  chefNote: string;
  isOrganicCertified: boolean;
}

export interface AdmissionApplication {
  id: string;
  childName: string;
  childBirth: string;
  childGender: '남' | '여';
  ageGroup: '만 3세 (예쁜반/튼튼반)' | '만 4세 (밝은반/고운반)' | '만 5세 (정다운반/즐거운반)';
  parentName: string;
  phone: string;
  email: string;
  address: string;
  preferredTourDate?: string;
  notes?: string;
  submittedAt: string;
  status: '접수완료' | '상담예정' | '면담완료' | '등록확정';
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: string;
  date: string;
  description: string;
  colorGradient: string;
  caption: string;
  imageUrl?: string;
}

export interface SeoConfig {
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  author: string;
  ogTitle: string;
  ogDescription: string;
  ogImageUrl: string;
  siteUrl: string;
  kakaoShareTitle: string;
  kakaoShareDesc: string;
}

export interface VisionInfo {
  motto: string;
  childImage: string;
  teacherImage: string;
  parentImage: string;
  kindergartenImage: string;
}

export interface HealthInfo {
  title: string;
  badge: string;
  nurseTitle: string;
  description: string;
  points: string[];
  facilityLocation: string;
  emergencyGuide: string;
}

export interface NutritionInfo {
  title: string;
  badge: string;
  chefTitle: string;
  description: string;
  points: string[];
  organicPartner: string;
  dailySnackGuide: string;
  allergenPolicy: string;
}

export interface AdmissionGuide {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  quotaNotice: string;
  feeNotice: string;
  busNotice: string;
  steps: { num: string; title: string; desc: string }[];
}

