import { useEffect, useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { Box, Typography } from '@mui/material'
import { HeaderMenuOption, getHeaderMenuData, MenuType } from '@query/header'
import { HeaderMenuPopup } from '@components/widget/HeaderMenuPopup'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'

type MenuPropType = {
  menus: MenuType[]
  isMenuActive: boolean
  customStyles?: CustomStyles<StylesClassNames>
}

export function MobileMenu({
  menus,
  customStyles,
  isMenuActive,
}: MenuPropType) {
  const styles = getStyles(defaultStyles, customStyles)

  const [headerMenuActive, setHeaderMenuActive] = useState<boolean>(false)
  const [currentMenu, setCurrentMenu] = useState<string>('')
  const [currentMenuData, setCurrentMenuData] = useState<HeaderMenuOption>()

  const handleMenuClick = (menu: string) => {
    if (menu === 'none') {
      setHeaderMenuActive(false)
    } else if (menu !== currentMenu) {
      setHeaderMenuActive(true)
      setCurrentMenuData(getHeaderMenuData(menu))
    } else if (menu && menu === currentMenu) {
      setHeaderMenuActive(!headerMenuActive)
    }
    setCurrentMenu(menu)
  }

  useEffect(() => {
    setHeaderMenuActive(false)
  }, [isMenuActive])

  return (
    <Box>
      {isMenuActive && (
        <Box>
          <Box {...styles('wrapper')}>
            {menus.map((menuObj) => {
              return (
                <Typography
                  key={menuObj.id}
                  variant="body2"
                  {...styles('menu')}
                  onClick={() => handleMenuClick(menuObj.menuName)}
                >
                  {menuObj.menuName}
                  {menuObj.isDropDown && (
                    <ArrowDropDownIcon {...styles('dropdown')} />
                  )}
                </Typography>
              )
            })}
            <Typography variant="body2" sx={styles('menu').sx}>
              Login
            </Typography>
          </Box>

          <Box sx={{ backgroundColor: 'lightgray' }}>
            {headerMenuActive && currentMenu !== 'Pricing' && (
              <Box>
                {currentMenuData && (
                  <HeaderMenuPopup
                    data={currentMenuData}
                    isActive={headerMenuActive}
                    handleMenuClick={handleMenuClick}
                  />
                )}
              </Box>
            )}
          </Box>
        </Box>
      )}
    </Box>
  )
}
