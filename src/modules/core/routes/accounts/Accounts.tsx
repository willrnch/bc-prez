import { FC, FormEvent, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Avatar from '@mui/material/Avatar';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';
import Page from '../../Page';
import { useModel } from '../../hooks/model';

const StyledFab = styled(Fab)({
  position: 'fixed',
  zIndex: 1101,
  right: 20,
  bottom: 20,
  margin: '0 auto',
});

const Accounts: FC = () => {
  const [open, setOpen] = useState(false);
  const [newName, setNewName] = useState('');
  const { accounts } = useModel();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setNewName('');
  };

  const onSubmitNewAccount = (event: FormEvent) => {
    event.preventDefault();

    accounts.create(newName);
    handleClose();
  };

  return (
    <Page title="Accounts">
       <Dialog open={open} onClose={handleClose}>
        <form onSubmit={onSubmitNewAccount}>
          <DialogTitle>New Account</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter the name of the new account.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              fullWidth
              variant="standard"
              value={newName}
              onChange={(event) => setNewName(event.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Add</Button>
          </DialogActions>
        </form>
      </Dialog>
      <StyledFab color="primary" aria-label="add" onClick={handleClickOpen}>
        <AddIcon />
      </StyledFab>
      <List>
        {accounts.items.map(({ id, name, balance }) => (
          <ListItem button key={id}>
            <ListItemAvatar>
              <Avatar alt="Profile Picture" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText primary={name} secondary={`$${balance}`} />
          </ListItem>
        ))}
      </List>
    </Page>
  );
};

export default Accounts;
