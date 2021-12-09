import { createSlice, current } from '@reduxjs/toolkit';

import getTotalFlyDuration from '../utilites/getTotlaFlyDuration';
// eslint-disable-next-line no-unused-vars
import getMeanValueOfArray from '../utilites/getMeanValueOfArray';

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
      {
        price: 75047,
        carrier: 'S7',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2021-12-16T08:36:00.000Z',
            stops: ['SIN', 'HKG'],
            duration: 964,
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2022-01-05T13:00:00.000Z',
            stops: [],
            duration: 713,
          },
        ],
      },
      {
        price: 93757,
        carrier: 'MH',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2021-12-15T21:06:00.000Z',
            stops: ['IST', 'DXB'],
            duration: 1116,
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2022-01-05T15:24:00.000Z',
            stops: ['KUL'],
            duration: 688,
          },
        ],
      },
      {
        price: 73315,
        carrier: 'TG',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2021-12-16T16:29:00.000Z',
            stops: ['IST', 'HKG', 'AUH'],
            duration: 1444,
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2022-01-05T06:03:00.000Z',
            stops: [],
            duration: 1378,
          },
        ],
      },
      {
        price: 47987,
        carrier: 'S7',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2021-12-16T17:23:00.000Z',
            stops: ['AUH', 'SIN', 'SHA'],
            duration: 658,
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2022-01-05T09:11:00.000Z',
            stops: ['DXB'],
            duration: 1827,
          },
        ],
      },
      {
        price: 94977,
        carrier: 'MH',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2021-12-15T22:05:00.000Z',
            stops: [],
            duration: 1333,
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2022-01-05T02:12:00.000Z',
            stops: ['DXB'],
            duration: 1308,
          },
        ],
      },
      {
        price: 18767,
        carrier: 'EK',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2021-12-16T15:00:00.000Z',
            stops: ['SHA', 'DXB', 'SIN'],
            duration: 1244,
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2022-01-05T07:25:00.000Z',
            stops: ['BKK'],
            duration: 960,
          },
        ],
      },
      {
        price: 55797,
        carrier: 'SU',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2021-12-16T07:59:00.000Z',
            stops: ['IST', 'AUH', 'BKK'],
            duration: 1506,
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2022-01-05T09:37:00.000Z',
            stops: [],
            duration: 1583,
          },
        ],
      },
      {
        price: 97324,
        carrier: 'S7',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2021-12-16T07:39:00.000Z',
            stops: ['SIN', 'DXB'],
            duration: 824,
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2022-01-05T09:16:00.000Z',
            stops: ['HKG', 'SIN', 'IST'],
            duration: 795,
          },
        ],
      },
      {
        price: 87311,
        carrier: 'EY',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2021-12-16T14:07:00.000Z',
            stops: [],
            duration: 687,
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2022-01-05T04:30:00.000Z',
            stops: ['BKK', 'IST', 'SIN'],
            duration: 1325,
          },
        ],
      },
      {
        price: 92340,
        carrier: 'S7',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2021-12-16T10:32:00.000Z',
            stops: ['KUL', 'AUH'],
            duration: 636,
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2022-01-05T03:36:00.000Z',
            stops: ['SHA', 'DXB', 'IST'],
            duration: 1767,
          },
        ],
      },
      {
        price: 37764,
        carrier: 'S7',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2021-12-16T03:02:00.000Z',
            stops: ['SIN'],
            duration: 1497,
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2022-01-05T11:06:00.000Z',
            stops: ['IST', 'KUL', 'BKK'],
            duration: 890,
          },
        ],
      },
      {
        price: 93805,
        carrier: 'EY',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2021-12-16T11:11:00.000Z',
            stops: [],
            duration: 873,
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2022-01-05T15:30:00.000Z',
            stops: ['KUL', 'AUH', 'IST'],
            duration: 1115,
          },
        ],
      },
      {
        price: 70172,
        carrier: 'TG',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2021-12-16T07:14:00.000Z',
            stops: [],
            duration: 1185,
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2022-01-04T22:58:00.000Z',
            stops: [],
            duration: 731,
          },
        ],
      },
      {
        price: 23022,
        carrier: 'EK',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2021-12-16T17:40:00.000Z',
            stops: ['BKK'],
            duration: 1249,
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2022-01-05T12:34:00.000Z',
            stops: ['SHA'],
            duration: 1560,
          },
        ],
      },
      {
        price: 79122,
        carrier: 'EK',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2021-12-16T16:44:00.000Z',
            stops: ['SHA', 'KUL', 'SIN'],
            duration: 1636,
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2022-01-05T11:58:00.000Z',
            stops: ['HKG', 'KUL', 'BKK'],
            duration: 1252,
          },
        ],
      },
    ],
    numShowTicket: 5,
  },
  reducers: {
    // eslint-disable-next-line no-unused-vars
    addTicket(state) {
      // eslint-disable-next-line no-console
      console.log(state);
    },
    // eslint-disable-next-line no-unused-vars
    showMoreTicket(state) {
      // eslint-disable-next-line no-param-reassign
      state.numShowTicket += 5;
    },
    // todo переименовать на ...Price
    sortTicketByPrise(state) {
      const filterTickets = current(state.tickets).slice();
      // eslint-disable-next-line no-param-reassign
      state.tickets = filterTickets.sort((previous, next) => (previous.price > next.price ? 1 : -1));
      // console.log(filterTickets.sort((previous, next) => (previous.price > next.price ? 1 : -1)));
      // eslint-disable-next-line no-param-reassign
      // console.log(filterTickets.sort((previous, next) => (previous.price > next.price ? 1 : -1)));
    },

    sortTicketByDuration(state) {
      const filterTickets = current(state.tickets).slice();
      // eslint-disable-next-line no-param-reassign,array-callback-return,arrow-body-style
      state.tickets = filterTickets.sort((previous, next) =>
        getTotalFlyDuration(previous) > getTotalFlyDuration(next) ? 1 : -1
      );
    },
    sortTicketOptimal(state) {
      const filterTickets = current(state.tickets).slice();
      // eslint-disable-next-line no-param-reassign
      state.tickets = filterTickets.sort((previous, next) =>
        getTotalFlyDuration(previous) + previous.price > getTotalFlyDuration(next) + next.price ? 1 : -1
      );
    },
  },
});

export const { showMoreTicket, sortTicketByPrise, sortTicketByDuration, sortTicketOptimal } = ticketsSlice.actions;

export default ticketsSlice.reducer;
