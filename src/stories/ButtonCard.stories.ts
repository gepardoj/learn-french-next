import ButtonCard from "@/shared/ui/ButtonCard";
import EiffelTowerIcon from "@/shared/ui/icons/EiffelTowerIcon";
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

const meta = {
  title: 'Example/Button Card',
  component: ButtonCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: () => alert(123) },
} satisfies Meta<typeof ButtonCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  name: "Primary large",
  args: {
    variant: "primary",
    size: "large",
    alt: "France",
    src: "/general.webp",
  },
};

export const Medium: Story = {
  name: "Default medium, disabled",
  args: {
    size: "medium",
    disabled: true,
    alt: "fantasy",
    src: "/dragon.webp"
  },
};