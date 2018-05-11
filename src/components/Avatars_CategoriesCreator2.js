import React from 'react';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Menu, { MenuItem } from 'material-ui/Menu';
import classNames from 'classnames';
import Fade from 'material-ui/transitions/Fade';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

const styles = theme => ({
  itemStyle: {
    paddingRight : 10,
 },

 Pic:{
  borderWidth:1,
  borderColor:'rgba(0,0,0,0.2)',
  alignItems:'center',
  justifyContent:'center',
  width:50,
  height:50,
  backgroundColor:'#fff',
  borderRadius:50,
  
}


});


class CategoriesCreator2 extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
    console.log((event.currentTarget.getAttribute("id")));
  };

  render() {
    const { classes, theme, title } = this.props;
    


    return (
      this.props.data.map((row) =>
      <div key={row.key} className={classes.picStyle}> 
      <ListItem className={classes.itemStyle} button disableGutters={true} onClick={this.handleClick} id={row.name} >
        <ListItemIcon>
        <img className={classes.Pic}  src={process.env.PUBLIC_URL + row.path} alt="logo" />
        </ListItemIcon>
        <ListItemText primary={row.name} />
      </ListItem>
    </div>
      )
    );
  }

  
  

}

CategoriesCreator2.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(CategoriesCreator2);




