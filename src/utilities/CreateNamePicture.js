import React from 'react';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';


const styles = {

};




class CreateNamePicture extends React.Component {


  CreateCanvas(index,name) {
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

      /*
      Other Half
      // ctx.fillStyle = colorArray[FirstColorIndex];
      // ctx.arc(widtharc/2 +toMiddle, higharc-toMiddle, radius, 0, 1 * Math.PI);
      // ctx.fill();
      
      // ctx.fillStyle = colorArray[SecondColorIndex];
      // ctx.arc(widtharc/2 +toMiddle, higharc-toMiddle, radius, Math.PI, 2 * Math.PI);
      // ctx.fill();

      */
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
      ctx.fillText(name, widtharc, higharc);
    }
    
    return <canvas id={"myCanvas"+index} width="210" height="300" onClick={LoadCanvas} >Meimad Are Amazing</canvas>//<canvas id={"myCanvas"+index} width="200" height="300" onClick={LoadCanvas}></canvas>
  }


  CanvasToByteArray(index)
  {
    


  }


  render() {
    const { classes, theme, title } = this.props;

    return (
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




