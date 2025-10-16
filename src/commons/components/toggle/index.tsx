import React, { useState } from 'react';
import styles from './style.module.css';

export interface ToggleProps {
  /**
   * 토글의 variant 타입
   */
  variant?: 'primary' | 'secondary' | 'tertiary';

  /**
   * 토글의 크기
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * 테마
   */
  theme?: 'light' | 'dark';

  /**
   * 토글 상태 (제어형)
   */
  checked?: boolean;

  /**
   * 기본 토글 상태 (비제어형)
   */
  defaultChecked?: boolean;

  /**
   * 상태 변경 핸들러
   */
  onChange?: (checked: boolean) => void;

  /**
   * 비활성화 상태
   */
  disabled?: boolean;

  /**
   * 추가 클래스명
   */
  className?: string;

  /**
   * 접근성을 위한 라벨
   */
  'aria-label'?: string;

  /**
   * 접근성을 위한 라벨 ID 참조
   */
  'aria-labelledby'?: string;

  /**
   * 토글 이름 (form 전송용)
   */
  name?: string;

  /**
   * 토글 값 (form 전송용)
   */
  value?: string;
}

const Toggle: React.FC<ToggleProps> = ({
  variant = 'primary',
  size = 'medium',
  theme = 'light',
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  className = '',
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  name,
  value,
}) => {
  // 제어형/비제어형 상태 관리
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const isControlled = checked !== undefined;
  const toggleChecked = isControlled ? checked : internalChecked;

  const handleToggle = () => {
    if (disabled) return;

    const newChecked = !toggleChecked;
    
    if (!isControlled) {
      setInternalChecked(newChecked);
    }
    
    onChange?.(newChecked);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      handleToggle();
    }
  };

  const toggleClasses = [
    styles.toggle,
    styles[`toggle--${variant}`],
    styles[`toggle--${size}`],
    styles[`toggle--${theme}`],
    toggleChecked && styles['toggle--checked'],
    disabled && styles['toggle--disabled'],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const thumbClasses = [
    styles.thumb,
    styles[`thumb--${size}`],
    toggleChecked && styles['thumb--checked'],
    disabled && styles['thumb--disabled'],
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={toggleClasses}
      role="switch"
      aria-checked={toggleChecked}
      aria-disabled={disabled}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      tabIndex={disabled ? -1 : 0}
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
    >
      <div className={thumbClasses} />
      {/* 폼 전송을 위한 숨겨진 input */}
      {name && (
        <input
          type="hidden"
          name={name}
          value={toggleChecked ? (value || 'on') : ''}
        />
      )}
    </div>
  );
};

export default Toggle;
