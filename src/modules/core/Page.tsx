import { FC, PropsWithChildren } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';

interface Props {
  title: string;
}

const Body = styled.div`
  padding-top: 56px;
  @media (min-width:0px) and (orientation: landscape) {
    padding-top: 48px;
  }
  @media (min-width:600px) {
    padding-top: 64px;
  }
`;

const Page: FC<PropsWithChildren<Props>> = ({ title, children }) => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              { title }
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Body>
        {children}
      </Body>
    </>
  );
};

export default Page;
