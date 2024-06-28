import React from 'react'
import { AvatarGroup, Avatar } from '@mui/material'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'

type AvatarData = {
  src: string
  alt: string
}

interface AvatarGroupProps {
  avatars: AvatarData[]
  max?: number
  customStyles?: CustomStyles<StylesClassNames>
}

export function AvatarGroupComponent({
  avatars,
  max,
  customStyles,
}: AvatarGroupProps) {
  const styles = getStyles(defaultStyles, customStyles)

  return (
    <AvatarGroup max={max} {...styles('avatarGroup')}>
      {avatars.map((avatar) => (
        <Avatar
          key={avatar.src}
          src={avatar.src}
          alt={avatar.alt}
          {...styles('avatar')}
        />
      ))}
    </AvatarGroup>
  )
}
