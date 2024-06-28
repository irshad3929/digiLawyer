import { Box, Grid } from '@mui/material'
import { Image as ImageType } from '@models'
import { Image, SupportCard } from '@components/common'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

const chatScreenHomepage: ImageType = {
  src: '/icons/ChatScreenHomepage.png',
  alt: 'chat screen homepage icon',
}

// const useCaseIcon: ImageType = {
//   src: '/icons/useCase.png',
//   alt: 'use case png',
// }

// const featuresIcon: ImageType = {
//   src: '/icons/featureIcon.png',
//   alt: 'use case png',
// }

const pageData = {
  useCase: {
    heading: 'Legal support for all citizens & industries',
    para: 'we serve to various sectors , from e-commerse to fintexh , covering diverse needs such as divorce, & corporate texation. We provide free legal advice in multiple Indian languages, supported by ML powered algorithm',
  },
  supportCardData: [
    {
      icon: {
        src: '/icons/timer.png',
        alt: 'support card icon',
      },
      heading: 'Create Boilerplate Clauss',
      description:
        ' Genrate standar adaptable clauses for agreement, saving time drafting contracts',
    },
    {
      icon: {
        src: '/icons/timer.png',
        alt: 'support card icon',
      },
      heading: 'Create Boilerplate Clauss',
      description:
        ' Genrate standar adaptable clauses for agreement, saving time drafting contracts',
    },
    {
      icon: {
        src: '/icons/timer.png',
        alt: 'support card icon',
      },
      heading: 'Create Boilerplate Clauss',
      description:
        ' Genrate standar adaptable clauses for agreement, saving time drafting contracts',
    },
    {
      icon: {
        src: '/icons/timer.png',
        alt: 'support card icon',
      },
      heading: 'Create Boilerplate Clauss',
      description:
        ' Genrate standar adaptable clauses for agreement, saving time drafting contracts',
    },
    {
      icon: {
        src: '/icons/timer.png',
        alt: 'support card icon',
      },
      heading: 'Create Boilerplate Clauss',
      description:
        ' Genrate standar adaptable clauses for agreement, saving time drafting contracts',
    },
    {
      icon: {
        src: '/icons/timer.png',
        alt: 'support card icon',
      },
      heading: 'Create Boilerplate Clauss',
      description:
        ' Genrate standar adaptable clauses for agreement, saving time drafting contracts',
    },
    {
      icon: {
        src: '/icons/timer.png',
        alt: 'support card icon',
      },
      heading: 'Create Boilerplate Clauss',
      description:
        ' Genrate standar adaptable clauses for agreement, saving time drafting contracts',
    },
    {
      icon: {
        src: '/icons/timer.png',
        alt: 'support card icon',
      },
      heading: 'Create Boilerplate Clauss',
      description:
        ' Genrate standar adaptable clauses for agreement, saving time drafting contracts',
    },
  ],

  featureData: {
    icon: {
      src: '/icons/featureIcon.png',
      alt: 'feature icon',
    },
    heading: 'feature of Digi Lawyer India',
    para: 'Explore innovative features for faster , affordable and easier legal assistance. From quick advice to understanding your rights, legal laws, and documents -we have got you covered.',
    supportCardData: [
      {
        icon: {
          src: '/icons/timer.png',
          alt: 'support card icon',
        },
        heading: 'Resolve queries within seconds',
      },
      {
        icon: {
          src: '/icons/timer.png',
          alt: 'support card icon',
        },
        heading: 'Available in multiple languages multilingual',
      },
      {
        icon: {
          src: '/icons/timer.png',
          alt: 'support card icon',
        },
        heading: 'legal documents for startup',
      },
      {
        icon: {
          src: '/icons/timer.png',
          alt: 'support card icon',
        },
        heading: 'Best tailored value, backed by past judgement and IPC',
      },
      {
        icon: {
          src: '/icons/timer.png',
          alt: 'support card icon',
        },
        heading: 'On ground assistance',
      },
      {
        icon: {
          src: '/icons/timer.png',
          alt: 'support card icon',
        },
        heading: 'Your personal legal advisor',
      },
    ],
  },
}

export function PocketLawyerPage() {
  const styles = getStyles(defaultStyles)

  return (
    <Box sx={styles('wrapper').sx}>
      <Box sx={styles('imageContaier').sx}>
        <Image
          customStyles={{ wrapper: styles('image').sx }}
          {...chatScreenHomepage}
          fill
        />
      </Box>
      <Box>a common component </Box>

      {/* Use case component */}
      {/* <UseCaseComponent
        icon={useCaseIcon}
        heading={pageData.useCase.heading}
        para={pageData.useCase.para}
      /> */}

      {/* support cards */}
      <Box sx={styles('supportCard').sx}>
        <Grid container spacing={2}>
          {pageData.supportCardData.map((data) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={data.heading}
              spacing={2}
              sx={{ gap: '15px' }}
            >
              <SupportCard {...data} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Feature cards   */}
      <Box sx={styles('feature').sx}>
        {/* <UseCaseComponent
          icon={pageData.featureData.icon}
          heading={pageData.featureData.heading}
          para={pageData.featureData.para}
          customStyles={{ wrapper: styles('useCaseWrapper').sx }}
        /> */}

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '15px',
            padding: 2,
            margin: { xs: '0px 0px ', md: '0px 10%' },
          }}
        >
          {pageData.featureData.supportCardData.map((data) => (
            <Box
              key={data.heading}
              sx={{
                width: 'auto',
                height: 'auto',
                boxSizing: 'border-box',
                gap: 1,
              }}
            >
              <SupportCard
                {...data}
                customStyles={{
                  wrapper: styles('featureSupportCard').sx,
                  heading: styles('cardHeading').sx,
                  description: styles('cardDescription').sx,
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
