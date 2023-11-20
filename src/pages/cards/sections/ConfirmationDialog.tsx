import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ConfirmationDialog({open, handleClose, onAgree}: {open: boolean; handleClose: any; onAgree: any}) {


  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
            '& .MuiPaper-root': {
                background: 'white'
              },
            }}
      >
        <DialogTitle>
        Confirmation
        </DialogTitle>
        <DialogContent>
          <DialogContentText >
            Are you sure you want to delete the card.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={onAgree}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}