//"USA, BRA, UAE, JPN, PHL"
const tickets = [["JPN", "PHL"], ["BRA", "UAE"], ["USA", "BRA"], ["UAE", "JPN"]];

const originalRoute = (arr) => {
  let i = 0, j;
  let result = [];
  let check;
  while (i<arr.length) {
    check = false;
    j = 0;
    while (j<arr.length) {
      if (arr[i][0] === arr[j][1] ) {
        check = true;
        break;
      }
      j++;
    }
    if (check === false) {
      result.push(arr[i][0]);
      if(arr.length == 1) result.push(arr[i][1]);
      delete arr.splice(i, 1);
      i = 0;
    } 
    else i++;
  }
  return console.log(result.toString());
}

originalRoute(tickets);