import React from 'react';
import styles from './style.module.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * 버튼의 variant 타입
   */
  variant?: 'primary' | 'secondary' | 'tertiary';

  /**
   * 버튼의 크기
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * 테마
   */
  theme?: 'light' | 'dark';

  /**
   * 버튼 텍스트
   */
  children: React.ReactNode;

  /**
   * 추가 클래스명
   */
  className?: string;

  /**
   * 아이콘 (옵션)
   */
  icon?: React.ReactNode;

  /**
   * 로딩 상태
   */
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  theme = 'light',
  children,
  className = '',
  icon,
  loading = false,
  disabled,
  ...props
}) => {
  const buttonClasses = [
    styles.button,
    styles[`button--${variant}`],
    styles[`button--${size}`],
    styles[`button--${theme}`],
    loading && styles['button--loading'],
    disabled && styles['button--disabled'],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={buttonClasses} disabled={disabled || loading} {...props}>
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.text}>{children}</span>
      {loading && <span className={styles.spinner}>⏳</span>}
    </button>
  );
};

export default Button;
