/**
 * Modal Provider for Vibe Coding Project
 *
 * 전역 모달 상태 관리를 위한 Context Provider
 * 모달의 열기/닫기 및 컨텐츠 관리 기능 제공
 *
 * @updated 2024.10
 */

'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

// ============= TYPES =============

interface ModalConfig {
  id: string;
  content: ReactNode;
  onClose?: () => void;
  closeOnOverlayClick?: boolean;
  closeOnEsc?: boolean;
}

interface ModalContextValue {
  modals: ModalConfig[];
  openModal: (config: Omit<ModalConfig, 'id'>) => string;
  closeModal: (id: string) => void;
  closeAllModals: () => void;
}

// ============= CONTEXT =============

const ModalContext = createContext<ModalContextValue | undefined>(undefined);

// ============= HOOK =============

/**
 * Modal Context를 사용하기 위한 커스텀 훅
 */
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within ModalProvider');
  }
  return context;
};

// ============= PROVIDER =============

interface ModalProviderProps {
  children: ReactNode;
}

export function ModalProvider({ children }: ModalProviderProps) {
  const [modals, setModals] = useState<ModalConfig[]>([]);

  // 모달 열기
  const openModal = useCallback((config: Omit<ModalConfig, 'id'>) => {
    const id = `modal-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const newModal: ModalConfig = {
      id,
      closeOnOverlayClick: true,
      closeOnEsc: true,
      ...config,
    };

    setModals((prev) => [...prev, newModal]);
    return id;
  }, []);

  // 특정 모달 닫기
  const closeModal = useCallback((id: string) => {
    setModals((prev) => {
      const modal = prev.find((m) => m.id === id);
      if (modal?.onClose) {
        modal.onClose();
      }
      return prev.filter((m) => m.id !== id);
    });
  }, []);

  // 모든 모달 닫기
  const closeAllModals = useCallback(() => {
    modals.forEach((modal) => {
      if (modal.onClose) {
        modal.onClose();
      }
    });
    setModals([]);
  }, [modals]);

  // ESC 키로 모달 닫기
  React.useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && modals.length > 0) {
        const lastModal = modals[modals.length - 1];
        if (lastModal.closeOnEsc) {
          closeModal(lastModal.id);
        }
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [modals, closeModal]);

  const value: ModalContextValue = {
    modals,
    openModal,
    closeModal,
    closeAllModals,
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
      {/* 모달 렌더링 */}
      {modals.map((modal) => (
        <ModalPortal key={modal.id} modal={modal} onClose={() => closeModal(modal.id)} />
      ))}
    </ModalContext.Provider>
  );
}

// ============= MODAL PORTAL COMPONENT =============

interface ModalPortalProps {
  modal: ModalConfig;
  onClose: () => void;
}

function ModalPortal({ modal, onClose }: ModalPortalProps) {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && modal.closeOnOverlayClick) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
    >
      <div className="relative max-h-[90vh] max-w-[90vw] overflow-auto rounded-lg bg-white shadow-xl dark:bg-gray-800">
        {modal.content}
      </div>
    </div>
  );
}

// ============= EXPORT =============

export default ModalProvider;
