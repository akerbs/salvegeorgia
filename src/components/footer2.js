import React, { useContext } from "react"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import { Link } from "gatsby"
import { LanguageContext } from "./layout"

const useStyles = makeStyles(theme => ({}))

export default function () {
  return (
    <>
      <div>© {new Date().getFullYear()}, salvegeorgia.com</div>
    </>
  )
}
