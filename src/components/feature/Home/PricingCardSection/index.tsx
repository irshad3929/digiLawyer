import React from 'react'
import ArrowForward from '@mui/icons-material/ArrowForward'
import { Box } from '@mui/material'
import { Button, SectionHeader } from '@components/common'
import { ImageLabelBoxProps } from '@components/common/ImageLabelBox'
import { PricingPlanCard } from '@components/common/PricingPlanCard'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

const imageCard: ImageLabelBoxProps = {
  icon: { src: '/images/stars 1.png', alt: 'image card png' },
  label: 'Pricing',
}

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
    ],
  },
}

export function PricingCardSection() {
  const styles = getStyles(defaultStyles)
  return (
    <Box {...styles('wrapper')}>
      <Box {...styles('container')}>
        <SectionHeader
          label="Pricing"
          sectionHeading={{ ...imageCard }}
          heading="Transparent Pricing that works for all your legal needs"
          description="Whether you are an Indian Citizen, student, law firm or legal fraternity, our plans are tailored for everyone. Each plan has different usage limits and unique features."
        />

        <Box {...styles('pricingcard')}>
          <PricingPlanCard {...cardData} />
          <PricingPlanCard {...cardData2} />
          <PricingPlanCard {...cardData} />
        </Box>
        <Box {...styles('btn')}>
          <Button inverted label="Compare Plan" endIcon={<ArrowForward />} />
        </Box>
      </Box>
    </Box>
  )
}
