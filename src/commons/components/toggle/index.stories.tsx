import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Toggle, { ToggleProps } from './index';

/**
 * Toggle 컴포넌트는 다양한 variant, size, theme를 지원하는 범용 토글 스위치 컴포넌트입니다.
 *
 * ## Features
 * - 3가지 variant: primary, secondary, tertiary
 * - 3가지 size: small, medium, large
 * - 2가지 theme: light, dark
 * - 제어형/비제어형 상태 관리
 * - 키보드 접근성 지원 (Space, Enter)
 * - 비활성화 상태 지원
 */
const meta = {
  title: 'Commons/Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '다양한 스타일과 상태를 지원하는 토글 스위치 컴포넌트입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
      description: '토글의 시각적 스타일 variant',
      table: {
        type: { summary: "'primary' | 'secondary' | 'tertiary'" },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: '토글의 크기',
      table: {
        type: { summary: "'small' | 'medium' | 'large'" },
        defaultValue: { summary: 'medium' },
      },
    },
    theme: {
      control: 'select',
      options: ['light', 'dark'],
      description: '토글의 테마',
      table: {
        type: { summary: "'light' | 'dark'" },
        defaultValue: { summary: 'light' },
      },
    },
    checked: {
      control: 'boolean',
      description: '토글 상태 (제어형)',
      table: {
        type: { summary: 'boolean' },
      },
    },
    defaultChecked: {
      control: 'boolean',
      description: '기본 토글 상태 (비제어형)',
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
    onChange: {
      action: 'changed',
      description: '토글 상태 변경 시 호출되는 콜백',
    },
    'aria-label': {
      control: 'text',
      description: '접근성을 위한 라벨',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

// Interactive wrapper component
const ToggleWrapper = (args: ToggleProps) => {
  const [checked, setChecked] = useState(args.defaultChecked || false);

  return (
    <Toggle
      {...args}
      checked={checked}
      onChange={(newChecked) => {
        setChecked(newChecked);
        args.onChange?.(newChecked);
      }}
    />
  );
};

/**
 * 기본 Primary 토글 스위치입니다.
 */
export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'light',
    defaultChecked: false,
    'aria-label': 'Primary toggle',
  },
  render: (args) => <ToggleWrapper {...args} />,
};

/**
 * Secondary variant 토글 스위치입니다.
 */
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
    theme: 'light',
    defaultChecked: false,
    'aria-label': 'Secondary toggle',
  },
  render: (args) => <ToggleWrapper {...args} />,
};

/**
 * Tertiary variant 토글 스위치입니다.
 */
export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    size: 'medium',
    theme: 'light',
    defaultChecked: false,
    'aria-label': 'Tertiary toggle',
  },
  render: (args) => <ToggleWrapper {...args} />,
};

/**
 * 기본적으로 체크된 상태의 토글입니다.
 */
export const DefaultChecked: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'light',
    defaultChecked: true,
    'aria-label': 'Default checked toggle',
  },
  render: (args) => <ToggleWrapper {...args} />,
};

/**
 * Small 크기의 토글 스위치입니다.
 */
export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'small',
    theme: 'light',
    defaultChecked: false,
    'aria-label': 'Small toggle',
  },
  render: (args) => <ToggleWrapper {...args} />,
};

/**
 * Medium 크기의 토글 스위치입니다.
 */
export const Medium: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'light',
    defaultChecked: false,
    'aria-label': 'Medium toggle',
  },
  render: (args) => <ToggleWrapper {...args} />,
};

/**
 * Large 크기의 토글 스위치입니다.
 */
export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    theme: 'light',
    defaultChecked: false,
    'aria-label': 'Large toggle',
  },
  render: (args) => <ToggleWrapper {...args} />,
};

/**
 * Dark 테마의 토글 스위치입니다.
 */
export const DarkTheme: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'dark',
    defaultChecked: false,
    'aria-label': 'Dark theme toggle',
  },
  render: (args) => <ToggleWrapper {...args} />,
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

/**
 * 비활성화된 토글 스위치입니다.
 */
export const Disabled: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'light',
    defaultChecked: false,
    disabled: true,
    'aria-label': 'Disabled toggle',
  },
  render: (args) => <ToggleWrapper {...args} />,
};

/**
 * 비활성화되고 체크된 토글 스위치입니다.
 */
export const DisabledChecked: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'light',
    defaultChecked: true,
    disabled: true,
    'aria-label': 'Disabled checked toggle',
  },
  render: (args) => <ToggleWrapper {...args} />,
};

/**
 * 모든 variant를 한번에 보여주는 Showcase입니다.
 */
export const VariantShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <h3 style={{ marginBottom: '10px', fontSize: '14px', fontWeight: 600 }}>
          Primary Variant
        </h3>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <ToggleWrapper variant="primary" size="medium" theme="light" defaultChecked={false} aria-label="Primary off" />
          <ToggleWrapper variant="primary" size="medium" theme="light" defaultChecked={true} aria-label="Primary on" />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '10px', fontSize: '14px', fontWeight: 600 }}>
          Secondary Variant
        </h3>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <ToggleWrapper variant="secondary" size="medium" theme="light" defaultChecked={false} aria-label="Secondary off" />
          <ToggleWrapper variant="secondary" size="medium" theme="light" defaultChecked={true} aria-label="Secondary on" />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '10px', fontSize: '14px', fontWeight: 600 }}>
          Tertiary Variant
        </h3>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <ToggleWrapper variant="tertiary" size="medium" theme="light" defaultChecked={false} aria-label="Tertiary off" />
          <ToggleWrapper variant="tertiary" size="medium" theme="light" defaultChecked={true} aria-label="Tertiary on" />
        </div>
      </div>
    </div>
  ),
};

/**
 * 모든 크기를 한번에 보여주는 Showcase입니다.
 */
export const SizeShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <h3 style={{ marginBottom: '10px', fontSize: '14px', fontWeight: 600 }}>
          Small (44x24px)
        </h3>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <ToggleWrapper variant="primary" size="small" theme="light" defaultChecked={false} aria-label="Small off" />
          <ToggleWrapper variant="primary" size="small" theme="light" defaultChecked={true} aria-label="Small on" />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '10px', fontSize: '14px', fontWeight: 600 }}>
          Medium (58x32px)
        </h3>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <ToggleWrapper variant="primary" size="medium" theme="light" defaultChecked={false} aria-label="Medium off" />
          <ToggleWrapper variant="primary" size="medium" theme="light" defaultChecked={true} aria-label="Medium on" />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '10px', fontSize: '14px', fontWeight: 600 }}>
          Large (72x40px)
        </h3>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <ToggleWrapper variant="primary" size="large" theme="light" defaultChecked={false} aria-label="Large off" />
          <ToggleWrapper variant="primary" size="large" theme="light" defaultChecked={true} aria-label="Large on" />
        </div>
      </div>
    </div>
  ),
};

/**
 * Light와 Dark 테마를 한번에 보여주는 Showcase입니다.
 */
export const ThemeShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      <div>
        <h3 style={{ marginBottom: '10px', fontSize: '14px', fontWeight: 600 }}>
          Light Theme
        </h3>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <ToggleWrapper variant="primary" size="medium" theme="light" defaultChecked={false} aria-label="Light primary off" />
          <ToggleWrapper variant="primary" size="medium" theme="light" defaultChecked={true} aria-label="Light primary on" />
          <ToggleWrapper variant="secondary" size="medium" theme="light" defaultChecked={false} aria-label="Light secondary off" />
          <ToggleWrapper variant="secondary" size="medium" theme="light" defaultChecked={true} aria-label="Light secondary on" />
          <ToggleWrapper variant="tertiary" size="medium" theme="light" defaultChecked={false} aria-label="Light tertiary off" />
          <ToggleWrapper variant="tertiary" size="medium" theme="light" defaultChecked={true} aria-label="Light tertiary on" />
        </div>
      </div>
      <div style={{ backgroundColor: '#1a1a1a', padding: '20px', borderRadius: '8px' }}>
        <h3 style={{ marginBottom: '10px', fontSize: '14px', fontWeight: 600, color: '#fff' }}>
          Dark Theme
        </h3>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <ToggleWrapper variant="primary" size="medium" theme="dark" defaultChecked={false} aria-label="Dark primary off" />
          <ToggleWrapper variant="primary" size="medium" theme="dark" defaultChecked={true} aria-label="Dark primary on" />
          <ToggleWrapper variant="secondary" size="medium" theme="dark" defaultChecked={false} aria-label="Dark secondary off" />
          <ToggleWrapper variant="secondary" size="medium" theme="dark" defaultChecked={true} aria-label="Dark secondary on" />
          <ToggleWrapper variant="tertiary" size="medium" theme="dark" defaultChecked={false} aria-label="Dark tertiary off" />
          <ToggleWrapper variant="tertiary" size="medium" theme="dark" defaultChecked={true} aria-label="Dark tertiary on" />
        </div>
      </div>
    </div>
  ),
};

/**
 * 모든 조합을 보여주는 종합 Showcase입니다.
 */
export const AllCombinations: Story = {
  render: () => {
    const variants: Array<'primary' | 'secondary' | 'tertiary'> = ['primary', 'secondary', 'tertiary'];
    const sizes: Array<'small' | 'medium' | 'large'> = ['small', 'medium', 'large'];
    const themes: Array<'light' | 'dark'> = ['light', 'dark'];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        {themes.map((theme) => (
          <div
            key={theme}
            style={{
              backgroundColor: theme === 'dark' ? '#1a1a1a' : '#ffffff',
              padding: '20px',
              borderRadius: '8px',
            }}
          >
            <h2
              style={{
                marginBottom: '20px',
                fontSize: '16px',
                fontWeight: 700,
                color: theme === 'dark' ? '#fff' : '#000',
              }}
            >
              {theme.toUpperCase()} Theme
            </h2>
            {variants.map((variant) => (
              <div key={variant} style={{ marginBottom: '20px' }}>
                <h3
                  style={{
                    marginBottom: '10px',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: theme === 'dark' ? '#fff' : '#000',
                  }}
                >
                  {variant.charAt(0).toUpperCase() + variant.slice(1)} Variant
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  {sizes.map((size) => (
                    <div key={size} style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                      <span
                        style={{
                          width: '60px',
                          fontSize: '12px',
                          color: theme === 'dark' ? '#ccc' : '#666',
                        }}
                      >
                        {size}:
                      </span>
                      <ToggleWrapper
                        variant={variant}
                        size={size}
                        theme={theme}
                        defaultChecked={false}
                        aria-label={`${theme} ${variant} ${size} off`}
                      />
                      <ToggleWrapper
                        variant={variant}
                        size={size}
                        theme={theme}
                        defaultChecked={true}
                        aria-label={`${theme} ${variant} ${size} on`}
                      />
                      <ToggleWrapper
                        variant={variant}
                        size={size}
                        theme={theme}
                        defaultChecked={false}
                        disabled
                        aria-label={`${theme} ${variant} ${size} disabled off`}
                      />
                      <ToggleWrapper
                        variant={variant}
                        size={size}
                        theme={theme}
                        defaultChecked={true}
                        disabled
                        aria-label={`${theme} ${variant} ${size} disabled on`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  },
};

// Interactive 컴포넌트
const InteractiveExample = () => {
  const [checked, setChecked] = useState(false);
  const [log, setLog] = useState<string[]>([]);

  const handleChange = (newChecked: boolean) => {
    setChecked(newChecked);
    const timestamp = new Date().toLocaleTimeString();
    setLog((prev) => [...prev, `[${timestamp}] Toggle ${newChecked ? 'ON' : 'OFF'}`]);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
      <Toggle
        variant="primary"
        size="medium"
        theme="light"
        checked={checked}
        onChange={handleChange}
        aria-label="Interactive toggle"
      />
      <div
        style={{
          padding: '15px',
          backgroundColor: '#f5f5f5',
          borderRadius: '4px',
          width: '300px',
        }}
      >
        <h4 style={{ margin: '0 0 10px 0', fontSize: '12px', fontWeight: 600 }}>
          Event Log:
        </h4>
        <div style={{ fontSize: '11px', fontFamily: 'monospace', maxHeight: '150px', overflow: 'auto' }}>
          {log.length === 0 ? (
            <div style={{ color: '#999' }}>토글을 클릭하면 이벤트가 기록됩니다.</div>
          ) : (
            log.map((entry, index) => (
              <div key={index} style={{ marginBottom: '4px' }}>
                {entry}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

/**
 * 상태 변경 이벤트를 테스트할 수 있는 Interactive 예제입니다.
 */
export const Interactive: Story = {
  render: () => <InteractiveExample />,
};

// WithForm 컴포넌트
const FormExample = () => {
  const [formData, setFormData] = useState({
    notifications: true,
    darkMode: false,
    autoSave: true,
    analytics: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', minWidth: '300px' }}>
        <label htmlFor="notifications" style={{ fontSize: '14px' }}>
          알림 받기
        </label>
        <Toggle
          checked={formData.notifications}
          onChange={(checked) => setFormData({ ...formData, notifications: checked })}
          name="notifications"
          aria-label="알림 받기"
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', minWidth: '300px' }}>
        <label htmlFor="darkMode" style={{ fontSize: '14px' }}>
          다크 모드
        </label>
        <Toggle
          checked={formData.darkMode}
          onChange={(checked) => setFormData({ ...formData, darkMode: checked })}
          name="darkMode"
          aria-label="다크 모드"
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', minWidth: '300px' }}>
        <label htmlFor="autoSave" style={{ fontSize: '14px' }}>
          자동 저장
        </label>
        <Toggle
          checked={formData.autoSave}
          onChange={(checked) => setFormData({ ...formData, autoSave: checked })}
          name="autoSave"
          aria-label="자동 저장"
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', minWidth: '300px' }}>
        <label htmlFor="analytics" style={{ fontSize: '14px' }}>
          분석 데이터 수집
        </label>
        <Toggle
          checked={formData.analytics}
          onChange={(checked) => setFormData({ ...formData, analytics: checked })}
          name="analytics"
          aria-label="분석 데이터 수집"
        />
      </div>
      <button
        type="submit"
        style={{
          marginTop: '10px',
          padding: '10px',
          backgroundColor: '#3a5cf3',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '14px',
        }}
      >
        저장
      </button>
    </form>
  );
};

/**
 * 폼과 함께 사용하는 예제입니다.
 */
export const WithForm: Story = {
  render: () => <FormExample />,
};

