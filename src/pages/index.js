import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Spookies is a collection of 8888 unique Ghost NFTs — super mega cute, creative digital collectibles invading the Ethereum blockchain - join us!</p>
      <p>Get access to members-only benefits such as early minting, airdrops, giveaways and many more!</p>
      <p>Go get your own Spooky!</p>
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage