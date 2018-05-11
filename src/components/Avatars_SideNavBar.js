import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import  List,{ ListItem, ListItemText } from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ImageAvatars from '../components/Avatars_TopNavUserPic';
import {ReactHeight} from 'react-height';
import { mailFolderListItems, otherMailFolderListItems } from './ListCreator';
//import CategoriesGenerator from '../components/Avatars_CategoriesCreator.js';
import data from '../utilities/Categories.json';
import CategoriesGenerator2 from '../components/Avatars_CategoriesCreator2'
import testsplist from '../utilities/TestSPListOfPictures.json'
import TitlebarGridList from './Avatars_GridList'

const drawerWidth = 240;
const clientheight = this.height;



const styles = theme => ({
  root: {
    flexGrow: 1,
    height: clientheight,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  flex: {
    flex: 1,
  },

  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {    
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {

    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  toolbars: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    minHeight:'80px',

  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 4,
  },
  pictureGrid:
{

},

});




class MiniDrawer extends React.Component {
  state = {
    open: false,
  };
  

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme, title } = this.props;

    return (
      <div className={classes.root}>
        <AppBar
          position="absolute"
          className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
        >
       
          <Toolbar  disableGutters={true}  > 
{//disableGutters={!this.state.open}
}
          
            <IconButton 
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, this.state.open && classes.hide)}
            >
            {/* <ReactHeight onHeightReady={height =>console.log(height)}> */}
              <MenuIcon   />
              {/* </ReactHeight> */}
            </IconButton>

            <Typography variant="title" color="inherit" className={classes.flex}>
            {title}
          </Typography>
          <ImageAvatars  name="asaf"  picUrl="https://thumbs.dreamstime.com/z/cartoon-man-icon-person-design-vector-graphic-concept-represented-isolated-flat-illustration-73697341.jpg"/>
            
          </Toolbar>
          
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbars}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider  />
           {/* <List>{mailFolderListItems}</List> */}
           <CategoriesGenerator2 data={data}/>
          <Divider  />
          {/* { <CategoriesGenerator2 data={data}/>}  */}
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {/* <Typography noWrap>{'You think water moves fast? You should see ice.'}</Typography> */}
          {/* <CategoriesGenerator data={data}/> */}
          {/* {testsplist.map((row) =>
          <img className={} src={row.path} alt={row.category} />
          )
          } */}
          <TitlebarGridList/>
        </main>
      </div>
    );
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MiniDrawer);