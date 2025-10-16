import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Pagination, { PaginationProps } from './index';

/**
 * Pagination 컴포넌트는 다양한 variant, size, theme를 지원하는 범용 페이지네이션 컴포넌트입니다.
 *
 * ## Features
 * - 3가지 variant: primary, secondary, tertiary
 * - 3가지 size: small, medium, large
 * - 2가지 theme: light, dark
 * - 이전/다음 버튼 지원
 * - 페이지 범위 표시 개수 조절 가능
 * - 비활성화 상태 지원
 */
const meta = {
  title: 'Commons/Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '다양한 스타일과 상태를 지원하는 페이지네이션 컴포넌트입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
      description: '페이지네이션의 시각적 스타일 variant',
      table: {
        type: { summary: "'primary' | 'secondary' | 'tertiary'" },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: '페이지네이션의 크기',
      table: {
        type: { summary: "'small' | 'medium' | 'large'" },
        defaultValue: { summary: 'medium' },
      },
    },
    theme: {
      control: 'select',
      options: ['light', 'dark'],
      description: '페이지네이션의 테마',
      table: {
        type: { summary: "'light' | 'dark'" },
        defaultValue: { summary: 'light' },
      },
    },
    currentPage: {
      control: 'number',
      description: '현재 페이지 (1부터 시작)',
      table: {
        type: { summary: 'number' },
      },
    },
    totalPages: {
      control: 'number',
      description: '전체 페이지 수',
      table: {
        type: { summary: 'number' },
      },
    },
    maxVisible: {
      control: 'number',
      description: '한 번에 보여줄 페이지 번호 개수',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '5' },
      },
    },
    showNavigationButtons: {
      control: 'boolean',
      description: '이전/다음 버튼 표시 여부',
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
    onPageChange: {
      action: 'page-changed',
      description: '페이지 변경 콜백',
    },
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

// Interactive wrapper component
const PaginationWrapper = (args: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(args.currentPage || 1);
  return <Pagination {...args} currentPage={currentPage} onPageChange={setCurrentPage} />;
};

// Component wrappers for multi-instance stories
const PrimaryVariantsComponent = () => {
  const [small, setSmall] = useState(1);
  const [medium, setMedium] = useState(1);
  const [large, setLarge] = useState(1);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
      <Pagination variant="primary" size="small" currentPage={small} totalPages={10} onPageChange={setSmall} />
      <Pagination variant="primary" size="medium" currentPage={medium} totalPages={10} onPageChange={setMedium} />
      <Pagination variant="primary" size="large" currentPage={large} totalPages={10} onPageChange={setLarge} />
    </div>
  );
};

const SecondaryVariantsComponent = () => {
  const [small, setSmall] = useState(1);
  const [medium, setMedium] = useState(1);
  const [large, setLarge] = useState(1);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
      <Pagination variant="secondary" size="small" currentPage={small} totalPages={10} onPageChange={setSmall} />
      <Pagination variant="secondary" size="medium" currentPage={medium} totalPages={10} onPageChange={setMedium} />
      <Pagination variant="secondary" size="large" currentPage={large} totalPages={10} onPageChange={setLarge} />
    </div>
  );
};

const TertiaryVariantsComponent = () => {
  const [small, setSmall] = useState(1);
  const [medium, setMedium] = useState(1);
  const [large, setLarge] = useState(1);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
      <Pagination variant="tertiary" size="small" currentPage={small} totalPages={10} onPageChange={setSmall} />
      <Pagination variant="tertiary" size="medium" currentPage={medium} totalPages={10} onPageChange={setMedium} />
      <Pagination variant="tertiary" size="large" currentPage={large} totalPages={10} onPageChange={setLarge} />
    </div>
  );
};

const AllVariantsLightComponent = () => {
  const [primary, setPrimary] = useState(1);
  const [secondary, setSecondary] = useState(1);
  const [tertiary, setTertiary] = useState(1);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
      <Pagination variant="primary" theme="light" currentPage={primary} totalPages={10} onPageChange={setPrimary} />
      <Pagination
        variant="secondary"
        theme="light"
        currentPage={secondary}
        totalPages={10}
        onPageChange={setSecondary}
      />
      <Pagination variant="tertiary" theme="light" currentPage={tertiary} totalPages={10} onPageChange={setTertiary} />
    </div>
  );
};

const AllVariantsDarkComponent = () => {
  const [primary, setPrimary] = useState(1);
  const [secondary, setSecondary] = useState(1);
  const [tertiary, setTertiary] = useState(1);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
      <Pagination variant="primary" theme="dark" currentPage={primary} totalPages={10} onPageChange={setPrimary} />
      <Pagination
        variant="secondary"
        theme="dark"
        currentPage={secondary}
        totalPages={10}
        onPageChange={setSecondary}
      />
      <Pagination variant="tertiary" theme="dark" currentPage={tertiary} totalPages={10} onPageChange={setTertiary} />
    </div>
  );
};

const StatesComponent = () => {
  const [normal, setNormal] = useState(5);
  const [disabled, setDisabled] = useState(5);
  const [withoutNav, setWithoutNav] = useState(5);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center' }}>
      <div>
        <h4 style={{ marginBottom: '12px', textAlign: 'center' }}>Normal</h4>
        <Pagination variant="primary" currentPage={normal} totalPages={10} onPageChange={setNormal} />
      </div>
      <div>
        <h4 style={{ marginBottom: '12px', textAlign: 'center' }}>Disabled</h4>
        <Pagination variant="primary" currentPage={disabled} totalPages={10} onPageChange={setDisabled} disabled />
      </div>
      <div>
        <h4 style={{ marginBottom: '12px', textAlign: 'center' }}>Without Navigation</h4>
        <Pagination
          variant="primary"
          currentPage={withoutNav}
          totalPages={10}
          onPageChange={setWithoutNav}
          showNavigationButtons={false}
        />
      </div>
    </div>
  );
};

const AllCombinationsComponent = () => {
  const [lightPrimarySmall, setLightPrimarySmall] = useState(1);
  const [lightPrimaryMedium, setLightPrimaryMedium] = useState(1);
  const [lightPrimaryLarge, setLightPrimaryLarge] = useState(1);
  const [lightSecondarySmall, setLightSecondarySmall] = useState(1);
  const [lightSecondaryMedium, setLightSecondaryMedium] = useState(1);
  const [lightSecondaryLarge, setLightSecondaryLarge] = useState(1);
  const [lightTertiarySmall, setLightTertiarySmall] = useState(1);
  const [lightTertiaryMedium, setLightTertiaryMedium] = useState(1);
  const [lightTertiaryLarge, setLightTertiaryLarge] = useState(1);

  const [darkPrimarySmall, setDarkPrimarySmall] = useState(1);
  const [darkPrimaryMedium, setDarkPrimaryMedium] = useState(1);
  const [darkPrimaryLarge, setDarkPrimaryLarge] = useState(1);
  const [darkSecondarySmall, setDarkSecondarySmall] = useState(1);
  const [darkSecondaryMedium, setDarkSecondaryMedium] = useState(1);
  const [darkSecondaryLarge, setDarkSecondaryLarge] = useState(1);
  const [darkTertiarySmall, setDarkTertiarySmall] = useState(1);
  const [darkTertiaryMedium, setDarkTertiaryMedium] = useState(1);
  const [darkTertiaryLarge, setDarkTertiaryLarge] = useState(1);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h3 style={{ marginBottom: '16px' }}>Light Theme</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <h4 style={{ marginBottom: '8px' }}>Primary</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Pagination
                variant="primary"
                size="small"
                theme="light"
                currentPage={lightPrimarySmall}
                totalPages={10}
                onPageChange={setLightPrimarySmall}
              />
              <Pagination
                variant="primary"
                size="medium"
                theme="light"
                currentPage={lightPrimaryMedium}
                totalPages={10}
                onPageChange={setLightPrimaryMedium}
              />
              <Pagination
                variant="primary"
                size="large"
                theme="light"
                currentPage={lightPrimaryLarge}
                totalPages={10}
                onPageChange={setLightPrimaryLarge}
              />
            </div>
          </div>
          <div>
            <h4 style={{ marginBottom: '8px' }}>Secondary</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Pagination
                variant="secondary"
                size="small"
                theme="light"
                currentPage={lightSecondarySmall}
                totalPages={10}
                onPageChange={setLightSecondarySmall}
              />
              <Pagination
                variant="secondary"
                size="medium"
                theme="light"
                currentPage={lightSecondaryMedium}
                totalPages={10}
                onPageChange={setLightSecondaryMedium}
              />
              <Pagination
                variant="secondary"
                size="large"
                theme="light"
                currentPage={lightSecondaryLarge}
                totalPages={10}
                onPageChange={setLightSecondaryLarge}
              />
            </div>
          </div>
          <div>
            <h4 style={{ marginBottom: '8px' }}>Tertiary</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Pagination
                variant="tertiary"
                size="small"
                theme="light"
                currentPage={lightTertiarySmall}
                totalPages={10}
                onPageChange={setLightTertiarySmall}
              />
              <Pagination
                variant="tertiary"
                size="medium"
                theme="light"
                currentPage={lightTertiaryMedium}
                totalPages={10}
                onPageChange={setLightTertiaryMedium}
              />
              <Pagination
                variant="tertiary"
                size="large"
                theme="light"
                currentPage={lightTertiaryLarge}
                totalPages={10}
                onPageChange={setLightTertiaryLarge}
              />
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
              <Pagination
                variant="primary"
                size="small"
                theme="dark"
                currentPage={darkPrimarySmall}
                totalPages={10}
                onPageChange={setDarkPrimarySmall}
              />
              <Pagination
                variant="primary"
                size="medium"
                theme="dark"
                currentPage={darkPrimaryMedium}
                totalPages={10}
                onPageChange={setDarkPrimaryMedium}
              />
              <Pagination
                variant="primary"
                size="large"
                theme="dark"
                currentPage={darkPrimaryLarge}
                totalPages={10}
                onPageChange={setDarkPrimaryLarge}
              />
            </div>
          </div>
          <div>
            <h4 style={{ marginBottom: '8px', color: '#fff' }}>Secondary</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Pagination
                variant="secondary"
                size="small"
                theme="dark"
                currentPage={darkSecondarySmall}
                totalPages={10}
                onPageChange={setDarkSecondarySmall}
              />
              <Pagination
                variant="secondary"
                size="medium"
                theme="dark"
                currentPage={darkSecondaryMedium}
                totalPages={10}
                onPageChange={setDarkSecondaryMedium}
              />
              <Pagination
                variant="secondary"
                size="large"
                theme="dark"
                currentPage={darkSecondaryLarge}
                totalPages={10}
                onPageChange={setDarkSecondaryLarge}
              />
            </div>
          </div>
          <div>
            <h4 style={{ marginBottom: '8px', color: '#fff' }}>Tertiary</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Pagination
                variant="tertiary"
                size="small"
                theme="dark"
                currentPage={darkTertiarySmall}
                totalPages={10}
                onPageChange={setDarkTertiarySmall}
              />
              <Pagination
                variant="tertiary"
                size="medium"
                theme="dark"
                currentPage={darkTertiaryMedium}
                totalPages={10}
                onPageChange={setDarkTertiaryMedium}
              />
              <Pagination
                variant="tertiary"
                size="large"
                theme="dark"
                currentPage={darkTertiaryLarge}
                totalPages={10}
                onPageChange={setDarkTertiaryLarge}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * 기본 Primary 페이지네이션
 */
export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'light',
    currentPage: 1,
    totalPages: 10,
  },
  render: (args) => <PaginationWrapper {...args} />,
};

/**
 * Secondary 페이지네이션
 */
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
    theme: 'light',
    currentPage: 1,
    totalPages: 10,
  },
  render: (args) => <PaginationWrapper {...args} />,
};

/**
 * Tertiary 페이지네이션
 */
export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    size: 'medium',
    theme: 'light',
    currentPage: 1,
    totalPages: 10,
  },
  render: (args) => <PaginationWrapper {...args} />,
};

/**
 * Small 크기 페이지네이션
 */
export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'small',
    theme: 'light',
    currentPage: 1,
    totalPages: 10,
  },
  render: (args) => <PaginationWrapper {...args} />,
};

/**
 * Medium 크기 페이지네이션 (기본값)
 */
export const Medium: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'light',
    currentPage: 1,
    totalPages: 10,
  },
  render: (args) => <PaginationWrapper {...args} />,
};

/**
 * Large 크기 페이지네이션
 */
export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    theme: 'light',
    currentPage: 1,
    totalPages: 10,
  },
  render: (args) => <PaginationWrapper {...args} />,
};

/**
 * Dark 테마 페이지네이션
 */
export const DarkTheme: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'dark',
    currentPage: 1,
    totalPages: 10,
  },
  render: (args) => <PaginationWrapper {...args} />,
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

/**
 * 네비게이션 버튼 없는 페이지네이션
 */
export const WithoutNavigationButtons: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'light',
    currentPage: 5,
    totalPages: 10,
    showNavigationButtons: false,
  },
  render: (args) => <PaginationWrapper {...args} />,
};

/**
 * 비활성화된 페이지네이션
 */
export const Disabled: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'light',
    currentPage: 5,
    totalPages: 10,
    disabled: true,
  },
  render: (args) => <PaginationWrapper {...args} />,
};

/**
 * 많은 페이지 (maxVisible: 7)
 */
export const ManyPages: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'light',
    currentPage: 10,
    totalPages: 50,
    maxVisible: 7,
  },
  render: (args) => <PaginationWrapper {...args} />,
};

/**
 * 적은 페이지 (maxVisible: 3)
 */
export const FewPages: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'light',
    currentPage: 1,
    totalPages: 3,
    maxVisible: 3,
  },
  render: (args) => <PaginationWrapper {...args} />,
};

/**
 * 모든 Primary Variant 크기
 */
export const PrimaryVariants: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    onPageChange: () => {},
  },
  render: () => <PrimaryVariantsComponent />,
};

/**
 * 모든 Secondary Variant 크기
 */
export const SecondaryVariants: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    onPageChange: () => {},
  },
  render: () => <SecondaryVariantsComponent />,
};

/**
 * 모든 Tertiary Variant 크기
 */
export const TertiaryVariants: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    onPageChange: () => {},
  },
  render: () => <TertiaryVariantsComponent />,
};

/**
 * Light 테마 - 모든 Variant
 */
export const AllVariantsLight: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    onPageChange: () => {},
  },
  render: () => <AllVariantsLightComponent />,
};

/**
 * Dark 테마 - 모든 Variant
 */
export const AllVariantsDark: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    onPageChange: () => {},
  },
  render: () => <AllVariantsDarkComponent />,
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

/**
 * 상태별 페이지네이션 (Normal, Disabled, Without Navigation)
 */
export const States: Story = {
  args: {
    currentPage: 5,
    totalPages: 10,
    onPageChange: () => {},
  },
  render: () => <StatesComponent />,
};

/**
 * 모든 조합을 보여주는 종합 스토리
 */
export const AllCombinations: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    onPageChange: () => {},
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
    currentPage: 1,
    totalPages: 10,
    maxVisible: 5,
    showNavigationButtons: true,
    disabled: false,
  },
  render: (args) => <PaginationWrapper {...args} />,
};
