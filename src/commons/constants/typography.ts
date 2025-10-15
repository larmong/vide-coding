/**
 * Typography Constants for Vibe Coding Project
 *
 * 피그마 파운데이션 노드(1:7885)에서 추출한 실제 타이포그래피 데이터 기반
 * 모바일/데스크톱, 한글/영문 폰트를 지원하는 완전한 타이포그래피 토큰 시스템
 *
 * @source Figma Foundation Node: 1:7885
 * @channel 4cnjlqfs
 * @updated 2024.10
 */

// ============= FONT FAMILIES =============
// 피그마 파운데이션에서 정의한 폰트 패밀리

export const FONT_FAMILIES = {
  // 한글 폰트
  korean: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
  
  // 영문/숫자 폰트
  english: 'SUIT Variable, "SUIT", -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", Arial, sans-serif',
  
  // 기본 폰트 (한글 우선)
  default: 'Pretendard, "SUIT Variable", -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", sans-serif',
} as const;

// ============= FONT WEIGHTS =============
// 피그마에서 사용되는 폰트 웨이트 정의

export const FONT_WEIGHTS = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
} as const;

// ============= TYPOGRAPHY TOKENS =============
// 피그마 파운데이션 노드(1:7885)에서 추출한 타이포그래피 스타일

interface TypographyStyle {
  fontFamily: string;
  fontWeight: number;
  fontSize: number;
  lineHeight: number;
  letterSpacing?: number;
}

interface ResponsiveTypographyStyle {
  mobile: TypographyStyle;
  desktop?: TypographyStyle;
}

// ============= WEB HEADLINE =============
// 웹 전용 큰 헤드라인 (Semibold 600)

export const WEB_HEADLINE = {
  headline01: {
    mobile: {
      fontFamily: FONT_FAMILIES.korean,
      fontWeight: FONT_WEIGHTS.semibold,
      fontSize: 48,
      lineHeight: 60,
      letterSpacing: 0,
    },
  },
  headline02: {
    mobile: {
      fontFamily: FONT_FAMILIES.korean,
      fontWeight: FONT_WEIGHTS.semibold,
      fontSize: 36,
      lineHeight: 48,
      letterSpacing: 0,
    },
  },
  headline03: {
    mobile: {
      fontFamily: FONT_FAMILIES.korean,
      fontWeight: FONT_WEIGHTS.semibold,
      fontSize: 28,
      lineHeight: 36,
      letterSpacing: 0,
    },
  },
} as const;

// ============= HEADLINE =============
// 모바일 헤드라인 (Bold 700, ExtraBold 800)

export const HEADLINE = {
  headline01: {
    mobile: {
      fontFamily: FONT_FAMILIES.korean,
      fontWeight: FONT_WEIGHTS.bold,
      fontSize: 24,
      lineHeight: 32,
      letterSpacing: 0,
    },
  },
  headline02: {
    mobile: {
      fontFamily: FONT_FAMILIES.korean,
      fontWeight: FONT_WEIGHTS.extrabold,
      fontSize: 22,
      lineHeight: 30,
      letterSpacing: 0,
    },
  },
  headline03: {
    mobile: {
      fontFamily: FONT_FAMILIES.korean,
      fontWeight: FONT_WEIGHTS.bold,
      fontSize: 20,
      lineHeight: 28,
      letterSpacing: 0,
    },
  },
} as const;

// ============= TITLE =============
// 타이틀 (Bold 700, Semibold 600)

export const TITLE = {
  title01: {
    mobile: {
      fontFamily: FONT_FAMILIES.korean,
      fontWeight: FONT_WEIGHTS.bold,
      fontSize: 18,
      lineHeight: 24,
      letterSpacing: 0,
    },
  },
  title02: {
    mobile: {
      fontFamily: FONT_FAMILIES.korean,
      fontWeight: FONT_WEIGHTS.bold,
      fontSize: 16,
      lineHeight: 22,
      letterSpacing: 0,
    },
  },
  title03: {
    mobile: {
      fontFamily: FONT_FAMILIES.korean,
      fontWeight: FONT_WEIGHTS.bold,
      fontSize: 14,
      lineHeight: 20,
      letterSpacing: 0,
    },
  },
  subtitle01: {
    mobile: {
      fontFamily: FONT_FAMILIES.korean,
      fontWeight: FONT_WEIGHTS.semibold,
      fontSize: 14,
      lineHeight: 22,
      letterSpacing: 0,
    },
  },
  subtitle02: {
    mobile: {
      fontFamily: FONT_FAMILIES.korean,
      fontWeight: FONT_WEIGHTS.semibold,
      fontSize: 12,
      lineHeight: 18,
      letterSpacing: 0,
    },
  },
} as const;

// ============= BODY =============
// 본문 텍스트 (Medium 500, Regular 400)

export const BODY = {
  // Medium weight variants
  body01: {
    mobile: {
      fontFamily: FONT_FAMILIES.korean,
      fontWeight: FONT_WEIGHTS.medium,
      fontSize: 16,
      lineHeight: 24,
      letterSpacing: 0,
    },
  },
  body02_m: {
    mobile: {
      fontFamily: FONT_FAMILIES.korean,
      fontWeight: FONT_WEIGHTS.medium,
      fontSize: 14,
      lineHeight: 22,
      letterSpacing: 0,
    },
  },
  body03: {
    mobile: {
      fontFamily: FONT_FAMILIES.korean,
      fontWeight: FONT_WEIGHTS.medium,
      fontSize: 12,
      lineHeight: 18,
      letterSpacing: 0,
    },
  },
  
  // Regular weight variants
  body01_regular: {
    mobile: {
      fontFamily: FONT_FAMILIES.korean,
      fontWeight: FONT_WEIGHTS.regular,
      fontSize: 16,
      lineHeight: 22,
      letterSpacing: 0,
    },
  },
  body02_s: {
    mobile: {
      fontFamily: FONT_FAMILIES.korean,
      fontWeight: FONT_WEIGHTS.regular,
      fontSize: 14,
      lineHeight: 20,
      letterSpacing: 0,
    },
  },
  body03_regular: {
    mobile: {
      fontFamily: FONT_FAMILIES.korean,
      fontWeight: FONT_WEIGHTS.regular,
      fontSize: 12,
      lineHeight: 16,
      letterSpacing: 0,
    },
  },
} as const;

// ============= CAPTION =============
// 캡션 텍스트 (Semibold 600, Medium 500)

export const CAPTION = {
  caption01: {
    mobile: {
      fontFamily: FONT_FAMILIES.korean,
      fontWeight: FONT_WEIGHTS.semibold,
      fontSize: 12,
      lineHeight: 14,
      letterSpacing: 0,
    },
  },
  caption02_m: {
    mobile: {
      fontFamily: FONT_FAMILIES.korean,
      fontWeight: FONT_WEIGHTS.semibold,
      fontSize: 10,
      lineHeight: 12,
      letterSpacing: 0,
    },
  },
  caption02_s: {
    mobile: {
      fontFamily: FONT_FAMILIES.korean,
      fontWeight: FONT_WEIGHTS.medium,
      fontSize: 10,
      lineHeight: 12,
      letterSpacing: 0,
    },
  },
  caption03: {
    mobile: {
      fontFamily: FONT_FAMILIES.korean,
      fontWeight: FONT_WEIGHTS.semibold,
      fontSize: 8,
      lineHeight: 10,
      letterSpacing: 0,
    },
  },
} as const;

// ============= RESPONSIVE TYPOGRAPHY SYSTEM =============
// 모바일/데스크톱 반응형 타이포그래피 (필요 시 확장)

export const RESPONSIVE_TYPOGRAPHY = {
  // Web Headline은 주로 데스크톱에서 사용
  webHeadline: WEB_HEADLINE,
  
  // Headline은 모바일 우선
  headline: HEADLINE,
  
  // Title/Body/Caption은 공통
  title: TITLE,
  body: BODY,
  caption: CAPTION,
} as const;

// ============= CSS VARIABLES MAPPING =============
// CSS 변수로 내보낼 타이포그래피 매핑

export const CSS_VARIABLES = {
  // Font Families
  '--font-family-korean': FONT_FAMILIES.korean,
  '--font-family-english': FONT_FAMILIES.english,
  '--font-family-default': FONT_FAMILIES.default,
  
  // Font Weights
  '--font-weight-regular': FONT_WEIGHTS.regular.toString(),
  '--font-weight-medium': FONT_WEIGHTS.medium.toString(),
  '--font-weight-semibold': FONT_WEIGHTS.semibold.toString(),
  '--font-weight-bold': FONT_WEIGHTS.bold.toString(),
  '--font-weight-extrabold': FONT_WEIGHTS.extrabold.toString(),
  
  // Web Headlines
  '--typo-web-headline01-font-size': `${WEB_HEADLINE.headline01.mobile.fontSize}px`,
  '--typo-web-headline01-line-height': `${WEB_HEADLINE.headline01.mobile.lineHeight}px`,
  '--typo-web-headline01-font-weight': WEB_HEADLINE.headline01.mobile.fontWeight.toString(),
  
  '--typo-web-headline02-font-size': `${WEB_HEADLINE.headline02.mobile.fontSize}px`,
  '--typo-web-headline02-line-height': `${WEB_HEADLINE.headline02.mobile.lineHeight}px`,
  '--typo-web-headline02-font-weight': WEB_HEADLINE.headline02.mobile.fontWeight.toString(),
  
  '--typo-web-headline03-font-size': `${WEB_HEADLINE.headline03.mobile.fontSize}px`,
  '--typo-web-headline03-line-height': `${WEB_HEADLINE.headline03.mobile.lineHeight}px`,
  '--typo-web-headline03-font-weight': WEB_HEADLINE.headline03.mobile.fontWeight.toString(),
  
  // Headlines
  '--typo-headline01-font-size': `${HEADLINE.headline01.mobile.fontSize}px`,
  '--typo-headline01-line-height': `${HEADLINE.headline01.mobile.lineHeight}px`,
  '--typo-headline01-font-weight': HEADLINE.headline01.mobile.fontWeight.toString(),
  
  '--typo-headline02-font-size': `${HEADLINE.headline02.mobile.fontSize}px`,
  '--typo-headline02-line-height': `${HEADLINE.headline02.mobile.lineHeight}px`,
  '--typo-headline02-font-weight': HEADLINE.headline02.mobile.fontWeight.toString(),
  
  '--typo-headline03-font-size': `${HEADLINE.headline03.mobile.fontSize}px`,
  '--typo-headline03-line-height': `${HEADLINE.headline03.mobile.lineHeight}px`,
  '--typo-headline03-font-weight': HEADLINE.headline03.mobile.fontWeight.toString(),
  
  // Titles
  '--typo-title01-font-size': `${TITLE.title01.mobile.fontSize}px`,
  '--typo-title01-line-height': `${TITLE.title01.mobile.lineHeight}px`,
  '--typo-title01-font-weight': TITLE.title01.mobile.fontWeight.toString(),
  
  '--typo-title02-font-size': `${TITLE.title02.mobile.fontSize}px`,
  '--typo-title02-line-height': `${TITLE.title02.mobile.lineHeight}px`,
  '--typo-title02-font-weight': TITLE.title02.mobile.fontWeight.toString(),
  
  '--typo-title03-font-size': `${TITLE.title03.mobile.fontSize}px`,
  '--typo-title03-line-height': `${TITLE.title03.mobile.lineHeight}px`,
  '--typo-title03-font-weight': TITLE.title03.mobile.fontWeight.toString(),
  
  '--typo-subtitle01-font-size': `${TITLE.subtitle01.mobile.fontSize}px`,
  '--typo-subtitle01-line-height': `${TITLE.subtitle01.mobile.lineHeight}px`,
  '--typo-subtitle01-font-weight': TITLE.subtitle01.mobile.fontWeight.toString(),
  
  '--typo-subtitle02-font-size': `${TITLE.subtitle02.mobile.fontSize}px`,
  '--typo-subtitle02-line-height': `${TITLE.subtitle02.mobile.lineHeight}px`,
  '--typo-subtitle02-font-weight': TITLE.subtitle02.mobile.fontWeight.toString(),
  
  // Body
  '--typo-body01-font-size': `${BODY.body01.mobile.fontSize}px`,
  '--typo-body01-line-height': `${BODY.body01.mobile.lineHeight}px`,
  '--typo-body01-font-weight': BODY.body01.mobile.fontWeight.toString(),
  
  '--typo-body02-m-font-size': `${BODY.body02_m.mobile.fontSize}px`,
  '--typo-body02-m-line-height': `${BODY.body02_m.mobile.lineHeight}px`,
  '--typo-body02-m-font-weight': BODY.body02_m.mobile.fontWeight.toString(),
  
  '--typo-body02-s-font-size': `${BODY.body02_s.mobile.fontSize}px`,
  '--typo-body02-s-line-height': `${BODY.body02_s.mobile.lineHeight}px`,
  '--typo-body02-s-font-weight': BODY.body02_s.mobile.fontWeight.toString(),
  
  '--typo-body03-font-size': `${BODY.body03.mobile.fontSize}px`,
  '--typo-body03-line-height': `${BODY.body03.mobile.lineHeight}px`,
  '--typo-body03-font-weight': BODY.body03.mobile.fontWeight.toString(),
  
  // Caption
  '--typo-caption01-font-size': `${CAPTION.caption01.mobile.fontSize}px`,
  '--typo-caption01-line-height': `${CAPTION.caption01.mobile.lineHeight}px`,
  '--typo-caption01-font-weight': CAPTION.caption01.mobile.fontWeight.toString(),
  
  '--typo-caption02-m-font-size': `${CAPTION.caption02_m.mobile.fontSize}px`,
  '--typo-caption02-m-line-height': `${CAPTION.caption02_m.mobile.lineHeight}px`,
  '--typo-caption02-m-font-weight': CAPTION.caption02_m.mobile.fontWeight.toString(),
  
  '--typo-caption02-s-font-size': `${CAPTION.caption02_s.mobile.fontSize}px`,
  '--typo-caption02-s-line-height': `${CAPTION.caption02_s.mobile.lineHeight}px`,
  '--typo-caption02-s-font-weight': CAPTION.caption02_s.mobile.fontWeight.toString(),
  
  '--typo-caption03-font-size': `${CAPTION.caption03.mobile.fontSize}px`,
  '--typo-caption03-line-height': `${CAPTION.caption03.mobile.lineHeight}px`,
  '--typo-caption03-font-weight': CAPTION.caption03.mobile.fontWeight.toString(),
} as const;

// ============= UTILITY TYPES =============
export type FontFamily = keyof typeof FONT_FAMILIES;
export type FontWeight = keyof typeof FONT_WEIGHTS;
export type WebHeadlineVariant = keyof typeof WEB_HEADLINE;
export type HeadlineVariant = keyof typeof HEADLINE;
export type TitleVariant = keyof typeof TITLE;
export type BodyVariant = keyof typeof BODY;
export type CaptionVariant = keyof typeof CAPTION;

// ============= UTILITY FUNCTIONS =============

/**
 * 타이포그래피 스타일을 CSS 스타일 객체로 변환
 */
export const getTypographyStyle = (style: TypographyStyle) => ({
  fontFamily: style.fontFamily,
  fontWeight: style.fontWeight,
  fontSize: `${style.fontSize}px`,
  lineHeight: `${style.lineHeight}px`,
  ...(style.letterSpacing !== undefined && { letterSpacing: `${style.letterSpacing}px` }),
});

/**
 * 반응형 타이포그래피 스타일을 CSS 스타일 객체로 변환
 */
export const getResponsiveTypographyStyle = (
  style: ResponsiveTypographyStyle,
  viewport: 'mobile' | 'desktop' = 'mobile'
) => {
  const targetStyle = viewport === 'desktop' && style.desktop ? style.desktop : style.mobile;
  return getTypographyStyle(targetStyle);
};

/**
 * 타이포그래피 카테고리와 variant로 스타일 가져오기
 */
export const getTypography = (
  category: 'webHeadline' | 'headline' | 'title' | 'body' | 'caption',
  variant: string,
  viewport: 'mobile' | 'desktop' = 'mobile'
) => {
  const categoryMap = {
    webHeadline: WEB_HEADLINE,
    headline: HEADLINE,
    title: TITLE,
    body: BODY,
    caption: CAPTION,
  };

  const categoryStyles = categoryMap[category];
  const style = categoryStyles[variant as keyof typeof categoryStyles];
  
  if (!style) return null;
  
  return getResponsiveTypographyStyle(style as ResponsiveTypographyStyle, viewport);
};

/**
 * CSS 클래스명으로 타이포그래피 스타일 생성
 */
export const generateTypographyClass = (
  category: string,
  variant: string
): string => {
  return `typo-${category}-${variant}`;
};

// ============= EXPORT ALL =============
export const TYPOGRAPHY = {
  FONT_FAMILIES,
  FONT_WEIGHTS,
  WEB_HEADLINE,
  HEADLINE,
  TITLE,
  BODY,
  CAPTION,
  RESPONSIVE_TYPOGRAPHY,
  CSS_VARIABLES,
} as const;

// Default export
export default TYPOGRAPHY;

