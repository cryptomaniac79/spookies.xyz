import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const BlogPage = () => {
  return (
    <Layout pageTitle="My Ghost Stuffs">
      <p>Other Ghost Stuffz</p>
    </Layout>
  )
}

export const Head = () => <Seo title="My Ghost Stuffs" />

export default BlogPage