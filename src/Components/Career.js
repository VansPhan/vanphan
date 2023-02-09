import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Tabs,
  Tab,
  Typography,
  Box,
} from '@mui/material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function Career() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, display: 'flex', height: 224 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Career Tabs"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab
          sx={{color: 'white', fontSize: '0.75rem'}}
          label="Accenture Federal Service"
          {...a11yProps(0)}
        />
        <Tab
          sx={{color: 'white', fontSize: '0.75rem'}}
          label="Accenture Federal Service"
          {...a11yProps(1)}
        />
        <Tab
          sx={{color: 'white', fontSize: '0.75rem'}}
          label="Accenture Federal Service"
          {...a11yProps(2)}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        CARD GOES HERE
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}
