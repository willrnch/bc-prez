import { useState, FC } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Dialog from '@mui/material/Dialog';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';
import Page from '../../Page';
import { useModel } from '../../hooks/model';
import NewTransaction from './NewTransaction';

const StyledFab = styled(Fab)({
  position: 'fixed',
  zIndex: 1101,
  right: 20,
  bottom: 20,
  margin: '0 auto',
});

const Transactions: FC = () => {
  const [open, setOpen] = useState(false);

  const { accounts, transactions } = useModel();

  console.log(transactions.items);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onNewTransaction = () => {
    handleClose();
  };

  return (
    <Page title="Transactions">
       <Dialog open={open} onClose={handleClose}>
         {open && <NewTransaction onSubmit={onNewTransaction} />}
      </Dialog>
      <StyledFab color="primary" aria-label="add" onClick={handleClickOpen}>
        <AddIcon />
      </StyledFab>
      <List>
        {transactions.items.map(({ id, from, to, amount }) => (
          <ListItem button key={id}>
            <ListItemText primary={`${from.name} → ${to.name}`} secondary={`$${amount}`} />
          </ListItem>
        ))}
      </List>
    </Page>
  );
};

export default Transactions;
