import React, { useEffect, useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Header from "../components/header"
import Footer from "../components/footer"
import Image from "../components/image"
import SEO from "../components/seo"
import IndexPageContent from "../components/indexPageContent"
import { navigate } from "gatsby"
const window = require("global/window")
const document = require("global/document")

const useStyles = makeStyles(theme => ({
  root: {
    padding: 0,
    // minHeight: "100vh",
  },
}))

export default function MainPage() {
  const classes = useStyles()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  window.onload = function () {
    navigate("/")
    // document.location.reload()
  }

  return (
    <>
      <div className={classes.root}>
        <SEO title="Home" />
        <Header />
        <IndexPageContent />
        <Footer />
      </div>
    </>
  )
}
