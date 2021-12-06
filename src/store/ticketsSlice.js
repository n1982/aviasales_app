import { createSlice } from '@reduxjs/toolkit';

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: {
    tickets: [
      {
        price: 65690,
        carrier: 'MH',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2021-12-14T16:49:00.000Z',
            stops: [],
            duration: 651,
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2022-01-03T08:20:00.000Z',
            stops: ['SIN'],
            duration: 1438,
          },
        ],
      },
      {
        price: 99150,
        carrier: 'MH',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2021-12-14T11:35:00.000Z',
            stops: ['SHA'],
            duration: 1687,
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2022-01-03T08:29:00.000Z',
            stops: [],
            duration: 1205,
          },
        ],
      },
      {
        price: 42555,
        carrier: 'MH',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2021-12-14T04:54:00.000Z',
            stops: [],
            duration: 1349,
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2022-01-03T08:12:00.000Z',
            stops: ['KUL'],
            duration: 1748,
          },
        ],
      },
      {
        price: 73769,
        carrier: 'SU',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2021-12-14T16:17:00.000Z',
            stops: ['BKK', 'HKG'],
            duration: 876,
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2022-01-03T17:36:00.000Z',
            stops: ['BKK', 'SIN'],
            duration: 1148,
          },
        ],
      },
      {
        price: 77362,
        carrier: 'TG',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2021-12-14T10:36:00.000Z',
            stops: ['AUH', 'IST'],
            duration: 1925,
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2022-01-02T23:03:00.000Z',
            stops: ['HKG', 'SIN', 'BKK'],
            duration: 1057,
          },
        ],
      },
      {
        price: 59544,
        carrier: 'EY',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2021-12-14T03:57:00.000Z',
            stops: ['HKG', 'AUH', 'DXB'],
            duration: 1315,
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2022-01-03T02:50:00.000Z',
            stops: ['AUH', 'KUL'],
            duration: 1336,
          },
        ],
      },
    ],
  },
  reducers: {
    addTicket(store, action) {
      console.log(store);
      console.log(action.payload);
    },
  },
});

export const { addTicket } = ticketsSlice.actions;

export default ticketsSlice.reducer;
