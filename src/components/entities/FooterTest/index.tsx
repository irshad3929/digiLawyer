import React from 'react'
import { Footer } from '@components/entities/Footer'
import defaultStyles from '@components/entities/Footer/styles'

const dummyData = {
  leftSection: {
    logoInfo: {
      name: 'Company Logo',
      image: {
        src: '/images/footer/Logo set.png',
        alt: 'Company Logo',
      },
    },
    desc: [
      { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    ],
    contactInfo: [
      {
        label: '27 Varanasi Drive, Wollert Vic 3750. Australia',
        icon: { src: '/images/footer/sms.svg', alt: 'Email Icon' },
      },
      {
        label: 'Phone: +1234567890',
        icon: { src: '/images/footer/call.svg', alt: 'Phone Icon' },
      },
      {
        label: 'sales@digilawter.ai',
        icon: { src: '/images/footer/call.svg', alt: 'Email Icon' },
      },
    ],
    socialMedia: [
      {
        icon: { src: '/images/footer/path14.svg', alt: 'Facebook Icon' },
        link: 'https://www.facebook.com',
      },
      {
        icon: { src: '/images/footer/path14.svg', alt: 'Twitter Icon' },
        link: 'https://www.twitter.com',
      },
      {
        icon: { src: '/images/footer/path14.svg', alt: 'LinkedIn Icon' },
        link: 'https://www.linkedin.com',
      },
    ],
    appImages: [
      // Add appImages field here
      {
        src: '/images/footer/appStore.png',
        alt: 'App Store Logo',
      },
      {
        src: '/images/footer/googlePlay.png',
        alt: 'Google Play Logo',
      },
    ],
  },
  rightSection: {
    items: [
      {
        title: 'Company',
        desc: [
          { label: 'About DigiLawyer' },
          { label: 'Careers' },
          { label: 'Contact us' },
        ],
      },
      {
        title: 'Partner',
        desc: [{ label: 'Become an affiliate' }, { label: 'Support' }],
      },
      {
        title: 'Knowledge Center',
        desc: [
          { label: 'About DigiLawyer' },
          { label: 'Careers' },
          { label: 'Contact us' },
          { label: 'Blog' },
          { label: 'News' },
          { label: 'FAQ' },
          { label: 'Forum' },
        ],
      },
    ],
  },
  bottomSection: {
    copyRightLabel: '© 2024 DigiLawyer',
    items: [
      {
        label: 'Privacy Policy',
        icon: { src: '/images/footer/path14.svg', alt: 'Privacy Icon' },
      },
      {
        label: 'Terms of Service',
      },
      {
        label: 'Sitemap',
        // icon: { src: '/images/footer/Frame.svg', alt: 'Top Icon' },
      },
    ],
    label: 'Move to top',
  },
}

export function FooterTest() {
  return (
    <div>
      <Footer
        leftSection={dummyData.leftSection}
        rightSection={dummyData.rightSection}
        bottomSection={dummyData.bottomSection}
        customStyles={defaultStyles}
      />
    </div>
  )
}
