/**
 * React Query Provider for Vibe Coding Project
 *
 * 서버 상태 관리 및 클라이언트 캐싱 기능을 제공하는 Provider
 * @tanstack/react-query 라이브러리를 활용한 데이터 페칭 및 캐싱 관리
 *
 * @updated 2024.10
 */

'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, useState } from 'react';

// ============= TYPES =============

interface ReactQueryProviderProps {
  children: ReactNode;
}

// ============= PROVIDER =============

/**
 * React Query Provider
 * 애플리케이션의 서버 상태 관리 및 클라이언트 캐싱
 */
export function ReactQueryProvider({ children }: ReactQueryProviderProps) {
  // QueryClient를 state로 관리하여 SSR 시 새로운 인스턴스 생성
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // 윈도우 포커스 시 자동 refetch 비활성화
            refetchOnWindowFocus: false,
            // 컴포넌트 마운트 시 자동 refetch 비활성화
            refetchOnMount: false,
            // 재연결 시 자동 refetch
            refetchOnReconnect: true,
            // 5분간 캐시 유지
            staleTime: 5 * 60 * 1000,
            // 캐시 타임 설정 (10분)
            gcTime: 10 * 60 * 1000,
            // 재시도 설정
            retry: 1,
          },
          mutations: {
            // mutation 재시도 비활성화
            retry: false,
          },
        },
      })
  );

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

// ============= EXPORT =============

export default ReactQueryProvider;
