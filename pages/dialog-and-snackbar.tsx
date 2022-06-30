import { Box, Button } from '@mui/material';
import type { NextPage } from 'next';
import { useDialog } from '../components/DialogProvider';
import { useSnackbar } from '../components/SnackbarProvider';

const Page: NextPage = () => {
  const showDialog = useDialog();
  const showSnackbar = useSnackbar();

  const handleShowDialog = async () => {
    const confirmed = await showDialog({
      title: 'Custom Dialog',
      message: 'Custom message...',
    });
    if (confirmed) {
      showSnackbar('Confirmed!', 'success');
    } else {
      showSnackbar('Canceled!', 'error');
    }
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
    </Box>
  );
};

export default Page;
