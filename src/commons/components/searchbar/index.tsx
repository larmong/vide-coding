import React, { forwardRef } from 'react';
import styles from './styles.module.css';

export interface SearchbarProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * 검색바의 variant 타입
   */
  variant?: 'primary' | 'secondary' | 'tertiary';

  /**
   * 검색바의 크기
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
   * 포커스 상태
   */
  focused?: boolean;

  /**
   * 검색어 placeholder
   */
  placeholder?: string;

  /**
   * 검색 아이콘 (기본: 내장 아이콘 사용)
   */
  searchIcon?: React.ReactNode;

  /**
   * 클리어 버튼 표시 여부
   */
  showClear?: boolean;

  /**
   * 클리어 아이콘
   */
  clearIcon?: React.ReactNode;

  /**
   * 검색 버튼 텍스트 (검색 버튼이 필요한 경우)
   */
  searchButtonText?: string;

  /**
   * 검색 실행 핸들러
   */
  onSearch?: (value: string) => void;

  /**
   * 클리어 핸들러
   */
  onClear?: () => void;

  /**
   * 검색 버튼 클릭 핸들러
   */
  onSearchButtonClick?: (value: string) => void;

  /**
   * 로딩 상태
   */
  loading?: boolean;

  /**
   * 자동완성/제안 표시 여부
   */
  showSuggestions?: boolean;

  /**
   * 제안 목록
   */
  suggestions?: string[];

  /**
   * 제안 선택 핸들러
   */
  onSuggestionSelect?: (suggestion: string) => void;
}

const Searchbar = forwardRef<HTMLInputElement, SearchbarProps>(
  (
    {
      variant = 'primary',
      size = 'medium',
      theme = 'light',
      className = '',
      error = false,
      focused = false,
      placeholder = '검색어를 입력하세요',
      searchIcon,
      showClear = true,
      clearIcon,
      searchButtonText,
      onSearch,
      onClear,
      onSearchButtonClick,
      loading = false,
      showSuggestions = false,
      suggestions = [],
      onSuggestionSelect,
      disabled,
      value,
      onChange,
      onKeyDown,
      ...props
    },
    ref
  ) => {
    const [inputValue, setInputValue] = React.useState(value || '');
    const [isFocused, setIsFocused] = React.useState(focused);
    const [showSuggestionList, setShowSuggestionList] = React.useState(false);

    // 컴포넌트가 제어 컴포넌트인지 비제어 컴포넌트인지 확인
    const isControlled = value !== undefined;

    // 입력값 변경 처리
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;

      if (!isControlled) {
        setInputValue(newValue);
      }

      if (onChange) {
        onChange(e);
      }

      // 제안 표시 처리
      if (showSuggestions && newValue.trim()) {
        setShowSuggestionList(true);
      } else {
        setShowSuggestionList(false);
      }
    };

    // 포커스 처리
    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      if (props.onFocus) {
        props.onFocus(e);
      }
    };

    // 블러 처리
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      // 제안 리스트 클릭을 위해 약간 지연
      setTimeout(() => {
        setIsFocused(false);
        setShowSuggestionList(false);
      }, 150);

      if (props.onBlur) {
        props.onBlur(e);
      }
    };

    // 키다운 처리
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        const currentValue = isControlled ? String(value || '') : inputValue;
        if (onSearch) {
          onSearch(currentValue as string);
        }
        setShowSuggestionList(false);
      } else if (e.key === 'Escape') {
        setShowSuggestionList(false);
        (e.target as HTMLInputElement).blur();
      }

      if (onKeyDown) {
        onKeyDown(e);
      }
    };

    // 클리어 처리
    const handleClear = () => {
      if (!isControlled) {
        setInputValue('');
      }

      if (onClear) {
        onClear();
      }

      setShowSuggestionList(false);
    };

    // 검색 버튼 클릭 처리
    const handleSearchButtonClick = () => {
      const currentValue = isControlled ? String(value || '') : inputValue;
      if (onSearchButtonClick) {
        onSearchButtonClick(currentValue as string);
      } else if (onSearch) {
        onSearch(currentValue as string);
      }
      setShowSuggestionList(false);
    };

    // 제안 선택 처리
    const handleSuggestionClick = (suggestion: string) => {
      if (!isControlled) {
        setInputValue(suggestion);
      }

      if (onSuggestionSelect) {
        onSuggestionSelect(suggestion);
      }

      setShowSuggestionList(false);
    };

    // 현재 값 결정
    const currentValue = isControlled ? String(value || '') : inputValue;

    // 클래스명 결정
    const containerClasses = [
      styles.container,
      styles[`container--${theme}`],
      showSuggestionList && styles['container--with-suggestions'],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const inputWrapperClasses = [
      styles.inputWrapper,
      styles[`inputWrapper--${variant}`],
      styles[`inputWrapper--${size}`],
      styles[`inputWrapper--${theme}`],
      error && styles['inputWrapper--error'],
      (isFocused || focused) && styles['inputWrapper--focused'],
      disabled && styles['inputWrapper--disabled'],
      loading && styles['inputWrapper--loading'],
    ]
      .filter(Boolean)
      .join(' ');

    const inputClasses = [
      styles.input,
      styles[`input--${variant}`],
      styles[`input--${size}`],
      styles[`input--${theme}`],
      error && styles['input--error'],
      disabled && styles['input--disabled'],
    ]
      .filter(Boolean)
      .join(' ');

    // 검색 아이콘 렌더링
    const renderSearchIcon = () => {
      if (loading) {
        return <span className={styles.loadingIcon}>⏳</span>;
      }

      if (searchIcon) {
        return searchIcon;
      }

      return (
        <svg className={styles.defaultSearchIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M21 21L16.514 16.506M19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    };

    // 클리어 아이콘 렌더링
    const renderClearIcon = () => {
      if (clearIcon) {
        return clearIcon;
      }

      return (
        <svg className={styles.defaultClearIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6 6L18 18M6 18L18 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    };

    return (
      <div className={containerClasses}>
        <div className={inputWrapperClasses}>
          {/* 검색 아이콘 */}
          <span className={styles.searchIconWrapper}>{renderSearchIcon()}</span>

          {/* 검색 입력 필드 */}
          <input
            ref={ref}
            type="text"
            className={inputClasses}
            placeholder={placeholder}
            value={currentValue}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            {...props}
          />

          {/* 클리어 버튼 */}
          {showClear && currentValue && !disabled && (
            <button type="button" className={styles.clearButton} onClick={handleClear} tabIndex={-1}>
              {renderClearIcon()}
            </button>
          )}

          {/* 검색 버튼 */}
          {searchButtonText && (
            <button
              type="button"
              className={styles.searchButton}
              onClick={handleSearchButtonClick}
              disabled={disabled || loading}
            >
              {searchButtonText}
            </button>
          )}
        </div>

        {/* 자동완성/제안 리스트 */}
        {showSuggestions && showSuggestionList && suggestions.length > 0 && (
          <div className={styles.suggestionList}>
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                type="button"
                className={styles.suggestionItem}
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }
);

Searchbar.displayName = 'Searchbar';

export default Searchbar;
