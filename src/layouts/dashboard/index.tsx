import { useState } from 'react';
import { Outlet } from 'react-router-dom';
// material
import { styled, useTheme } from '@mui/material/styles';
//
import DashboardSidebar from './DashboardSidebar';
import MHidden from '../../components/MHidden';
import DashboardBottomBar from './DashboardBottomBar';
import DashboardNavbar from './DashboardNavbar';

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled('div')(({ theme }) => ({
    display: 'flex',
    minHeight: '100vh',
    overflow: 'hidden',
    backgroundColor: 'white',
    [theme.breakpoints.down('md')]: {
        backgroundColor: theme.palette.background.paper,
        flexDirection: 'column'

    }
}));

const MainStyle = styled('div')(({ theme }) => ({
    flexGrow: 1,
    overflow: 'auto',
    minHeight: '100%',
    paddingBottom: '50px',
    [theme.breakpoints.up('lg')]: {
        paddingTop: theme.spacing(6),
        paddingLeft: theme.spacing(10),
        paddingRight: theme.spacing(10)
    },
    [theme.breakpoints.down('md')]: {
        paddingLeft: 0,
        paddingRight: 0,

    }
}));

// ----------------------------------------------------------------------

export default function DashboardLayout() {
    const theme = useTheme();

    return (
        <RootStyle>
            <MHidden width='smUp'>
                <DashboardNavbar />
            </MHidden>
           <MHidden width="mdDown" > <DashboardSidebar /></MHidden>
            <MainStyle
            >
                <Outlet />
            </MainStyle>
            <MHidden width='smUp' ><DashboardBottomBar /></MHidden>
        </RootStyle>
    );
}
