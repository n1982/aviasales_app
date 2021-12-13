import getNumOfStop from './getNumOfStop';

const filterTucketByTransfer = (ticket, showAllTicket, valueFilterTransfer) => {
  if (!showAllTicket) {
    return valueFilterTransfer.includes(getNumOfStop(ticket));
  }
  return true;
};
export default filterTucketByTransfer;
