import React from 'react'
import { Tabs, Tab, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useAppDispatch, useAppSelector } from '../../../store'
import { cardAction } from '../../../store/cardSlice';

interface StyledTabsProps {
    children?: React.ReactNode;
    value: string;
    onChange: (event: React.SyntheticEvent, newValue: string) => void;
  }

const StyledTabs = styled((props: StyledTabsProps) => (
    <Tabs
      {...props}
      // TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
  ))({
    '& .MuiTabs-indicator': {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: '#23CEFD',
    },
    // '& .MuiTabs-indicatorSpan': {
    //   maxWidth: 40,
    //   width: '100%',
    // //   backgroundColor: '#635ee7',
    // },
  });

  interface StyledTabProps {
    label: string;
    value: string
  }
  
  const StyledTab = styled((props: StyledTabProps) => (
    <Tab disableRipple {...props} />
  ))(({ theme }) => ({
    textTransform: 'none',
    fontSize: 14,
    textAlign: 'left',
    marginRight: theme.spacing(3),
    color: 'white',
    opacity: 0.5,
    [theme.breakpoints.up('md')]: {
    color: '#222222',
    opacity: 0.3
    },
   
    '&.Mui-selected': {
      opacity: 1,
      color: 'white',
      fontWeight: 700,
      [theme.breakpoints.up('md')]: { 
        color: '#222222'
      }
    },
  }));

function CardTabs() {
    const dispatch = useAppDispatch();

    const { selectedTab } = useAppSelector((state) => state.cardReducer);

    return (
        <Box sx={{mt: [3, 3, 4]}}>
            <StyledTabs value={selectedTab} onChange={(event: React.SyntheticEvent, value: string) => dispatch(cardAction.selectTab(value))} aria-label="basic tabs example">
                <StyledTab label="My debit cards" value="myDebitCard" />
                <StyledTab label="All company cards" value="allCompanyCard" />

            </StyledTabs>
        </Box>
    )
}

export default CardTabs
