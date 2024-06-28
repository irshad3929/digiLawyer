// import React from 'react'
// import { Box } from '@mui/material'
// import { getStyles } from '@utils/styles'
// import defaultStyles from './styles'
// import Marquee from 'react-fast-marquee'
// import { Image } from '../Image'

// type ImageData = {
//   src: string
//   alt: string
//   id: number
// }

// type MarqueeProps = {
//   images: ImageData[]
//   direction?: 'left' | 'right' | 'up' | 'down'
//   speed?: number
//   pauseOnHover?: boolean
//   gradientColor?: string
//   gradientWidth?: number | string
// }

// export function Swiper({
//   images,
//   direction = 'left',
//   speed = 20,
//   pauseOnHover = true,
//   gradientColor = '',
//   gradientWidth = 0,
// }: MarqueeProps) {
//   const styles = getStyles(defaultStyles)

//   const imageStyle: React.CSSProperties = {
//     height: '140px',
//     objectFit: 'cover',
//   }

//   return (
//     <Box {...styles('container')}>
//       <Box {...styles('wrapper')}>
//         <Marquee
//           direction={direction}
//           speed={speed}
//           gradientColor={gradientColor}
//           gradientWidth={gradientWidth}
//           pauseOnHover={pauseOnHover}
//         >
//           <div {...styles('images')}>
//             {images.map((image) => (
//               <Image
//                 key={image.id}
//                 src={image.src}
//                 alt={image.alt}
//                 style={imageStyle}
//               />
//             // ))
//           </div>
//         </Marquee>
//       </Box>
//     </Box>
//   )
// }
