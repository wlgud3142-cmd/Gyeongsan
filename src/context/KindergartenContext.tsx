import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  SiteInfo,
  ThemeConfig,
  Notice,
  MealItem,
  AdmissionApplication,
  GalleryPhoto,
  SeoConfig,
  StrengthItem,
} from '../types';
import {
  initialSiteInfo,
  initialThemeConfig,
  initialStrengths,
  initialNotices,
  initialMeals,
  initialApplications,
  initialGallery,
  initialSeoConfig,
} from '../data/initialData';

interface KindergartenContextType {
  siteInfo: SiteInfo;
  updateSiteInfo: (info: Partial<SiteInfo>) => void;
  themeConfig: ThemeConfig;
  updateThemeConfig: (config: Partial<ThemeConfig>) => void;
  strengths: StrengthItem[];
  updateStrength: (id: string, updated: Partial<StrengthItem>) => void;
  notices: Notice[];
  addNotice: (notice: Omit<Notice, 'id' | 'views'>) => void;
  updateNotice: (id: string, updated: Partial<Notice>) => void;
  deleteNotice: (id: string) => void;
  meals: MealItem[];
  addMeal: (meal: Omit<MealItem, 'id'>) => void;
  updateMeal: (id: string, updated: Partial<MealItem>) => void;
  deleteMeal: (id: string) => void;
  applications: AdmissionApplication[];
  addApplication: (app: Omit<AdmissionApplication, 'id' | 'submittedAt' | 'status'>) => void;
  updateApplicationStatus: (id: string, status: AdmissionApplication['status'], notes?: string) => void;
  deleteApplication: (id: string) => void;
  gallery: GalleryPhoto[];
  addGalleryPhoto: (photo: Omit<GalleryPhoto, 'id'>) => void;
  deleteGalleryPhoto: (id: string) => void;
  seoConfig: SeoConfig;
  updateSeoConfig: (seo: Partial<SeoConfig>) => void;
  currentMode: 'website' | 'admin';
  setCurrentMode: (mode: 'website' | 'admin') => void;
  activeAdminTab: string;
  setActiveAdminTab: (tab: string) => void;
  isAiModalOpen: boolean;
  setIsAiModalOpen: (open: boolean) => void;
  resetAllToDefault: () => void;
  saveFeedback: string | null;
  triggerSaveFeedback: (msg?: string) => void;
}

const KindergartenContext = createContext<KindergartenContextType | undefined>(undefined);

const CURRENT_DATA_VERSION = '2026_poster_accurate_v5';

export const KindergartenProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [siteInfo, setSiteInfo] = useState<SiteInfo>(() => {
    try {
      const v = localStorage.getItem('gs_data_version');
      if (v !== CURRENT_DATA_VERSION) return initialSiteInfo;
      const saved = localStorage.getItem('gs_site_info');
      return saved ? JSON.parse(saved) : initialSiteInfo;
    } catch {
      return initialSiteInfo;
    }
  });

  const [themeConfig, setThemeConfig] = useState<ThemeConfig>(() => {
    try {
      const saved = localStorage.getItem('gs_theme_config');
      return saved ? JSON.parse(saved) : initialThemeConfig;
    } catch {
      return initialThemeConfig;
    }
  });

  const [strengths, setStrengths] = useState<StrengthItem[]>(() => {
    try {
      const v = localStorage.getItem('gs_data_version');
      if (v !== CURRENT_DATA_VERSION) return initialStrengths;
      const saved = localStorage.getItem('gs_strengths');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.some((p: any) => p.id === 'public-trust')) {
          return parsed;
        }
      }
    } catch {}
    return initialStrengths;
  });

  const [notices, setNotices] = useState<Notice[]>(() => {
    const saved = localStorage.getItem('gs_notices');
    return saved ? JSON.parse(saved) : initialNotices;
  });

  const [meals, setMeals] = useState<MealItem[]>(() => {
    const saved = localStorage.getItem('gs_meals');
    return saved ? JSON.parse(saved) : initialMeals;
  });

  const [applications, setApplications] = useState<AdmissionApplication[]>(() => {
    const saved = localStorage.getItem('gs_applications');
    return saved ? JSON.parse(saved) : initialApplications;
  });

  const [gallery, setGallery] = useState<GalleryPhoto[]>(() => {
    const saved = localStorage.getItem('gs_gallery');
    return saved ? JSON.parse(saved) : initialGallery;
  });

  const [seoConfig, setSeoConfig] = useState<SeoConfig>(() => {
    const saved = localStorage.getItem('gs_seo_config');
    return saved ? JSON.parse(saved) : initialSeoConfig;
  });

  const [currentMode, setCurrentMode] = useState<'website' | 'admin'>('website');
  const [activeAdminTab, setActiveAdminTab] = useState<string>('overview');
  const [isAiModalOpen, setIsAiModalOpen] = useState<boolean>(false);
  const [saveFeedback, setSaveFeedback] = useState<string | null>(null);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('gs_site_info', JSON.stringify(siteInfo));
  }, [siteInfo]);

  useEffect(() => {
    localStorage.setItem('gs_theme_config', JSON.stringify(themeConfig));
  }, [themeConfig]);

  useEffect(() => {
    localStorage.setItem('gs_strengths', JSON.stringify(strengths));
  }, [strengths]);

  useEffect(() => {
    localStorage.setItem('gs_notices', JSON.stringify(notices));
  }, [notices]);

  useEffect(() => {
    localStorage.setItem('gs_meals', JSON.stringify(meals));
  }, [meals]);

  useEffect(() => {
    localStorage.setItem('gs_applications', JSON.stringify(applications));
  }, [applications]);

  useEffect(() => {
    localStorage.setItem('gs_gallery', JSON.stringify(gallery));
  }, [gallery]);

  useEffect(() => {
    localStorage.setItem('gs_seo_config', JSON.stringify(seoConfig));
  }, [seoConfig]);

  const triggerSaveFeedback = (msg = '변경사항이 성공적으로 저장되었습니다.') => {
    setSaveFeedback(msg);
    setTimeout(() => {
      setSaveFeedback(null);
    }, 2500);
  };

  const updateSiteInfo = (info: Partial<SiteInfo>) => {
    setSiteInfo((prev) => ({ ...prev, ...info }));
    triggerSaveFeedback('기본 정보가 업데이트되었습니다.');
  };

  const updateThemeConfig = (config: Partial<ThemeConfig>) => {
    setThemeConfig((prev) => ({ ...prev, ...config }));
    triggerSaveFeedback('디자인 테마가 적용되었습니다.');
  };

  const updateStrength = (id: string, updated: Partial<StrengthItem>) => {
    setStrengths((prev) => prev.map((s) => (s.id === id ? { ...s, ...updated } : s)));
    triggerSaveFeedback('특성화 교육 정보가 수정되었습니다.');
  };

  const addNotice = (noticeData: Omit<Notice, 'id' | 'views'>) => {
    const newNotice: Notice = {
      ...noticeData,
      id: `notice-${Date.now()}`,
      views: 1,
    };
    setNotices((prev) => [newNotice, ...prev]);
    triggerSaveFeedback('새 공지사항이 등록되었습니다.');
  };

  const updateNotice = (id: string, updated: Partial<Notice>) => {
    setNotices((prev) => prev.map((n) => (n.id === id ? { ...n, ...updated } : n)));
    triggerSaveFeedback('공지사항이 수정되었습니다.');
  };

  const deleteNotice = (id: string) => {
    setNotices((prev) => prev.filter((n) => n.id !== id));
    triggerSaveFeedback('공지사항이 삭제되었습니다.');
  };

  const addMeal = (mealData: Omit<MealItem, 'id'>) => {
    const newMeal: MealItem = {
      ...mealData,
      id: `meal-${Date.now()}`,
    };
    setMeals((prev) => [newMeal, ...prev]);
    triggerSaveFeedback('새 식단이 등록되었습니다.');
  };

  const updateMeal = (id: string, updated: Partial<MealItem>) => {
    setMeals((prev) => prev.map((m) => (m.id === id ? { ...m, ...updated } : m)));
    triggerSaveFeedback('식단 정보가 수정되었습니다.');
  };

  const deleteMeal = (id: string) => {
    setMeals((prev) => prev.filter((m) => m.id !== id));
    triggerSaveFeedback('식단 항목이 삭제되었습니다.');
  };

  const addApplication = (appData: Omit<AdmissionApplication, 'id' | 'submittedAt' | 'status'>) => {
    const now = new Date();
    const formatted = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    const newApp: AdmissionApplication = {
      ...appData,
      id: `app-${Date.now().toString().slice(-4)}`,
      submittedAt: formatted,
      status: '접수완료',
    };
    setApplications((prev) => [newApp, ...prev]);
    triggerSaveFeedback('입학 상담 신청서가 접수되었습니다.');
  };

  const updateApplicationStatus = (id: string, status: AdmissionApplication['status'], notes?: string) => {
    setApplications((prev) =>
      prev.map((app) =>
        app.id === id
          ? {
              ...app,
              status,
              notes: notes !== undefined ? notes : app.notes,
            }
          : app
      )
    );
    triggerSaveFeedback('신청서 상태가 변경되었습니다.');
  };

  const deleteApplication = (id: string) => {
    setApplications((prev) => prev.filter((app) => app.id !== id));
    triggerSaveFeedback('신청 내역이 삭제되었습니다.');
  };

  const addGalleryPhoto = (photoData: Omit<GalleryPhoto, 'id'>) => {
    const newPhoto: GalleryPhoto = {
      ...photoData,
      id: `gal-${Date.now()}`,
    };
    setGallery((prev) => [newPhoto, ...prev]);
    triggerSaveFeedback('새 활동 사진이 등록되었습니다.');
  };

  const deleteGalleryPhoto = (id: string) => {
    setGallery((prev) => prev.filter((g) => g.id !== id));
    triggerSaveFeedback('활동 사진이 삭제되었습니다.');
  };

  const updateSeoConfig = (seo: Partial<SeoConfig>) => {
    setSeoConfig((prev) => ({ ...prev, ...seo }));
    triggerSaveFeedback('SEO 메타 태그 설정이 저장되었습니다.');
  };

  const resetAllToDefault = () => {
    setSiteInfo(initialSiteInfo);
    setThemeConfig(initialThemeConfig);
    setStrengths(initialStrengths);
    setNotices(initialNotices);
    setMeals(initialMeals);
    setApplications(initialApplications);
    setGallery(initialGallery);
    setSeoConfig(initialSeoConfig);
    localStorage.clear();
    triggerSaveFeedback('기본 데이터로 전체 초기화되었습니다.');
  };

  return (
    <KindergartenContext.Provider
      value={{
        siteInfo,
        updateSiteInfo,
        themeConfig,
        updateThemeConfig,
        strengths,
        updateStrength,
        notices,
        addNotice,
        updateNotice,
        deleteNotice,
        meals,
        addMeal,
        updateMeal,
        deleteMeal,
        applications,
        addApplication,
        updateApplicationStatus,
        deleteApplication,
        gallery,
        addGalleryPhoto,
        deleteGalleryPhoto,
        seoConfig,
        updateSeoConfig,
        currentMode,
        setCurrentMode,
        activeAdminTab,
        setActiveAdminTab,
        isAiModalOpen,
        setIsAiModalOpen,
        resetAllToDefault,
        saveFeedback,
        triggerSaveFeedback,
      }}
    >
      {children}
    </KindergartenContext.Provider>
  );
};

export const useKindergarten = () => {
  const context = useContext(KindergartenContext);
  if (!context) {
    throw new Error('useKindergarten must be used within a KindergartenProvider');
  }
  return context;
};
