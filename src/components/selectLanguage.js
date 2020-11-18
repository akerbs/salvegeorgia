import React, { useContext, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import ExpandLessIcon from "@material-ui/icons/ExpandLess"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import { LanguageContext } from "../components/layout"

const window = require("global/window")

const languageSwitcherMarginTop = window.innerWidth <= 599 ? "8%" : "25%"

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    // minWidth: 80,
    margin: 0,
    marginTop: languageSwitcherMarginTop,
    paddingRight: 5,
  },
  icon: {
    paddingLeft: 1,
  },
}))

export default function SelectLanguage() {
  const classes = useStyles()

  const { actLanguage, handleLanguageChange } = useContext(LanguageContext)

  return (
    <>
      <FormControl variant="standard" className={classes.formControl}>
        <Select
          classes={{
            icon: classes.icon,
          }}
          MenuProps={{
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left",
            },
            // transformOrigin: {
            //   vertical: "top",
            //   horizontal: "left",
            // },
            getContentAnchorEl: null,
          }}
          disableUnderline={true}
          autoWidth
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={actLanguage}
          onChange={e => {
            handleLanguageChange(e)
          }}
          // onChange={handleCurrencyChange}
          style={{ color: "white" }}
        >
          <MenuItem value={"GEO"}>GEO</MenuItem>
          <MenuItem value={"DEU"}>DEU</MenuItem>
          <MenuItem value={"ENG"}>ENG</MenuItem>
          <MenuItem value={"RUS"}>RUS</MenuItem>
        </Select>
      </FormControl>
    </>
  )
}
