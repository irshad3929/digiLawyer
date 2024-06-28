import React from 'react'
import { Box, Typography } from '@mui/material'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

// const images = [
//   {
//     alt: 'Rem Sharp',
//     src: 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg',
//     id: '20',
//   },
//   {
//     alt: 'Travis Howard',
//     id: ' 30',
//     src: 'https://img.freepik.com/free-photo/cartoon-character-with-yellow-jacket-sunglasses_71767-101.jpg?size=626&ext=jpg',
//   },
//   {
//     alt: 'Trevor Henderson',
//     id: '40',
//     src: 'https://img.freepik.com/premium-photo/memoji-happy-man-white-background-emoji_826801-6839.jpg?size=626&ext=jpg',
//   },
//   {
//     alt: 'Someone',
//     id: '50',
//     src: 'https://img.freepik.com/free-photo/fashion-boy-with-yellow-jacket-blue-pants_71767-96.jpg?size=626&ext=jpg',
//   },
//   {
//     alt: 'Someone',
//     id: '60',
//     src: 'https://img.freepik.com/free-photo/fashion-boy-with-yellow-jacket-blue-pants_71767-96.jpg?size=626&ext=jpg',
//   },
//   {
//     alt: 'Someone',
//     id: '70',
//     src: 'https://img.freepik.com/free-photo/fashion-boy-with-yellow-jacket-blue-pants_71767-96.jpg?size=626&ext=jpg',
//   },
//   {
//     alt: 'Someone',
//     id: '80',
//     src: 'https://img.freepik.com/free-photo/fashion-boy-with-yellow-jacket-blue-pants_71767-96.jpg?size=626&ext=jpg',
//   },
// ]

export function Swipersection() {
  const styles = getStyles(defaultStyles)
  return (
    <Box {...styles('container')}>
      <Box {...styles('wrapper')}>
        <Typography>
          Trusted by 1000 + teams to empower 5,00,000+ people
        </Typography>
      </Box>
      {/* <Swiper
        images={images}
        direction="left"
        speed={50}
        pauseOnHover={false}
      /> */}
    </Box>
  )
}
