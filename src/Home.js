import React from 'react';
import { 
  AppBar,
  Button, 
  IconButton, 
  makeStyles, 
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
  Typography,
  
} from '@material-ui/core';
import AddCircle from '@material-ui/icons/AddCircle';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import preto from './assets/images/preto.png';
import VideoCall from '@material-ui/icons/VideoCall';
import Apps from '@material-ui/icons/Apps';
import HomeIcon from '@material-ui/icons/Home';
import Whatshot from '@material-ui/icons/Whatshot';
import Subscriptions from '@material-ui/icons/Subscriptions';
import VideoLibrary from '@material-ui/icons/VideoLibrary';
import History from '@material-ui/icons/History';
import MoreVert from '@material-ui/icons/MoreVert';
import ListItemIcon from '@material-ui/core/ListItemIcon';



const useStyles = makeStyles((theme) => ({


    root: {
      height: '100vh',
    },
    appBar: {
      boxShadow: 'none',
      zIndex: theme.zIndex.drawer + 1, 
    },
    drawer: {
      width: 240,
      flexShrink: 0,
    },
    drawerPaper: {
      paddingTop: 8,
      width: 240,
      borderRight: 'none',
    },
    logo: {
      height: 25,
      cursor: 'pointer',
      margin: 18,
    },
    menuButton: {
      paddingLeft: 5,
    },
    icons: {
      padding: theme.spacing(3),
    },
    grow: {
      flexGrow: 1,
    },
    // Diminuindo texto do menu
    ListItemTextStyle: {
      fontSize: 14,
    },
    listStyle: {
      padding: 0,
    },
    listitem: {
      paddingTop: 4,
    paddingBottom: 4,
    },
    iconsUpDivider: {
      paddingTop: 8,
      paddingBottom: 8,
    },
    // div com padding em volta dos botoes Biblioteca e histórico
    libAndHistory: {
      paddingTop: 8,
    }
}));


function Home() {

  const classes = useStyles();

  

  return (
    <div className={classes.root}>
      <AppBar color="inherit" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
         <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
         </IconButton>
            <img src={preto} alt="logo" className={classes.logo}/>
          <div className={classes.grow}/>
         <IconButton  className={classes.icons} color="inherit">
            <VideoCall />
         </IconButton>
         <IconButton  className={classes.icons} color="inherit">
            <MoreVert />
         </IconButton>
         <IconButton  className={classes.icons} color="inherit">
            <Apps />
         </IconButton>
            <Button startIcon={<AccountCircle />} variant="outlined" color="secondary">Fazer login</Button>

        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <Divider />
        <div className={classes.drawerContainer}>
          <div className={classes.iconsUpDivider}>
          <List classes={{
            root: classes.listStyle
          }}>
            
              <ListItem button classes={{root: classes.listitem}}>
                <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                <ListItemText classes={{
                  primary: classes.ListItemTextStyle
                }} primary={'Início'} />
              </ListItem>
            
          </List>
          <List classes={{
            root: classes.listStyle
          }}>
            
              <ListItem button classes={{root: classes.listitem}}>
                <ListItemIcon>{<Whatshot />}</ListItemIcon>
                <ListItemText classes={{
                  primary: classes.ListItemTextStyle
                }} primary={'Em alta'} />
              </ListItem>
            
          </List>
          <List classes={{
            root: classes.listStyle
          }}>
            
              <ListItem button classes={{root: classes.listitem}}>
                <ListItemIcon>{<Subscriptions />}</ListItemIcon>
                <ListItemText classes={{
                  primary: classes.ListItemTextStyle
                }} primary={'Inscrições'} />
              </ListItem>
            
          </List>
          </div>
          <Divider />
         <div className={classes.libAndHistory}>
         <List classes={{
            root: classes.listStyle
          }}>
            
              <ListItem button classes={{root: classes.listitem}}>
                <ListItemIcon>{<VideoLibrary />}</ListItemIcon>
                <ListItemText classes={{
                  primary: classes.ListItemTextStyle
                }} primary={'Biblioteca'} />
              </ListItem>
            
          </List>
          <List classes={{
            root: classes.listStyle
          }}>
            
              <ListItem button classes={{root: classes.listitem}}>
                <ListItemIcon>{<History />}</ListItemIcon>
                <ListItemText classes={{
                  primary: classes.ListItemTextStyle
                }} primary={'Histórico'} />
              </ListItem>
            
          </List>
         </div>
          
          

        </div>
        <Divider />
        <Box p={3.5}>
          <Typography variant='body2'>
                Faça login para curtir vídeos, comentar e se inscrever.
          </Typography>
            <Box mt={2}>
            <Button startIcon={<AccountCircle />} variant="outlined" color="secondary">Fazer login</Button>
            </Box>
        </Box>
        <Divider />
        <List>
              <ListItem button classes={{root: classes.listItem}}>
              <ListItemIcon>
                <AddCircle />
              </ListItemIcon>
                <ListItemText primary={'Música'}/>
              </ListItem> 
              <ListItem button classes={{root: classes.listItem}}>
              <ListItemIcon>
                <AddCircle />
              </ListItemIcon>
                <ListItemText primary={'Esportes'}/>
              </ListItem> 
              <ListItem button classes={{root: classes.listItem}}>
              <ListItemIcon>
                <AddCircle />
              </ListItemIcon>
                <ListItemText primary={'Josgos'}/>
              </ListItem> 
              <ListItem button classes={{root: classes.listItem}}>
              <ListItemIcon>
                <AddCircle />
              </ListItemIcon>
                <ListItemText primary={'Filmes'}/>
              </ListItem> 
              <ListItem button classes={{root: classes.listItem}}>
              <ListItemIcon>
                <AddCircle />
              </ListItemIcon>
                <ListItemText primary={'Notícias'}/>
              </ListItem> 
        </List>
      </Drawer>
    </div>
  )
}

export default Home;