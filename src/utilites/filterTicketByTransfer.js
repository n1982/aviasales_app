import getNumOfStop from './getNumOfStop';

const filterTicketByTransfer = (ticket, showAllTicket, valueFilterTransfer) => {
  if (!showAllTicket) {
    return valueFilterTransfer.includes(getNumOfStop(ticket));
  }
  return true;
};
export default filterTicketByTransfer;
