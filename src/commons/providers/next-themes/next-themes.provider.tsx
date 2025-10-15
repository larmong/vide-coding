/**
 * Next Themes Provider for Vibe Coding Project
 *
 * 다크모드/라이트모드 테마 전환 기능을 제공하는 Provider
 * next-themes 라이브러리를 활용한 테마 관리
 *
 * @updated 2024.10
 */

'use client';

import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

// ============= TYPES =============

interface NextThemesProviderProps {
  children: ReactNode;
}

// ============= PROVIDER =============

/**
 * Next Themes Provider
 * 애플리케이션의 테마(다크/라이트 모드) 관리
 */
export function NextThemesProvider({ children }: NextThemesProviderProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}

// ============= EXPORT =============

export default NextThemesProvider;
