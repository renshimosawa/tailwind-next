import React from 'react'
import { Story, Meta } from '@storybook/react'

import Textbox, { Props } from '.'

export default {
  title: 'bases/Textbox',
  component: Textbox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<Props> = (args) => <Textbox {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Hello Nike!',
} as Props
