import React, { useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import ComplexButtons from "./complexButtons"
import { LanguageContext } from "./layout"
import { HeaderHeightContext } from "./layout"

const useStyles = makeStyles(theme => ({
  contentWrapper: {
    minHeight: "100vh",
    // marginTop: "12vh",
    [theme.breakpoints.down("lg")]: {
      // marginTop: "7vh",
    },
  },
}))

export default function WorkAbroadPageContent() {
  const classes = useStyles()
  const { actLanguage } = useContext(LanguageContext)
  const { headerHeight } = useContext(HeaderHeightContext)
  const contentWrapperMarginTop = headerHeight * 2

  return (
    <Container
      maxWidth="lg"
      className={classes.contentWrapper}
      style={{ marginTop: contentWrapperMarginTop }}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae incidunt
      voluptas sed inventore deserunt sapiente tenetur omnis assumenda, soluta
      cum voluptates tempora quaerat doloremque. Officia nisi ipsum excepturi
      dolorum eius libero beatae modi! Ea, odit nemo. Voluptate, quae, modi in
      maxime dolorum architecto placeat unde dolor voluptas cupiditate
      repudiandae fugit commodi eaque aliquam minima necessitatibus deserunt
      expedita nam? Quod explicabo minus sequi alias? Labore ab, eos modi ipsam
      magni enim officiis quo beatae reprehenderit voluptatum velit obcaecati
      dignissimos voluptatibus distinctio, adipisci laborum quas sed quia, unde
      qui sit. Totam magni quod reiciendis voluptatum, accusantium quisquam
      nostrum cum suscipit tenetur deleniti.
    </Container>
  )
}
