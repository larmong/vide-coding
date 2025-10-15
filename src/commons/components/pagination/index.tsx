import React from 'react';
import styles from './styles.module.css';

export interface PaginationProps {
  /**
   * 현재 페이지 (1부터 시작)
   */
  currentPage: number;

  /**
   * 전체 페이지 수
   */
  totalPages: number;

  /**
   * 페이지 변경 콜백
   */
  onPageChange: (page: number) => void;

  /**
   * 페이지네이션의 variant 타입
   */
  variant?: 'primary' | 'secondary' | 'tertiary';

  /**
   * 페이지네이션의 크기
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * 테마
   */
  theme?: 'light' | 'dark';

  /**
   * 한 번에 보여줄 페이지 번호 개수 (기본값: 5)
   */
  maxVisible?: number;

  /**
   * 이전/다음 버튼 표시 여부
   */
  showNavigationButtons?: boolean;

  /**
   * 추가 클래스명
   */
  className?: string;

  /**
   * 비활성화 상태
   */
  disabled?: boolean;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  variant = 'primary',
  size = 'medium',
  theme = 'light',
  maxVisible = 5,
  showNavigationButtons = true,
  className = '',
  disabled = false,
}) => {
  const paginationClasses = [
    styles.pagination,
    styles[`pagination--${variant}`],
    styles[`pagination--${size}`],
    styles[`pagination--${theme}`],
    disabled && styles['pagination--disabled'],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const buttonClasses = (isActive: boolean, isDisabled: boolean = false) =>
    [
      styles.pageButton,
      styles[`pageButton--${variant}`],
      styles[`pageButton--${size}`],
      styles[`pageButton--${theme}`],
      isActive && styles['pageButton--active'],
      (isDisabled || disabled) && styles['pageButton--disabled'],
    ]
      .filter(Boolean)
      .join(' ');

  const navButtonClasses = (isDisabled: boolean = false) =>
    [
      styles.navButton,
      styles[`navButton--${variant}`],
      styles[`navButton--${size}`],
      styles[`navButton--${theme}`],
      (isDisabled || disabled) && styles['navButton--disabled'],
    ]
      .filter(Boolean)
      .join(' ');

  // 페이지 범위 계산
  const getPageRange = () => {
    let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    const endPage = Math.min(totalPages, startPage + maxVisible - 1);

    if (endPage - startPage < maxVisible - 1) {
      startPage = Math.max(1, endPage - maxVisible + 1);
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  const handlePageClick = (page: number) => {
    if (!disabled && page !== currentPage && page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const handlePrevClick = () => {
    if (!disabled && currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (!disabled && currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const pages = getPageRange();
  const canGoPrev = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  return (
    <div className={paginationClasses} role="navigation" aria-label="페이지네이션">
      {showNavigationButtons && (
        <button
          className={navButtonClasses(!canGoPrev)}
          onClick={handlePrevClick}
          disabled={!canGoPrev || disabled}
          aria-label="이전 페이지"
          type="button"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.navIcon}
          >
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="currentColor" />
          </svg>
        </button>
      )}

      <div className={styles.pageNumbers}>
        {pages.map((page) => (
          <button
            key={page}
            className={buttonClasses(page === currentPage)}
            onClick={() => handlePageClick(page)}
            disabled={disabled}
            aria-label={`페이지 ${page}`}
            aria-current={page === currentPage ? 'page' : undefined}
            type="button"
          >
            {page}
          </button>
        ))}
      </div>

      {showNavigationButtons && (
        <button
          className={navButtonClasses(!canGoNext)}
          onClick={handleNextClick}
          disabled={!canGoNext || disabled}
          aria-label="다음 페이지"
          type="button"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.navIcon}
          >
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="currentColor" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Pagination;
