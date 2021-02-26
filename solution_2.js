//"USA, BRA, UAE, JPN, PHL"
const tickets = [["JPN", "PHL"], ["BRA", "UAE"], ["USA", "BRA"], ["UAE", "JPN"]];

const findRoute = (arr) =>{ 
  const source = arr.map(ticket => ticket[0]);
  const destination = arr.map(ticket => ticket[1]);
  let final = destination.filter(x => !(source.includes(x)));
  let result = [final[0]];
  let j =0;
  while(arr.length){
      if (arr[j][1] === final[0]){
        final[0] = arr[j][0];
        result.unshift(final[0]);
        delete arr.splice(j, 1);
        j = 0;
      } else j++;
  }
    return console.log (result.toString());
  }
  findRoute(tickets);