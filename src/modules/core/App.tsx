import { FC } from 'react';
import Box from '@mui/material/Box';
import { Routes, Route  } from 'react-router-dom';

import Accounts from './routes/accounts/Accounts';
import Home from './routes/home/Home';
import NavBar from './NavBar';
import Transactions from './routes/transactions/Transactions';


const App: FC = () => {
  return (
    <>
      <Box
        style={{
          paddingBottom: '56px',
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="accounts" element={<Accounts />} />
          <Route path="transactions" element={<Transactions />} />
        </Routes>
      </Box>
      <NavBar />
    </>
  );
};

export default App;
