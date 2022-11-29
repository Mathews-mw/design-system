import { User } from 'phosphor-react'
import { ComponentProps } from 'react'
import { AvatarContainer, AvatarFallBack, AvatarImage } from './styles'

export interface IAvatarProps extends ComponentProps<typeof AvatarImage> {}

export function Avatar(props: IAvatarProps) {
	return (
		<AvatarContainer>
			<AvatarImage {...props} />

			<AvatarFallBack delayMs={600}>
				<User />
			</AvatarFallBack>
		</AvatarContainer>
	)
}
