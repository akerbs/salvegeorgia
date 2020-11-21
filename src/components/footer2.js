import React, { useContext } from "react"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import { Link } from "gatsby"
import { LanguageContext } from "./layout"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    // maxWidth: "100%",

    padding: "5% 2% 0% 7%",

    [theme.breakpoints.down("sm")]: {
      padding: "18% 5% 0% 5%",
    },
  },
}))

export default function () {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div>© {new Date().getFullYear()}, salvegeorgia.com</div>
    </div>
  )
}
