import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import SearchBar, { SearchBarProps } from './index';

/**
 * SearchBar 컴포넌트는 다양한 variant, size, theme를 지원하는 범용 검색바 컴포넌트입니다.
 *
 * ## Features
 * - 3가지 variant: primary, secondary, tertiary
 * - 3가지 size: small, medium, large
 * - 2가지 theme: light, dark
 * - 검색 아이콘 버튼
 * - 입력값 초기화 버튼 (선택적)
 * - Enter 키 검색 지원
 * - 비활성화 상태 지원
 */
const meta = {
  title: 'Commons/Components/SearchBar',
  component: SearchBar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '다양한 스타일과 상태를 지원하는 검색바 컴포넌트입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
      description: '검색바의 시각적 스타일 variant',
      table: {
        type: { summary: "'primary' | 'secondary' | 'tertiary'" },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: '검색바의 크기',
      table: {
        type: { summary: "'small' | 'medium' | 'large'" },
        defaultValue: { summary: 'medium' },
      },
    },
    theme: {
      control: 'select',
      options: ['light', 'dark'],
      description: '검색바의 테마',
      table: {
        type: { summary: "'light' | 'dark'" },
        defaultValue: { summary: 'light' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'input placeholder 텍스트',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '검색어를 입력해 주세요.' },
      },
    },
    showClearButton: {
      control: 'boolean',
      description: '초기화 버튼 표시 여부',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
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
    onSearch: {
      action: 'searched',
      description: '검색 버튼 클릭 또는 Enter 키 입력 시 호출되는 콜백',
    },
    onClear: {
      action: 'cleared',
      description: '초기화 버튼 클릭 시 호출되는 콜백',
    },
    onChange: {
      action: 'changed',
      description: 'input 값 변경 시 호출되는 콜백',
    },
  },
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Interactive wrapper component
const SearchBarWrapper = (args: SearchBarProps) => {
  const [value, setValue] = useState(args.value || '');
  return (
    <div style={{ width: '400px' }}>
      <SearchBar
        {...args}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          args.onChange?.(e);
        }}
        onClear={() => {
          setValue('');
          args.onClear?.();
        }}
      />
    </div>
  );
};

// Component wrappers for multi-instance stories
const PrimaryVariantsComponent = () => {
  const [small, setSmall] = useState('');
  const [medium, setMedium] = useState('');
  const [large, setLarge] = useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
      <div style={{ width: '400px' }}>
        <SearchBar
          variant="primary"
          size="small"
          value={small}
          onChange={(e) => setSmall(e.target.value)}
          onClear={() => setSmall('')}
        />
      </div>
      <div style={{ width: '400px' }}>
        <SearchBar
          variant="primary"
          size="medium"
          value={medium}
          onChange={(e) => setMedium(e.target.value)}
          onClear={() => setMedium('')}
        />
      </div>
      <div style={{ width: '400px' }}>
        <SearchBar
          variant="primary"
          size="large"
          value={large}
          onChange={(e) => setLarge(e.target.value)}
          onClear={() => setLarge('')}
        />
      </div>
    </div>
  );
};

const SecondaryVariantsComponent = () => {
  const [small, setSmall] = useState('');
  const [medium, setMedium] = useState('');
  const [large, setLarge] = useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
      <div style={{ width: '400px' }}>
        <SearchBar
          variant="secondary"
          size="small"
          value={small}
          onChange={(e) => setSmall(e.target.value)}
          onClear={() => setSmall('')}
        />
      </div>
      <div style={{ width: '400px' }}>
        <SearchBar
          variant="secondary"
          size="medium"
          value={medium}
          onChange={(e) => setMedium(e.target.value)}
          onClear={() => setMedium('')}
        />
      </div>
      <div style={{ width: '400px' }}>
        <SearchBar
          variant="secondary"
          size="large"
          value={large}
          onChange={(e) => setLarge(e.target.value)}
          onClear={() => setLarge('')}
        />
      </div>
    </div>
  );
};

const TertiaryVariantsComponent = () => {
  const [small, setSmall] = useState('');
  const [medium, setMedium] = useState('');
  const [large, setLarge] = useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
      <div style={{ width: '400px' }}>
        <SearchBar
          variant="tertiary"
          size="small"
          value={small}
          onChange={(e) => setSmall(e.target.value)}
          onClear={() => setSmall('')}
        />
      </div>
      <div style={{ width: '400px' }}>
        <SearchBar
          variant="tertiary"
          size="medium"
          value={medium}
          onChange={(e) => setMedium(e.target.value)}
          onClear={() => setMedium('')}
        />
      </div>
      <div style={{ width: '400px' }}>
        <SearchBar
          variant="tertiary"
          size="large"
          value={large}
          onChange={(e) => setLarge(e.target.value)}
          onClear={() => setLarge('')}
        />
      </div>
    </div>
  );
};

const AllVariantsLightComponent = () => {
  const [primary, setPrimary] = useState('');
  const [secondary, setSecondary] = useState('');
  const [tertiary, setTertiary] = useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
      <div style={{ width: '400px' }}>
        <SearchBar
          variant="primary"
          theme="light"
          value={primary}
          onChange={(e) => setPrimary(e.target.value)}
          onClear={() => setPrimary('')}
        />
      </div>
      <div style={{ width: '400px' }}>
        <SearchBar
          variant="secondary"
          theme="light"
          value={secondary}
          onChange={(e) => setSecondary(e.target.value)}
          onClear={() => setSecondary('')}
        />
      </div>
      <div style={{ width: '400px' }}>
        <SearchBar
          variant="tertiary"
          theme="light"
          value={tertiary}
          onChange={(e) => setTertiary(e.target.value)}
          onClear={() => setTertiary('')}
        />
      </div>
    </div>
  );
};

const AllVariantsDarkComponent = () => {
  const [primary, setPrimary] = useState('');
  const [secondary, setSecondary] = useState('');
  const [tertiary, setTertiary] = useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
      <div style={{ width: '400px' }}>
        <SearchBar
          variant="primary"
          theme="dark"
          value={primary}
          onChange={(e) => setPrimary(e.target.value)}
          onClear={() => setPrimary('')}
        />
      </div>
      <div style={{ width: '400px' }}>
        <SearchBar
          variant="secondary"
          theme="dark"
          value={secondary}
          onChange={(e) => setSecondary(e.target.value)}
          onClear={() => setSecondary('')}
        />
      </div>
      <div style={{ width: '400px' }}>
        <SearchBar
          variant="tertiary"
          theme="dark"
          value={tertiary}
          onChange={(e) => setTertiary(e.target.value)}
          onClear={() => setTertiary('')}
        />
      </div>
    </div>
  );
};

const StatesComponent = () => {
  const [normal, setNormal] = useState('');
  const [withValue, setWithValue] = useState('검색어 예시');
  const [disabled, setDisabled] = useState('비활성화 상태');
  const [noClear, setNoClear] = useState('초기화 버튼 없음');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center' }}>
      <div style={{ width: '400px' }}>
        <h4 style={{ marginBottom: '12px', textAlign: 'center' }}>Normal</h4>
        <SearchBar variant="primary" value={normal} onChange={(e) => setNormal(e.target.value)} onClear={() => setNormal('')} />
      </div>
      <div style={{ width: '400px' }}>
        <h4 style={{ marginBottom: '12px', textAlign: 'center' }}>With Value</h4>
        <SearchBar
          variant="primary"
          value={withValue}
          onChange={(e) => setWithValue(e.target.value)}
          onClear={() => setWithValue('')}
        />
      </div>
      <div style={{ width: '400px' }}>
        <h4 style={{ marginBottom: '12px', textAlign: 'center' }}>Disabled</h4>
        <SearchBar
          variant="primary"
          value={disabled}
          onChange={(e) => setDisabled(e.target.value)}
          onClear={() => setDisabled('')}
          disabled
        />
      </div>
      <div style={{ width: '400px' }}>
        <h4 style={{ marginBottom: '12px', textAlign: 'center' }}>Without Clear Button</h4>
        <SearchBar
          variant="primary"
          value={noClear}
          onChange={(e) => setNoClear(e.target.value)}
          showClearButton={false}
        />
      </div>
    </div>
  );
};

const AllCombinationsComponent = () => {
  const [lightPrimarySmall, setLightPrimarySmall] = useState('');
  const [lightPrimaryMedium, setLightPrimaryMedium] = useState('');
  const [lightPrimaryLarge, setLightPrimaryLarge] = useState('');
  const [lightSecondarySmall, setLightSecondarySmall] = useState('');
  const [lightSecondaryMedium, setLightSecondaryMedium] = useState('');
  const [lightSecondaryLarge, setLightSecondaryLarge] = useState('');
  const [lightTertiarySmall, setLightTertiarySmall] = useState('');
  const [lightTertiaryMedium, setLightTertiaryMedium] = useState('');
  const [lightTertiaryLarge, setLightTertiaryLarge] = useState('');

  const [darkPrimarySmall, setDarkPrimarySmall] = useState('');
  const [darkPrimaryMedium, setDarkPrimaryMedium] = useState('');
  const [darkPrimaryLarge, setDarkPrimaryLarge] = useState('');
  const [darkSecondarySmall, setDarkSecondarySmall] = useState('');
  const [darkSecondaryMedium, setDarkSecondaryMedium] = useState('');
  const [darkSecondaryLarge, setDarkSecondaryLarge] = useState('');
  const [darkTertiarySmall, setDarkTertiarySmall] = useState('');
  const [darkTertiaryMedium, setDarkTertiaryMedium] = useState('');
  const [darkTertiaryLarge, setDarkTertiaryLarge] = useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h3 style={{ marginBottom: '16px' }}>Light Theme</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <h4 style={{ marginBottom: '8px' }}>Primary</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ width: '400px' }}>
                <SearchBar
                  variant="primary"
                  size="small"
                  theme="light"
                  value={lightPrimarySmall}
                  onChange={(e) => setLightPrimarySmall(e.target.value)}
                  onClear={() => setLightPrimarySmall('')}
                />
              </div>
              <div style={{ width: '400px' }}>
                <SearchBar
                  variant="primary"
                  size="medium"
                  theme="light"
                  value={lightPrimaryMedium}
                  onChange={(e) => setLightPrimaryMedium(e.target.value)}
                  onClear={() => setLightPrimaryMedium('')}
                />
              </div>
              <div style={{ width: '400px' }}>
                <SearchBar
                  variant="primary"
                  size="large"
                  theme="light"
                  value={lightPrimaryLarge}
                  onChange={(e) => setLightPrimaryLarge(e.target.value)}
                  onClear={() => setLightPrimaryLarge('')}
                />
              </div>
            </div>
          </div>
          <div>
            <h4 style={{ marginBottom: '8px' }}>Secondary</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ width: '400px' }}>
                <SearchBar
                  variant="secondary"
                  size="small"
                  theme="light"
                  value={lightSecondarySmall}
                  onChange={(e) => setLightSecondarySmall(e.target.value)}
                  onClear={() => setLightSecondarySmall('')}
                />
              </div>
              <div style={{ width: '400px' }}>
                <SearchBar
                  variant="secondary"
                  size="medium"
                  theme="light"
                  value={lightSecondaryMedium}
                  onChange={(e) => setLightSecondaryMedium(e.target.value)}
                  onClear={() => setLightSecondaryMedium('')}
                />
              </div>
              <div style={{ width: '400px' }}>
                <SearchBar
                  variant="secondary"
                  size="large"
                  theme="light"
                  value={lightSecondaryLarge}
                  onChange={(e) => setLightSecondaryLarge(e.target.value)}
                  onClear={() => setLightSecondaryLarge('')}
                />
              </div>
            </div>
          </div>
          <div>
            <h4 style={{ marginBottom: '8px' }}>Tertiary</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ width: '400px' }}>
                <SearchBar
                  variant="tertiary"
                  size="small"
                  theme="light"
                  value={lightTertiarySmall}
                  onChange={(e) => setLightTertiarySmall(e.target.value)}
                  onClear={() => setLightTertiarySmall('')}
                />
              </div>
              <div style={{ width: '400px' }}>
                <SearchBar
                  variant="tertiary"
                  size="medium"
                  theme="light"
                  value={lightTertiaryMedium}
                  onChange={(e) => setLightTertiaryMedium(e.target.value)}
                  onClear={() => setLightTertiaryMedium('')}
                />
              </div>
              <div style={{ width: '400px' }}>
                <SearchBar
                  variant="tertiary"
                  size="large"
                  theme="light"
                  value={lightTertiaryLarge}
                  onChange={(e) => setLightTertiaryLarge(e.target.value)}
                  onClear={() => setLightTertiaryLarge('')}
                />
              </div>
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ width: '400px' }}>
                <SearchBar
                  variant="primary"
                  size="small"
                  theme="dark"
                  value={darkPrimarySmall}
                  onChange={(e) => setDarkPrimarySmall(e.target.value)}
                  onClear={() => setDarkPrimarySmall('')}
                />
              </div>
              <div style={{ width: '400px' }}>
                <SearchBar
                  variant="primary"
                  size="medium"
                  theme="dark"
                  value={darkPrimaryMedium}
                  onChange={(e) => setDarkPrimaryMedium(e.target.value)}
                  onClear={() => setDarkPrimaryMedium('')}
                />
              </div>
              <div style={{ width: '400px' }}>
                <SearchBar
                  variant="primary"
                  size="large"
                  theme="dark"
                  value={darkPrimaryLarge}
                  onChange={(e) => setDarkPrimaryLarge(e.target.value)}
                  onClear={() => setDarkPrimaryLarge('')}
                />
              </div>
            </div>
          </div>
          <div>
            <h4 style={{ marginBottom: '8px', color: '#fff' }}>Secondary</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ width: '400px' }}>
                <SearchBar
                  variant="secondary"
                  size="small"
                  theme="dark"
                  value={darkSecondarySmall}
                  onChange={(e) => setDarkSecondarySmall(e.target.value)}
                  onClear={() => setDarkSecondarySmall('')}
                />
              </div>
              <div style={{ width: '400px' }}>
                <SearchBar
                  variant="secondary"
                  size="medium"
                  theme="dark"
                  value={darkSecondaryMedium}
                  onChange={(e) => setDarkSecondaryMedium(e.target.value)}
                  onClear={() => setDarkSecondaryMedium('')}
                />
              </div>
              <div style={{ width: '400px' }}>
                <SearchBar
                  variant="secondary"
                  size="large"
                  theme="dark"
                  value={darkSecondaryLarge}
                  onChange={(e) => setDarkSecondaryLarge(e.target.value)}
                  onClear={() => setDarkSecondaryLarge('')}
                />
              </div>
            </div>
          </div>
          <div>
            <h4 style={{ marginBottom: '8px', color: '#fff' }}>Tertiary</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ width: '400px' }}>
                <SearchBar
                  variant="tertiary"
                  size="small"
                  theme="dark"
                  value={darkTertiarySmall}
                  onChange={(e) => setDarkTertiarySmall(e.target.value)}
                  onClear={() => setDarkTertiarySmall('')}
                />
              </div>
              <div style={{ width: '400px' }}>
                <SearchBar
                  variant="tertiary"
                  size="medium"
                  theme="dark"
                  value={darkTertiaryMedium}
                  onChange={(e) => setDarkTertiaryMedium(e.target.value)}
                  onClear={() => setDarkTertiaryMedium('')}
                />
              </div>
              <div style={{ width: '400px' }}>
                <SearchBar
                  variant="tertiary"
                  size="large"
                  theme="dark"
                  value={darkTertiaryLarge}
                  onChange={(e) => setDarkTertiaryLarge(e.target.value)}
                  onClear={() => setDarkTertiaryLarge('')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * 기본 Primary 검색바
 */
export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'light',
  },
  render: (args) => <SearchBarWrapper {...args} />,
};

/**
 * Secondary 검색바
 */
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
    theme: 'light',
  },
  render: (args) => <SearchBarWrapper {...args} />,
};

/**
 * Tertiary 검색바
 */
export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    size: 'medium',
    theme: 'light',
  },
  render: (args) => <SearchBarWrapper {...args} />,
};

/**
 * Small 크기 검색바
 */
export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'small',
    theme: 'light',
  },
  render: (args) => <SearchBarWrapper {...args} />,
};

/**
 * Medium 크기 검색바 (기본값)
 */
export const Medium: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'light',
  },
  render: (args) => <SearchBarWrapper {...args} />,
};

/**
 * Large 크기 검색바
 */
export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    theme: 'light',
  },
  render: (args) => <SearchBarWrapper {...args} />,
};

/**
 * Dark 테마 검색바
 */
export const DarkTheme: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'dark',
  },
  render: (args) => <SearchBarWrapper {...args} />,
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

/**
 * 값이 입력된 검색바
 */
export const WithValue: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'light',
    value: '검색어 예시',
  },
  render: (args) => <SearchBarWrapper {...args} />,
};

/**
 * 비활성화된 검색바
 */
export const Disabled: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'light',
    value: '비활성화 상태',
    disabled: true,
  },
  render: (args) => <SearchBarWrapper {...args} />,
};

/**
 * 초기화 버튼이 없는 검색바
 */
export const WithoutClearButton: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'light',
    value: '초기화 버튼 없음',
    showClearButton: false,
  },
  render: (args) => <SearchBarWrapper {...args} />,
};

/**
 * 커스텀 Placeholder
 */
export const CustomPlaceholder: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'light',
    placeholder: '여기에 검색어를 입력하세요...',
  },
  render: (args) => <SearchBarWrapper {...args} />,
};

/**
 * 모든 Primary Variant 크기
 */
export const PrimaryVariants: Story = {
  args: {},
  render: () => <PrimaryVariantsComponent />,
};

/**
 * 모든 Secondary Variant 크기
 */
export const SecondaryVariants: Story = {
  args: {},
  render: () => <SecondaryVariantsComponent />,
};

/**
 * 모든 Tertiary Variant 크기
 */
export const TertiaryVariants: Story = {
  args: {},
  render: () => <TertiaryVariantsComponent />,
};

/**
 * Light 테마 - 모든 Variant
 */
export const AllVariantsLight: Story = {
  args: {},
  render: () => <AllVariantsLightComponent />,
};

/**
 * Dark 테마 - 모든 Variant
 */
export const AllVariantsDark: Story = {
  args: {},
  render: () => <AllVariantsDarkComponent />,
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

/**
 * 상태별 검색바 (Normal, With Value, Disabled, Without Clear Button)
 */
export const States: Story = {
  args: {},
  render: () => <StatesComponent />,
};

/**
 * 모든 조합을 보여주는 종합 스토리
 */
export const AllCombinations: Story = {
  args: {},
  render: () => <AllCombinationsComponent />,
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
    placeholder: '검색어를 입력해 주세요.',
    showClearButton: true,
    disabled: false,
  },
  render: (args) => <SearchBarWrapper {...args} />,
};

