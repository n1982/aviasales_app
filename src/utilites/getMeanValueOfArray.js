import getTotalFlyDuration from './getTotlaFlyDuration';

const getMeanValueOfArray = (incomingArray) => incomingArray.map((item) => getTotalFlyDuration(item));

//
//
//   console.log('incomingArray.length', incomingArray.length);
// if (byPrice) {
//   return incomingArray.reduce((prev, current) => prev + current.price, 0) / incomingArray.length;
// }
// return incomingArray.reduce((prev, current) => prev + getTotalFlyDuration(current), 0) / incomingArray.length;
export default getMeanValueOfArray;
