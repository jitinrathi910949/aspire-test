import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useAppDispatch, useAppSelector } from '../../../store';
import { CardModel, cardAction } from '../../../store/cardSlice';
import _ from 'lodash';
import { getRandomNumber } from '../../../utils/formatNumber';

export default function CreateCardDialog() {

    const [name, setName] = React.useState('')

    const dispatch = useAppDispatch();
    const { openCreateCardDialog, cardList } = useAppSelector((state) => state.cardReducer);

    const handleClose = () => {
        dispatch(cardAction.toggleCreateCardDialog(false))
    }

    const handleCreate = () => {
        if(_.isEmpty(name)){
            return
        }
        const cardParams: CardModel = {
            cardNumber: getRandomNumber(16),
            name,
            cvv: getRandomNumber(3),
            id: Number(getRandomNumber(2)),
            expiryDate: '04/32',
            isFreeze: false
        };
        dispatch(cardAction.addCard(cardParams));
        handleClose(); 
    }

  return (
    <React.Fragment>
      <Dialog open={openCreateCardDialog} onClose={handleClose} sx={{
        '& .MuiPaper-root': {
            background: 'white'
          },
      }}>
        <DialogTitle>Create New Card</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To create card, please enter your name here.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            value={name}
            onChange={event => setName(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleCreate}>Add</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}