/**
 * URL Constants for Vibe Coding Project
 *
 * 프로젝트에서 사용되는 모든 URL 경로와 관련 메타데이터 관리
 * 다이나믹 라우팅 지원 및 페이지별 레이아웃 설정 제공
 *
 * @updated 2024.10
 */

// ============= ACCESS LEVEL ENUM =============
// 페이지 접근 권한 레벨
export const ACCESS_LEVEL = {
  PUBLIC: 'PUBLIC', // 누구나 접근 가능
  MEMBER_ONLY: 'MEMBER_ONLY', // 회원 전용
} as const;

// ============= LAYOUT CONFIGURATION TYPES =============
// 페이지별 레이아웃 구성 요소
export interface LayoutConfig {
  header: {
    visible: boolean;
    logo: boolean;
    darkModeToggle: boolean;
  };
  banner: boolean;
  navigation: boolean;
  footer: boolean;
}

export interface RouteConfig {
  path: string;
  accessLevel: (typeof ACCESS_LEVEL)[keyof typeof ACCESS_LEVEL];
  layout: LayoutConfig;
  description?: string; // 페이지 설명 (선택사항)
}

// ============= ROUTE PATHS =============
// 라우트 경로 상수

export const AUTH_ROUTES = {
  LOGIN: '/auth/login',
  SIGNUP: '/auth/signup',
} as const;

export const DIARY_ROUTES = {
  LIST: '/diaries',
  DETAIL: (id: string | number) => `/diaries/${id}`,
  DETAIL_PATH: '/diaries/[id]', // 라우트 패턴용
} as const;

export const PICTURE_ROUTES = {
  LIST: '/pictures',
} as const;

// ============= ROUTE CONFIGURATIONS =============
// 각 라우트별 상세 설정

export const ROUTE_CONFIG: Record<string, RouteConfig> = {
  // 인증 페이지
  LOGIN: {
    path: AUTH_ROUTES.LOGIN,
    accessLevel: ACCESS_LEVEL.PUBLIC,
    description: '로그인 페이지',
    layout: {
      header: {
        visible: false,
        logo: false,
        darkModeToggle: false,
      },
      banner: false,
      navigation: false,
      footer: false,
    },
  },
  SIGNUP: {
    path: AUTH_ROUTES.SIGNUP,
    accessLevel: ACCESS_LEVEL.PUBLIC,
    description: '회원가입 페이지',
    layout: {
      header: {
        visible: false,
        logo: false,
        darkModeToggle: false,
      },
      banner: false,
      navigation: false,
      footer: false,
    },
  },

  // 일기 페이지
  DIARY_LIST: {
    path: DIARY_ROUTES.LIST,
    accessLevel: ACCESS_LEVEL.PUBLIC,
    description: '일기 목록 페이지',
    layout: {
      header: {
        visible: true,
        logo: true,
        darkModeToggle: false,
      },
      banner: true,
      navigation: true,
      footer: true,
    },
  },
  DIARY_DETAIL: {
    path: DIARY_ROUTES.DETAIL_PATH,
    accessLevel: ACCESS_LEVEL.MEMBER_ONLY,
    description: '일기 상세 페이지 (회원 전용)',
    layout: {
      header: {
        visible: true,
        logo: true,
        darkModeToggle: false,
      },
      banner: false,
      navigation: false,
      footer: true,
    },
  },

  // 사진 페이지
  PICTURE_LIST: {
    path: PICTURE_ROUTES.LIST,
    accessLevel: ACCESS_LEVEL.PUBLIC,
    description: '사진 목록 페이지',
    layout: {
      header: {
        visible: true,
        logo: true,
        darkModeToggle: false,
      },
      banner: true,
      navigation: true,
      footer: true,
    },
  },
} as const;

// ============= ALL ROUTES =============
// 모든 라우트 통합

export const ROUTES = {
  AUTH: AUTH_ROUTES,
  DIARY: DIARY_ROUTES,
  PICTURE: PICTURE_ROUTES,
} as const;

// ============= UTILITY TYPES =============
export type AccessLevel = (typeof ACCESS_LEVEL)[keyof typeof ACCESS_LEVEL];
export type RouteKey = keyof typeof ROUTE_CONFIG;
export type AuthRoute = (typeof AUTH_ROUTES)[keyof typeof AUTH_ROUTES];
export type DiaryRoute = string; // DIARY_ROUTES.DETAIL은 함수이므로 string으로
export type PictureRoute = (typeof PICTURE_ROUTES)[keyof typeof PICTURE_ROUTES];

// ============= UTILITY FUNCTIONS =============

/**
 * 경로로 라우트 설정을 가져옵니다
 */
export const getRouteConfigByPath = (path: string): RouteConfig | null => {
  // 정확한 경로 매칭 시도
  const exactMatch = Object.values(ROUTE_CONFIG).find((config) => config.path === path);
  if (exactMatch) return exactMatch;

  // 다이나믹 라우트 처리 (예: /diaries/123 -> /diaries/[id])
  const dynamicMatch = Object.values(ROUTE_CONFIG).find((config) => {
    if (!config.path.includes('[')) return false;

    const configParts = config.path.split('/');
    const pathParts = path.split('/');

    if (configParts.length !== pathParts.length) return false;

    return configParts.every((part, index) => {
      if (part.startsWith('[') && part.endsWith(']')) return true;
      return part === pathParts[index];
    });
  });

  return dynamicMatch || null;
};

/**
 * 라우트 키로 설정을 가져옵니다
 */
export const getRouteConfigByKey = (key: RouteKey): RouteConfig => {
  return ROUTE_CONFIG[key];
};

/**
 * 경로의 접근 레벨을 확인합니다
 */
export const getAccessLevel = (path: string): AccessLevel | null => {
  const config = getRouteConfigByPath(path);
  return config ? config.accessLevel : null;
};

/**
 * 경로의 레이아웃 설정을 가져옵니다
 */
export const getLayoutConfig = (path: string): LayoutConfig | null => {
  const config = getRouteConfigByPath(path);
  return config ? config.layout : null;
};

/**
 * 회원 전용 페이지인지 확인합니다
 */
export const isMemberOnlyRoute = (path: string): boolean => {
  const accessLevel = getAccessLevel(path);
  return accessLevel === ACCESS_LEVEL.MEMBER_ONLY;
};

/**
 * 공개 페이지인지 확인합니다
 */
export const isPublicRoute = (path: string): boolean => {
  const accessLevel = getAccessLevel(path);
  return accessLevel === ACCESS_LEVEL.PUBLIC;
};

/**
 * 헤더를 표시해야 하는지 확인합니다
 */
export const shouldShowHeader = (path: string): boolean => {
  const layout = getLayoutConfig(path);
  return layout?.header.visible ?? true;
};

/**
 * 로고를 표시해야 하는지 확인합니다
 */
export const shouldShowLogo = (path: string): boolean => {
  const layout = getLayoutConfig(path);
  return layout?.header.logo ?? true;
};

/**
 * 다크모드 토글을 표시해야 하는지 확인합니다
 */
export const shouldShowDarkModeToggle = (path: string): boolean => {
  const layout = getLayoutConfig(path);
  return layout?.header.darkModeToggle ?? false;
};

/**
 * 배너를 표시해야 하는지 확인합니다
 */
export const shouldShowBanner = (path: string): boolean => {
  const layout = getLayoutConfig(path);
  return layout?.banner ?? false;
};

/**
 * 네비게이션을 표시해야 하는지 확인합니다
 */
export const shouldShowNavigation = (path: string): boolean => {
  const layout = getLayoutConfig(path);
  return layout?.navigation ?? false;
};

/**
 * 푸터를 표시해야 하는지 확인합니다
 */
export const shouldShowFooter = (path: string): boolean => {
  const layout = getLayoutConfig(path);
  return layout?.footer ?? true;
};

/**
 * 다이나믹 라우트인지 확인합니다
 */
export const isDynamicRoute = (path: string): boolean => {
  return path.includes('[') && path.includes(']');
};

/**
 * 다이나믹 라우트 파라미터를 추출합니다
 */
export const extractRouteParams = (pattern: string, path: string): Record<string, string> | null => {
  const patternParts = pattern.split('/');
  const pathParts = path.split('/');

  if (patternParts.length !== pathParts.length) {
    return null;
  }

  const params: Record<string, string> = {};

  for (let i = 0; i < patternParts.length; i++) {
    const patternPart = patternParts[i];
    const pathPart = pathParts[i];

    if (patternPart.startsWith('[') && patternPart.endsWith(']')) {
      const paramName = patternPart.slice(1, -1);
      params[paramName] = pathPart;
    } else if (patternPart !== pathPart) {
      return null;
    }
  }

  return params;
};

/**
 * 현재 경로가 특정 라우트 그룹에 속하는지 확인합니다
 */
export const isInRouteGroup = (path: string, group: 'AUTH' | 'DIARY' | 'PICTURE'): boolean => {
  const groupRoutes = ROUTES[group];

  return Object.values(groupRoutes).some((route) => {
    if (typeof route === 'function') return false;
    return path === route || path.startsWith(route + '/');
  });
};

/**
 * 일기 상세 경로를 생성합니다
 */
export const createDiaryDetailPath = (id: string | number): string => {
  return DIARY_ROUTES.DETAIL(id);
};

/**
 * 모든 공개 라우트 목록을 가져옵니다
 */
export const getPublicRoutes = (): RouteConfig[] => {
  return Object.values(ROUTE_CONFIG).filter((config) => config.accessLevel === ACCESS_LEVEL.PUBLIC);
};

/**
 * 모든 회원 전용 라우트 목록을 가져옵니다
 */
export const getMemberOnlyRoutes = (): RouteConfig[] => {
  return Object.values(ROUTE_CONFIG).filter((config) => config.accessLevel === ACCESS_LEVEL.MEMBER_ONLY);
};

/**
 * 특정 레이아웃 요소가 표시되는 모든 라우트를 가져옵니다
 */
export const getRoutesWithLayoutElement = (element: 'header' | 'banner' | 'navigation' | 'footer'): RouteConfig[] => {
  return Object.values(ROUTE_CONFIG).filter((config) => {
    if (element === 'header') return config.layout.header.visible;
    return config.layout[element];
  });
};

/**
 * 라우트 경로들을 배열로 반환합니다 (sitemap 생성 등에 활용)
 */
export const getAllRoutePaths = (): string[] => {
  return Object.values(ROUTE_CONFIG).map((config) => config.path);
};

/**
 * 정적 라우트만 반환합니다 (다이나믹 라우트 제외)
 */
export const getStaticRoutePaths = (): string[] => {
  return getAllRoutePaths().filter((path) => !isDynamicRoute(path));
};

/**
 * 다이나믹 라우트만 반환합니다
 */
export const getDynamicRoutePaths = (): string[] => {
  return getAllRoutePaths().filter((path) => isDynamicRoute(path));
};

/**
 * URL 경로가 유효한 라우트인지 확인합니다
 */
export const isValidRoute = (path: string): boolean => {
  return getRouteConfigByPath(path) !== null;
};

/**
 * 라우트 키 목록을 반환합니다
 */
export const getRouteKeys = (): RouteKey[] => {
  return Object.keys(ROUTE_CONFIG) as RouteKey[];
};

/**
 * 라우트 설명을 가져옵니다
 */
export const getRouteDescription = (path: string): string | null => {
  const config = getRouteConfigByPath(path);
  return config?.description || null;
};

// ============= ROUTE NAVIGATION HELPERS =============
// 라우트 네비게이션을 위한 헬퍼 함수들

/**
 * 로그인 페이지로 이동하기 위한 경로를 반환합니다
 */
export const getLoginPath = (): string => AUTH_ROUTES.LOGIN;

/**
 * 회원가입 페이지로 이동하기 위한 경로를 반환합니다
 */
export const getSignupPath = (): string => AUTH_ROUTES.SIGNUP;

/**
 * 일기 목록 페이지로 이동하기 위한 경로를 반환합니다
 */
export const getDiaryListPath = (): string => DIARY_ROUTES.LIST;

/**
 * 사진 목록 페이지로 이동하기 위한 경로를 반환합니다
 */
export const getPictureListPath = (): string => PICTURE_ROUTES.LIST;

// ============= EXPORT ALL =============
export const URL = {
  ACCESS_LEVEL,
  ROUTES,
  ROUTE_CONFIG,
  AUTH_ROUTES,
  DIARY_ROUTES,
  PICTURE_ROUTES,
} as const;

// Default export
export default URL;
