import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';


const styles = {
         picStyle: {
            paddingRight:10

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

  };


  function CategoriesGenerator(props) {

    const { classes} = props;
    const listItems = props.data.map((row) =>
    <div key={row.key} className={classes.picStyle}>
    <ListItem button disableGutters={true} >
      <ListItemIcon>
      <img className={classes.Pic}  src={process.env.PUBLIC_URL + row.path} alt="logo" />
      </ListItemIcon>
      <ListItemText primary={row.name} />
    </ListItem>
  </div>

        );
        
    return (
        <div>{listItems}</div>
    );
  }
  
  CategoriesGenerator.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(CategoriesGenerator);



