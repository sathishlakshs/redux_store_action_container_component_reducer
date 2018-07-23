import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import  '../../scss/leave.scss';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" className='tabView-bg'>
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Company Network" />
            <Tab label="Self Service" />
            <Tab label="Servey" href="#basic-tabs" />
            <Tab label="Blogs" />
            <Tab label="Feedback" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer className='bg'>Company Network</TabContainer>}
        {value === 1 && <TabContainer>Self Service</TabContainer>}
        {value === 2 && <TabContainer>Servey</TabContainer>}
        {value === 3 && <TabContainer>Blogs</TabContainer>}
        {value === 4 && <TabContainer>Feedback</TabContainer>}
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);
