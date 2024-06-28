import { MenuOptionCardData } from '@components/common'

export type MenuType = {
  id: number
  menuName: string
  isDropDown: boolean
}

export const menus: MenuType[] = [
  {
    id: 1,
    menuName: 'Why Digilawyer',
    isDropDown: true,
  },
  {
    id: 2,
    menuName: 'Solution',
    isDropDown: true,
  },
  {
    id: 3,
    menuName: 'Resources',
    isDropDown: true,
  },
  {
    id: 4,
    menuName: 'Pricing',
    isDropDown: false,
  },
]

export type HeaderMenuOption = Record<string, MenuOptionCardData[]>

export const whyDigiLawyerOption: HeaderMenuOption = {
  OFFERING: [
    {
      redirectionUrl: '/about-as',
      icon: {
        src: '/icons/monitor.png',
        alt: 'monitor icon',
      },
      heading: 'Pocket Lawyer',
      description:
        'Lorem If you want to rename a branch that you are not currently on, you can still use the lorem',
    },
    {
      redirectionUrl: '/about-as',
      icon: {
        src: '/icons/monitor.png',
        alt: 'monitor icon',
      },
      heading: 'Pocket Lawyer',
      description:
        'Lorem If you want to rename a branch that you are not currently on, you can still use the lorem',
    },
    {
      redirectionUrl: '/about-as',
      icon: {
        src: '/icons/monitor.png',
        alt: 'monitor icon',
      },
      heading: 'Pocket Lawyer',
      description:
        'Lorem If you want to rename a branch that you are not currently on, you can still use the lorem',
    },
    {
      redirectionUrl: '/about-as',
      icon: {
        src: '/icons/monitor.png',
        alt: 'monitor icon',
      },
      heading: 'Pocket Lawyer',
      description:
        'Lorem If you want to rename a branch that you are not currently on, you can still use the lorem',
    },
  ],
  FEATURES: [
    {
      redirectionUrl: '/about-as',
      heading: 'Justice for all',
    },
    {
      redirectionUrl: '/about-as',
      heading: 'Conversation Intelligence',
    },
    {
      redirectionUrl: '/about-as',
      heading: 'personalization',
    },
    {
      redirectionUrl: '/about-as',
      heading: 'Internet Powered',
    },
    {
      redirectionUrl: '/about-as',
      heading: 'Private and anonymous',
    },
    {
      redirectionUrl: '/about-as',
      heading: 'Social empthy',
    },
    {
      redirectionUrl: '/about-as',
      heading: 'API',
    },
  ],
  OTHERS: [
    {
      redirectionUrl: '/about-as',
      icon: {
        src: '/icons/monitor.png',
        alt: 'monitor icon',
      },
      heading: 'Security',
    },
    {
      redirectionUrl: '/about-as',
      icon: {
        src: '/icons/monitor.png',
        alt: 'monitor icon',
      },
      heading: 'Support',
    },
  ],
}

export const SolutionOption: HeaderMenuOption = {
  'BY PROFESSION': [
    {
      redirectionUrl: '/about-as',
      icon: {
        src: '/icons/monitor.png',
        alt: 'monitor icon',
      },
      heading: 'Judges',
      description:
        'Lorem If you want to rename a branch that you are not currently on, you can still use the lorem',
    },
    {
      redirectionUrl: '/about-as',
      icon: {
        src: '/icons/monitor.png',
        alt: 'monitor icon',
      },
      heading: 'Lawyer',
      description:
        'Lorem If you want to rename a branch that you are not currently on, you can still use the lorem',
    },
    {
      redirectionUrl: '/about-as',
      icon: {
        src: '/icons/monitor.png',
        alt: 'monitor icon',
      },
      heading: 'CFO',
      description:
        'Lorem If you want to rename a branch that you are not currently on, you can still use the lorem',
    },
    {
      redirectionUrl: '/about-as',
      icon: {
        src: '/icons/monitor.png',
        alt: 'monitor icon',
      },
      heading: 'Company Secret',
      description:
        'Lorem If you want to rename a branch that you are not currently on, you can still use the lorem',
    },
  ],
  'FOR CITIZENS': [
    {
      redirectionUrl: '/about-as',
      heading: 'My Rights',
    },
    {
      redirectionUrl: '/about-as',
      heading: 'Document Review',
    },
    {
      redirectionUrl: '/about-as',
      heading: 'Sale Deed Drafting',
    },
    {
      redirectionUrl: '/about-as',
      heading: 'Will Registration',
    },
    {
      redirectionUrl: '/about-as',
      heading: 'House rent agreement',
    },
    {
      redirectionUrl: '/about-as',
      heading: 'Document Screener',
    },
  ],
  'FOR CORPORATIONS': [
    {
      redirectionUrl: '/about-as',
      icon: {
        src: '/icons/monitor.png',
        alt: 'monitor icon',
      },
      heading: 'Company Formation',
    },
    {
      redirectionUrl: '/about-as',
      icon: {
        src: '/icons/monitor.png',
        alt: 'monitor icon',
      },
      heading: 'Intellectual Property',
    },
    {
      redirectionUrl: '/about-as',
      icon: {
        src: '/icons/monitor.png',
        alt: 'monitor icon',
      },
      heading: 'Shareholder Agreement',
    },
    {
      redirectionUrl: '/about-as',
      icon: {
        src: '/icons/monitor.png',
        alt: 'monitor icon',
      },
      heading: 'Company Policy Agreement',
    },
  ],
}

export const resourceOption: HeaderMenuOption = {
  'KNOWLEDGE CENTRE': [
    {
      redirectionUrl: '/about-as',
      icon: {
        src: '/icons/monitor.png',
        alt: 'monitor icon',
      },
      heading: 'Blogs',
      description:
        'Lorem If you want to rename a branch that you are not currently on, you can still use the lorem',
    },
    {
      redirectionUrl: '/about-as',
      icon: {
        src: '/icons/monitor.png',
        alt: 'monitor icon',
      },
      heading: 'Case studies',
      description:
        'Lorem If you want to rename a branch that you are not currently on, you can still use the lorem',
    },
    {
      redirectionUrl: '/about-as',
      icon: {
        src: '/icons/monitor.png',
        alt: 'monitor icon',
      },
      heading: 'Vidoes',
      description:
        'Lorem If you want to rename a branch that you are not currently on, you can still use the lorem',
    },
    {
      redirectionUrl: '/about-as',
      icon: {
        src: '/icons/monitor.png',
        alt: 'monitor icon',
      },
      heading: 'News',
      description:
        'Lorem If you want to rename a branch that you are not currently on, you can still use the lorem',
    },
  ],
  'POPULAR TOPICS': [
    {
      redirectionUrl: '/about-as',
      heading: 'Tax',
    },
    {
      redirectionUrl: '/about-as',
      heading: 'Criminal',
    },
    {
      redirectionUrl: '/about-as',
      heading: 'Corporates',
    },
    {
      redirectionUrl: '/about-as',
      heading: 'Employees & Labour',
    },
  ],
  ESSENTAILS: [
    {
      redirectionUrl: '/about-as',
      icon: {
        src: '/icons/monitor.png',
        alt: 'monitor icon',
      },
      heading: 'Prolonged Class',
    },
    {
      redirectionUrl: '/about-as',
      icon: {
        src: '/icons/monitor.png',
        alt: 'monitor icon',
      },
      heading: 'Immediate Verdicts',
    },
    {
      redirectionUrl: '/about-as',
      icon: {
        src: '/icons/monitor.png',
        alt: 'monitor icon',
      },
      heading: 'My Fundamental Rights',
    },
    {
      redirectionUrl: '/about-as',
      icon: {
        src: '/icons/monitor.png',
        alt: 'monitor icon',
      },
      heading: 'Discussion Forums',
    },
  ],
}

export function getHeaderMenuData(menu: string) {
  if (menu === 'Why Digilawyer') return whyDigiLawyerOption
  if (menu === 'Solution') return SolutionOption
  return resourceOption
}

// export const getHeaderData = async (): Promise<any> => {
//   const p = new Promise<any>((resolve) => {
//     resolve(data)
//   })
//   return p
// }
