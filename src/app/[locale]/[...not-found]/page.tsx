import Link from 'next/link'
import { Box, Button } from '@mui/material'
import { useTranslations } from 'next-intl'

/**
 * @todo Button from common
 */
export default function NotFound() {
  const t = useTranslations('NotFound')
  return (
    <Box sx={{ p: 10 }}>
      <Box component="h2">{t('title')}</Box>
      <Box component="p">{t('description')}</Box>
      <Link href="/">
        <Button variant="contained">{t('return')}</Button>
      </Link>
    </Box>
  )
}
