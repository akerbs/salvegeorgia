import React, { useContext, useState, useEffect } from "react"
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
import Backdrop from "@material-ui/core/Backdrop"

const window = require("global/window")

const drawerWidth = window.innerWidth <= 599 ? "100vw" : 450
const logoMarginTop = window.innerWidth <= 959 ? "2%" : 0

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
  menuLeftButton: {},
  menuRightButton: {
    paddingLeft: theme.spacing(1),
  },

  hide: {
    display: "none",
  },
  logo: {
    // flexGrow: 1,
    // display: "inline",
    marginTop: logoMarginTop,
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
  menuBtn: {
    "&:hover": {
      fontWeight: "bold",
      color: "white",
    },
  },
  backdrop: {
    zIndex: 1,
    color: "#fff",
  },
  popper: {
    minWidth: "25vw",
    zIndex: theme.zIndex.drawer + 99,
    marginTop: 4,
  },
  menuItem: {
    "&:hover": {
      fontWeight: "bold",
      color: theme.palette.primary.main,
    },
  },
}))

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

  const [state2, setState2] = useState({
    open2: false,
    anchorEl2: null,
  })
  const [state3, setState3] = useState({
    open3: false,
    anchorEl3: null,
  })
  const [state4, setState4] = useState({
    open4: false,
    anchorEl4: null,
  })

  const [openBackdrop, setOpenBackdrop] = useState(false)
  const handleCloseBackdrop = () => {
    setOpenBackdrop(false)
  }
  const handleOpenBackdrop = () => {
    setOpenBackdrop(true)
  }

  useEffect(
    e => {
      if (
        state2.open2 === false &&
        state3.open3 === false &&
        state4.open4 === false
      ) {
        handleCloseBackdrop(e)
      }
    },
    [state2, state3, state4]
  )

  function handleMenuOpen2(event) {
    setState2({
      open2: true,
      anchorEl2: event.currentTarget,
    })
    handleOpenBackdrop()
  }
  function handleMenuClose2() {
    setState2({
      open2: false,
      anchorEl2: null,
    })
  }

  function handleMenuOpen3(event) {
    setState3({
      open3: true,
      anchorEl3: event.currentTarget,
    })
    handleOpenBackdrop()
  }
  function handleMenuClose3() {
    setState3({
      open3: false,
      anchorEl3: null,
    })
  }
  function handleMenuOpen4(event) {
    setState4({
      open4: true,
      anchorEl4: event.currentTarget,
    })
    handleOpenBackdrop()
  }
  function handleMenuClose4() {
    setState4({
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
            <Grid container spacing={1}>
              <Grid
                item
                xs={12}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography variant="h6" className={classes.logo}>
                  <Link to="/" className={classes.link}>
                    salvegeorgia.com
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
                      className={classes.menuBtn}
                      style={{ left: "45%" }}
                      // aria-owns={anchorEl1 ? "simple-menu-1" : undefined}
                      // aria-haspopup="true"
                      // onClick={handleClick1}
                      onMouseOver={e => {
                        handleMenuClose2(e)
                        handleMenuClose3(e)
                        handleMenuClose4(e)
                      }}
                    >
                      О нас
                    </Button>
                  </Grid>
                  <Grid item xs={3}>
                    <Button
                      className={classes.menuBtn}
                      aria-owns={state2.open2 ? "simple-menu-2" : undefined}
                      aria-haspopup="true"
                      // onClick={handleClick2}
                      // onMouseOver={handleClick2}
                      onMouseOver={e => {
                        handleMenuOpen2(e)
                        handleMenuClose3(e)
                        handleMenuClose4(e)
                      }}
                      // onMouseLeave={leaveButton2}
                      endIcon={
                        state2.anchorEl2 === null ? (
                          <ExpandMoreIcon />
                        ) : (
                          <ExpandLessIcon />
                        )
                      }
                    >
                      Медицинские услуги
                    </Button>
                    <Popper
                      className={classes.popper}
                      open={state2.open2}
                      anchorEl={state2.anchorEl2}
                      id="menu-list-grow-2"
                    >
                      <Paper>
                        <MenuList
                          // transitionDuration={100}
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "center",
                          }}
                          // transformOrigin={{
                          //   vertical: "top",
                          //   horizontal: "center",
                          // }}
                          id="simple-menu-2"
                          anchorEl={state2.anchorEl2}
                          open={Boolean(state2.anchorEl2)}
                          onClose={handleMenuClose2}
                          MenuListProps={{ onMouseLeave: handleMenuClose2 }}
                          // MenuListProps={{
                          //   onMouseEnter: enterMenu2,
                          //   onMouseLeave: leaveMenu2,
                          // }}
                          // getContentAnchorEl={null}
                        >
                          <MenuItem
                            onClick={handleMenuClose2}
                            className={classes.menuItem}
                          >
                            Пластическая хирургия
                          </MenuItem>
                          <MenuItem
                            onClick={handleMenuClose2}
                            className={classes.menuItem}
                          >
                            Косметологические процедуры
                          </MenuItem>
                          <MenuItem
                            onClick={handleMenuClose2}
                            className={classes.menuItem}
                          >
                            Зубные имплантаты
                          </MenuItem>
                          <MenuItem
                            onClick={handleMenuClose2}
                            className={classes.menuItem}
                          >
                            Массаж
                          </MenuItem>
                          <MenuItem
                            onClick={handleMenuClose2}
                            className={classes.menuItem}
                          >
                            Бальнеологические процедуры
                          </MenuItem>
                          <MenuItem
                            onClick={handleMenuClose2}
                            className={classes.menuItem}
                          >
                            Экстракорпоральное оплодотворение
                          </MenuItem>
                        </MenuList>
                      </Paper>
                    </Popper>
                  </Grid>
                  <Grid item xs={3}>
                    <Button
                      className={classes.menuBtn}
                      aria-owns={state3.anchorEl3 ? "simple-menu-3" : undefined}
                      aria-haspopup="true"
                      // onClick={handleMenuClose2}
                      onMouseOver={e => {
                        handleMenuOpen3(e)
                        handleMenuClose2(e)
                        handleMenuClose4(e)
                      }}
                      endIcon={
                        state3.anchorEl3 === null ? (
                          <ExpandMoreIcon />
                        ) : (
                          <ExpandLessIcon />
                        )
                      }
                    >
                      Юридические услуги
                    </Button>
                    <Popper
                      className={classes.popper}
                      open={state3.open3}
                      anchorEl={state3.anchorEl3}
                      id="menu-list-grow-3"
                    >
                      <Paper>
                        <MenuList
                          // transitionDuration={100}
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "center",
                          }}
                          // transformOrigin={{
                          //   vertical: "top",
                          //   horizontal: "center",
                          // }}
                          id="simple-menu-3"
                          anchorEl={state3.anchorEl3}
                          open={Boolean(state3.anchorEl3)}
                          onClose={handleMenuClose3}
                          MenuListProps={{ onMouseLeave: handleMenuClose3 }}
                          // getContentAnchorEl={null}
                        >
                          <MenuItem
                            onClick={handleMenuClose3}
                            className={classes.menuItem}
                          >
                            Регистрация юридических лиц
                          </MenuItem>
                          <MenuItem
                            onClick={handleMenuClose3}
                            className={classes.menuItem}
                          >
                            Арбитраж
                          </MenuItem>
                        </MenuList>
                      </Paper>
                    </Popper>
                  </Grid>

                  <Grid item xs={3}>
                    <Button
                      className={classes.menuBtn}
                      aria-owns={
                        state4.anchorEl4 ? "simple-menu-4 " : undefined
                      }
                      aria-haspopup="true"
                      // onClick={handleClick4}
                      onMouseOver={e => {
                        handleMenuOpen4(e)
                        handleMenuClose2(e)
                        handleMenuClose3(e)
                      }}
                      endIcon={
                        state4.anchorEl4 === null ? (
                          <ExpandMoreIcon />
                        ) : (
                          <ExpandLessIcon />
                        )
                      }
                    >
                      Работа за границей
                    </Button>
                    <Popper
                      className={classes.popper}
                      open={state4.open4}
                      anchorEl={state4.anchorEl4}
                      id="menu-list-grow-4"
                    >
                      <Paper>
                        <MenuList
                          // transitionDuration={100}
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "center",
                          }}
                          // transformOrigin={{
                          //   vertical: "top",
                          //   horizontal: "center",
                          // }}
                          id="simple-menu-4"
                          anchorEl={state4.anchorEl4}
                          open={Boolean(state4.anchorEl4)}
                          onClose={handleMenuClose4}
                          MenuListProps={{ onMouseLeave: handleMenuClose4 }}
                          // getContentAnchorEl={null}
                        >
                          <MenuItem
                            onClick={handleMenuClose4}
                            className={classes.menuItem}
                          >
                            Наем врачей
                          </MenuItem>
                          <MenuItem
                            onClick={handleMenuClose4}
                            className={classes.menuItem}
                          >
                            Наем медсестер
                          </MenuItem>
                          <MenuItem
                            onClick={handleMenuClose4}
                            className={classes.menuItem}
                          >
                            Наем медсестер
                          </MenuItem>
                          <MenuItem
                            onClick={handleMenuClose4}
                            className={classes.menuItem}
                          >
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

      <Backdrop
        className={classes.backdrop}
        open={openBackdrop}
        onClick={handleCloseBackdrop}
      />

      <Drawer onClose={handleDrawerClose} open={openDrawer} />
    </div>
  )
}

Header.propTypes = {
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
}
export default withWidth()(Header)
