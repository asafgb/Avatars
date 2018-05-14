import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Subheader from 'material-ui/List/ListSubheader';
import IconButton from 'material-ui/IconButton';
import InfoIcon from '@material-ui/icons/Info';
//import tileData from './tileData';
import testsplist from '../utilities/TestSPListOfPictures.json'
//import CreateNamePicture from './Avatars_CreateNamePicture';


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
  }
});

function TitlebarGridList(props) {
  
  const { classes } = props;
  const AmountPictureColor=1;
  var i=0;
  return (
    <div className={classes.root} id="AllImages">
      <GridList cols={4} spacing={20}  cellHeight={360} className={classes.gridList}>
        {testsplist.map(tile => (
          <GridListTile key={i} alt={tile.category}>
            <img src={tile.path.includes("http") ? tile.path : process.env.PUBLIC_URL + tile.path} />
            {i++}
          </GridListTile>
        ))}

         {/*  בצד שרת 
         }
          {Array(AmountPictureColor).fill(1).map((el, i) =>
        <GridListTile  alt={"all"} key ={"col"+i}>
          <CreateNamePicture uname="א.ש" index={i}  />
        </GridListTile>
        )} 
      */}
      </GridList>
    </div>
  );
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitlebarGridList);
