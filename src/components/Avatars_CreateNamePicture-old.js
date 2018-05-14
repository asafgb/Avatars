import React from 'react';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';


const styles = {

};



///
/// Created By : Asaf
///
/// Create Icon With 2 Char of your Name
///
/// Input: Index of the Canves, the value that will Be inside
///
/// Output: Canvas with Color with the value inside
///
class CreateNamePicture extends React.Component {


  // Create the Canvas
  CreateCanvas(index,name) {
    const { classes, theme, title } = this.props;

    // #TODO :  On load problem, right now it on Click
    // Canvas On Load  
    function LoadCanvas() {

      // Color Array
      var colorArray = ["#cc66ff","#00ff00","#0000ff","#006600","#ff3300","#663300","#ff8c1a"];//"red", "#0000cc","#00ffcc"

      // The 3 Diffrent Colors
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
      
      // Get that Canvas
      var c = document.getElementById("myCanvas"+index);

      // Get grafic object
      var ctx = c.getContext("2d");

      // Property of locations
      var widtharc= 170;
      var higharc= 170;
      var toMiddle =20
      var radius=90


      {
        /// Option to Color the txt

        /*var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
        gradient.addColorStop("0", "magenta");
        gradient.addColorStop("0.5", "blue");
        gradient.addColorStop("1.0", "red");

        // Fill with gradient
        ctx.fillStyle = gradient;*/
      }


      /*
      Other Half
      // ctx.fillStyle = colorArray[FirstColorIndex];
      // ctx.arc(widtharc/2 +toMiddle, higharc-toMiddle, radius, 0, 1 * Math.PI);
      // ctx.fill();
      
      // ctx.fillStyle = colorArray[SecondColorIndex];
      // ctx.arc(widtharc/2 +toMiddle, higharc-toMiddle, radius, Math.PI, 2 * Math.PI);
      // ctx.fill();

      */
      
      // Color half circle
      ctx.beginPath();
      ctx.fillStyle = colorArray[FirstColorIndex];
      ctx.arc(widtharc/2 +toMiddle, higharc-toMiddle, radius, -Math.PI/2, 1 * Math.PI/2);
      ctx.fill();

      // Color he other half circle
      ctx.beginPath();
      ctx.fillStyle = colorArray[FirstColorIndex];
      ctx.arc(widtharc/2 +toMiddle, higharc-toMiddle, radius, Math.PI/2,  Math.PI+Math.PI/2);
      ctx.fill();

      // Put the text
      ctx.fillStyle = colorArray[ThreeColorIndex];
      ctx.font = "90px Arial";
      ctx.fillText(name, widtharc, higharc);
    }
    
    // Return that canvas
    return <canvas id={"myCanvas"+index} width="210" height="300" onClick={LoadCanvas} >Meimad Are Amazing</canvas>//<canvas id={"myCanvas"+index} width="200" height="300" onClick={LoadCanvas}></canvas>
  }




  render() {
    const { classes, theme, title } = this.props;

    return (
      // Return that canvas
      <div>
       {this.CreateCanvas(this.props.index,this.props.uname) }
     </div>
    );
  }
}

CreateNamePicture.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(CreateNamePicture);




