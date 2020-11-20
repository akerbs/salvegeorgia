import React from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ComplexButtons from "../components/complexButtons"

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
    padding: 0,
  },
  contentWrapper: {
    marginTop: "9vh",
    padding: 0,
  },
}))

export default function IndexPage() {
  const classes = useStyles()

  return (
    <Layout>
      <div className={classes.root}>
        <SEO title="Home" />
        <div className={classes.contentWrapper}>
          <ComplexButtons />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente id
          laborum reprehenderit blanditiis commodi doloribus quos nobis. Non
          expedita quae ad, cupiditate iusto aut explicabo deleniti hic porro
          corporis id eaque? Sapiente dolore fugit unde suscipit tempore. Amet,
          quasi voluptatibus autem illum laboriosam quae distinctio rerum
          veritatis totam voluptatum itaque quia dicta nihil qui cupiditate
          reiciendis voluptates quos blanditiis ex. Dolor, laboriosam.
          Voluptatem enim, fugit ducimus quae porro deleniti libero distinctio
          aut reiciendis pariatur consectetur eius quaerat tempore tempora
          architecto recusandae odit. Sunt, laudantium pariatur autem iure
          temporibus dolores? Nemo quam ullam at pariatur, repellat
          exercitationem accusantium harum! Hic ab cumque autem dignissimos
          repellat eaque reprehenderit saepe molestias delectus recusandae.
          Perferendis consectetur veniam qui? Non magni distinctio magnam fuga
          vitae cumque tempore quasi. Quo asperiores, optio atque molestias
          porro, quis eos, perferendis vero voluptate alias perspiciatis dolorum
          quas excepturi? Unde tenetur amet dolor magni. Est harum
          exercitationem eaque blanditiis facere beatae quisquam explicabo
          molestiae cum asperiores necessitatibus, modi aliquam, enim ut dicta
          corporis. Aperiam repellat veritatis temporibus doloremque tempora
          optio laboriosam molestias facilis adipisci dolorem. Provident, eos.
          Voluptas et, quam perspiciatis mollitia atque velit consectetur iusto
          iste veniam. Saepe, itaque quos. Eaque, explicabo in veniam et ipsam
          corrupti esse officia.
        </div>
      </div>
    </Layout>
  )
}
