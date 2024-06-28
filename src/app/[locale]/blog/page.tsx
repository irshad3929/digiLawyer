import React from 'react'
import { getBlogPage } from '@query/blog'
import { RecentPostSection } from '@components/feature/Blog'

async function BlogPage() {
  const { recentPostSection } = await getBlogPage()
  return <RecentPostSection {...recentPostSection} />
}

export default BlogPage
