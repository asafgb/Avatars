import React from 'react';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Menu, { MenuItem } from 'material-ui/Menu';
import classNames from 'classnames';
import Fade from 'material-ui/transitions/Fade';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';


const styles = {
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

};


class CategoriesCreator extends React.Component {
  state = {
    anchorEl: null,
  };

  // handleClick = event => {
  //   this.setState({ anchorEl: event.currentTarget });
  //   console.log((event.currentTarget.getAttribute("id")));
  // };

  // handleClick = (event,value) => {
  //   console.log(value);
  // };


  CategoryClick(prop) {
    //console.log('Filter Category: '+ prop);
    var x,i;
   /* x = document.getElementById("AllImages").getElementsByTagName("li");
    if (prop == "all") prop = "";
    for (i = 0; i < x.length; i++) {
      this.w3RemoveClass(x[i]);
      if (x[i].getAttribute("alt").indexOf(prop) > -1) this.w3AddClass(x[i]);
    }*/
  }


  //  filterSelection(c) {
  //   var x, i;
  //   x = document.getElementsByClassName("column");
  //   if (c == "all") c = "";
  //   for (i = 0; i < x.length; i++) {
  //     this.w3RemoveClass(x[i], "show");
  //     if (x[i].className.indexOf(c) > -1) this.w3AddClass(x[i], "show");
  //   }
  // }
  /*
   w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    }
  }
  
   w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);     
      }
    }
    element.className = arr1.join(" ");
  }
*/


  render() {
    const { classes, title } = this.props;
    


    return (
      this.props.data.map((row) =>
      <div key={row.key} > 
    <ListItem className={classes.itemStyle}  button disableGutters={true} onClick={() => this.CategoryClick(row.category) }   id={row.category}  >
    {/*  onClick={this.handleClicks(row.category)}   this.handleClick*/}
        <ListItemIcon>
        <img className={classes.Pic}  src={row.path.includes("http") ? row.path : process.env.PUBLIC_URL + row.path}   />
        </ListItemIcon>
        <ListItemText primary={row.category} />
      </ListItem>
    </div>
      )
    );
  }

  
  

}

CategoriesCreator.propTypes = {
  classes: PropTypes.object.isRequired,
  //theme: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: false })(CategoriesCreator);




