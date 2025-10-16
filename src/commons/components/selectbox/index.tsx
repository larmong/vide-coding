import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './styles.module.css';

export interface Option {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectBoxProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size' | 'onChange'> {
  /**
   * 셀렉트박스의 variant 타입
   */
  variant?: 'primary' | 'secondary' | 'tertiary';

  /**
   * 셀렉트박스의 크기
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * 테마
   */
  theme?: 'light' | 'dark';

  /**
   * 선택 가능한 옵션들
   */
  options: Option[];

  /**
   * 현재 선택된 값
   */
  value?: string;

  /**
   * 값이 변경될 때 호출되는 함수
   */
  onChange?: (value: string) => void;

  /**
   * 플레이스홀더 텍스트
   */
  placeholder?: string;

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
   * 드롭다운이 열렸을 때의 콜백
   */
  onOpen?: () => void;

  /**
   * 드롭다운이 닫혔을 때의 콜백
   */
  onClose?: () => void;

  /**
   * 비활성화 상태
   */
  disabled?: boolean;
}

const SelectBox: React.FC<SelectBoxProps> = ({
  variant = 'primary',
  size = 'medium',
  theme = 'light',
  options = [],
  value,
  onChange,
  placeholder = '선택하세요',
  className = '',
  error = false,
  success = false,
  label,
  helpText,
  errorMessage,
  disabled = false,
  onOpen,
  onClose,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(
    options.find((option) => option.value === value) || null
  );
  const selectRef = useRef<HTMLDivElement>(null);

  // 외부 클릭 감지로 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        onClose?.();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  // value prop 변경 시 선택된 옵션 업데이트
  useEffect(() => {
    const newSelectedOption = options.find((option) => option.value === value) || null;
    setSelectedOption(newSelectedOption);
  }, [value, options]);

  const handleToggle = () => {
    if (disabled) return;

    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);

    if (newIsOpen) {
      onOpen?.();
    } else {
      onClose?.();
    }
  };

  const handleOptionSelect = (option: Option) => {
    if (option.disabled) return;

    setSelectedOption(option);
    setIsOpen(false);
    onClose?.();
    onChange?.(option.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (disabled) return;

    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        handleToggle();
        break;
      case 'Escape':
        setIsOpen(false);
        onClose?.();
        break;
      case 'ArrowDown':
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          onOpen?.();
        } else {
          // 다음 옵션으로 이동
          const currentIndex = selectedOption
            ? options.findIndex((option) => option.value === selectedOption.value)
            : -1;
          const nextIndex = Math.min(currentIndex + 1, options.length - 1);
          const nextOption = options[nextIndex];
          if (nextOption && !nextOption.disabled) {
            handleOptionSelect(nextOption);
          }
        }
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          onOpen?.();
        } else {
          // 이전 옵션으로 이동
          const currentIndex = selectedOption
            ? options.findIndex((option) => option.value === selectedOption.value)
            : options.length;
          const prevIndex = Math.max(currentIndex - 1, 0);
          const prevOption = options[prevIndex];
          if (prevOption && !prevOption.disabled) {
            handleOptionSelect(prevOption);
          }
        }
        break;
    }
  };

  const selectClasses = [
    styles.select,
    styles[`select--${variant}`],
    styles[`select--${size}`],
    styles[`select--${theme}`],
    error && styles['select--error'],
    success && styles['select--success'],
    disabled && styles['select--disabled'],
    isOpen && styles['select--open'],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const containerClasses = [styles.container, styles[`container--${theme}`]].filter(Boolean).join(' ');

  const displayText = selectedOption?.label || placeholder;

  return (
    <div className={containerClasses}>
      {label && <label className={styles.label}>{label}</label>}

      <div className={styles.selectWrapper} ref={selectRef}>
        <div
          className={selectClasses}
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
          tabIndex={disabled ? -1 : 0}
          role="combobox"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-disabled={disabled}
          {...props}
        >
          <span className={styles.selectedText}>{displayText}</span>

          <Image
            src="/icons/arrow_drop_down.svg"
            alt="dropdown arrow"
            width={24}
            height={24}
            className={styles.dropdownIcon}
          />
        </div>

        {isOpen && (
          <ul className={styles.optionsList} role="listbox" aria-multiselectable="false">
            {options.map((option, index) => (
              <li
                key={option.value}
                className={[
                  styles.option,
                  selectedOption?.value === option.value && styles['option--selected'],
                  option.disabled && styles['option--disabled'],
                ]
                  .filter(Boolean)
                  .join(' ')}
                onClick={() => handleOptionSelect(option)}
                role="option"
                aria-selected={selectedOption?.value === option.value}
                aria-disabled={option.disabled}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>

      {helpText && !error && <p className={styles.helpText}>{helpText}</p>}
      {error && errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  );
};

export default SelectBox;
