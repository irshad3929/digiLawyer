import { Box } from '@mui/material'
import { getFooterData } from '@query/footer'
import { Header } from '@components/entities'
import { Footer } from '@components/entities/Footer'

type Props = {
  children: React.ReactNode
}

export async function DefaultLayout({ children }: Props) {
  const footerData = await getFooterData()
  return (
    <Box>
      <Header />
      {children}
      <Footer {...footerData} />
    </Box>
  )
}
