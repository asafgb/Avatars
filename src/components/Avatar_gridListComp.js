import React from 'react';
import { withStyles } from 'material-ui/styles';
import MyClickable from './Avatars_CostumeButton'
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import testsplist from '../utilities/TestSPListOfPictures.json' 

const styles = theme => ({
  root:{}
});

class GridListComp extends React.Component {
  state = {
    activeIndex: null
  }
  

  handleClick = (index) => this.setState({ activeIndex: index })

  render() {
    var i=0;
    const { classes } = this.props;
    return 
    // <div>
    //   <MyClickable name="a" index={0} isActive={ this.state.activeIndex===0 } onClick={ this.handleClick } />
    //   <MyClickable name="b" index={1} isActive={ this.state.activeIndex===1 } onClick={ this.handleClick }/>
    //   <MyClickable name="c" index={2} isActive={ this.state.activeIndex===2 } onClick={ this.handleClick }/>
      
    // </div>
    <div className={classes.root} id="AllImages">
      <GridList cols={4} spacing={20}  cellHeight={360} className={classes.gridList}>
        {testsplist.map(tile => (
          <GridListTile key={i} alt={tile.category}>
          {/* <MyClickable name={i} index={i} isActive={ this.state.activeIndex===i } onClick={ this.handleClick } /> */}
            {/* <img src={tile.path.includes("http") ? tile.path : process.env.PUBLIC_URL + tile.path} /> */}
            {i++}
          </GridListTile>
        ))}
      </GridList>
    </div>
  }
}
export default withStyles(styles)(GridListComp);
