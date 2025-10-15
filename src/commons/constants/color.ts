/**
 * Color Constants for Vibe Coding Project
 *
 * 현대적인 디자인 시스템을 위한 색상 체계
 * Tailwind CSS와 호환되는 색상 팔레트
 */

// Primary Colors - 메인 브랜드 컬러
export const PRIMARY = {
  50: '#f0f9ff',
  100: '#e0f2fe',
  200: '#bae6fd',
  300: '#7dd3fc',
  400: '#38bdf8',
  500: '#0ea5e9',
  600: '#0284c7',
  700: '#0369a1',
  800: '#075985',
  900: '#0c4a6e',
  950: '#082f49',
} as const;

// Secondary Colors - 보조 컬러
export const SECONDARY = {
  50: '#f8fafc',
  100: '#f1f5f9',
  200: '#e2e8f0',
  300: '#cbd5e1',
  400: '#94a3b8',
  500: '#64748b',
  600: '#475569',
  700: '#334155',
  800: '#1e293b',
  900: '#0f172a',
  950: '#020617',
} as const;

// Accent Colors - 강조 컬러
export const ACCENT = {
  50: '#fefce8',
  100: '#fef9c3',
  200: '#fef08a',
  300: '#fde047',
  400: '#facc15',
  500: '#eab308',
  600: '#ca8a04',
  700: '#a16207',
  800: '#854d0e',
  900: '#713f12',
  950: '#422006',
} as const;

// Semantic Colors - 의미적 컬러
export const SUCCESS = {
  50: '#f0fdf4',
  100: '#dcfce7',
  200: '#bbf7d0',
  300: '#86efac',
  400: '#4ade80',
  500: '#22c55e',
  600: '#16a34a',
  700: '#15803d',
  800: '#166534',
  900: '#14532d',
  950: '#052e16',
} as const;

export const WARNING = {
  50: '#fffbeb',
  100: '#fef3c7',
  200: '#fde68a',
  300: '#fcd34d',
  400: '#fbbf24',
  500: '#f59e0b',
  600: '#d97706',
  700: '#b45309',
  800: '#92400e',
  900: '#78350f',
  950: '#451a03',
} as const;

export const ERROR = {
  50: '#fef2f2',
  100: '#fee2e2',
  200: '#fecaca',
  300: '#fca5a5',
  400: '#f87171',
  500: '#ef4444',
  600: '#dc2626',
  700: '#b91c1c',
  800: '#991b1b',
  900: '#7f1d1d',
  950: '#450a0a',
} as const;

export const INFO = {
  50: '#eff6ff',
  100: '#dbeafe',
  200: '#bfdbfe',
  300: '#93c5fd',
  400: '#60a5fa',
  500: '#3b82f6',
  600: '#2563eb',
  700: '#1d4ed8',
  800: '#1e40af',
  900: '#1e3a8a',
  950: '#172554',
} as const;

// Neutral Colors - 중성 컬러 (텍스트, 배경 등)
export const NEUTRAL = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#e5e5e5',
  300: '#d4d4d4',
  400: '#a3a3a3',
  500: '#737373',
  600: '#525252',
  700: '#404040',
  800: '#262626',
  900: '#171717',
  950: '#0a0a0a',
} as const;

// Grayscale - 회색조
export const GRAY = NEUTRAL;

// Special Colors - 특수 컬러
export const SPECIAL = {
  white: '#ffffff',
  black: '#000000',
  transparent: 'transparent',
  current: 'currentColor',
} as const;

// Gradient Colors - 그라데이션용 컬러
export const GRADIENT = {
  primary: {
    from: PRIMARY[400],
    to: PRIMARY[600],
  },
  secondary: {
    from: SECONDARY[200],
    to: SECONDARY[500],
  },
  accent: {
    from: ACCENT[400],
    to: ACCENT[600],
  },
  sunset: {
    from: '#ff7e5f',
    to: '#feb47b',
  },
  ocean: {
    from: '#2196f3',
    to: '#21cbf3',
  },
  forest: {
    from: '#56ab2f',
    to: '#a8e6cf',
  },
} as const;

// Theme Colors - 테마별 컬러 (다크/라이트 모드)
export const THEME = {
  light: {
    background: {
      primary: SPECIAL.white,
      secondary: NEUTRAL[50],
      tertiary: NEUTRAL[100],
    },
    text: {
      primary: NEUTRAL[900],
      secondary: NEUTRAL[700],
      tertiary: NEUTRAL[500],
      inverse: SPECIAL.white,
    },
    border: {
      primary: NEUTRAL[200],
      secondary: NEUTRAL[300],
    },
    surface: {
      primary: SPECIAL.white,
      secondary: NEUTRAL[50],
      elevated: SPECIAL.white,
    },
  },
  dark: {
    background: {
      primary: NEUTRAL[900],
      secondary: NEUTRAL[800],
      tertiary: NEUTRAL[700],
    },
    text: {
      primary: NEUTRAL[50],
      secondary: NEUTRAL[200],
      tertiary: NEUTRAL[400],
      inverse: NEUTRAL[900],
    },
    border: {
      primary: NEUTRAL[700],
      secondary: NEUTRAL[600],
    },
    surface: {
      primary: NEUTRAL[800],
      secondary: NEUTRAL[700],
      elevated: NEUTRAL[700],
    },
  },
} as const;

// Color Utilities - 컬러 유틸리티 타입
export type ColorShade = keyof typeof PRIMARY;
export type ColorVariant = 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'info';
export type ThemeMode = 'light' | 'dark';

// Color Functions - 컬러 함수들
export const getColorValue = (color: typeof PRIMARY, shade: ColorShade): string => {
  return color[shade];
};

export const getThemeColor = (mode: ThemeMode, category: keyof typeof THEME.light) => {
  return THEME[mode][category];
};

// CSS Variables for Dynamic Theming - 동적 테마를 위한 CSS 변수
export const CSS_VARIABLES = {
  light: {
    '--color-primary': PRIMARY[500],
    '--color-secondary': SECONDARY[500],
    '--color-accent': ACCENT[500],
    '--color-success': SUCCESS[500],
    '--color-warning': WARNING[500],
    '--color-error': ERROR[500],
    '--color-info': INFO[500],
    '--color-background': THEME.light.background.primary,
    '--color-text': THEME.light.text.primary,
    '--color-border': THEME.light.border.primary,
  },
  dark: {
    '--color-primary': PRIMARY[400],
    '--color-secondary': SECONDARY[400],
    '--color-accent': ACCENT[400],
    '--color-success': SUCCESS[400],
    '--color-warning': WARNING[400],
    '--color-error': ERROR[400],
    '--color-info': INFO[400],
    '--color-background': THEME.dark.background.primary,
    '--color-text': THEME.dark.text.primary,
    '--color-border': THEME.dark.border.primary,
  },
} as const;

// Export all colors as a single object
export const COLORS = {
  PRIMARY,
  SECONDARY,
  ACCENT,
  SUCCESS,
  WARNING,
  ERROR,
  INFO,
  NEUTRAL,
  GRAY,
  SPECIAL,
  GRADIENT,
  THEME,
} as const;

export default COLORS;
