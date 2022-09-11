import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Spookies">
    <p>We about ghosts and stuff!</p>
  </Layout>
  )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage