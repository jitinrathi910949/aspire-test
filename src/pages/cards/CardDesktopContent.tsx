import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import CardSwiper from './sections/CardSwiper'
import CardCtaBtn from './sections/CardCtaBtn'
import CardDetailAccordion from './sections/CardDetailAccordion'
import RecentTransactionAccordion from './sections/RecentTransactionAccordion'
import CardHeader from './sections/CardHeader'
import CardTabs from './sections/CardTabs'

function CardDesktopContent() {
  return (
    <>
      <CardHeader />

      <CardTabs />
      <Box sx={{
        p: 5, background: 'white', mt: 2, borderRadius: '8px',
        border: '1px solid #FCFCFC',
        boxShadow: '0pt 2pt 12pt 0pt rgba(0, 0, 0, 0.08)',
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
      }}>
        <Stack direction="column">
          <CardSwiper />
          <CardCtaBtn containerProps={{ mt: 4 }} />

        </Stack>



        <Stack direction="column" sx={{ ml: 6, width: '100%' }}>
          <CardDetailAccordion />
          <Box sx={{ mt: 3 }}><RecentTransactionAccordion /> </Box>
          <Box sx={{ bgcolor: '#EDFFF5', borderBottom: '1px solid #DDFFEC', borderLeft: '1px solid #DDFFEC', borderRight: '1px solid #DDFFEC', py: 2, cursor: 'pointer' }}>
            <Typography sx={{ color: '#01D167', fontWeight: 600, fontSize: 13, textAlign: 'center' }}>View All Transactions</Typography>
          </Box>

        </Stack>


      </Box>
    </>
  )
}

export default CardDesktopContent
