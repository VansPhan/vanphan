import * as React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Breadcrumbs,
  Button,
  Toolbar,
  CssBaseline,
  useScrollTrigger,
  Slide,
} from '@mui/material';
import { Pages } from '../../Utilities/Pages';

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function Navbar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Breadcrumbs aria-label="breadcrumb">
              <Button
                variant="text"
                color="inherit"
                onClick={() => props.onPageChange(Pages.HOME)}
              >
                Home
              </Button>
              <Button
                variant="text"
                color="inherit"
                onClick={() => props.onPageChange(Pages.BLOG)}
              >
                Blog
              </Button>
            </Breadcrumbs>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
