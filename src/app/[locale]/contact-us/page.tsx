import React from 'react'
import { getContactUsPageData } from '@query/contact-us'
import { ContactUsFormSection } from '@components/feature/ContactUs'

async function ContactUsPage() {
  const pagedData = await getContactUsPageData()
  const { contactUsFormSection } = pagedData
  // console.log(contactUsFormSection)

  return <ContactUsFormSection {...contactUsFormSection} />
}

export default ContactUsPage
