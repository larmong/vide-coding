import React, { forwardRef } from 'react';
import styles from './style.module.css';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * 인풋의 variant 타입
   */
  variant?: 'primary' | 'secondary' | 'tertiary';

  /**
   * 인풋의 크기
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * 테마
   */
  theme?: 'light' | 'dark';

  /**
   * 추가 클래스명
   */
  className?: string;

  /**
   * 에러 상태
   */
  error?: boolean;

  /**
   * 성공 상태
   */
  success?: boolean;

  /**
   * 라벨 텍스트
   */
  label?: string;

  /**
   * 도움말 텍스트
   */
  helpText?: string;

  /**
   * 에러 메시지
   */
  errorMessage?: string;

  /**
   * 좌측 아이콘
   */
  leftIcon?: React.ReactNode;

  /**
   * 우측 아이콘
   */
  rightIcon?: React.ReactNode;

  /**
   * 버튼 액션 (우측에 버튼이 있는 경우)
   */
  buttonText?: string;

  /**
   * 버튼 클릭 핸들러
   */
  onButtonClick?: () => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = 'primary',
      size = 'medium',
      theme = 'light',
      className = '',
      error = false,
      success = false,
      label,
      helpText,
      errorMessage,
      leftIcon,
      rightIcon,
      buttonText,
      onButtonClick,
      disabled,
      ...props
    },
    ref
  ) => {
    const inputClasses = [
      styles.input,
      styles[`input--${variant}`],
      styles[`input--${size}`],
      styles[`input--${theme}`],
      error && styles['input--error'],
      success && styles['input--success'],
      disabled && styles['input--disabled'],
      leftIcon && styles['input--with-left-icon'],
      (rightIcon || buttonText) && styles['input--with-right-element'],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const containerClasses = [styles.container, styles[`container--${theme}`]].filter(Boolean).join(' ');

    const inputWrapperClasses = [
      styles.inputWrapper,
      styles[`inputWrapper--${variant}`],
      styles[`inputWrapper--${size}`],
      styles[`inputWrapper--${theme}`],
      error && styles['inputWrapper--error'],
      success && styles['inputWrapper--success'],
      disabled && styles['inputWrapper--disabled'],
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={containerClasses}>
        {label && <label className={styles.label}>{label}</label>}

        <div className={inputWrapperClasses}>
          {leftIcon && <span className={styles.leftIcon}>{leftIcon}</span>}

          <input ref={ref} className={inputClasses} disabled={disabled} {...props} />

          {rightIcon && !buttonText && <span className={styles.rightIcon}>{rightIcon}</span>}

          {buttonText && (
            <button type="button" className={styles.button} onClick={onButtonClick} disabled={disabled}>
              {buttonText}
            </button>
          )}
        </div>

        {helpText && !error && <p className={styles.helpText}>{helpText}</p>}

        {error && errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
