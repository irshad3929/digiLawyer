import { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { Box, Typography } from '@mui/material'
import { HeaderMenuOption, getHeaderMenuData, MenuType } from '@query/header'
import { HeaderMenuPopup } from '@components/widget/HeaderMenuPopup'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'

export type MenuProps = {
  menus: MenuType[]
}

type MenuPropType = MenuProps & {
  customStyles?: CustomStyles<StylesClassNames>
}

export function Menu({ menus, customStyles }: MenuPropType) {
  const styles = getStyles(defaultStyles, customStyles)

  const [headerMenuActive, setHeaderMenuActive] = useState<boolean>(false)
  const [currentMenu, setCurrentMenu] = useState<string>('')
  const [currentMenuData, setCurrentMenuData] = useState<
    HeaderMenuOption | undefined
  >()

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

  return (
    <Box>
      <Box {...styles('wrapper')}>
        {menus.map((menuObj) => (
          <Typography
            key={menuObj.id}
            variant="body2"
            {...styles('menu')}
            onClick={() => {
              handleMenuClick(menuObj.menuName)
            }}
          >
            {menuObj.menuName}
            {menuObj.isDropDown && (
              <ArrowDropDownIcon {...styles('dropdown')} />
            )}
          </Typography>
        ))}
      </Box>
      <Box sx={{ backgroundColor: 'lightgray' }}>
        {headerMenuActive && currentMenu !== 'Pricing' && currentMenuData && (
          <HeaderMenuPopup
            data={currentMenuData}
            isActive={headerMenuActive}
            handleMenuClick={handleMenuClick}
          />
        )}
      </Box>
    </Box>
  )
}
