import React from 'react'
import ArrowForward from '@mui/icons-material/ArrowForward'
import { Box } from '@mui/material'
import { SectionHeader } from '@components/common'
import { ImageLabelBoxProps } from '@components/common/ImageLabelBox'
import { PricingPlanCard } from '@components/common/PricingPlanCard'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

const imageCard: ImageLabelBoxProps = {
  icon: { src: '/images/stars 1.png', alt: 'image card png' },
  label: 'Testimonials',
}

export function ReviewSection() {
  const styles = getStyles(defaultStyles)

  // Sample data
  const cardData = {
    cardTitle: 'Free',
    cardImage: { src: '/path/to/image.jpg', alt: 'Free Plan Image' },
    description: {
      title: 'Feature',
      items: [
        {
          description: 'Access to DigiLawyer',
          image: { src: '/path/to/feature1.jpg', alt: 'Feature 1 Image' },
        },
        {
          description: 'Access to BNS',
          image: { src: '/path/to/feature2.jpg', alt: 'Feature 2 Image' },
        },
        {
          description: 'Search Cases',
          image: { src: '/path/to/feature2.jpg', alt: 'Feature 2 Image' },
        },

        // Add more features as needed
      ],
    },
  }

  const cardData2 = {
    cardTitle: 'Premium',
    cardImage: { src: '/path/to/image.jpg', alt: 'Free Plan Image' },
    description: {
      title: 'Feature',
      items: [
        {
          description: 'Everything in Basic Plan +',
          image: { src: '/path/to/feature1.jpg', alt: 'Feature 1 Image' },
        },
        {
          description: 'Rights Clarifier',
          image: { src: '/path/to/feature2.jpg', alt: 'Feature 2 Image' },
        },
        {
          description: 'Diligence Assistant',
          image: { src: '/path/to/feature2.jpg', alt: 'Feature 2 Image' },
        },
        // Add more features as needed
      ],
    },
  }

  return (
    <Box {...styles('wrapper')}>
      <Box {...styles('container')}>
        <SectionHeader
          label="Testimonials"
          sectionHeading={{ ...imageCard }}
          customStyles={{
            heading: styles('heading').sx,
          }}
          heading="Over 10k + customers love our legal AI assistant"
          description="People love our legal assitance because we create amazing journeys for consumers, taxpayers,business or someone
          who is seeking legal advice"
          button={{ label: 'View More', endIcon: <ArrowForward /> }}
        />
        <Box {...styles('pricingcard')}>
          <PricingPlanCard {...cardData} />
          <PricingPlanCard {...cardData2} />
          <PricingPlanCard {...cardData} />
        </Box>
      </Box>
    </Box>
  )
}
