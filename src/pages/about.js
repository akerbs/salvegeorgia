import React, { useEffect, useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Header from "../components/header"
import Footer from "../components/footer"
import Image from "../components/image"
import SEO from "../components/seo"
import AboutUsPageContent from "../components/aboutUsPageContent"

const window = require("global/window")

const useStyles = makeStyles(theme => ({
  root: {
    padding: 0,
    margin: 0,
  },
}))

export default function () {
  const classes = useStyles()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className={classes.root}>
        <SEO title="About us" />
        <Header />
        <AboutUsPageContent />
        <Footer />
      </div>
    </>
  )
}
