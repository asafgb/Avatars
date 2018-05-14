import React from 'react';
import { withStyles } from 'material-ui/styles';
import MyClickable from './Avatars_CostumeButton'
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import testsplist from '../utilities/TestSPListOfPictures.json' 

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    height: '100%',
    
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  button:{
    cursor: 'pointer',
    transition: theme.transitions.create('background-color', {
      duration: theme.transitions.duration.shortest
    }),
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: '#002f00',//theme.palette.action.hover,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    }
    
  },
});

class GridListComp extends React.Component {
  state = {
    activeIndex: null
  }
  

  handleClick = (index) => {
    this.setState({ activeIndex: index })
    console.log(index);
}

  render() {
    var i=0;
    const { classes } = this.props;
    return (
    // <div>
    //   <MyClickable name="a" index={0} isActive={ this.state.activeIndex===0 } onClick={ this.handleClick } />
    //   <MyClickable name="b" index={1} isActive={ this.state.activeIndex===1 } onClick={ this.handleClick }/>
    //   <MyClickable name="c" index={2} isActive={ this.state.activeIndex===2 } onClick={ this.handleClick }/>
      
    // </div>
    <div className={classes.root} id="AllImages">
      <GridList cols={5} spacing={10}  cellHeight={300} className={classes.gridList}>
        {testsplist.map((tile,i) => (
          <GridListTile key={i} index={i} alt={tile.category} onClick={() => this.handleClick(i) } className={classes.button}  >
           {/* <MyClickable name={i} index={i} isActive={ this.state.activeIndex===i } onClick={ this.handleClick } 
           value={<img src={tile.path.includes("http") ? tile.path : process.env.PUBLIC_URL + tile.path} />} />  */}
            <img src={tile.path.includes("http") ? tile.path : process.env.PUBLIC_URL + tile.path} />
          </GridListTile>
        ))}
      </GridList>
    </div>
    );
  }
}
export default withStyles(styles)(GridListComp);
