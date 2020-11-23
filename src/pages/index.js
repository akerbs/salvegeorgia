import React, { useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Header from "../components/header"
import Footer from "../components/footer"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import IndexPageContent from "../components/indexPageContent"

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
    padding: 0,
  },
}))

export default function IndexPage() {
  const classes = useStyles()

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
