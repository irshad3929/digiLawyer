import React from 'react'
import {
  SectionHeader,
  SectionHeaderProps,
} from '@components/common/SectionHeader'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

export type IntroHeaderProps = SectionHeaderProps

export function IntroHeader(props: IntroHeaderProps) {
  const styles = getStyles(defaultStyles)

  return (
    <SectionHeader
      {...props}
      customStyles={{
        wrapper: styles('wrapper').sx,
        infoContainer: styles('infoContainer').sx,
        heading: styles('heading').sx,
        description: styles('description').sx,
        buttonContainer: styles('buttonContainer').sx,
      }}
    />
  )
}
