/**
 * Color Constants for Vibe Coding Project
 * 
 * 피그마 파운데이션 노드(1:7593)에서 추출한 실제 색상 데이터 기반
 * 다크모드 및 라이트모드 모두 지원하는 완전한 색상 토큰 시스템
 * 
 * @source Figma Foundation Node: 1:7593
 * @channel 69rudqh7
 * @updated 2024.10
 */

// ============= PRIMARY COLOR SYSTEM (Blue) =============
// 피그마 Blue 팔레트 - 메인 브랜드 색상
export const PRIMARY = {
  5: '#f0f7ff',     // Blue/05
  10: '#dbeeff',    // Blue/10
  20: '#bddbff',    // Blue/20
  30: '#93beff',    // Blue/30
  40: '#6da5fa',    // Blue/40 - System color
  50: '#497cff',    // Blue/50
  60: '#3a5cf3',    // Blue/60 - System color
  70: '#274ae1',    // Blue/70
  80: '#1530a6',    // Blue/80
  90: '#0b2184',    // Blue/90
} as const;

// ============= NEUTRAL SYSTEM (Gray) =============
// 피그마 Gray 팔레트 - 텍스트, 배경, 경계선 등
export const NEUTRAL = {
  0: '#ffffff',     // White
  5: '#f2f2f2',     // Gray/05
  10: '#e4e4e4',    // Gray/10
  20: '#d4d3d3',    // Gray/20
  30: '#c7c7c7',    // Gray/30
  40: '#ababab',    // Gray/40
  50: '#919191',    // Gray/50
  60: '#777777',    // Gray/60
  70: '#5f5f5f',    // Gray/70
  80: '#333333',    // Gray/80
  90: '#1c1c1c',    // Gray/90
  100: '#000000',   // Black
} as const;

// ============= SUCCESS COLOR SYSTEM (Green) =============
// 피그마 Green 팔레트 - 성공, 완료 상태
export const SUCCESS = {
  5: '#d3f3e0',     // Green/05
  10: '#92e6b9',    // Green/10
  20: '#15d66f',    // Green/20
  30: '#12b75f',    // Green/30 - Success color
  40: '#109c51',    // Green/40
  50: '#0e723c',    // Green/50
  60: '#084424',    // Green/60
} as const;

// ============= ERROR COLOR SYSTEM (Red) =============
// 피그마 Red 팔레트 - 오류, 경고 상태
export const ERROR = {
  5: '#fdd7dc',     // Red/05
  10: '#f797a4',    // Red/10
  20: '#f4677a',    // Red/20
  30: '#f03851',    // Red/30 - Error color
  40: '#e4112e',    // Red/40
  50: '#b40e24',    // Red/50
  60: '#850a1b',    // Red/60
} as const;

// ============= WARNING COLOR SYSTEM (Yellow) =============
// 피그마 Yellow 팔레트 - 주의, 알림 상태
export const WARNING = {
  5: '#ffe499',     // Yellow/05
  10: '#ffd666',    // Yellow/10
  20: '#ffc933',    // Yellow/20
  30: '#ffb300',    // Yellow/30
  40: '#eba500',    // Yellow/40
  50: '#d69600',    // Yellow/50
  60: '#b27d00',    // Yellow/60
} as const;

// ============= COOL GRAY SYSTEM =============
// 피그마 Cool Gray 팔레트 - UI 요소용 차가운 회색
export const COOL_GRAY = {
  1: '#f8f8fa',     // Cool gray/01
  5: '#f6f6f9',     // Cool gray/05
  10: '#edeef2',    // Cool gray/10
  20: '#dddfe5',    // Cool gray/20
  30: '#d2d4dd',    // Cool gray/30
  40: '#c7c9d5',    // Cool gray/40
  50: '#bbbecd',    // Cool gray/50
  60: '#b0b3c4',    // Cool gray/60
} as const;

// ============= GRADIENT SYSTEM =============
// 피그마 그라데이션 색상
export const GRADIENTS = {
  primary: {
    from: '#6da5fa',  // Primary gradient start
    to: '#92eaf5',    // Primary gradient end
    css: 'linear-gradient(135deg, #6da5fa 0%, #92eaf5 100%)',
  },
  skeleton: {
    from: 'rgba(255, 255, 255, 0)',
    middle: 'rgba(255, 255, 255, 0.6)',
    to: 'rgba(255, 255, 255, 0)',
    css: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.6) 48.5%, rgba(255, 255, 255, 0) 100%)',
  },
} as const;

// ============= SEMANTIC COLOR ALIASES =============
// 일반적인 디자인 시스템 네이밍으로 매핑
export const BLUE = PRIMARY;
export const GRAY = NEUTRAL;
export const GREEN = SUCCESS;
export const RED = ERROR;
export const YELLOW = WARNING;

// ============= SPECIAL COLORS =============
export const SPECIAL = {
  white: NEUTRAL[0],
  black: NEUTRAL[100],
  transparent: 'transparent',
  current: 'currentColor',
} as const;

// ============= THEME SYSTEM =============
// 라이트/다크 테마별 색상 매핑

export const THEME = {
  light: {
    // 배경 색상
    background: {
      primary: NEUTRAL[0],      // #ffffff - 메인 배경
      secondary: NEUTRAL[5],    // #f2f2f2 - 보조 배경
      tertiary: NEUTRAL[10],    // #e4e4e4 - 3차 배경
      elevated: NEUTRAL[0],     // #ffffff - 카드, 모달 등
      overlay: 'rgba(0, 0, 0, 0.1)', // 오버레이
    },
    
    // 텍스트 색상
    text: {
      primary: NEUTRAL[90],     // #1c1c1c - 메인 텍스트
      secondary: NEUTRAL[70],   // #5f5f5f - 보조 텍스트
      tertiary: NEUTRAL[50],    // #919191 - 3차 텍스트
      disabled: NEUTRAL[40],    // #ababab - 비활성 텍스트
      inverse: NEUTRAL[0],      // #ffffff - 역전 텍스트
      link: PRIMARY[60],        // #3a5cf3 - 링크 색상
    },
    
    // 경계선 색상
    border: {
      primary: NEUTRAL[20],     // #d4d3d3 - 기본 경계선
      secondary: NEUTRAL[30],   // #c7c7c7 - 보조 경계선
      accent: PRIMARY[30],      // #93beff - 강조 경계선
      focus: PRIMARY[60],       // #3a5cf3 - 포커스 경계선
      error: ERROR[30],         // #f03851 - 오류 경계선
      success: SUCCESS[30],     // #12b75f - 성공 경계선
      warning: WARNING[30],     // #ffb300 - 경고 경계선
    },
    
    // 표면 색상
    surface: {
      primary: NEUTRAL[0],      // #ffffff - 기본 표면
      secondary: NEUTRAL[5],    // #f2f2f2 - 보조 표면
      elevated: NEUTRAL[0],     // #ffffff - 높은 표면
      accent: PRIMARY[5],       // #f0f7ff - 강조 표면
      success: SUCCESS[5],      // #d3f3e0 - 성공 표면
      error: ERROR[5],          // #fdd7dc - 오류 표면
      warning: WARNING[5],      // #ffe499 - 경고 표면
    },
  },
  
  dark: {
    // 배경 색상 (다크 모드)
    background: {
      primary: NEUTRAL[90],     // #1c1c1c - 메인 배경
      secondary: NEUTRAL[80],   // #333333 - 보조 배경
      tertiary: NEUTRAL[70],    // #5f5f5f - 3차 배경
      elevated: NEUTRAL[80],    // #333333 - 카드, 모달 등
      overlay: 'rgba(0, 0, 0, 0.3)', // 오버레이
    },
    
    // 텍스트 색상 (다크 모드)
    text: {
      primary: NEUTRAL[0],      // #ffffff - 메인 텍스트
      secondary: NEUTRAL[10],   // #e4e4e4 - 보조 텍스트
      tertiary: NEUTRAL[30],    // #c7c7c7 - 3차 텍스트
      disabled: NEUTRAL[50],    // #919191 - 비활성 텍스트
      inverse: NEUTRAL[90],     // #1c1c1c - 역전 텍스트
      link: PRIMARY[40],        // #6da5fa - 링크 색상
    },
    
    // 경계선 색상 (다크 모드)
    border: {
      primary: NEUTRAL[70],     // #5f5f5f - 기본 경계선
      secondary: NEUTRAL[60],   // #777777 - 보조 경계선
      accent: PRIMARY[50],      // #497cff - 강조 경계선
      focus: PRIMARY[40],       // #6da5fa - 포커스 경계선
      error: ERROR[40],         // #e4112e - 오류 경계선
      success: SUCCESS[40],     // #109c51 - 성공 경계선
      warning: WARNING[40],     // #eba500 - 경고 경계선
    },
    
    // 표면 색상 (다크 모드)
    surface: {
      primary: NEUTRAL[80],     // #333333 - 기본 표면
      secondary: NEUTRAL[70],   // #5f5f5f - 보조 표면
      elevated: NEUTRAL[70],    // #5f5f5f - 높은 표면
      accent: PRIMARY[90],      // #0b2184 - 강조 표면
      success: SUCCESS[60],     // #084424 - 성공 표면
      error: ERROR[60],         // #850a1b - 오류 표면
      warning: WARNING[60],     // #b27d00 - 경고 표면
    },
  },
} as const;

// ============= CSS VARIABLES MAPPING =============
// CSS 변수로 내보낼 색상 매핑 (다크모드 자동 전환)

export const CSS_VARIABLES = {
  light: {
    // 브랜드 색상
    '--color-primary-5': PRIMARY[5],
    '--color-primary-10': PRIMARY[10],
    '--color-primary-20': PRIMARY[20],
    '--color-primary-30': PRIMARY[30],
    '--color-primary-40': PRIMARY[40],
    '--color-primary-50': PRIMARY[50],
    '--color-primary-60': PRIMARY[60],
    '--color-primary-70': PRIMARY[70],
    '--color-primary-80': PRIMARY[80],
    '--color-primary-90': PRIMARY[90],
    '--color-primary': PRIMARY[60],        // 메인 Primary
    '--color-primary-hover': PRIMARY[70],
    '--color-primary-active': PRIMARY[80],
    
    // 중성 색상
    '--color-neutral-0': NEUTRAL[0],
    '--color-neutral-5': NEUTRAL[5],
    '--color-neutral-10': NEUTRAL[10],
    '--color-neutral-20': NEUTRAL[20],
    '--color-neutral-30': NEUTRAL[30],
    '--color-neutral-40': NEUTRAL[40],
    '--color-neutral-50': NEUTRAL[50],
    '--color-neutral-60': NEUTRAL[60],
    '--color-neutral-70': NEUTRAL[70],
    '--color-neutral-80': NEUTRAL[80],
    '--color-neutral-90': NEUTRAL[90],
    '--color-neutral-100': NEUTRAL[100],
    
    // 의미적 색상
    '--color-success': SUCCESS[30],        // #12b75f
    '--color-success-light': SUCCESS[5],   // #d3f3e0
    '--color-success-hover': SUCCESS[40],
    '--color-success-active': SUCCESS[50],
    
    '--color-error': ERROR[30],            // #f03851
    '--color-error-light': ERROR[5],       // #fdd7dc
    '--color-error-hover': ERROR[40],
    '--color-error-active': ERROR[50],
    
    '--color-warning': WARNING[30],        // #ffb300
    '--color-warning-light': WARNING[5],   // #ffe499
    '--color-warning-hover': WARNING[40],
    '--color-warning-active': WARNING[50],
    
    // 테마 색상 (라이트 모드)
    '--color-bg-primary': THEME.light.background.primary,
    '--color-bg-secondary': THEME.light.background.secondary,
    '--color-bg-tertiary': THEME.light.background.tertiary,
    '--color-bg-elevated': THEME.light.background.elevated,
    
    '--color-text-primary': THEME.light.text.primary,
    '--color-text-secondary': THEME.light.text.secondary,
    '--color-text-tertiary': THEME.light.text.tertiary,
    '--color-text-disabled': THEME.light.text.disabled,
    '--color-text-inverse': THEME.light.text.inverse,
    '--color-text-link': THEME.light.text.link,
    
    '--color-border-primary': THEME.light.border.primary,
    '--color-border-secondary': THEME.light.border.secondary,
    '--color-border-accent': THEME.light.border.accent,
    '--color-border-focus': THEME.light.border.focus,
    
    '--color-surface-primary': THEME.light.surface.primary,
    '--color-surface-secondary': THEME.light.surface.secondary,
    '--color-surface-elevated': THEME.light.surface.elevated,
    '--color-surface-accent': THEME.light.surface.accent,
    
    // 그라데이션
    '--gradient-primary': GRADIENTS.primary.css,
    '--gradient-skeleton': GRADIENTS.skeleton.css,
  },
  
  dark: {
    // 브랜드 색상 (다크 모드 - 더 밝은 shade 사용)
    '--color-primary-5': PRIMARY[5],
    '--color-primary-10': PRIMARY[10],
    '--color-primary-20': PRIMARY[20],
    '--color-primary-30': PRIMARY[30],
    '--color-primary-40': PRIMARY[40],
    '--color-primary-50': PRIMARY[50],
    '--color-primary-60': PRIMARY[60],
    '--color-primary-70': PRIMARY[70],
    '--color-primary-80': PRIMARY[80],
    '--color-primary-90': PRIMARY[90],
    '--color-primary': PRIMARY[40],        // 다크모드에서 더 밝은 Primary
    '--color-primary-hover': PRIMARY[30],
    '--color-primary-active': PRIMARY[20],
    
    // 중성 색상
    '--color-neutral-0': NEUTRAL[0],
    '--color-neutral-5': NEUTRAL[5],
    '--color-neutral-10': NEUTRAL[10],
    '--color-neutral-20': NEUTRAL[20],
    '--color-neutral-30': NEUTRAL[30],
    '--color-neutral-40': NEUTRAL[40],
    '--color-neutral-50': NEUTRAL[50],
    '--color-neutral-60': NEUTRAL[60],
    '--color-neutral-70': NEUTRAL[70],
    '--color-neutral-80': NEUTRAL[80],
    '--color-neutral-90': NEUTRAL[90],
    '--color-neutral-100': NEUTRAL[100],
    
    // 의미적 색상 (다크 모드)
    '--color-success': SUCCESS[40],        // #109c51
    '--color-success-light': SUCCESS[60],  // #084424
    '--color-success-hover': SUCCESS[30],
    '--color-success-active': SUCCESS[20],
    
    '--color-error': ERROR[40],            // #e4112e
    '--color-error-light': ERROR[60],      // #850a1b
    '--color-error-hover': ERROR[30],
    '--color-error-active': ERROR[20],
    
    '--color-warning': WARNING[40],        // #eba500
    '--color-warning-light': WARNING[60],  // #b27d00
    '--color-warning-hover': WARNING[30],
    '--color-warning-active': WARNING[20],
    
    // 테마 색상 (다크 모드)
    '--color-bg-primary': THEME.dark.background.primary,
    '--color-bg-secondary': THEME.dark.background.secondary,
    '--color-bg-tertiary': THEME.dark.background.tertiary,
    '--color-bg-elevated': THEME.dark.background.elevated,
    
    '--color-text-primary': THEME.dark.text.primary,
    '--color-text-secondary': THEME.dark.text.secondary,
    '--color-text-tertiary': THEME.dark.text.tertiary,
    '--color-text-disabled': THEME.dark.text.disabled,
    '--color-text-inverse': THEME.dark.text.inverse,
    '--color-text-link': THEME.dark.text.link,
    
    '--color-border-primary': THEME.dark.border.primary,
    '--color-border-secondary': THEME.dark.border.secondary,
    '--color-border-accent': THEME.dark.border.accent,
    '--color-border-focus': THEME.dark.border.focus,
    
    '--color-surface-primary': THEME.dark.surface.primary,
    '--color-surface-secondary': THEME.dark.surface.secondary,
    '--color-surface-elevated': THEME.dark.surface.elevated,
    '--color-surface-accent': THEME.dark.surface.accent,
    
    // 그라데이션
    '--gradient-primary': GRADIENTS.primary.css,
    '--gradient-skeleton': GRADIENTS.skeleton.css,
  },
} as const;

// ============= UTILITY TYPES =============
export type ColorShade = keyof typeof PRIMARY;
export type ColorVariant = 'primary' | 'success' | 'error' | 'warning' | 'neutral';
export type ThemeMode = 'light' | 'dark';
export type ColorCategory = keyof typeof THEME.light;

// ============= UTILITY FUNCTIONS =============

/**
 * 색상 팔레트에서 특정 shade 값을 가져옵니다
 */
export const getColorValue = (color: typeof PRIMARY, shade: ColorShade): string => {
  return color[shade];
};

/**
 * 테마에 따른 색상을 가져옵니다
 */
export const getThemeColor = (
  mode: ThemeMode,
  category: ColorCategory,
  property: string
): string => {
  const themeColors = THEME[mode][category] as Record<string, string>;
  return themeColors[property] || '';
};

/**
 * CSS 변수값을 가져옵니다
 */
export const getCSSVariable = (mode: ThemeMode, variableName: string): string => {
  const variables = CSS_VARIABLES[mode] as Record<string, string>;
  return variables[variableName] || '';
};

/**
 * hex 색상에 투명도를 적용합니다 (rgba 형식 반환)
 */
export const withOpacity = (hexColor: string, opacity: number): string => {
  const hex = hexColor.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  
  return `rgba(${r}, ${g}, ${b}, ${Math.min(1, Math.max(0, opacity))})`;
};

/**
 * 색상 이름으로 적절한 팔레트와 shade를 찾습니다
 */
export const getColorByName = (colorName: string, shade: number = 50) => {
  const colorMap = {
    primary: PRIMARY,
    blue: PRIMARY,
    neutral: NEUTRAL,
    gray: NEUTRAL,
    success: SUCCESS,
    green: SUCCESS,
    error: ERROR,
    red: ERROR,
    warning: WARNING,
    yellow: WARNING,
  };
  
  const palette = colorMap[colorName.toLowerCase() as keyof typeof colorMap];
  if (!palette) return null;
  
  // 가장 가까운 shade 찾기
  const availableShades = Object.keys(palette).map(Number).sort((a, b) => a - b);
  const closestShade = availableShades.reduce((prev, curr) => 
    Math.abs(curr - shade) < Math.abs(prev - shade) ? curr : prev
  );
  
  return palette[closestShade as keyof typeof palette];
};

// ============= EXPORT ALL =============
export const COLORS = {
  PRIMARY,
  NEUTRAL,
  SUCCESS,
  ERROR,
  WARNING,
  COOL_GRAY,
  GRADIENTS,
  THEME,
  CSS_VARIABLES,
  // Aliases
  BLUE: PRIMARY,
  GRAY: NEUTRAL,
  GREEN: SUCCESS,
  RED: ERROR,
  YELLOW: WARNING,
  SPECIAL,
} as const;

// Default export
export default COLORS;
