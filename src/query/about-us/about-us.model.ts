import {
  CoreValuesProp,
  GoalSectionProp,
  IntroHeaderProps,
  WhoWeAreSectionProp,
  WhyWeAreSectionProp,
} from '@components/feature/AboutUs'

export type AboutUsData = {
  introHeader: IntroHeaderProps
  whoWeAre: WhoWeAreSectionProp
  whyWeAre: WhyWeAreSectionProp
  goal: GoalSectionProp
  coreValues: CoreValuesProp
}
