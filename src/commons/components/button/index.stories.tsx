import type { Meta, StoryObj } from '@storybook/react';
import Button from './index';

/**
 * Button 컴포넌트는 다양한 variant, size, theme를 지원하는 범용 버튼 컴포넌트입니다.
 *
 * ## Features
 * - 3가지 variant: primary, secondary, tertiary
 * - 3가지 size: small, medium, large
 * - 2가지 theme: light, dark
 * - 로딩 및 비활성화 상태 지원
 * - 아이콘 지원
 */
const meta = {
  title: 'Commons/Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '다양한 스타일과 상태를 지원하는 버튼 컴포넌트입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
      description: '버튼의 시각적 스타일 variant',
      table: {
        type: { summary: "'primary' | 'secondary' | 'tertiary'" },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: '버튼의 크기',
      table: {
        type: { summary: "'small' | 'medium' | 'large'" },
        defaultValue: { summary: 'medium' },
      },
    },
    theme: {
      control: 'select',
      options: ['light', 'dark'],
      description: '버튼의 테마',
      table: {
        type: { summary: "'light' | 'dark'" },
        defaultValue: { summary: 'light' },
      },
    },
    loading: {
      control: 'boolean',
      description: '로딩 상태',
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
    children: {
      control: 'text',
      description: '버튼 텍스트',
    },
    onClick: {
      action: 'clicked',
      description: '클릭 이벤트 핸들러',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 Primary 버튼
 */
export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'light',
    children: 'Button',
  },
};

/**
 * Secondary 버튼
 */
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
    theme: 'light',
    children: 'Button',
  },
};

/**
 * Tertiary 버튼
 */
export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    size: 'medium',
    theme: 'light',
    children: 'Button',
  },
};

/**
 * Small 크기 버튼
 */
export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'small',
    theme: 'light',
    children: 'Button',
  },
};

/**
 * Medium 크기 버튼 (기본값)
 */
export const Medium: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'light',
    children: 'Button',
  },
};

/**
 * Large 크기 버튼
 */
export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    theme: 'light',
    children: 'Button',
  },
};

/**
 * Dark 테마 버튼
 */
export const DarkTheme: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'dark',
    children: 'Button',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

/**
 * 로딩 상태의 버튼
 */
export const Loading: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'light',
    children: 'Button',
    loading: true,
  },
};

/**
 * 비활성화된 버튼
 */
export const Disabled: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'light',
    children: 'Button',
    disabled: true,
  },
};

/**
 * 아이콘과 함께 표시되는 버튼
 */
export const WithIcon: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'light',
    children: 'Button',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
};

/**
 * 모든 Primary Variant 크기
 */
export const PrimaryVariants: Story = {
  args: {
    children: 'Button',
  },
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button variant="primary" size="small">
        Small
      </Button>
      <Button variant="primary" size="medium">
        Medium
      </Button>
      <Button variant="primary" size="large">
        Large
      </Button>
    </div>
  ),
};

/**
 * 모든 Secondary Variant 크기
 */
export const SecondaryVariants: Story = {
  args: {
    children: 'Button',
  },
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button variant="secondary" size="small">
        Small
      </Button>
      <Button variant="secondary" size="medium">
        Medium
      </Button>
      <Button variant="secondary" size="large">
        Large
      </Button>
    </div>
  ),
};

/**
 * 모든 Tertiary Variant 크기
 */
export const TertiaryVariants: Story = {
  args: {
    children: 'Button',
  },
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button variant="tertiary" size="small">
        Small
      </Button>
      <Button variant="tertiary" size="medium">
        Medium
      </Button>
      <Button variant="tertiary" size="large">
        Large
      </Button>
    </div>
  ),
};

/**
 * Light 테마 - 모든 Variant
 */
export const AllVariantsLight: Story = {
  args: {
    children: 'Button',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Button variant="primary" theme="light">
          Primary
        </Button>
        <Button variant="secondary" theme="light">
          Secondary
        </Button>
        <Button variant="tertiary" theme="light">
          Tertiary
        </Button>
      </div>
    </div>
  ),
};

/**
 * Dark 테마 - 모든 Variant
 */
export const AllVariantsDark: Story = {
  args: {
    children: 'Button',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Button variant="primary" theme="dark">
          Primary
        </Button>
        <Button variant="secondary" theme="dark">
          Secondary
        </Button>
        <Button variant="tertiary" theme="dark">
          Tertiary
        </Button>
      </div>
    </div>
  ),
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

/**
 * 상태별 버튼 (Normal, Loading, Disabled)
 */
export const States: Story = {
  args: {
    children: 'Button',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h4 style={{ marginBottom: '12px' }}>Normal</h4>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
        </div>
      </div>
      <div>
        <h4 style={{ marginBottom: '12px' }}>Loading</h4>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <Button variant="primary" loading>
            Primary
          </Button>
          <Button variant="secondary" loading>
            Secondary
          </Button>
          <Button variant="tertiary" loading>
            Tertiary
          </Button>
        </div>
      </div>
      <div>
        <h4 style={{ marginBottom: '12px' }}>Disabled</h4>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <Button variant="primary" disabled>
            Primary
          </Button>
          <Button variant="secondary" disabled>
            Secondary
          </Button>
          <Button variant="tertiary" disabled>
            Tertiary
          </Button>
        </div>
      </div>
    </div>
  ),
};

/**
 * 모든 조합을 보여주는 종합 스토리
 */
export const AllCombinations: Story = {
  args: {
    children: 'Button',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h3 style={{ marginBottom: '16px' }}>Light Theme</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <h4 style={{ marginBottom: '8px' }}>Primary</h4>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Button variant="primary" size="small" theme="light">
                Small
              </Button>
              <Button variant="primary" size="medium" theme="light">
                Medium
              </Button>
              <Button variant="primary" size="large" theme="light">
                Large
              </Button>
            </div>
          </div>
          <div>
            <h4 style={{ marginBottom: '8px' }}>Secondary</h4>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Button variant="secondary" size="small" theme="light">
                Small
              </Button>
              <Button variant="secondary" size="medium" theme="light">
                Medium
              </Button>
              <Button variant="secondary" size="large" theme="light">
                Large
              </Button>
            </div>
          </div>
          <div>
            <h4 style={{ marginBottom: '8px' }}>Tertiary</h4>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Button variant="tertiary" size="small" theme="light">
                Small
              </Button>
              <Button variant="tertiary" size="medium" theme="light">
                Medium
              </Button>
              <Button variant="tertiary" size="large" theme="light">
                Large
              </Button>
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <h4 style={{ marginBottom: '8px', color: '#fff' }}>Primary</h4>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Button variant="primary" size="small" theme="dark">
                Small
              </Button>
              <Button variant="primary" size="medium" theme="dark">
                Medium
              </Button>
              <Button variant="primary" size="large" theme="dark">
                Large
              </Button>
            </div>
          </div>
          <div>
            <h4 style={{ marginBottom: '8px', color: '#fff' }}>Secondary</h4>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Button variant="secondary" size="small" theme="dark">
                Small
              </Button>
              <Button variant="secondary" size="medium" theme="dark">
                Medium
              </Button>
              <Button variant="secondary" size="large" theme="dark">
                Large
              </Button>
            </div>
          </div>
          <div>
            <h4 style={{ marginBottom: '8px', color: '#fff' }}>Tertiary</h4>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Button variant="tertiary" size="small" theme="dark">
                Small
              </Button>
              <Button variant="tertiary" size="medium" theme="dark">
                Medium
              </Button>
              <Button variant="tertiary" size="large" theme="dark">
                Large
              </Button>
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
 * Interactive Playground
 */
export const Playground: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'light',
    children: 'Click me',
    loading: false,
    disabled: false,
  },
};
