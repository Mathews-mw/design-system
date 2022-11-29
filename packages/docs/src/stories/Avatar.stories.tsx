import { Meta, StoryObj } from '@storybook/react'
import { Avatar, IAvatarProps } from '@ignite-ui/react'

export default {
	title: 'Data Display/Avatar',
	component: Avatar,
	args: {
		src: 'https://avatars.githubusercontent.com/u/97031798?v=4',
		alt: 'Foto de perfil',
	},
} as Meta<IAvatarProps>

export const Primary: StoryObj<IAvatarProps> = {}

export const WithFallBack: StoryObj<IAvatarProps> = {
	args: {
		src: undefined,
		alt: 'Foto de perfil',
	},
}
