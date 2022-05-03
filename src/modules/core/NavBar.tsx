import { FC, ReactNode } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import Paper from '@mui/material/Paper';
import { Link as RouterLink, resolvePath, matchPath, useLocation } from 'react-router-dom';

interface NavElement {
  label: string;
  icon: ReactNode;
  to: string;
}

const App: FC = () => {
  const { pathname } = useLocation();

  const routes: NavElement[] = [
    {
      label: 'Home',
      icon: <HomeIcon />,
      to: '/',
    },
    {
      label: 'Accounts',
      icon: <GroupsIcon />,
      to: '/accounts',
    },
    {
      label: 'Transactions',
      icon: <FormatListNumberedIcon />,
      to: '/transactions',
    },
  ];

  let value: number | undefined = undefined;
  for (let i = 0; i < routes.length; ++i) {
    const route = routes[i];
    const resolved = resolvePath(route.to);
    const match = matchPath({ path: resolved.pathname, end: true }, pathname);
    if (match) {
      value = i;
      break;
    }
  }

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
      >
        {routes.map((route) => (
          <BottomNavigationAction
            key={route.to}
            label={route.label}
            icon={route.icon}
            to={route.to}
            component={RouterLink}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
};

export default App;
