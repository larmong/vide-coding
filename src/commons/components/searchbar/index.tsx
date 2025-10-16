import React, { forwardRef } from 'react';
import styles from './styles.module.css';
import Image from 'next/image';

export interface SearchBarProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * searchbar의 variant 타입
   */
  variant?: 'primary' | 'secondary' | 'tertiary';

  /**
   * searchbar의 크기
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
   * 검색 버튼 클릭 핸들러
   */
  onSearch?: (value: string) => void;

  /**
   * 초기화 버튼 표시 여부
   */
  showClearButton?: boolean;

  /**
   * 초기화 버튼 클릭 핸들러
   */
  onClear?: () => void;
}

const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  (
    {
      variant = 'primary',
      size = 'medium',
      theme = 'light',
      className = '',
      onSearch,
      showClearButton = true,
      onClear,
      disabled,
      value,
      ...props
    },
    ref
  ) => {
    const [inputValue, setInputValue] = React.useState(value || '');

    React.useEffect(() => {
      setInputValue(value || '');
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setInputValue(newValue);
      props.onChange?.(e);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && onSearch) {
        onSearch(inputValue as string);
      }
      props.onKeyDown?.(e);
    };

    const handleClear = () => {
      setInputValue('');
      onClear?.();
    };

    const handleSearchClick = () => {
      if (onSearch) {
        onSearch(inputValue as string);
      }
    };

    const containerClasses = [
      styles.searchBar,
      styles[`searchBar--${variant}`],
      styles[`searchBar--${size}`],
      styles[`searchBar--${theme}`],
      disabled && styles['searchBar--disabled'],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={containerClasses}>
        <button
          type="button"
          className={styles.searchIcon}
          onClick={handleSearchClick}
          disabled={disabled}
          aria-label="검색"
        >
          <Image src="/icons/search_outline_light_m.svg" alt="검색" width={24} height={24} />
        </button>

        <input
          ref={ref}
          type="text"
          className={styles.input}
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          placeholder={props.placeholder || '검색어를 입력해 주세요.'}
          {...props}
        />

        {showClearButton && inputValue && !disabled && (
          <button type="button" className={styles.clearButton} onClick={handleClear} aria-label="초기화">
            <Image src="/icons/close_outline_light_s.svg" alt="초기화" width={16} height={16} />
          </button>
        )}
      </div>
    );
  }
);

SearchBar.displayName = 'SearchBar';

export default SearchBar;
