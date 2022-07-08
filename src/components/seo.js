import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ description, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaTitle = title || site.siteMetadata.title

  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
    >
      <title>{metaTitle} | Object Press</title>
      <meta name="author" content="Object Press" />
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content="Object Press, headless cms, blog api" />
      <meta
        name="image"
        content="https://blog.objectpress.io/object-press.png"
      />
      <meta property="og:locale" content="en" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://blog.objectpress.io" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta
        property="og:image"
        content="https://blog.objectpress.io/object-press.png"
      />
      <meta property="og:image:alt" content={metaTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta
        name="twitter:image"
        content="https://blog.objectpress.io/object-press.png"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href="https://blog.objectpress.io" />
    </Helmet>
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
