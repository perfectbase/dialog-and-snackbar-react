import { Box, Button } from '@mui/material';
import type { NextPage } from 'next';
import { useDialog } from '../components/DialogProvider';

const Page: NextPage = () => {
  const showDialog = useDialog();

  const handleShowDialog = async () => {
    const confirmed = await showDialog({
      title: 'Custom Dialog',
      message: 'Custom message...',
    });
    if (confirmed) {
      console.log('confirmed');
    } else {
      console.log('canceled');
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
