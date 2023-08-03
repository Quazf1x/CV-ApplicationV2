import { v4 as uuidv4 } from 'uuid';

//data that is being used for rendering inputs

// !!!!!!!!!!!!!!!!!!! IMPORTANT !!!!!!!!!!!!!!!!!!!
// dataKey property MUST match the key in state that is used for the input of that property,
// or else state would work incorrectly

const inputData = {
  personalInfo: [
    {
      id: 'personal-name',
      dataKey: 'fullName',
      label: 'Full Name',
      placeholder: 'Your first and last name',
      key: uuidv4()
    },

    {
      id: 'personal-email',
      dataKey: 'email',
      label: 'Email',
      placeholder: 'yourmail@mail.com',
      maxLength: 55,
      key: uuidv4()
    },

    {
      id: 'personal-adress',
      dataKey: 'adress',
      label: 'Adress',
      placeholder: '956, 31st Street',
      key: uuidv4()
    },

    {
      id: 'personal-country',
      dataKey: 'country',
      label: 'Country',
      placeholder: 'United States',
      key: uuidv4()
    },

    {
      id: 'personal-website',
      dataKey: 'website',
      label: 'Website',
      placeholder: 'yourwebsite.com',
      key: uuidv4()
    },

    {
      id: 'personal-phoneNumber',
      dataKey: 'phoneNumber',
      label: 'Phone Number',
      placeholder: '(123) 848 888',
      key: uuidv4()
    }
  ],

  education: [
    {
      id: 'education-name',
      dataKey: 'name',
      label: 'Name',
      placeholder: 'Software engineer',
      key: uuidv4()
    },

    {
      id: 'university-name',
      dataKey: 'university',
      label: 'University',
      placeholder: 'University of Washington',
      key: uuidv4()
    },

    [
      {
        id: 'university-start',
        dataKey: 'startDate',
        label: 'Start Date',
        placeholder: '01.01.2000',
        maxLength: 10,
        key: uuidv4()
      },

      {
        id: 'university-end',
        dataKey: 'endDate',
        label: 'End Date',
        placeholder: '01.01.2004',
        maxLength: 10,
        key: uuidv4()
      },
    ],

    {
      id: 'university-contry',
      dataKey: 'contry',
      label: 'Contry',
      placeholder: 'United States',
      key: uuidv4()
    }
  ],

  jobExperience: [
    {
      id: 'job-title',
      dataKey: 'name',
      label: 'Job title',
      placeholder: 'UX/UI Designer',
      key: uuidv4()
    },

    {
      id: 'company-name',
      dataKey: 'companyName',
      label: 'Company Name',
      placeholder: 'ItTech inc',
      key: uuidv4()
    },

    [
      {
        id: 'company-start',
        dataKey: 'startDate',
        label: 'Start Date',
        placeholder: '01.01.2006',
        maxLength: 10,
        key: uuidv4()
      },

      {
        id: 'company-end',
        dataKey: 'endDate',
        label: 'End Date',
        placeholder: '06.06.2009',
        maxLength: 10,
        key: uuidv4()
      }
    ],

    {
      id: 'company-description',
      dataKey: 'description',
      label: 'Description',
      placeholder: 'ItTech inc',
      maxLength: 100,
      key: uuidv4()
    }
  ]
}



export { inputData};