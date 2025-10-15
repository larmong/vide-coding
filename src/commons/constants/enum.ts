/**
 * Enum Constants for Vibe Coding Project
 *
 * 프로젝트에서 사용되는 Enum 데이터 정의
 * 감정(Emotion) 등의 타입 시스템을 제공
 *
 * @updated 2024.10
 */

import { RED, BLUE, GRAY, YELLOW, GREEN } from './color';

// ============= EMOTION ENUM =============
// 감정 타입 정의

export const EMOTION_TYPES = {
  HAPPY: 'HAPPY',
  SAD: 'SAD',
  ANGRY: 'ANGRY',
  SURPRISE: 'SURPRISE',
  ETC: 'ETC',
} as const;

// ============= EMOTION DATA STRUCTURE =============
// 각 감정별 표시 데이터

interface EmotionData {
  type: string;
  label: string;
  color: string;
  icon: {
    medium: string;
    small: string;
  };
}

// ============= EMOTION CONFIGURATION =============
// 감정별 상세 정보

export const EMOTIONS: Record<keyof typeof EMOTION_TYPES, EmotionData> = {
  HAPPY: {
    type: EMOTION_TYPES.HAPPY,
    label: '행복해요',
    color: RED[60], // #850a1b
    icon: {
      medium: '/icons/emotion-happy-m.svg',
      small: '/icons/emotion-happy-s.svg',
    },
  },
  SAD: {
    type: EMOTION_TYPES.SAD,
    label: '슬퍼요',
    color: BLUE[60], // #3a5cf3
    icon: {
      medium: '/icons/emotion-sad-m.svg',
      small: '/icons/emotion-sad-s.svg',
    },
  },
  ANGRY: {
    type: EMOTION_TYPES.ANGRY,
    label: '화나요',
    color: GRAY[60], // #777777
    icon: {
      medium: '/icons/emotion-angry-m.svg',
      small: '/icons/emotion-angry-s.svg',
    },
  },
  SURPRISE: {
    type: EMOTION_TYPES.SURPRISE,
    label: '놀랐어요',
    color: YELLOW[60], // #b27d00
    icon: {
      medium: '/icons/emotion-surprise-m.svg',
      small: '/icons/emotion-surprise-s.svg',
    },
  },
  ETC: {
    type: EMOTION_TYPES.ETC,
    label: '기타',
    color: GREEN[60], // #084424
    icon: {
      medium: '/icons/emotion-etc-m.svg',
      small: '/icons/emotion-etc-s.svg',
    },
  },
} as const;

// ============= EMOTION ARRAY =============
// 순회용 배열

export const EMOTION_LIST = Object.values(EMOTIONS);

// ============= UTILITY TYPES =============
export type EmotionType = keyof typeof EMOTION_TYPES;
export type EmotionValue = typeof EMOTION_TYPES[EmotionType];

// ============= UTILITY FUNCTIONS =============

/**
 * Emotion 타입으로 데이터를 가져옵니다
 */
export const getEmotionData = (type: EmotionType): EmotionData => {
  return EMOTIONS[type];
};

/**
 * Emotion 타입으로 라벨을 가져옵니다
 */
export const getEmotionLabel = (type: EmotionType): string => {
  return EMOTIONS[type].label;
};

/**
 * Emotion 타입으로 색상을 가져옵니다
 */
export const getEmotionColor = (type: EmotionType): string => {
  return EMOTIONS[type].color;
};

/**
 * Emotion 타입으로 아이콘을 가져옵니다
 */
export const getEmotionIcon = (type: EmotionType, size: 'medium' | 'small' = 'medium'): string => {
  return EMOTIONS[type].icon[size];
};

/**
 * Emotion 문자열 값으로 타입을 찾습니다
 */
export const getEmotionTypeByValue = (value: string): EmotionType | null => {
  const type = (Object.keys(EMOTION_TYPES) as EmotionType[]).find(
    (key) => EMOTION_TYPES[key] === value
  );
  return type || null;
};

/**
 * Emotion 라벨로 타입을 찾습니다
 */
export const getEmotionTypeByLabel = (label: string): EmotionType | null => {
  const type = (Object.keys(EMOTIONS) as EmotionType[]).find(
    (key) => EMOTIONS[key].label === label
  );
  return type || null;
};

// ============= EXPORT ALL =============
export const ENUM = {
  EMOTION_TYPES,
  EMOTIONS,
  EMOTION_LIST,
} as const;

// Default export
export default ENUM;

