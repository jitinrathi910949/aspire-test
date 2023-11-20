import React, { useState } from 'react'
import { Box, Stack, SxProps, Typography } from '@mui/material'
import _ from 'lodash';
import { useAppDispatch, useAppSelector } from '../../../store';
import { cardAction } from '../../../store/cardSlice';
import ConfirmationDialog from './ConfirmationDialog';

const ctaBtns = [
    {
        key: 'freeze',
        label: 'Freeze \ncard',
        icon: '/icons/freeze-card.svg'
    },
    {
        key: 'spendLimit',
        label: 'Set spend \nlimit',
        icon: '/icons/spend-limit.svg'
    },
    {
        key: 'gpay',
        label: 'Add to \nGPay',
        icon: '/icons/gpay.svg'
    },
    {
        key: 'cancelCard',
        label: 'Cancel \ncard',
        icon: '/icons/cancel-card.svg'
    },
    {
        key: 'replaceCard',
        label: 'Replace \ncard',
        icon: '/icons/replace-card.svg'
    },
]

function CardCtaBtn({containerProps}: {containerProps?: SxProps}) {
    const dispatch = useAppDispatch();
    const [delerteConfirm, setDeleteConfirm] = useState(false);

    const { selectedCard } = useAppSelector((state) => state.cardReducer);

    const onAgreeDelete = () => {
        dispatch(cardAction.deleteCard(selectedCard.id));
        setDeleteConfirm(false);
    }

    const handleClick = (key: string) => {
        switch(key) {
            case 'freeze':
                dispatch(cardAction.toggleFreeze(selectedCard.id));
                break;

            case 'cancelCard':
                setDeleteConfirm(true);

                default: 
                break;
        }
    }
  

    return (
        <>
        <Stack
            direction="row"
            justifyContent="center"
            spacing={4}
        

            alignItems="center"
            sx={{ py: 2.5, px: 4, backgroundColor: '#EDF3FF', borderRadius: '16px', borderBottomLeftRadius: ['0px', '0px', '16px'], borderBottomRightRadius: ['0px', '0px', '16px'], zIndex: 10, ...containerProps }}>

            {
                _.map(ctaBtns, btn => (
                    <Stack flexDirection="column" justifyContent="center" alignItems="center" sx={{cursor: 'pointer'}} onClick={() => handleClick(btn.key)}>
                        <Box component="img" src={btn.icon} sx={{ width: 32, height: 32, objectFit: 'contain', mb: 1 }} />
                        {_.map(btn.label.split('\n'), txt => <Typography
                        noWrap
                        component="span"
                        sx={{
                            color: '#0C365A',
                            fontSize: 13,
                            textAlign: 'center',
                        }}
                        >{txt}</Typography>)}
                        
                    </Stack>
                ))
            }
        </Stack>
        {delerteConfirm && <ConfirmationDialog
        open={delerteConfirm}
        handleClose={() => setDeleteConfirm(false)}
        onAgree={onAgreeDelete}
        />}
        </>
    )
}

export default CardCtaBtn
