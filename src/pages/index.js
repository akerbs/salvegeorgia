import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
    accusantium cum natus, culpa amet ducimus laudantium fugiat facilis
    temporibus explicabo itaque obcaecati beatae excepturi ratione sint, nulla
    similique nemo ipsa tempora reprehenderit. Inventore, id illum quaerat, cum
    perspiciatis commodi unde accusantium odit temporibus obcaecati est
    laudantium quos tempora? Quod quas vel odio quis sed? Quod incidunt itaque
    rerum delectus, recusandae ut quibusdam fugit quasi, excepturi rem numquam
    dolor similique ipsum ea quae. Ducimus quaerat voluptas nemo eveniet
    molestias obcaecati laudantium deserunt consectetur laboriosam qui fugit
    unde animi quisquam aspernatur dolorum inventore optio ex non eum, minima
    corrupti harum excepturi expedita! Lorem ipsum, dolor sit amet consectetur
    adipisicing elit. Delectus accusantium cum natus, culpa amet ducimus
    laudantium fugiat facilis temporibus explicabo itaque obcaecati beatae
    excepturi ratione sint, nulla similique nemo ipsa tempora reprehenderit.
    Inventore, id illum quaerat, cum perspiciatis commodi unde accusantium odit
    temporibus obcaecati est laudantium quos tempora? Quod quas vel odio quis
    sed? Quod incidunt itaque rerum delectus, recusandae ut quibusdam fugit
    quasi, excepturi rem numquam dolor similique ipsum ea quae. Ducimus quaerat
    voluptas nemo eveniet molestias obcaecati laudantium deserunt consectetur
    laboriosam qui fugit unde animi quisquam aspernatur dolorum inventore optio
    ex non eum, minima corrupti harum excepturi expedita!
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
