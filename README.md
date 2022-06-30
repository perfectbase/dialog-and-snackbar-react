## About the project

This project uses Context Provider and Promise so you can easily call a modal or a Snackbar from anywhere in the app.

```typescript
// ...
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
// ...
```

## Check the article

https://blog.perfect-base.com/react-dialog-snackbar
