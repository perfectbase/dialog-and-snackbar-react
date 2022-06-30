import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import type { NextPage } from 'next';
import { useState } from 'react';

const Page: NextPage = () => {
  const [open, setOpen] = useState(false);

  const handleShowDialog = () => {
    setOpen(true);
  };
  const handleConfirm = () => {
    console.log('confirmed');
    setOpen(false);
  };
  const handleCancel = () => {
    console.log('canceled');
    setOpen(false);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Button variant="contained" onClick={handleShowDialog}>
        Show Dialog
      </Button>
      <Dialog open={open} onClose={handleCancel}>
        <DialogTitle>Custom Dialog</DialogTitle>
        <DialogContent sx={{ minWidth: '400px' }}>
          <DialogContentText>Custom message...</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button variant="contained" onClick={handleConfirm}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Page;
