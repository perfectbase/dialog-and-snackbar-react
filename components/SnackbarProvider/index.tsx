import { Alert, Snackbar } from '@mui/material';
import type { AlertColor } from '@mui/material';
import { createContext, useContext, useState } from 'react';

type ShowSnackbarHandler = (message: string, severity: AlertColor) => void;

const SnackbarContext = createContext<ShowSnackbarHandler>(() => {
  console.error('Component is not wrapped with a SnackbarProvider.');
});

const SnackbarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState<AlertColor>('success');
  const handleClose = (
    _event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  const showSnackbar: ShowSnackbarHandler = (message, severity) => {
    setMessage(message);
    setSeverity(severity);
    setOpen(true);
  };
  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        sx={{ minWidth: '50vw' }}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
      <SnackbarContext.Provider value={showSnackbar}>
        {children}
      </SnackbarContext.Provider>
    </>
  );
};

export const useSnackbar = () => {
  return useContext(SnackbarContext);
};

export default SnackbarProvider;
