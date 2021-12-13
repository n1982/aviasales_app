import getNumOfStop from './getNumOfStop';

const filterItems = (tickets) => {
  const newTickets = tickets.slice();
  return newTickets.filter((item) => getNumOfStop(item) < 2);
};
export default filterItems;
