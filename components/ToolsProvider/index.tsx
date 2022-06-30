import SnackbarProvider from '../SnackbarProvider';
import DialogProvider from '../DialogProvider';

const ToolsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <SnackbarProvider>
      <DialogProvider>{children}</DialogProvider>
    </SnackbarProvider>
  );
};

export default ToolsProvider;
