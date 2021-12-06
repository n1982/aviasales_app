const formatHourMinute = (hour, min) => `${hour < 10 ? `0${hour}` : hour}:${min < 10 ? `0${min}` : min}`;

const getTravelTime = (duration) => {
  const hours = Math.trunc(duration / 60);
  const min = duration % 60;
  return formatHourMinute(hours, min);
};

const getDepartureTime = (departureDate) => {
  const date = new Date(departureDate);
  const hours = date.getHours();
  const min = date.getMinutes();
  return formatHourMinute(hours, min);
};

const getArrivalTime = (departureDate, duration) => {
  const date = new Date(departureDate);
  let hours = date.getHours() + Math.trunc(duration / 60);
  const min = (date.getMinutes() + duration) % 60;
  if (hours > 24) hours -= 24;

  return formatHourMinute(hours, min);
};
// eslint-disable-next-line import/prefer-default-export
export { getTravelTime };
export { getDepartureTime };
export { getArrivalTime };
