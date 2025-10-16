import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import SelectBox, { SelectBoxProps, Option } from './index';

/**
 * SelectBox 컴포넌트는 다양한 variant, size, theme를 지원하는 범용 셀렉트박스 컴포넌트입니다.
 *
 * ## Features
 * - 3가지 variant: primary, secondary, tertiary
 * - 3가지 size: small, medium, large
 * - 2가지 theme: light, dark
 * - 키보드 네비게이션 지원 (Enter, Space, Arrow Up/Down, Escape)
 * - 외부 클릭 감지로 자동 닫기
 * - 옵션별 비활성화 지원
 * - 에러 및 성공 상태 지원
 * - 라벨 및 도움말 텍스트 지원
 */
const meta = {
  title: 'Commons/Components/SelectBox',
  component: SelectBox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '다양한 스타일과 상태를 지원하는 셀렉트박스 컴포넌트입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
      description: '셀렉트박스의 시각적 스타일 variant',
      table: {
        type: { summary: "'primary' | 'secondary' | 'tertiary'" },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: '셀렉트박스의 크기',
      table: {
        type: { summary: "'small' | 'medium' | 'large'" },
        defaultValue: { summary: 'medium' },
      },
    },
    theme: {
      control: 'select',
      options: ['light', 'dark'],
      description: '셀렉트박스의 테마',
      table: {
        type: { summary: "'light' | 'dark'" },
        defaultValue: { summary: 'light' },
      },
    },
    options: {
      control: 'object',
      description: '선택 가능한 옵션 배열',
      table: {
        type: { summary: 'Option[]' },
      },
    },
    value: {
      control: 'text',
      description: '현재 선택된 값',
      table: {
        type: { summary: 'string' },
      },
    },
    placeholder: {
      control: 'text',
      description: '플레이스홀더 텍스트',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '선택하세요' },
      },
    },
    label: {
      control: 'text',
      description: '셀렉트박스 라벨',
      table: {
        type: { summary: 'string' },
      },
    },
    helpText: {
      control: 'text',
      description: '도움말 텍스트',
      table: {
        type: { summary: 'string' },
      },
    },
    errorMessage: {
      control: 'text',
      description: '에러 메시지',
      table: {
        type: { summary: 'string' },
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
    onChange: {
      action: 'changed',
      description: '값 변경 시 호출되는 콜백',
    },
    onOpen: {
      action: 'opened',
      description: '드롭다운이 열릴 때 호출되는 콜백',
    },
    onClose: {
      action: 'closed',
      description: '드롭다운이 닫힐 때 호출되는 콜백',
    },
  },
} satisfies Meta<typeof SelectBox>;

export default meta;
type Story = StoryObj<typeof meta>;

// 샘플 옵션 데이터
const sampleOptions: Option[] = [
  { value: 'option1', label: '옵션 1' },
  { value: 'option2', label: '옵션 2' },
  { value: 'option3', label: '옵션 3' },
  { value: 'option4', label: '옵션 4' },
  { value: 'option5', label: '옵션 5' },
];

const fruitOptions: Option[] = [
  { value: 'apple', label: '사과' },
  { value: 'banana', label: '바나나' },
  { value: 'orange', label: '오렌지' },
  { value: 'grape', label: '포도' },
  { value: 'strawberry', label: '딸기' },
];

const optionsWithDisabled: Option[] = [
  { value: 'option1', label: '옵션 1' },
  { value: 'option2', label: '옵션 2 (비활성화)', disabled: true },
  { value: 'option3', label: '옵션 3' },
  { value: 'option4', label: '옵션 4 (비활성화)', disabled: true },
  { value: 'option5', label: '옵션 5' },
];

// Interactive wrapper component
const SelectBoxWrapper = (args: SelectBoxProps) => {
  const [value, setValue] = useState(args.value || '');
  return (
    <div style={{ width: '320px' }}>
      <SelectBox {...args} value={value} onChange={(newValue) => setValue(newValue)} />
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
      <div style={{ width: '320px' }}>
        <SelectBox variant="primary" size="small" options={sampleOptions} value={small} onChange={setSmall} />
      </div>
      <div style={{ width: '320px' }}>
        <SelectBox variant="primary" size="medium" options={sampleOptions} value={medium} onChange={setMedium} />
      </div>
      <div style={{ width: '320px' }}>
        <SelectBox variant="primary" size="large" options={sampleOptions} value={large} onChange={setLarge} />
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
      <div style={{ width: '320px' }}>
        <SelectBox variant="secondary" size="small" options={sampleOptions} value={small} onChange={setSmall} />
      </div>
      <div style={{ width: '320px' }}>
        <SelectBox variant="secondary" size="medium" options={sampleOptions} value={medium} onChange={setMedium} />
      </div>
      <div style={{ width: '320px' }}>
        <SelectBox variant="secondary" size="large" options={sampleOptions} value={large} onChange={setLarge} />
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
      <div style={{ width: '320px' }}>
        <SelectBox variant="tertiary" size="small" options={sampleOptions} value={small} onChange={setSmall} />
      </div>
      <div style={{ width: '320px' }}>
        <SelectBox variant="tertiary" size="medium" options={sampleOptions} value={medium} onChange={setMedium} />
      </div>
      <div style={{ width: '320px' }}>
        <SelectBox variant="tertiary" size="large" options={sampleOptions} value={large} onChange={setLarge} />
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
      <div style={{ width: '320px' }}>
        <SelectBox variant="primary" theme="light" options={sampleOptions} value={primary} onChange={setPrimary} />
      </div>
      <div style={{ width: '320px' }}>
        <SelectBox
          variant="secondary"
          theme="light"
          options={sampleOptions}
          value={secondary}
          onChange={setSecondary}
        />
      </div>
      <div style={{ width: '320px' }}>
        <SelectBox variant="tertiary" theme="light" options={sampleOptions} value={tertiary} onChange={setTertiary} />
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
      <div style={{ width: '320px' }}>
        <SelectBox variant="primary" theme="dark" options={sampleOptions} value={primary} onChange={setPrimary} />
      </div>
      <div style={{ width: '320px' }}>
        <SelectBox variant="secondary" theme="dark" options={sampleOptions} value={secondary} onChange={setSecondary} />
      </div>
      <div style={{ width: '320px' }}>
        <SelectBox variant="tertiary" theme="dark" options={sampleOptions} value={tertiary} onChange={setTertiary} />
      </div>
    </div>
  );
};

const StatesComponent = () => {
  const [normal, setNormal] = useState('');
  const [withValue, setWithValue] = useState('option2');
  const [disabled, setDisabled] = useState('option3');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('option1');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center' }}>
      <div style={{ width: '320px' }}>
        <h4 style={{ marginBottom: '12px', textAlign: 'center' }}>Normal</h4>
        <SelectBox variant="primary" options={sampleOptions} value={normal} onChange={setNormal} />
      </div>
      <div style={{ width: '320px' }}>
        <h4 style={{ marginBottom: '12px', textAlign: 'center' }}>With Value</h4>
        <SelectBox variant="primary" options={sampleOptions} value={withValue} onChange={setWithValue} />
      </div>
      <div style={{ width: '320px' }}>
        <h4 style={{ marginBottom: '12px', textAlign: 'center' }}>Disabled</h4>
        <SelectBox variant="primary" options={sampleOptions} value={disabled} onChange={setDisabled} disabled />
      </div>
      <div style={{ width: '320px' }}>
        <h4 style={{ marginBottom: '12px', textAlign: 'center' }}>Error</h4>
        <SelectBox
          variant="primary"
          options={sampleOptions}
          value={error}
          onChange={setError}
          error
          errorMessage="필수 항목입니다."
        />
      </div>
      <div style={{ width: '320px' }}>
        <h4 style={{ marginBottom: '12px', textAlign: 'center' }}>Success</h4>
        <SelectBox variant="primary" options={sampleOptions} value={success} onChange={setSuccess} success />
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
              <div style={{ width: '320px' }}>
                <SelectBox
                  variant="primary"
                  size="small"
                  theme="light"
                  options={sampleOptions}
                  value={lightPrimarySmall}
                  onChange={setLightPrimarySmall}
                />
              </div>
              <div style={{ width: '320px' }}>
                <SelectBox
                  variant="primary"
                  size="medium"
                  theme="light"
                  options={sampleOptions}
                  value={lightPrimaryMedium}
                  onChange={setLightPrimaryMedium}
                />
              </div>
              <div style={{ width: '320px' }}>
                <SelectBox
                  variant="primary"
                  size="large"
                  theme="light"
                  options={sampleOptions}
                  value={lightPrimaryLarge}
                  onChange={setLightPrimaryLarge}
                />
              </div>
            </div>
          </div>
          <div>
            <h4 style={{ marginBottom: '8px' }}>Secondary</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ width: '320px' }}>
                <SelectBox
                  variant="secondary"
                  size="small"
                  theme="light"
                  options={sampleOptions}
                  value={lightSecondarySmall}
                  onChange={setLightSecondarySmall}
                />
              </div>
              <div style={{ width: '320px' }}>
                <SelectBox
                  variant="secondary"
                  size="medium"
                  theme="light"
                  options={sampleOptions}
                  value={lightSecondaryMedium}
                  onChange={setLightSecondaryMedium}
                />
              </div>
              <div style={{ width: '320px' }}>
                <SelectBox
                  variant="secondary"
                  size="large"
                  theme="light"
                  options={sampleOptions}
                  value={lightSecondaryLarge}
                  onChange={setLightSecondaryLarge}
                />
              </div>
            </div>
          </div>
          <div>
            <h4 style={{ marginBottom: '8px' }}>Tertiary</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ width: '320px' }}>
                <SelectBox
                  variant="tertiary"
                  size="small"
                  theme="light"
                  options={sampleOptions}
                  value={lightTertiarySmall}
                  onChange={setLightTertiarySmall}
                />
              </div>
              <div style={{ width: '320px' }}>
                <SelectBox
                  variant="tertiary"
                  size="medium"
                  theme="light"
                  options={sampleOptions}
                  value={lightTertiaryMedium}
                  onChange={setLightTertiaryMedium}
                />
              </div>
              <div style={{ width: '320px' }}>
                <SelectBox
                  variant="tertiary"
                  size="large"
                  theme="light"
                  options={sampleOptions}
                  value={lightTertiaryLarge}
                  onChange={setLightTertiaryLarge}
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
              <div style={{ width: '320px' }}>
                <SelectBox
                  variant="primary"
                  size="small"
                  theme="dark"
                  options={sampleOptions}
                  value={darkPrimarySmall}
                  onChange={setDarkPrimarySmall}
                />
              </div>
              <div style={{ width: '320px' }}>
                <SelectBox
                  variant="primary"
                  size="medium"
                  theme="dark"
                  options={sampleOptions}
                  value={darkPrimaryMedium}
                  onChange={setDarkPrimaryMedium}
                />
              </div>
              <div style={{ width: '320px' }}>
                <SelectBox
                  variant="primary"
                  size="large"
                  theme="dark"
                  options={sampleOptions}
                  value={darkPrimaryLarge}
                  onChange={setDarkPrimaryLarge}
                />
              </div>
            </div>
          </div>
          <div>
            <h4 style={{ marginBottom: '8px', color: '#fff' }}>Secondary</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ width: '320px' }}>
                <SelectBox
                  variant="secondary"
                  size="small"
                  theme="dark"
                  options={sampleOptions}
                  value={darkSecondarySmall}
                  onChange={setDarkSecondarySmall}
                />
              </div>
              <div style={{ width: '320px' }}>
                <SelectBox
                  variant="secondary"
                  size="medium"
                  theme="dark"
                  options={sampleOptions}
                  value={darkSecondaryMedium}
                  onChange={setDarkSecondaryMedium}
                />
              </div>
              <div style={{ width: '320px' }}>
                <SelectBox
                  variant="secondary"
                  size="large"
                  theme="dark"
                  options={sampleOptions}
                  value={darkSecondaryLarge}
                  onChange={setDarkSecondaryLarge}
                />
              </div>
            </div>
          </div>
          <div>
            <h4 style={{ marginBottom: '8px', color: '#fff' }}>Tertiary</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ width: '320px' }}>
                <SelectBox
                  variant="tertiary"
                  size="small"
                  theme="dark"
                  options={sampleOptions}
                  value={darkTertiarySmall}
                  onChange={setDarkTertiarySmall}
                />
              </div>
              <div style={{ width: '320px' }}>
                <SelectBox
                  variant="tertiary"
                  size="medium"
                  theme="dark"
                  options={sampleOptions}
                  value={darkTertiaryMedium}
                  onChange={setDarkTertiaryMedium}
                />
              </div>
              <div style={{ width: '320px' }}>
                <SelectBox
                  variant="tertiary"
                  size="large"
                  theme="dark"
                  options={sampleOptions}
                  value={darkTertiaryLarge}
                  onChange={setDarkTertiaryLarge}
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
 * 기본 Primary 셀렉트박스
 */
export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'light',
    options: sampleOptions,
  },
  render: (args) => <SelectBoxWrapper {...args} />,
};

/**
 * Secondary 셀렉트박스
 */
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
    theme: 'light',
    options: sampleOptions,
  },
  render: (args) => <SelectBoxWrapper {...args} />,
};

/**
 * Tertiary 셀렉트박스
 */
export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    size: 'medium',
    theme: 'light',
    options: sampleOptions,
  },
  render: (args) => <SelectBoxWrapper {...args} />,
};

/**
 * Small 크기 셀렉트박스
 */
export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'small',
    theme: 'light',
    options: sampleOptions,
  },
  render: (args) => <SelectBoxWrapper {...args} />,
};

/**
 * Medium 크기 셀렉트박스 (기본값)
 */
export const Medium: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'light',
    options: sampleOptions,
  },
  render: (args) => <SelectBoxWrapper {...args} />,
};

/**
 * Large 크기 셀렉트박스
 */
export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    theme: 'light',
    options: sampleOptions,
  },
  render: (args) => <SelectBoxWrapper {...args} />,
};

/**
 * Dark 테마 셀렉트박스
 */
export const DarkTheme: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'dark',
    options: sampleOptions,
  },
  render: (args) => <SelectBoxWrapper {...args} />,
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

/**
 * 라벨과 도움말이 있는 셀렉트박스
 */
export const WithLabel: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'light',
    options: fruitOptions,
    label: '좋아하는 과일',
    helpText: '가장 좋아하는 과일을 선택하세요.',
  },
  render: (args) => <SelectBoxWrapper {...args} />,
};

/**
 * 에러 상태의 셀렉트박스
 */
export const WithError: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'light',
    options: sampleOptions,
    label: '필수 선택 항목',
    error: true,
    errorMessage: '이 항목은 필수입니다.',
  },
  render: (args) => <SelectBoxWrapper {...args} />,
};

/**
 * 성공 상태의 셀렉트박스
 */
export const WithSuccess: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'light',
    options: fruitOptions,
    value: 'apple',
    label: '선택 완료',
    helpText: '올바르게 선택되었습니다.',
    success: true,
  },
  render: (args) => <SelectBoxWrapper {...args} />,
};

/**
 * 비활성화된 셀렉트박스
 */
export const Disabled: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'light',
    options: sampleOptions,
    value: 'option3',
    disabled: true,
  },
  render: (args) => <SelectBoxWrapper {...args} />,
};

/**
 * 일부 옵션이 비활성화된 셀렉트박스
 */
export const WithDisabledOptions: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'light',
    options: optionsWithDisabled,
    label: '일부 옵션 비활성화',
    helpText: '비활성화된 옵션은 선택할 수 없습니다.',
  },
  render: (args) => <SelectBoxWrapper {...args} />,
};

/**
 * 커스텀 Placeholder
 */
export const CustomPlaceholder: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'light',
    options: fruitOptions,
    placeholder: '과일을 선택해주세요...',
  },
  render: (args) => <SelectBoxWrapper {...args} />,
};

/**
 * 모든 Primary Variant 크기
 */
export const PrimaryVariants: Story = {
  args: {
    options: sampleOptions,
  },
  render: () => <PrimaryVariantsComponent />,
};

/**
 * 모든 Secondary Variant 크기
 */
export const SecondaryVariants: Story = {
  args: {
    options: sampleOptions,
  },
  render: () => <SecondaryVariantsComponent />,
};

/**
 * 모든 Tertiary Variant 크기
 */
export const TertiaryVariants: Story = {
  args: {
    options: sampleOptions,
  },
  render: () => <TertiaryVariantsComponent />,
};

/**
 * Light 테마 - 모든 Variant
 */
export const AllVariantsLight: Story = {
  args: {
    options: sampleOptions,
  },
  render: () => <AllVariantsLightComponent />,
};

/**
 * Dark 테마 - 모든 Variant
 */
export const AllVariantsDark: Story = {
  args: {
    options: sampleOptions,
  },
  render: () => <AllVariantsDarkComponent />,
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

/**
 * 상태별 셀렉트박스 (Normal, With Value, Disabled, Error, Success)
 */
export const States: Story = {
  args: {
    options: sampleOptions,
  },
  render: () => <StatesComponent />,
};

/**
 * 모든 조합을 보여주는 종합 스토리
 */
export const AllCombinations: Story = {
  args: {
    options: sampleOptions,
  },
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
    options: fruitOptions,
    placeholder: '선택하세요',
    label: '옵션 선택',
    helpText: '원하는 옵션을 선택하세요.',
    disabled: false,
    error: false,
    success: false,
  },
  render: (args) => <SelectBoxWrapper {...args} />,
};
