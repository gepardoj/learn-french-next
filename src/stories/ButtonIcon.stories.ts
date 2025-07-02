import EiffelTowerIcon from "@/shared/ui/icons/EiffelTowerIcon";
import { ButtonIcon } from "@/shared/ui/ButtonIcon";
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

const meta = {
  title: 'Example/Button Icon',
  component: ButtonIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: () => alert(123) },
} satisfies Meta<typeof ButtonIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  name: "Primary large",
  args: {
    variant: "primary",
    size: "large",
    alt: "Eiffel Tower",
    Icon: EiffelTowerIcon,
  },
};

export const Medium: Story = {
  name: "Default medium, disabled",
  args: {
    size: "medium",
    disabled: true,
    alt: "Eiffel Tower",
    Icon: EiffelTowerIcon,
  },
};