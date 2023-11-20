import React from 'react'
import {Accordion, Box, AccordionDetails, AccordionSummary, Typography} from '@mui/material';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
function CardDetailAccordion() {
    const [expanded, setExpanded] = React.useState<boolean | false>(false);

  
  return (
    <Accordion expanded={expanded} onChange={() => setExpanded(t => !t)}
    elevation={0}

    sx={{
        backgroundColor: 'white',
        borderRadius: '8px',
        border: '1px solid #F0F0F0',
        "&.MuiAccordion-root:before": {
          height: 0
        },
    }}
    disableGutters

    >
        <AccordionSummary
        sx={{backgroundColor: '#F5F9FF', p: 3, 
        boxShadow: '0pt 0pt 8pt 0pt #0000000A', borderRadius: '8px'
      }}
          expandIcon={<Box component="img"  src="/icons/down-arrow.svg" />}

         
        >
            <Box  component="img" src="/icons/card-detail.svg" />
          <Typography sx={{ color: '#0C365A', fontSize: 14, ml: 2 }}>
            Card Details
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This is card details
          </Typography>
        </AccordionDetails>
      </Accordion>
  )
}

export default CardDetailAccordion
