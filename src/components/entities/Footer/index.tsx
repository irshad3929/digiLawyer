import React from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import { Box, Typography } from '@mui/material'
import { Image as ImageType } from '@models'
import { Image } from '@components/common/Image'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'

type Item = {
  label?: string
  icon?: ImageType
  link?: string
}

type LeftSection = {
  logoInfo: {
    name?: string
    image: ImageType
  }
  desc: { text: string }[]
  contactInfo: Item[]
  socialMedia: Item[]
  appImages: ImageType[] // Add appImages field here
}

type RightSection = {
  items: {
    title: string
    desc: Item[]
  }[]
}

type BottomSection = {
  copyRightLabel?: string
  items: Item[]
  label?: string
}

export type FooterProps = {
  leftSection: LeftSection
  rightSection: RightSection
  bottomSection: BottomSection
  customStyles?: CustomStyles<StylesClassNames>
}

export function Footer({
  leftSection,
  rightSection,
  bottomSection,
  customStyles,
}: FooterProps) {
  const styles = getStyles(defaultStyles, customStyles)

  return (
    <Box {...styles('wrapper')}>
      <Box {...styles('contentWrapper')}>
        {/** Main SECTION */}
        <Box {...styles('mainSection')}>
          {/* Left Section */}
          <Box {...styles('leftSection')}>
            <Box {...styles('logoInfo')}>
              <Image
                customStyles={{ wrapper: { ...styles('logoImage').sx } }}
                {...leftSection.logoInfo.image}
                fill
              />
            </Box>
            <Box>
              {leftSection.desc.map((desc) => (
                <Typography
                  key={desc.text}
                  variant="body1"
                  {...styles('descText')}
                >
                  {desc.text}
                </Typography>
              ))}
            </Box>
            <Box {...styles('contactInfo')}>
              {leftSection.contactInfo.map((item) => (
                <Box key={item.label} {...styles('contactInfoItem')}>
                  {item.icon && (
                    <Image
                      customStyles={{
                        wrapper: { ...styles('contactInfoItemIcon').sx },
                      }}
                      {...item.icon}
                      fill
                    />
                  )}

                  <Typography
                    variant="body1"
                    {...styles('contactInfoItemText')}
                  >
                    {item.label}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Box {...styles('socialMedia')}>
              {leftSection.socialMedia.map((item) => (
                <Box key={item.link} {...styles('socialMediaItem')}>
                  {item.icon && (
                    <Image
                      customStyles={{
                        wrapper: { ...styles('socialMediaItemIcon').sx },
                      }}
                      {...item.icon}
                      fill
                    />
                  )}
                </Box>
              ))}
            </Box>
            <Box {...styles('appImageContainer')}>
              {leftSection.appImages.map((image) => (
                <Box key={image.src}>
                  <Image
                    {...image}
                    customStyles={{ wrapper: { ...styles('appImage').sx } }}
                    fill
                  />
                </Box>
              ))}
            </Box>
          </Box>

          {/* Right Section */}
          <Box {...styles('rightSection')}>
            <Box {...styles('rightSectionItems')}>
              {rightSection.items.map((item) => (
                <Box key={item.title} {...styles('rightSectionItem')}>
                  <Typography
                    variant="body1"
                    {...styles('rightSectionItemTitle')}
                  >
                    {item.title}
                  </Typography>
                  {item.desc.map((desc) => (
                    <Box key={desc.label} {...styles('rightSectionItemDesc')}>
                      <Typography
                        variant="body1"
                        {...styles('rightSectionItemDescText')}
                      >
                        {desc.label}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
        <Box {...styles('border')} />
        {/* Bottom Section */}
        <Box {...styles('bottomSection')}>
          <Box>
            <Typography variant="body1" {...styles('bottomSectionItemText')}>
              {bottomSection.copyRightLabel}
            </Typography>
          </Box>
          <Box {...styles('bottomSectionMiddlePart')}>
            {bottomSection.items.map((item) => (
              <Box key={item.label} {...styles('bottomSectionItem')}>
                <Typography
                  variant="body1"
                  {...styles('bottomSectionItemText')}
                >
                  {item.label}
                </Typography>
              </Box>
            ))}
          </Box>
          <Box {...styles('bottomSectionLastPart')}>
            <Box {...styles('arrowUp')}>
              <ArrowUpwardIcon sx={{ fontSize: '16px' }} />
            </Box>
            <Typography variant="body1" {...styles('bottomSectionItemText')}>
              {bottomSection.label}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
