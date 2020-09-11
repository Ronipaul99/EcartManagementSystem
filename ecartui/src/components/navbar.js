import React, { Component } from 'react';
import { connect } from 'react-redux';
import {set_user} from '../actions'
import axios from 'axios';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { withStyles } from '@material-ui/core/styles';
import { blue, green, purple } from '@material-ui/core/colors';
import { Button, Grid } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
const useStyles = theme => ({
  palette: {
    type: 'dark',
    appbarcolor:{
      main:"#263238"
    }
  },
  navbar:{
      backgroundColor:"#263238"
  },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.common.white,
      // '&:hover': {
      //   backgroundColor: fade(theme.palette.common.white, 0.85),
      // },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: '620px',
        height:'42px'
      },
    },
    searchBtn: {
      height: '100%',
      position:'absolute',
      backgroundColor:"#ffac33",
      weidth:"10px"
    },
    inputRoot: {
      color: "#263238",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '500px',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    iconBtn:{
      marginRight:theme.spacing(3),
      marginLeft:theme.spacing(3),
    },
    apppbarText:{
      color:"#b0bec5"
    }
  });

class Navbar extends Component{
     
    render(){
        const { classes } = this.props;
        return(
            <div className={classes.grow}>
                <AppBar position="static" className={classes.navbar}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                        >
                        <MenuIcon />
                        </IconButton>
                        <Typography className={classes.title} variant="h4" noWrap>
                              Bazzer.com
                        </Typography>
                        <div className={classes.search}>
                            <InputBase
                                classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                            <Button className={classes.searchBtn} endIcon>
                                <SearchIcon />
                            </Button>
                        </div>
                        <div className={classes.grow} />
                            <div className={classes.sectionDesktop}>
                            {this.props.login?
                                <div className={classes.iconBtn}>
                                   <IconButton
                                      aria-label="account of current user"
                                      aria-haspopup="true"
                                      color="inherit"
                                  >
                                    <Grid container spacing={3}>
                                        <Grid item xs={12}>
                                            <Typography variant="caption" display="block" className={classes.apppbarText}>
                                                  Hello, {this.props.user.customerProfile.customerName}
                                            </Typography>
                                            <Typography variant="subtitle1" display="block">
                                                Account & List<ArrowDropDownIcon/>
                                            </Typography>
                                          </Grid>
                                    </Grid>
                                 </IconButton>
                                </div>:
                                  <div className={classes.iconBtn}>
                                      please Login
                                  </div>}

                                  <div className={classes.iconBtn}>
                                      <IconButton
                                          edge="end"
                                          aria-label="account of current user"
                                          aria-haspopup="true"
                                          color="inherit"
                                      >
                                          <ShoppingCartIcon  fontSize="large"/>
                                      </IconButton>
                                  </div>
                                 
                            </div>
                            <div className={classes.sectionMobile}>
                                <IconButton
                                    aria-label="show more"
                                    aria-haspopup="true"
                                    color="inherit"
                                >
                                    <MoreIcon />
                                </IconButton>
                            </div>
                    </Toolbar>
                </AppBar>
        </div>
        );
    }
    
}


function mapStateToProps(state) {
    return {
      user:state.user,
      login:state.login
    }
  }
  
  export default withStyles(useStyles)(connect(mapStateToProps)(Navbar));