import type { Meta, StoryObj } from '@storybook/react';
import Input from './index';

/**
 * Input 컴포넌트는 다양한 variant, size, theme를 지원하는 범용 입력 컴포넌트입니다.
 *
 * ## Features
 * - 3가지 variant: primary, secondary, tertiary
 * - 3가지 size: small, medium, large
 * - 2가지 theme: light, dark
 * - 에러 및 성공 상태 지원
 * - 라벨, 도움말, 에러 메시지 지원
 * - 좌우 아이콘 지원
 * - 인라인 버튼 지원
 */
const meta = {
  title: 'Commons/Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '다양한 스타일과 상태를 지원하는 입력 컴포넌트입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
      description: '입력 필드의 시각적 스타일 variant',
      table: {
        type: { summary: "'primary' | 'secondary' | 'tertiary'" },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: '입력 필드의 크기',
      table: {
        type: { summary: "'small' | 'medium' | 'large'" },
        defaultValue: { summary: 'medium' },
      },
    },
    theme: {
      control: 'select',
      options: ['light', 'dark'],
      description: '입력 필드의 테마',
      table: {
        type: { summary: "'light' | 'dark'" },
        defaultValue: { summary: 'light' },
      },
    },
    error: {
      control: 'boolean',
      description: '에러 상태',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    success: {
      control: 'boolean',
      description: '성공 상태',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 상태',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    label: {
      control: 'text',
      description: '라벨 텍스트',
    },
    placeholder: {
      control: 'text',
      description: '플레이스홀더 텍스트',
    },
    helpText: {
      control: 'text',
      description: '도움말 텍스트',
    },
    errorMessage: {
      control: 'text',
      description: '에러 메시지',
    },
    buttonText: {
      control: 'text',
      description: '인라인 버튼 텍스트',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 Primary 입력 필드
 */
export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'light',
    placeholder: 'Enter text...',
  },
};

/**
 * Secondary 입력 필드
 */
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
    theme: 'light',
    placeholder: 'Enter text...',
  },
};

/**
 * Tertiary 입력 필드
 */
export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    size: 'medium',
    theme: 'light',
    placeholder: 'Enter text...',
  },
};

/**
 * Small 크기 입력 필드
 */
export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'small',
    theme: 'light',
    placeholder: 'Small input...',
  },
};

/**
 * Medium 크기 입력 필드 (기본값)
 */
export const Medium: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'light',
    placeholder: 'Medium input...',
  },
};

/**
 * Large 크기 입력 필드
 */
export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    theme: 'light',
    placeholder: 'Large input...',
  },
};

/**
 * Dark 테마 입력 필드
 */
export const DarkTheme: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'dark',
    placeholder: 'Enter text...',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

/**
 * 라벨이 있는 입력 필드
 */
export const WithLabel: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'light',
    label: 'Email',
    placeholder: 'Enter your email...',
  },
};

/**
 * 도움말이 있는 입력 필드
 */
export const WithHelpText: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'light',
    label: 'Username',
    placeholder: 'Enter your username...',
    helpText: 'Must be 3-20 characters long',
  },
};

/**
 * 에러 상태의 입력 필드
 */
export const Error: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'light',
    label: 'Email',
    placeholder: 'Enter your email...',
    error: true,
    errorMessage: 'Invalid email address',
  },
};

/**
 * 성공 상태의 입력 필드
 */
export const Success: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'light',
    label: 'Email',
    placeholder: 'Enter your email...',
    success: true,
    helpText: 'Email is available',
  },
};

/**
 * 비활성화된 입력 필드
 */
export const Disabled: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'light',
    placeholder: 'Disabled input...',
    disabled: true,
  },
};

/**
 * 좌측 아이콘이 있는 입력 필드
 */
export const WithLeftIcon: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'light',
    placeholder: 'Search...',
    leftIcon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="11" cy="11" r="8" strokeWidth="2" />
        <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
};

/**
 * 우측 아이콘이 있는 입력 필드
 */
export const WithRightIcon: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'light',
    placeholder: 'Password...',
    rightIcon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path
          d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="3" strokeWidth="2" />
      </svg>
    ),
  },
};

/**
 * 양쪽 아이콘이 있는 입력 필드
 */
export const WithBothIcons: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'light',
    placeholder: 'Search...',
    leftIcon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="11" cy="11" r="8" strokeWidth="2" />
        <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    rightIcon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <line x1="18" y1="6" x2="6" y2="18" strokeWidth="2" strokeLinecap="round" />
        <line x1="6" y1="6" x2="18" y2="18" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
};

/**
 * 인라인 버튼이 있는 입력 필드
 */
export const WithButton: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'light',
    placeholder: 'Enter your email...',
    buttonText: 'Subscribe',
    onButtonClick: () => alert('Button clicked!'),
  },
};

/**
 * 모든 Primary Variant 크기
 */
export const PrimaryVariants: Story = {
  args: {
    placeholder: 'Input',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
      <Input variant="primary" size="small" placeholder="Small primary input" />
      <Input variant="primary" size="medium" placeholder="Medium primary input" />
      <Input variant="primary" size="large" placeholder="Large primary input" />
    </div>
  ),
};

/**
 * 모든 Secondary Variant 크기
 */
export const SecondaryVariants: Story = {
  args: {
    placeholder: 'Input',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
      <Input variant="secondary" size="small" placeholder="Small secondary input" />
      <Input variant="secondary" size="medium" placeholder="Medium secondary input" />
      <Input variant="secondary" size="large" placeholder="Large secondary input" />
    </div>
  ),
};

/**
 * 모든 Tertiary Variant 크기
 */
export const TertiaryVariants: Story = {
  args: {
    placeholder: 'Input',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
      <Input variant="tertiary" size="small" placeholder="Small tertiary input" />
      <Input variant="tertiary" size="medium" placeholder="Medium tertiary input" />
      <Input variant="tertiary" size="large" placeholder="Large tertiary input" />
    </div>
  ),
};

/**
 * Light 테마 - 모든 Variant
 */
export const AllVariantsLight: Story = {
  args: {
    placeholder: 'Input',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
      <Input variant="primary" theme="light" placeholder="Primary input" />
      <Input variant="secondary" theme="light" placeholder="Secondary input" />
      <Input variant="tertiary" theme="light" placeholder="Tertiary input" />
    </div>
  ),
};

/**
 * Dark 테마 - 모든 Variant
 */
export const AllVariantsDark: Story = {
  args: {
    placeholder: 'Input',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
      <Input variant="primary" theme="dark" placeholder="Primary input" />
      <Input variant="secondary" theme="dark" placeholder="Secondary input" />
      <Input variant="tertiary" theme="dark" placeholder="Tertiary input" />
    </div>
  ),
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

/**
 * 상태별 입력 필드 (Normal, Error, Success, Disabled)
 */
export const States: Story = {
  args: {
    placeholder: 'Input',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '400px' }}>
      <div>
        <h4 style={{ marginBottom: '12px' }}>Normal</h4>
        <Input variant="primary" placeholder="Normal state" />
      </div>
      <div>
        <h4 style={{ marginBottom: '12px' }}>Error</h4>
        <Input variant="primary" placeholder="Error state" error errorMessage="This field is required" />
      </div>
      <div>
        <h4 style={{ marginBottom: '12px' }}>Success</h4>
        <Input variant="primary" placeholder="Success state" success helpText="Looks good!" />
      </div>
      <div>
        <h4 style={{ marginBottom: '12px' }}>Disabled</h4>
        <Input variant="primary" placeholder="Disabled state" disabled />
      </div>
    </div>
  ),
};

/**
 * 모든 조합을 보여주는 종합 스토리
 */
export const AllCombinations: Story = {
  args: {
    placeholder: 'Input',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h3 style={{ marginBottom: '16px' }}>Light Theme</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '500px' }}>
          <div>
            <h4 style={{ marginBottom: '8px' }}>Primary</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Input variant="primary" size="small" theme="light" placeholder="Small" />
              <Input variant="primary" size="medium" theme="light" placeholder="Medium" />
              <Input variant="primary" size="large" theme="light" placeholder="Large" />
            </div>
          </div>
          <div>
            <h4 style={{ marginBottom: '8px' }}>Secondary</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Input variant="secondary" size="small" theme="light" placeholder="Small" />
              <Input variant="secondary" size="medium" theme="light" placeholder="Medium" />
              <Input variant="secondary" size="large" theme="light" placeholder="Large" />
            </div>
          </div>
          <div>
            <h4 style={{ marginBottom: '8px' }}>Tertiary</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Input variant="tertiary" size="small" theme="light" placeholder="Small" />
              <Input variant="tertiary" size="medium" theme="light" placeholder="Medium" />
              <Input variant="tertiary" size="large" theme="light" placeholder="Large" />
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          padding: '24px',
          backgroundColor: '#1a1a1a',
          borderRadius: '8px',
        }}
      >
        <h3 style={{ marginBottom: '16px', color: '#fff' }}>Dark Theme</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '500px' }}>
          <div>
            <h4 style={{ marginBottom: '8px', color: '#fff' }}>Primary</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Input variant="primary" size="small" theme="dark" placeholder="Small" />
              <Input variant="primary" size="medium" theme="dark" placeholder="Medium" />
              <Input variant="primary" size="large" theme="dark" placeholder="Large" />
            </div>
          </div>
          <div>
            <h4 style={{ marginBottom: '8px', color: '#fff' }}>Secondary</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Input variant="secondary" size="small" theme="dark" placeholder="Small" />
              <Input variant="secondary" size="medium" theme="dark" placeholder="Medium" />
              <Input variant="secondary" size="large" theme="dark" placeholder="Large" />
            </div>
          </div>
          <div>
            <h4 style={{ marginBottom: '8px', color: '#fff' }}>Tertiary</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Input variant="tertiary" size="small" theme="dark" placeholder="Small" />
              <Input variant="tertiary" size="medium" theme="dark" placeholder="Medium" />
              <Input variant="tertiary" size="large" theme="dark" placeholder="Large" />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

/**
 * 실제 폼 예제
 */
export const FormExample: Story = {
  args: {
    placeholder: 'Input',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '400px' }}>
      <Input variant="primary" size="medium" label="Name" placeholder="Enter your name" helpText="Your full name" />
      <Input
        variant="primary"
        size="medium"
        label="Email"
        type="email"
        placeholder="Enter your email"
        leftIcon={
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="2" />
            <path d="m3 7 9 6 9-6" strokeWidth="2" />
          </svg>
        }
      />
      <Input
        variant="primary"
        size="medium"
        label="Password"
        type="password"
        placeholder="Enter your password"
        helpText="Must be at least 8 characters"
        rightIcon={
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path
              d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="12" cy="12" r="3" strokeWidth="2" />
          </svg>
        }
      />
      <Input
        variant="primary"
        size="medium"
        label="Newsletter"
        placeholder="Enter your email"
        buttonText="Subscribe"
        onButtonClick={() => alert('Subscribed!')}
      />
    </div>
  ),
};

/**
 * Interactive Playground
 */
export const Playground: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'light',
    placeholder: 'Type here...',
    label: 'Label',
    helpText: 'This is a help text',
    error: false,
    success: false,
    disabled: false,
  },
};
