import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { Box, Grid, IconButton, Typography } from '@mui/material'
import { Image } from '@models'
import { HeaderMenuOption } from '@query/header'
import { IconTag, MenuOptionCard } from '@components/common'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'

type PropTypes = {
  data: HeaderMenuOption
  isActive: boolean
  handleMenuClick: (menu: string) => void
  customStyles?: CustomStyles<StylesClassNames>
}

const rightArrowIcon: Image = {
  src: '/icons/arrow-left.png',
  alt: 'back button',
}

export function HeaderMenuPopup({
  data,
  isActive,
  handleMenuClick,
  customStyles,
}: PropTypes) {
  const styles = getStyles(defaultStyles, customStyles)

  const wrapperRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target as Node)
    ) {
      // handleMenuClick('none', false)
    }
  }

  useEffect(() => {
    if (isActive) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isActive])

  return (
    <Box>
      {isActive && (
        <Box ref={wrapperRef} {...styles('wrapper')}>
          <Box {...styles('backButtonWrapper')}>
            <IconButton disableRipple onClick={() => handleMenuClick('none')}>
              <IconTag
                icon={rightArrowIcon}
                customStyles={{ wrapper: styles('rightIcon').sx }}
              />
              <Typography variant="h6" sx={{ color: '#D6D6D6' }}>
                Back
              </Typography>
            </IconButton>
          </Box>
          <Box {...styles('gridWrapper')}>
            <Grid container spacing={3}>
              {Object.entries(data).map((element) => (
                <Grid
                  item
                  key={`data.${element[0]}`}
                  xs={12}
                  md={4}
                  sx={styles('gridItem').sx}
                >
                  <Box>
                    <Typography {...styles('keyElement')}>
                      {element[0]}
                    </Typography>
                  </Box>
                  <Box>
                    {element[1].map((obj) => (
                      <Link
                        href={
                          obj.redirectionUrl
                            ? new URL(
                                obj.redirectionUrl,
                                window.location.origin
                              )
                            : '/error-page'
                        }
                        style={{ textDecoration: 'none' }}
                        key={`data_${obj.heading}`}
                      >
                        <MenuOptionCard
                          icon={obj.icon}
                          heading={obj.heading}
                          description={obj.description}
                          customStyles={{ iconTag: styles('icon').sx }}
                        />
                      </Link>
                    ))}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      )}
    </Box>
  )
}
