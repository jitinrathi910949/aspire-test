import { Drawer, Stack, Typography, Box } from '@mui/material';
import React from 'react'
import { useLocation, Link as RouterLink } from 'react-router-dom';
import Scrollbar from '../../components/Scrollbar';
import Logo from '../../components/Logo';

const DRAWER_WIDTH = 340;


const NavItem = ({ title, icon, iconSelected, isActive, navigateTo }: { title: string; icon: string; iconSelected: string, isActive: boolean, navigateTo:string; }) => {

    return (
        <Stack component={RouterLink}  to={navigateTo} direction="row" spacing={2} alignItems="center" sx={{ cursor: 'pointer', textDecoration: 'none' }}>
            <Box component="img"
                src={isActive ? iconSelected : icon}
                sx={{ width: 24 }}
            />
            <Typography sx={{
                fontSize: 16,
                color: isActive ? 'secondary.main' : 'white',
                fontWeight: isActive ? 700 : 400
            }}>
                {title}
            </Typography>

        </Stack>
    )
}

function DashboardSidebar() {
    const { pathname } = useLocation();

    const renderContent = (
        <Scrollbar
            sx={{
                height: '100%',
                '& .simplebar-content': {
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                }
            }}
        >
            <Stack
            // spacing={3}
            // sx={{
            //   px: 2.5,
            //   pt: 3,
            //   pb: 2
            // }}
            >
                <Logo sx={{ width: 125, mb: 2 }} />
                <Typography sx={{ color: 'white', opacity: 0.3, fontSize: 15 }}>
                    Trusted way of banking for 3,000+ SMEs and startups in Singapore
                </Typography>

                <Stack
                    spacing={8}
                    sx={{ mt: 10 }}
                >
                    <NavItem
                        icon='/icons/aspire.svg'
                        iconSelected='/icons/aspire-selected.svg'
                        title='Home'
                        isActive={pathname === '/'}
                        navigateTo="/"
                    />
                    <NavItem
                        icon='/icons/aspire.svg'
                        iconSelected='/icons/aspire-selected.svg'
                        title='Cards'
                        isActive={pathname === '/cards'}
                        navigateTo="/cards"
                    />
                    <NavItem
                        icon='/icons/aspire.svg'
                        iconSelected='/icons/aspire-selected.svg'
                        title='Payments'
                        isActive={pathname === '/payment'}
                        navigateTo="/payment"
                    />
                    <NavItem
                        icon='/icons/aspire.svg'
                        iconSelected='/icons/aspire-selected.svg'
                        title='Credit'
                        isActive={pathname === '/credit'}
                        navigateTo="/credit"
                    />

                    <NavItem
                        icon='/icons/aspire.svg'
                        iconSelected='/icons/aspire-selected.svg'
                        title='Settings'
                        isActive={pathname === '/setting'}
                        navigateTo="/setting"
                    />



                </Stack>


            </Stack>
        </Scrollbar>
    )

    return (
        <Box 
        sx={{flexShrink: 0, width: DRAWER_WIDTH}}
        >


        <Drawer
            open
            variant='permanent'

            PaperProps={{
                sx: { width: DRAWER_WIDTH, bgcolor: 'background.paper', pt: 6, px: 6 }
            }}
        >
            {renderContent}
        </Drawer>
        </Box>

    )
}

export default DashboardSidebar
