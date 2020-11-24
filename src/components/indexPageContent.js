import React, { useContext, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"

import ComplexButtons from "./complexButtons"
import { LanguageContext } from "./layout"
import { HeaderHeightContext } from "./layout"
import { ReloadStateContext } from "./layout"
const window = require("global/window")

const useStyles = makeStyles(theme => ({
  contentWrapper: {
    padding: 0,
    // minHeight: "100vh",
    // marginTop: "12vh",
    [theme.breakpoints.down("lg")]: {
      // marginTop: "7vh",
    },
  },
}))

export default function IndexPageContent() {
  const classes = useStyles()
  const { actLanguage } = useContext(LanguageContext)
  const { headerHeight } = useContext(HeaderHeightContext)

  return (
    <div className={classes.contentWrapper} style={{ marginTop: headerHeight }}>
      {/* <div id="top" style={{ margin: 0, padding: 0 }}></div> */}
      <ComplexButtons />
    </div>
  )
}
