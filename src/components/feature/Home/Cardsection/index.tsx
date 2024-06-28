import React from 'react'
import { Box } from '@mui/material'
import { InfoCard } from '@components/common'
import { SectionHeaderProps } from '@components/common/SectionHeader'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

export type CardSectionProps = {
  cardsection: SectionHeaderProps
}

export function Cardsection() {
  const styles = getStyles(defaultStyles)

  return (
    <Box {...styles('container')}>
      <Box {...styles('heading')} />
      <Box {...styles('cardscontainer')}>
        <Box {...styles('cards')}>
          <InfoCard
            image={{
              src: '/assets/justiceforall.png',
              alt: 'Justice for All',
            }}
            title="Justice for All"
            description="Our AI Legal Pro Bono Lawyer ensures everyone has fair access to legal help, including legal aid, highlighting our commitment to fairness and equality."
            // customStyles={{ wrapper: styles('wrapper').sx }}
          />
          <InfoCard
            image={{
              src: '/assets/justiceforall.png',
              alt: 'Justice for All',
            }} // customStyles={{ wrapper: styles('wrapper').sx }}
            title="Personalisation"
            description="Not every customer is the same and faces identical legal challenges. That's why we have designed our AI lawyerGPT to understand your unique case—whether you're a citizen, student, lawyer, or advocate—and offer tailor-made recommendations suited to your specific legal situation"
          />
          <InfoCard
            image={{
              src: '/assets/justiceforall.png',
              alt: 'Justice for All',
            }} // customStyles={{ wrapper: styles('wrapper').sx }}
            title="Internet Powered"
            description="No more headaches from endlessly accessing legal information from multiple websites. Our internet-powered functionality can fetch up-to-date information from the web, including new amendments, recent judgments, and legal news, helping you make informed legal decisions. "
          />
          <InfoCard
            image={{
              src: '/assets/justiceforall.png',
              alt: 'Justice for All',
            }} // customStyles={{ wrapper: styles('wrapper').sx }}
            title="Private & Annoymous"
            description="We ensure that all the interactions you have with an AI legal chatbot are private and anonymous which is end-to-end Encrypted. Keeping in mind your security, we provide you with a temporary chat feature that guarantees that all your conversations are safe and encrypted. "
          />
          <InfoCard
            image={{
              src: '/assets/justiceforall.png',
              alt: 'Justice for All',
            }} // customStyles={{ wrapper: styles('wrapper').sx }}
            title="Conversation Intelligence"
            description="An AI legal chatbot that understands, processes, and responds to user interactions effectively, offering human-like legal advice and simplifying your legal research. "
          />
          <InfoCard
            image={{
              src: '/assets/justiceforall.png',
              alt: 'Justice for All',
            }}
            title="Multi-platform"
            description="Our AI lawyer ChatGPT assistant keeps your legal conversations going on across multiple devices, including phone and web, and supports various web browsers (Chrome, Edge, Safari, Mozilla), and works on Android, and iOS platforms. With just an internet connection,it handle your legal queries on the fly"
          />
        </Box>
      </Box>
    </Box>
  )
}
