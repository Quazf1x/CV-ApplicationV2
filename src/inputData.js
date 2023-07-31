import { v4 as uuidv4 } from 'uuid';

const inputData = {
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
        key: uuidv4()
      },

      {
        id: 'university-end',
        dataKey: 'endDate',
        label: 'End Date',
        placeholder: '01.01.2004',
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
  ]
}

export { inputData};