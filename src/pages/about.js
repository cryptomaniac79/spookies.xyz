import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Spookies">
    <p>We about ghosts and stuff!</p>
  </Layout>
  )
}

export const Head = () => (
    <>
      <title>About Spookies</title>
      <meta name="description" content="Your description" />
    </>
  )

export default AboutPage