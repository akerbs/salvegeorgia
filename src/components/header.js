import React, { useContext, useState } from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import clsx from "clsx"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import Slide from "@material-ui/core/Slide"
import { Link } from "gatsby"
import SelectLanguage from "./selectLanguage"
import Drawer from "./drawer"
import withWidth from "@material-ui/core/withWidth"
import Hidden from "@material-ui/core/Hidden"
import PropTypes from "prop-types"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import ExpandLessIcon from "@material-ui/icons/ExpandLess"
import Popper from "@material-ui/core/Popper"
import Paper from "@material-ui/core/Paper"
import MenuList from "@material-ui/core/MenuList"

const window = require("global/window")

const drawerWidth = window.innerWidth <= 599 ? "100vw" : 450

function HideOnScroll(props) {
  const { children } = props
  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: theme.palette.primary.main,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShiftToRight: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: 100,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appBarShiftToLeft: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginRight: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuLeftButton: {
    // marginRight: theme.spacing(2),
  },
  menuRightButton: {
    paddingLeft: theme.spacing(1),
  },

  hide: {
    display: "none",
  },
  logo: {
    // flexGrow: 1,
    // display: "inline",
    marginTop: "1%",
  },
  toolbar: {
    // display: "flex",
    // justifyContent: "space-between",
    borderBottom: "4px solid black",
  },
  link: {
    textDecoration: "none",
    "&:visited": {
      color: "white",
    },
    "&:active": {
      color: theme.palette.primary.light,
    },
  },
  menu: {},
}))

const timeoutLength = 300

function Header(props) {
  const classes = useStyles()
  const theme = useTheme()

  const [openDrawer, setOpenDrawer] = useState(false)

  const handleDrawerOpen = () => {
    setOpenDrawer(true)
    document.body.style.position = "fixed"
  }
  const handleDrawerClose = () => {
    setOpenDrawer(false)
    const scrollY = document.body.style.top
    document.body.style.position = ""
  }

  const [state, setState] = useState({
    open2: false,
    open3: false,
    open4: false,
    anchorEl2: null,
    anchorEl3: null,
    anchorEl4: null,
  })

  function handleMenuOpen2(event) {
    setState({
      open2: true,
      anchorEl2: event.currentTarget,
    })
  }
  function handleMenuClose2() {
    setState({
      open2: false,
      anchorEl2: null,
    })
  }

  function handleMenuOpen3(event) {
    setState({
      open3: true,
      anchorEl3: event.currentTarget,
    })
  }
  function handleMenuClose3() {
    setState({
      open3: false,
      anchorEl3: null,
    })
  }
  function handleMenuOpen4(event) {
    setState({
      open4: true,
      anchorEl4: event.currentTarget,
    })
  }
  function handleMenuClose4() {
    setState({
      open4: false,
      anchorEl4: null,
    })
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShiftToLeft]: openDrawer,
          })}
        >
          <Toolbar className={classes.toolbar}>
            <Grid container spacing={3}>
              <Grid
                item
                xs={12}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography variant="h6" className={classes.logo}>
                  <Link to="/" className={classes.link}>
                    www.salvegeorgia.com
                  </Link>
                </Typography>

                <div>
                  <SelectLanguage />

                  <Hidden mdUp>
                    <IconButton
                      color="inherit"
                      aria-label="open drawer"
                      onClick={handleDrawerOpen}
                      edge="end"
                      className={clsx(
                        classes.menuLeftButton,
                        openDrawer && classes.hide
                      )}
                    >
                      <MenuIcon />
                    </IconButton>
                  </Hidden>
                </div>
              </Grid>

              <Hidden smDown>
                {/* <Typography className={classes.menu} variant="h6"> */}
                <Grid
                  item
                  xs={12}
                  container
                  onMouseLeave={e => {
                    handleMenuClose2(e)
                    handleMenuClose3(e)
                    handleMenuClose4(e)
                  }}
                >
                  <Grid item xs={3}>
                    <Button
                    // aria-owns={anchorEl1 ? "simple-menu-1" : undefined}
                    // aria-haspopup="true"
                    // onClick={handleClick1}
                    // onMouseOver={handleClick1}
                    >
                      О нас
                    </Button>
                  </Grid>
                  <Grid item xs={3}>
                    <Button
                      aria-owns={state.open2 ? "simple-menu-2" : undefined}
                      aria-haspopup="true"
                      // onClick={handleClick2}
                      // onMouseOver={handleClick2}
                      onMouseOver={handleMenuOpen2}
                      // onMouseLeave={leaveButton2}
                      endIcon={
                        state.open2 === false ? (
                          <ExpandMoreIcon />
                        ) : (
                          <ExpandLessIcon />
                        )
                      }
                    >
                      Медицинские услуги
                    </Button>
                    <Popper
                      open={state.open2}
                      anchorEl={state.anchorEl2}
                      id="menu-list-grow-2"
                    >
                      <Paper>
                        <MenuList
                          transitionDuration={100}
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "center",
                          }}
                          // transformOrigin={{
                          //   vertical: "top",
                          //   horizontal: "center",
                          // }}
                          id="simple-menu-2"
                          anchorEl={state.anchorEl2}
                          open={Boolean(state.anchorEl2)}
                          onClose={handleMenuClose2}
                          MenuListProps={{ onMouseLeave: handleMenuClose2 }}
                          // MenuListProps={{
                          //   onMouseEnter: enterMenu2,
                          //   onMouseLeave: leaveMenu2,
                          // }}
                          // getContentAnchorEl={null}
                        >
                          <MenuItem onClick={handleMenuClose2}>
                            Пластическая хирургия
                          </MenuItem>
                          <MenuItem onClick={handleMenuClose2}>
                            Косметологические процедуры
                          </MenuItem>
                          <MenuItem onClick={handleMenuClose2}>
                            Зубные имплантаты
                          </MenuItem>
                          <MenuItem onClick={handleMenuClose2}>Массаж</MenuItem>
                          <MenuItem onClick={handleMenuClose2}>
                            Бальнеологические процедуры
                          </MenuItem>
                          <MenuItem onClick={handleMenuClose2}>
                            Экстракорпоральное оплодотворение
                          </MenuItem>
                        </MenuList>
                      </Paper>
                    </Popper>
                  </Grid>
                  <Grid item xs={3}>
                    <Button
                      aria-owns={state.anchorEl3 ? "simple-menu-3" : undefined}
                      aria-haspopup="true"
                      // onClick={handleMenuClose2}
                      onMouseOver={handleMenuOpen3}
                      endIcon={
                        state.anchorEl3 === null ? (
                          <ExpandMoreIcon />
                        ) : (
                          <ExpandLessIcon />
                        )
                      }
                    >
                      Юридические услуги
                    </Button>
                    <Popper
                      open={state.open3}
                      anchorEl={state.anchorEl3}
                      id="menu-list-grow-3"
                    >
                      <Paper>
                        <MenuList
                          transitionDuration={100}
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "center",
                          }}
                          // transformOrigin={{
                          //   vertical: "top",
                          //   horizontal: "center",
                          // }}
                          id="simple-menu-3"
                          anchorEl={state.anchorEl3}
                          open={Boolean(state.anchorEl3)}
                          onClose={handleMenuClose3}
                          MenuListProps={{ onMouseLeave: handleMenuClose3 }}
                          // getContentAnchorEl={null}
                        >
                          <MenuItem onClick={handleMenuClose3}>
                            Регистрация юридических лиц
                          </MenuItem>
                          <MenuItem onClick={handleMenuClose3}>
                            Арбитраж
                          </MenuItem>
                        </MenuList>
                      </Paper>
                    </Popper>
                  </Grid>

                  <Grid item xs={3}>
                    <Button
                      aria-owns={state.anchorEl4 ? "simple-menu-4 " : undefined}
                      aria-haspopup="true"
                      // onClick={handleClick4}
                      onMouseOver={handleMenuOpen4}
                      endIcon={
                        state.anchorEl4 === null ? (
                          <ExpandMoreIcon />
                        ) : (
                          <ExpandLessIcon />
                        )
                      }
                    >
                      Работа за границей
                    </Button>
                    <Popper
                      open={state.open4}
                      anchorEl={state.anchorEl4}
                      id="menu-list-grow-4"
                    >
                      <Paper>
                        <MenuList
                          transitionDuration={100}
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "center",
                          }}
                          // transformOrigin={{
                          //   vertical: "top",
                          //   horizontal: "center",
                          // }}
                          id="simple-menu-4"
                          anchorEl={state.anchorEl4}
                          open={Boolean(state.anchorEl4)}
                          onClose={handleMenuClose4}
                          MenuListProps={{ onMouseLeave: handleMenuClose4 }}
                          // getContentAnchorEl={null}
                        >
                          <MenuItem onClick={handleMenuClose4}>
                            Наем врачей
                          </MenuItem>
                          <MenuItem onClick={handleMenuClose4}>
                            Наем медсестер
                          </MenuItem>
                          <MenuItem onClick={handleMenuClose4}>
                            Наем медсестер
                          </MenuItem>
                          <MenuItem onClick={handleMenuClose4}>
                            Для студентов
                          </MenuItem>
                        </MenuList>
                      </Paper>
                    </Popper>
                  </Grid>
                  {/* </Typography> */}
                </Grid>
              </Hidden>
            </Grid>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <Drawer onClose={handleDrawerClose} open={openDrawer} />
    </div>
  )
}

Header.propTypes = {
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
}
export default withWidth()(Header)
