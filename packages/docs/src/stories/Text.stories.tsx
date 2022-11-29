import { Meta, StoryObj } from '@storybook/react'
import { Text, ITextProps } from '@ignite-ui/react'

export default {
	title: 'Typography/Text',
	component: Text,
	args: {
		children:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis itaque dolorum et quae cupiditate incidunt vero explicabo ut distinctio cumque dicta quasi impedit, suscipit molestias, rem accusamus iste dignissimos! Beatae.',
	},
} as Meta<ITextProps>

export const Primary: StoryObj<ITextProps> = {}

export const CustomTag: StoryObj<ITextProps> = {
	args: {
		children: 'Strong Text',
		as: 'strong',
	},
}
