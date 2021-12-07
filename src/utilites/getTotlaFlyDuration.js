const getTotalFlyDuration = (ticket) =>
  [...ticket.segments]
    .map((element) => element.duration)
    .reduce((previousValue, currentValue) => previousValue + currentValue);

export default getTotalFlyDuration;
