import { FC, useMemo, forwardRef } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LinkProps } from '@mui/material/Link';
import Fonts from './fonts/Fonts';
import App from './App';
import { ModelProvider } from './hooks/model';

const LinkBehavior = forwardRef<
  any,
  Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }
>((props, ref) => {
  const { href, ...other } = props;
  // Map href (MUI) -> to (react-router)
  return <RouterLink data-testid="custom-link" ref={ref} to={href} {...other} />;
});

const Core: FC = () => {
  const theme = useMemo(() => createTheme({
    components: {
      MuiLink: {
        defaultProps: {
          component: LinkBehavior,
        } as LinkProps,
      },
      MuiButtonBase: {
        defaultProps: {
          LinkComponent: LinkBehavior,
        },
      },
    },
  }), []);

  return (
    <>
      <CssBaseline />
      <Fonts />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <ModelProvider>
            <App />
          </ModelProvider>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default Core;
