import React, { useEffect, useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Header from "../components/header"
import Footer from "../components/footer"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import IndexPageContent from "../components/indexPageContent"
import { navigate } from "gatsby"
const window = require("global/window")
const document = require("global/document")

const useStyles = makeStyles(theme => ({
  root: {
    padding: 0,
  },
}))

export default function IndexPage() {
  const classes = useStyles()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  window.onload = function () {
    navigate("https://salvegeorgia.vercel.app/")
    // document.location.reload()
  }

  return (
    <Layout>
      <div className={classes.root}>
        <SEO title="Home" />
        <Header />
        <IndexPageContent />
        <Footer />
      </div>
    </Layout>
  )
}
