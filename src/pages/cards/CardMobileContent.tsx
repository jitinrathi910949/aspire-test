import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import CardSwiper from './sections/CardSwiper'
import CardHeader from './sections/CardHeader'
import CardTabs from './sections/CardTabs'
import CardCtaBtn from './sections/CardCtaBtn'
import CardDetailAccordion from './sections/CardDetailAccordion'
import RecentTransactionAccordion from './sections/RecentTransactionAccordion'

function CardMobileContent() {
  return (
    <>
    <Box
      sx={{ position: 'fixed', px: 3 }}
    >
      <CardHeader />

      <CardTabs />
      <CardSwiper />
    </Box>
    <Stack  sx={{pt: '55vh'}}>
      <Box sx={{backgroundColor: 'white', zIndex: 1000, borderTopLeftRadius: '24px', borderTopRightRadius: '24px'}}>
      <CardCtaBtn />
      <Box sx={{p: 3}}>
      <CardDetailAccordion />
          <Box sx={{ mt: 3 }}><RecentTransactionAccordion /> </Box>
          </Box>
          </Box>
      </Stack>
    </>
  )
}

export default CardMobileContent
