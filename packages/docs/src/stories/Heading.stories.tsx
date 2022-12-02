import { Meta, StoryObj } from '@storybook/react'
import { Heading, IHeadingProps } from '@ignite-ui/react'

export default {
	title: 'Typography/Heading',
	component: Heading,
	args: {
		children: 'The Title application',
		size: 'md',
	},
	argTypes: {
		size: {
			options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
			control: {
				type: 'inline-radio',
			},
		},
	},
} as Meta<IHeadingProps>

export const Primary: StoryObj<IHeadingProps> = {}

export const CustomTag: StoryObj<IHeadingProps> = {
	args: {
		children: 'Custom Title',
		as: 'h1',
	},
	parameters: {
		docs: {
			description: {
				story:
					'Por padrão, o heading será um `h2`, mas pode ser alterado para qualquer outra tag usando a propriedade `as`.',
			},
		},
	},
}
