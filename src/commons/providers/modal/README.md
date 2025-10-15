# Modal Provider

전역 모달 상태 관리를 위한 Context 기반 Provider입니다.

## 기능

- ✅ 모달 열기/닫기
- ✅ 다중 모달 지원
- ✅ ESC 키로 닫기
- ✅ Overlay 클릭으로 닫기
- ✅ 커스텀 모달 컨텐츠 지원
- ✅ onClose 콜백 지원

## 사용 방법

### 1. Provider 설정

`layout.tsx`에 이미 설정되어 있습니다:

```tsx
import ModalProvider from '@/commons/providers/modal/modal.provider';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ModalProvider>{children}</ModalProvider>
      </body>
    </html>
  );
}
```

### 2. 컴포넌트에서 사용

```tsx
'use client';

import { useModal } from '@/commons/providers/modal/modal.provider';

export function MyComponent() {
  const { openModal, closeModal } = useModal();

  const handleOpenModal = () => {
    const modalId = openModal({
      content: (
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">모달 제목</h2>
          <p>모달 내용입니다.</p>
          <button onClick={() => closeModal(modalId)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
            닫기
          </button>
        </div>
      ),
      onClose: () => console.log('모달이 닫혔습니다'),
      closeOnOverlayClick: true,
      closeOnEsc: true,
    });
  };

  return <button onClick={handleOpenModal}>모달 열기</button>;
}
```

## API

### `useModal()`

모달 컨텍스트를 사용하기 위한 커스텀 훅입니다.

**반환값:**

```typescript
{
  modals: ModalConfig[];           // 현재 열려있는 모달 목록
  openModal: (config) => string;   // 모달 열기 (모달 ID 반환)
  closeModal: (id: string) => void; // 특정 모달 닫기
  closeAllModals: () => void;      // 모든 모달 닫기
}
```

### `openModal(config)`

새로운 모달을 엽니다.

**Parameters:**

```typescript
{
  content: ReactNode;              // 모달에 표시할 컨텐츠
  onClose?: () => void;            // 모달이 닫힐 때 호출되는 콜백
  closeOnOverlayClick?: boolean;   // Overlay 클릭시 닫기 (기본값: true)
  closeOnEsc?: boolean;            // ESC 키로 닫기 (기본값: true)
}
```

**Returns:** `string` - 생성된 모달의 고유 ID

### `closeModal(id: string)`

특정 ID의 모달을 닫습니다.

### `closeAllModals()`

현재 열려있는 모든 모달을 닫습니다.

## 스타일링

모달은 Tailwind CSS를 사용하여 스타일링되어 있습니다. 커스텀 스타일이 필요한 경우 `content` prop에서 원하는 스타일을 적용하면 됩니다.

## 특징

- **다중 모달 지원**: 여러 개의 모달을 동시에 열 수 있습니다
- **키보드 접근성**: ESC 키로 최상위 모달을 닫을 수 있습니다
- **Portal 렌더링**: 모달은 자동으로 body의 최상위 레벨에 렌더링됩니다
- **반응형**: 모든 화면 크기에서 잘 작동합니다
