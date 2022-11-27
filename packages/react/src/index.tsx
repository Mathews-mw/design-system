import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
	fontFamily: '$default',
	backgroundColor: '$ignite300',
	color: 'white',
	borderRadius: '$sm',
	border: 0,
	fontWeight: 'bold',

	variants: {
		size: {
			small: {
				fontSize: 14,
				padding: '$2 $4',
			},

			big: {
				fontSize: 16,
				padding: '$3 $6',
			},
		},
	},

	defaultVariants: {
		size: 'small',
	},
})

export type TButtonProps = ComponentProps<typeof Button>
