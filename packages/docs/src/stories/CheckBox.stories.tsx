import { Meta, StoryObj } from '@storybook/react'
import { Checkbox, ICheckboxProps, Box, Text } from '@ignite-ui/react'

export default {
	title: 'Form/Check Box',
	component: Checkbox,
	args: {},
	decorators: [
		(Story) => {
			return (
				<Box
					as='label'
					css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
				>
					{Story()}
					<Text size='sm'>Accept terms</Text>
				</Box>
			)
		},
	],
} as Meta<ICheckboxProps>

export const Primary: StoryObj<ICheckboxProps> = {}
