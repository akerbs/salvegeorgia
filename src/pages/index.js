import React, { useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Header from "../components/header"
import Footer from "../components/footer"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ComplexButtons from "../components/complexButtons"
import { LanguageContext } from "../components/layout"
import { HeaderHeightContext } from "../components/layout"

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
    padding: 0,
  },
  contentWrapper: {
    padding: 0,

    // marginTop: "12vh",
    [theme.breakpoints.down("lg")]: {
      // marginTop: "7vh",
    },
  },
}))

export default function IndexPage() {
  const classes = useStyles()
  //const { actLanguage } = useContext(LanguageContext)
  const { toolbarHeight } = useContext(HeaderHeightContext)

  return (
    <Layout>
      <div className={classes.root}>
        <SEO title="Home" />
        <Header />
        <div
          className={classes.contentWrapper}
          style={{ marginTop: toolbarHeight }}
        >
          <ComplexButtons />
        </div>
        <Footer />
      </div>
    </Layout>
  )
}
