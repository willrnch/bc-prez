import { useState, useEffect, FC, FormEvent } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useModel } from '../../hooks/model';

interface Props {
  onSubmit: () => void;
}

const NewTransaction: FC<Props> = ({ onSubmit }) => {
  const [amount, setAmount] = useState<string>('10');

  const [from, setFrom] = useState<string>('');
  const [to, setTo] = useState<string>('');
  const [warning, setWarning] = useState<string>('');

  const { accounts, transactions } = useModel();

  const handleClose = () => {
    setAmount('10.00');
    onSubmit();
  };

  useEffect(() => {
    let newWarning = '';
    if (from && amount) {
      try {
        const account = accounts.items.find((it) => it.id === from);
        if (account) {
          const fAmount = parseFloat(amount);
          if (!Number.isNaN(fAmount)) {
            if (fAmount > account.balance) {
              newWarning = `${account.name} doesn't have enough money.`;
            }
          }
        }
      } catch (err) {}
    }
    setWarning(newWarning);
  }, [accounts.items, from, amount]);

  const onSubmitNewTransaction = (event: FormEvent) => {
    event.preventDefault();

    try {
      if (from && to) {
        const fAmount = parseFloat(amount);
        if (!Number.isNaN(fAmount)) {
          transactions.create(
            accounts.items.find((it) => it.id === from)!,
            accounts.items.find((it) => it.id === to)!,
            fAmount
          );
        }
      }
      onSubmit();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={onSubmitNewTransaction}>
      <DialogTitle>New Transaction</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Enter the name of the new account.
        </DialogContentText>

        <InputLabel id="demo-simple-select-label">From</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={from}
          label="From"
          onChange={(event) => setFrom(event.target.value)}
        >
          {accounts.items.map((account) => (
            <MenuItem
              key={account.id}
              value={account.id}
            >
              {account.name}
            </MenuItem>
          ))}
        </Select>

        <InputLabel id="demo-simple-select-label">To</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={to}
          label="To"
          onChange={(event) => setTo(event.target.value)}
        >
          {accounts.items
          .filter((account) => account.id !== from)
          .map((account) => (
            <MenuItem
              key={account.id}
              value={account.id}
            >
              {account.name}
            </MenuItem>
          ))}
        </Select>

        <TextField
          autoFocus
          margin="dense"
          id="amount"
          label="Amount"
          type="number"
          fullWidth
          variant="standard"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
        {warning}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit">Add</Button>
      </DialogActions>
    </form>
  );
};

export default NewTransaction;
