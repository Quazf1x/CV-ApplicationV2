import { v4 as uuidv4 } from 'uuid';

const data = {
  personalInfo: {
    fullName: 'John Smith',
    email: 'youremail@mail.com',
    adress: '956, 31st Street',
    country: 'United States',
    website: 'yourwebsite.com',
    phoneNumber: '(123) 456 789'
  },

  miscInfo: {
    skills: 'play, write code, etc',
    objective: 'to be a star!'
  },

    educations: [{
      name: 'Computer Science',
      university: 'Columbia University',
      startDate: '01.01.2000',
      endDate: '01.01.2004',
      contry: 'United States',
      id: uuidv4(),
    }],

    jobExperiences: [{
      name: 'UI/UX Designer',
      companyName: 'ItTech inc',
      startDate: '01.01.2006',
      endDate: '03.05.2009',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      id: uuidv4(),
    }]
  }

export { data };