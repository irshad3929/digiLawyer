import React from 'react'
// import CallIcon from '@mui/icons-material/Call'
// import { TextArea } from '@components/common/TextArea'
// import { TextField } from '@components/common/TextField'
import { Herosection } from '@components/feature'
import {
  // BusinessSection,
  Cardsection,
  Offeringsection,
  PricingCardSection,
  ReviewSection,
  VideoSection,
} from '@components/feature/Home'

const words = ['Lawyers', 'Judges', 'Students']

const images = [
  {
    alt: 'Rem Sharp',
    src: 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg',
    id: '20',
  },
  {
    alt: 'Travis Howard',
    src: 'https://img.freepik.com/free-photo/cartoon-character-with-yellow-jacket-sunglasses_71767-101.jpg?size=626&ext=jpg',
    id: '30',
  },
  {
    alt: 'Trevor Henderson',
    src: 'https://img.freepik.com/premium-photo/memoji-happy-man-white-background-emoji_826801-6839.jpg?size=626&ext=jpg',
    id: '40',
  },
  {
    alt: 'Someone',
    src: 'https://img.freepik.com/free-photo/fashion-boy-with-yellow-jacket-blue-pants_71767-96.jpg?size=626&ext=jpg',
    id: '50',
  },
  {
    alt: 'Someone',
    src: 'https://img.freepik.com/free-photo/fashion-boy-with-yellow-jacket-blue-pants_71767-96.jpg?size=626&ext=jpg',
    id: '60',
  },
]

function Home() {
  return (
    <div>
      {/* <TextField startIcon={<CallIcon />} placeholder="Enter your full name" /> */}
      {/* <TextArea placeholder="Enter your message...." /> */}
      <Herosection
        label="Updated with BNS-Bhartaiya Nyaya Sanhita"
        href="www.google.com"
        heading="India's Legal"
        subheading="Experience the Future of Law with our AI-Powered solutions,seamlessly assisting citizens,judges
        ,advocates, and government agencies for swift execution"
        words={words}
        avatars={images}
      />
      <VideoSection />
      <Offeringsection />
      <Cardsection />
      {/* <BusinessSection /> */}
      <PricingCardSection />
      <ReviewSection />
    </div>
  )
}

export default Home
