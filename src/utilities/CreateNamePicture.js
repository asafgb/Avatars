import React from 'react';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
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
  },
  canvas:{
    border:'1px',
    solid: '#d3d3d3',
    direction:'ltr',
    textalign:'ltr'
  }
};




class CreateNamePicture extends React.Component {


  CreateCanvas(index) {
    const { classes, theme, title } = this.props;
    function LoadCanvas() {
      var colorArray = ["#cc66ff","#00ff00","#0000ff","#006600","#ff3300","#663300","#ff8c1a"];//"red", "#0000cc","#00ffcc"
      var FirstColorIndex=Math.floor(Math.random() * colorArray.length);
      var SecondColorIndex=Math.floor(Math.random() * colorArray.length);
      var ThreeColorIndex=Math.floor(Math.random() * colorArray.length);

      while(FirstColorIndex == SecondColorIndex || SecondColorIndex == ThreeColorIndex)
      {
         SecondColorIndex=Math.floor(Math.random() * colorArray.length);
      }

      while(FirstColorIndex == SecondColorIndex || FirstColorIndex == ThreeColorIndex)
      {
        FirstColorIndex=Math.floor(Math.random() * colorArray.length);
      }

      var c = document.getElementById("myCanvas"+index);
      var ctx = c.getContext("2d");

      {
        //console.log(c)
        /*var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
        gradient.addColorStop("0", "magenta");
        gradient.addColorStop("0.5", "blue");
        gradient.addColorStop("1.0", "red");

        // Fill with gradient
        ctx.fillStyle = gradient;*/
      }

      var widtharc= 170;
      var higharc= 170;
      var toMiddle =20
      var radius=90
      // ctx.fillStyle = colorArray[FirstColorIndex];
      // ctx.arc(widtharc/2 +toMiddle, higharc-toMiddle, radius, 0, 1 * Math.PI);
      // ctx.fill();
      
      // ctx.fillStyle = colorArray[SecondColorIndex];
      // ctx.arc(widtharc/2 +toMiddle, higharc-toMiddle, radius, Math.PI, 2 * Math.PI);
      // ctx.fill();
      ctx.beginPath();
      ctx.fillStyle = colorArray[FirstColorIndex];
      ctx.arc(widtharc/2 +toMiddle, higharc-toMiddle, radius, -Math.PI/2, 1 * Math.PI/2);
      ctx.fill();

      ctx.beginPath();
      ctx.fillStyle = colorArray[SecondColorIndex];
      ctx.arc(widtharc/2 +toMiddle, higharc-toMiddle, radius, Math.PI/2,  Math.PI+Math.PI/2);
      ctx.fill();


      ctx.fillStyle = colorArray[ThreeColorIndex];
      ctx.font = "90px Arial";
      ctx.fillText("א.ש", widtharc, higharc);
    }
    
    return <canvas id={"myCanvas"+index} width="210" height="300" onClick={LoadCanvas} className={classes.canvas}>Your browser does not support the HTML5 canvas tag.</canvas>//<canvas id={"myCanvas"+index} width="200" height="300" onClick={LoadCanvas}></canvas>
  }


  render() {
    const { classes, theme, title } = this.props;

    return (
      <div>
      {this.CreateCanvas(1) }
     </div>
    );
  }
}

CreateNamePicture.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(CreateNamePicture);




