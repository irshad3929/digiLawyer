'use client'

import { useState } from 'react'
import Link from 'next/link'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material'
import { Image as ImageType } from '@models'
import { menus } from '@query/header'
import { IconTag, Image } from '@components/common'
import { Button } from '@components/common/Button'
import { MobileMenu } from '@components/widget/MobileMenu'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'
import { Menu } from '../Menu'

const groupIcon: ImageType = {
  src: '/icons/Group.png',
  alt: 'company icon',
}

const layerIcon: ImageType = {
  src: '/icons/Layer2.png',
  alt: 'layer icon',
}

const menuIcon: ImageType = {
  src: '/icons/menu.png',
  alt: 'menu icon',
}

export function Header() {
  const styles = getStyles(defaultStyles)

  const [isMenuActive, setIsMenuActive] = useState<boolean>(false)

  // const widgetRef = useRef(null);

  // const handleClickOutside = (event) => {
  //   if (widgetRef.current && !widgetRef.current.contains(event.target)) {

  //     setHeaderMenuActive(false);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, []);

  return (
    <AppBar {...styles('wrapper')}>
      <Toolbar {...styles('toolbarWrapper')}>
        <Box {...styles('mobileIconAndMenuContainer')}>
          <Box {...styles('mobileIcons')}>
            <IconButton
              onClick={() => setIsMenuActive(!isMenuActive)}
              sx={styles('logoIcon').sx}
              disableRipple
            >
              <IconTag
                icon={menuIcon}
                customStyles={{ wrapper: styles('menuIcon').sx }}
              />
            </IconButton>

            <Link href="/">
              <Image
                {...layerIcon}
                customStyles={{ wrapper: styles('logoIcon').sx }}
                fill
              />
            </Link>
          </Box>

          <MobileMenu menus={menus} isMenuActive={isMenuActive} />
        </Box>

        <Link href="/">
          <Image
            {...groupIcon}
            customStyles={{ wrapper: styles('logo').sx }}
            fill
          />
        </Link>

        <Menu menus={menus} customStyles={{ wrapper: styles('menus').sx }} />

        {/* right item of toolbar */}
        <Box {...styles('buttonWrapper')}>
          <Typography {...styles('textLogin')}>Login</Typography>
          <Button
            label="Try for free"
            endIcon={<AutoAwesomeIcon />}
            link="/try-for-free"
            inverted
            customStyles={{ invertButton: styles('tryForFreebutton').sx }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  )
}
