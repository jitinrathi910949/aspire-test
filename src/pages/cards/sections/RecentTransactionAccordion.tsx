import React from 'react'
import { Accordion, Box, AccordionDetails, AccordionSummary, Typography, Stack, Avatar, Divider } from '@mui/material';
import _ from 'lodash';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const transactionList = [
  {
    bgColor: '#009DFF1A',
    icon: '/icons/file-storage.svg',
    title: 'Hamleys',
    date: '20 May 2020',
    description: 'Refund on debit card',
    isCredit: true,
    amount: '150'
  },
  {
    bgColor: '#00D6B51A',
    icon: '/icons/flights.svg',
    title: 'Hamleys',
    date: '20 May 2020',
    description: 'Charged to debit card',
    isCredit: false,
    amount: '150'
  },
  {
    bgColor: '#F251951A',
    icon: '/icons/megaphone.svg',
    title: 'Hamleys',
    date: '20 May 2020',
    description: 'Charged to debit card',
    isCredit: false,
    amount: '150'
  },
  {
    bgColor: '#009DFF1A',
    icon: '/icons/file-storage.svg',
    title: 'Hamleys',
    date: '20 May 2020',
    description: 'Refund on debit card',
    isCredit: true,
    amount: '150'
  },

]

function TransactionItem({ item, isLast }: { item: any, isLast: boolean }) {

  return (
    <Stack direction="row" justifyContent="center" sx={{py: 2, borderBottom: !isLast ? '1px solid #F5F5F5': 'none'}}>
      <Avatar sx={{ bgcolor: item.bgColor, width: '48px', height: '48px' }}>
        <Box component="img" src={item.icon} sx={{ width: '16px' }} />

      </Avatar>
      <Box sx={{ marginLeft: '12px' }}>


        <Typography sx={{ color: '#222222', fontSize: '14px', fontWeight: 600 }}>{item.title}</Typography>
        <Typography sx={{ color: '#AAAAAA', fontSize: '13px', mt: 0.5 }}>{item.date}</Typography>
        <Typography sx={{ color: '#325BAF', fontSize: '12px', fontWeight: 600, display: 'flex', flexDirection: 'row', mt: 1.5 }}>
          <Avatar sx={{ bgcolor: '#325BAF', width: '24px', height: '20px', mr: 1 }}>
            <Box component="img" src="/icons/business-card.svg" sx={{ width: '10px' }} />
          </Avatar>{item.description}
        </Typography>
      </Box>
      <Box sx={{ flex: 1 }} />

      <Typography sx={{ fontSize: 14, fontWeight: 700, color: item.isCredit ? '#01D167' : '#222222' }}>
        {item.isCredit ? `+ S$ ${item.amount}` : `- S$ ${item.amount}`}
      </Typography>
      <ChevronRightIcon sx={{ color: '#325baf', opacity: 0.15 }} />




    </Stack>
  )
}

function RecentTransactionAccordion() {
  const [expanded, setExpanded] = React.useState<boolean | false>(true);


  return (
    <Accordion expanded={expanded} onChange={() => setExpanded(t => !t)}
      elevation={0}
      sx={{
        backgroundColor: 'white',
        "&.MuiAccordion-root:before": {
          height: 0
        },
        borderRadius: '8px',
        border: '1px solid #F0F0F0'
      }}
      disableGutters

    >
      <AccordionSummary
        sx={{
          backgroundColor: '#F5F9FF', p: 3, boxShadow: '0pt 0pt 8pt 0pt #0000000A', borderRadius: '8px'
        }}
        expandIcon={<Box component="img" src="/icons/down-arrow.svg" />}


      >
        <Box component="img" src="/icons/recent-transaction.svg" />
        <Typography sx={{ color: '#0C365A', fontSize: 14, ml: 2 }}>
          Recent Trasaction
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack sx={{ px: 1 }}>
          {_.map(transactionList, (item, index) => <TransactionItem item={item} isLast={index === transactionList.length - 1} />
          )}
        </Stack>

      </AccordionDetails>
    </Accordion>
  )
}

export default RecentTransactionAccordion;
