import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { fCurrency } from '../../../utils/formatNumber';
import MHidden from '../../../components/MHidden';
import { cardAction } from '../../../store/cardSlice';
import { useAppDispatch } from '../../../store';

function CardHeader() {
  const dispatch = useAppDispatch();
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{maxWidth: ['90vw', '90vw', '100%']}}>
      <Box>
        <Typography sx={{fontSize: 14, fontWeight: [600, 600, 400 ], color: ['white', 'white', '#222222']}}>Account balance</Typography>

        <Stack direction="row" alignItems="center" >
          <Box sx={{ px: 2, py: '3px', backgroundColor: "secondary.main", color: "white", borderRadius: '4px', fontSize: 12, fontWeight: 'bold', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            S$
          </Box>
          <Typography sx={{ ml: 1.5, color: ['white', 'white', '#222222', '#222222'], fontSize: 26, fontWeight: 'bold' }}>{fCurrency(3000)}</Typography>
        </Stack>
      </Box>
    <MHidden width='mdDown'>  
    <Button 
    onClick={() => dispatch(cardAction.toggleCreateCardDialog(true))}
    variant="contained" size='small' sx={{textTransform: 'none', fontSize: 13, fontWeight: 'bold', maxHeight: 35}}  startIcon={<AddCircleIcon />}>
      New card
      </Button>
      </MHidden>
      <MHidden width='smUp'>
      <Button 
          onClick={() => dispatch(cardAction.toggleCreateCardDialog(true))}

      variant="text" size='small' sx={{textTransform: 'none', fontSize: 13, fontWeight: 'bold', maxHeight: 35, color:'#23CEFD'}}  startIcon={<AddCircleIcon sx={{color: '#23CEFD'}} />}>
      New card
      </Button>
      </MHidden>
    </Stack>
  )
}

export default CardHeader
