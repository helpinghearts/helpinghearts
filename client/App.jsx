import React from 'react';
//import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import {Tabs, Tab} from 'material-ui/Tabs';
import Button from 'material-ui/Button';
import Carousel from './Carousel.jsx';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import {Radio,Checkbox, Dropdown,Header,Menu} from 'semantic-ui-react';
import {HashRouter, Route, Link} from 'react-router-dom';

import Collapsible from 'react-collapsible';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import request from 'superagent';

const styles={
    appbar:{
        backgroundColor: "#d6710c",
        marginTop: "0px",
        height: "60px"
   }
}
class App extends React.Component {
constructor(props){
    super(props);

}



render() {

      return (
     <div>
        <AppBar position="static" style={styles.appbar}>
         <Toolbar>
            <Typography variant="title" color="inherit" >
              Helping Hearts
            </Typography>
            <Link to='/addExpense'>
            <Button name="button" style={{float:"right"}}>
             Add Expense
           </Button></Link>
        </Toolbar>
        </AppBar>
        <div>
          <Carousel />
        </div>
     </div>

      );
   }
}
export default App;
