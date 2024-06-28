// import React from 'react'
// import { Box, Typography,Divider } from '@mui/material'
// import { getStyles } from '@utils/styles'
// import defaultStyles from './styles'
// import { Button, UseCaseComponent } from '@components/common'
// import { Image as ImageType } from '@models'
// import { Image } from '@components/common'
// import SchoolIcon from '@mui/icons-material/School';
// import AutorenewIcon from '@mui/icons-material/Autorenew';
// import GroupIcon from '@mui/icons-material/Group';
// import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
// import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
// import ViewInArSharpIcon from '@mui/icons-material/ViewInArSharp';
// import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';

// const imageCard: ImageType = {
//   src: '/images/imageCard.png',
//   alt: 'image card png',
// }

// export function BusinessSection() {
//   const styles = getStyles(defaultStyles)
//   return (
//     <Box {...styles('wrapper')}>
//       <Box {...styles('container')}>
//         <UseCaseComponent
//           customStyles={{
//             wrapper: styles('usecasecomponent').sx,
//             textContainer: styles('textcontainer').sx,
//             heading:styles('heading').sx,
//             button:styles('button').sx,
//             para:styles('para').sx
//           }}
//         />
//         <Box {...styles('buttons')}>
//           <Button
//             startIcon={<GroupIcon/>}
//             customStyles={{ normalButton: styles('normalButton').sx }}
//             label="Normal Consumers"
//           />
//           <Button
//             startIcon={<PhoneIphoneIcon/>}
//             customStyles={{ normalButton: styles('normalButton').sx }}
//             label="Buyers from Ecom Services"
//           />
//           <Button
//             customStyles={{ normalButton: styles('normalButton').sx }}
//             label="Buyers using fintech Applications"
//           />
//           <Button
//             customStyles={{ normalButton: styles('normalButton').sx }}
//             label="Any Family Dispute"
//           />
//           <Button
//             startIcon={<SchoolIcon/>}
//             customStyles={{ normalButton: styles('normalButton').sx }}
//             label="Lawyers"
//           />
//           <Button
//             startIcon={<AutorenewIcon/>}
//             customStyles={{ normalButton: styles('normalButton').sx }}
//             label="Corporate employers(Tax Payers)"
//           />
//           <Button
//             customStyles={{ normalButton: styles('normalButton').sx }}
//             label="Equity Investors"
//           />
//         </Box>
//         <Box {...styles('images')}>
//         <Image
//           {...imageCard}
//           fill
//           customStyles={{ wrapper: styles('imagewrapper').sx }}
//         />
//          <Image
//           {...imageCard}
//           fill
//           customStyles={{ wrapper: styles('imagewrapper').sx }}
//         />
//          <Image
//           {...imageCard}
//           fill
//           customStyles={{ wrapper: styles('imagewrapper').sx }}
//         />
//         </Box>
//        <Divider {...styles('divider')} />
//        <Typography {...styles('heading2')}>For B2B(coming soon)</Typography>
//        <Box {...styles('buttons')}>
//           <Button
//             startIcon={<GroupIcon/>}
//             customStyles={{ normalButton: styles('normalButton').sx }}
//             label="Tourism and Travels"
//           />
//           <Button
//             startIcon={<PhoneIphoneIcon/>}
//             customStyles={{ normalButton: styles('normalButton').sx }}
//             label="Hospitality"
//           />
//           <Button
//             customStyles={{ normalButton: styles('normalButton').sx }}
//             label="Ecommerce Industries"
//           />
//           <Button
//             startIcon={<ViewInArSharpIcon/>}
//             customStyles={{ normalButton: styles('normalButton').sx }}
//             label="Shipment and Logistics"
//           />
//           <Button
//             startIcon={<SchoolIcon/>}
//             customStyles={{ normalButton: styles('normalButton').sx }}
//             label="Exchange and Training Systems"
//           />
//           <Button
//             startIcon={<AutorenewIcon/>}
//             customStyles={{ normalButton: styles('normalButton').sx }}
//             label="HNI Split Management"
//           />
//           <Button
//             customStyles={{ normalButton: styles('normalButton').sx }}
//             label="Insurance Vertical"
//           />
//           <Button
//             customStyles={{ normalButton: styles('normalButton').sx }}
//             label="Quick Commerce Business"
//           />
//           <Button
//             customStyles={{ normalButton: styles('normalButton').sx }}
//             label="loan and Private Lenders"
//           />
//           <Button
//             startIcon={<AccountBalanceIcon/>}
//             customStyles={{ normalButton: styles('normalButton').sx }}
//             label="Banking Industry"
//           />
//           <Button
//             customStyles={{ normalButton: styles('normalButton').sx }}
//             label="M&A Industries"
//           />
//           <Button
//             startIcon={<FavoriteBorderSharpIcon/>}
//             customStyles={{ normalButton: styles('normalButton').sx }}
//             label="HealthCare Industries"
//           />
//           <Button
//             customStyles={{ normalButton: styles('normalButton').sx }}
//             label="Media and Entertainment Industry"
//           />
//         </Box>
//         <Box {...styles('images')}>
//         <Image
//           {...imageCard}
//           fill
//           customStyles={{ wrapper: styles('imagewrapper').sx }}
//         />
//            <Image
//           {...imageCard}
//           fill
//           customStyles={{ wrapper: styles('imagewrapper').sx }}
//         />
//          <Image
//           {...imageCard}
//           fill
//           customStyles={{ wrapper: styles('imagewrapper').sx }}
//         />
//         </Box>
//       </Box>
//     </Box>
//   )
// }
