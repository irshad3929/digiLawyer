import { ContactUsData } from './contact-us.model'

const data: ContactUsData = {
  contactUsFormSection: {
    button: {
      label: 'Submit',
    },
    textFieldProps: {
      placeholder: 'Enter your email',
    },
    textAreaProps: {
      placeholder: 'Enter your message here',
    },
  },
}

export const getContactUsPageData = async (): Promise<ContactUsData> => {
  return new Promise<ContactUsData>((resolve) => {
    resolve(data)
  })
}
