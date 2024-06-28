import React from 'react'
import { getAboutUsPageData } from '@query/about-us'
import {
  CoreValuesSection,
  GoalSection,
  IntroHeader,
  WhoWeAreSection,
  WhyWeAreSection,
} from '@components/feature/AboutUs'

async function AboutUsPage() {
  const pagedData = await getAboutUsPageData()

  const { introHeader, whoWeAre, whyWeAre, coreValues, goal } = pagedData
  // console.log(whoWeAre)
  return (
    <>
      {/* <Typography>hello world</Typography> */}
      <IntroHeader {...introHeader} />
      <WhoWeAreSection {...whoWeAre} />
      <WhyWeAreSection {...whyWeAre} />
      <GoalSection {...goal} />
      <CoreValuesSection {...coreValues} />
    </>
  )
}

export default AboutUsPage
