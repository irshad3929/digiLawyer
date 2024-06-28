import { AboutUsData } from './about-us.model'

const data: AboutUsData = {
  introHeader: {
    label: 'About Us',
    sectionHeading: {
      label: 'About Us',
      icon: {
        src: '/icons/starsIcon.png',
        alt: 'about us icon',
      },
    },
    heading: 'This will be heading for about us',
    description:
      'We deliver you a result that marks the difference between servie and professionalism.We deliver you a result that marks the difference between servie and professionalism.We deliver you a result that marks the difference between servie and professionalism.',
  },
  whoWeAre: {
    sectionHeading: {
      label: 'ISO 2700 & CMM | Level 3',
      icon: {
        src: '/icons/starsIcon.png',
        alt: 'about us icon',
      },
    },
    heading: 'Who we are?',
    subHeading: 'Big Oh Notation',
    description:
      'We deliver you a result that marks the difference between servie and professionalism.We deliver you a result that marks the difference between servie and professionalism.We deliver you a result that marks the difference between servie and professionalism.',

    image: {
      src: '/icons/whoWeAreImage.png',
      alt: 'who we are',
    },
  },
  whyWeAre: {
    sectionHeader: {
      label: 'Why we are',
      heading: 'This will be a heading for why we are.',
      description:
        'We deliver you a result that marks the difference between servie and professionalism.We deliver you a result that marks the difference between servie and professionalism.We deliver you a result that .',
      button: {
        label: 'Talk to experts',
      },
    },
    image: {
      src: '/images/whyWeAreLargeImage.png',
      alt: 'an image of a person',
    },
  },
  goal: {
    sectionHeader: {
      label: 'Goals',
      heading: 'This will be a heading for value goals.',
      description:
        'We deliver you a result that marks the difference between servie and professionalism.We deliver you a result that marks the difference between servie and professionalism.We deliver you a result that .',
    },
    cardData: [
      {
        icon: {
          src: '/icons/missionIcon.png',
          alt: 'mission icon',
        },
        heading: 'Mission',
        description:
          'To transform the legal experience in India by delivering innovative and impactful digital solutions, empowering,every Indian with a seamLesss accessible platform, simplying legal process and ensuring justice is within reach and affordable for all.',
      },
      {
        icon: {
          src: '/icons/visionIcon.png',
          alt: 'vission icon',
        },
        heading: 'Vision',
        description:
          'To be the key enabler of digital transformation fo India legal system, by aiding citizen judges advocates and government agencies in India with innovative cutting-edge technologies for quicker execution.',
      },
    ],
    image: {
      src: '/images/goalImage.png',
      alt: 'goal Image',
    },
  },
  coreValues: {
    sectionHeader: {
      label: 'Core Values',
      heading: 'This will be a heading for value goals.',
      description:
        'We deliver you a result that marks the difference between servie and professionalism.We deliver you a result that marks the difference between servie and professionalism.We deliver you a result that .',
    },
    cardData: [
      {
        icon: {
          src: '/icons/missionIcon.png',
          alt: 'mission icon',
        },
        heading: 'Accessible',
        description:
          'Do because you can make a difference. Keep an eye on the big picture.',
      },
      {
        icon: {
          src: '/icons/visionIcon.png',
          alt: 'vission icon',
        },
        heading: 'Social Impact',
        description:
          'Do because you can make a difference. Keep an eye on the big picture..',
      },
      {
        icon: {
          src: '/icons/visionIcon.png',
          alt: 'vission icon',
        },
        heading: 'Responsible',
        description:
          'Do because you can make a difference. Keep an eye on the big picture.',
      },
      {
        icon: {
          src: '/icons/visionIcon.png',
          alt: 'vission icon',
        },
        heading: 'Affordable',
        description:
          'Do because you can make a difference. Keep an eye on the big picture.',
      },
    ],
  },
}

export const getAboutUsPageData = async (): Promise<AboutUsData> => {
  const p = new Promise<AboutUsData>((resolve) => {
    resolve(data)
  })
  return p
}

/*
whoWeAre: {
    label: 'ISO 2700 & CMM | Level 3',
    heading: 'Who we are?',
    subHeading: 'Big Oh Notation',
    para1:
      'We deliver you a result that marks the difference between servie and professionalism.',
    para2:
      'We believe that technology is an important factor between services & professtion.We believe that technology is an important factor between .We believe that technology is an important factor betwee professtion.We believe that technology is an important factor between services & professtion.',
    para3:
      'We have successfully delivering value to our client across the globe.',
    image: {
      src: '/icons/whoWeAreImage.png',
      alt: 'who we are',
    },
  },
*/
