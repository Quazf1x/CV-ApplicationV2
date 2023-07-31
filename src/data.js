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

  sections: {
    educations: [{
      name: 'Computer Science',
      university: 'Columbia University',
      startDate: 'Sep 1989',
      endDate: 'Sep 1992',
      contry: 'United States',
      id: uuidv4(),
    }]
  }
}

export { data };