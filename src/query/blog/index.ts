import { BlogPageData } from './blog.model'

const blogPageData: BlogPageData = {
  recentPostSection: {
    cards: [
      {
        button: {
          label: 'Read More',
        },
        date: '20 Oct 2021',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        imageUrl: './images/imageCard.png',
        time: '3 min read',
        title: 'Lorem Ipsum',
      },
      {
        button: {
          label: 'Read More',
        },
        date: '20 Oct 2021',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        imageUrl: './images/imageCard.png',
        time: '3 min read',
        title: 'Lorem Ipsum',
      },
      {
        button: {
          label: 'Read More',
        },
        date: '20 Oct 2021',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        imageUrl: './images/imageCard.png',
        time: '3 min read',
        title: 'Lorem Ipsum',
      },
      {
        button: {
          label: 'Read More',
        },
        date: '20 Oct 2021',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        imageUrl: './images/imageCard.png',
        time: '3 min read',
        title: 'Lorem Ipsum',
      },
      {
        button: {
          label: 'Read More',
        },
        date: '20 Oct 2021',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        imageUrl: './images/imageCard.png',
        time: '3 min read',
        title: 'Lorem Ipsum',
      },
      {
        button: {
          label: 'Read More',
        },
        date: '20 Oct 2021',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        imageUrl: './images/imageCard.png',
        time: '3 min read',
        title: 'Lorem Ipsum',
      },
      {
        button: {
          label: 'Read More',
        },
        date: '20 Oct 2021',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        imageUrl: './images/imageCard.png',
        time: '3 min read',
        title: 'Lorem Ipsum',
      },
      {
        button: {
          label: 'Read More',
        },
        date: '20 Oct 2021',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        imageUrl: './images/imageCard.png',
        time: '3 min read',
        title: 'Lorem Ipsum',
      },
      {
        button: {
          label: 'Read More',
        },
        date: '20 Oct 2021',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        imageUrl: './images/imageCard.png',
        time: '3 min read',
        title: 'Lorem Ipsum',
      },
    ],
    heading: 'Recent posts',
    tabs: [
      { label: 'Community' },
      { label: 'Design' },
      { label: 'Business' },
      { label: 'Product' },
      { label: 'Technology' },
    ],
  },
  subscribeSection: '',
}

export const getBlogPage = async (): Promise<BlogPageData> => {
  const p = new Promise<BlogPageData>((resolve) => {
    resolve(blogPageData)
  })
  return p
}
