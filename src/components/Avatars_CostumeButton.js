import React from 'react';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root:{}
});

class MyClickable extends React.Component {

  handleClick = () => this.props.onClick(this.props.index)
  
  render() {
    return <button
      type='button'
      className={
        this.props.isActive ? 'active' : 'album'
      }
      onClick={ this.handleClick }
    >
      {/* <span>{ this.props.name }</span> */}
      {this.props.value}
    </button>
  }
}

export default withStyles(styles)(MyClickable);