const tickets = [["JPN", "PHL"], ["BRA", "UAE"], ["USA", "BRA"], ["UAE", "JPN"]];
//"USA, BRA, UAE, JPN, PHL"
const findRoute = (arr) =>{ 
  let i, k=1;
  while (k < arr.length) {
    i = 0;
    while ((i+1) < arr.length) {
      if (arr[i][1] !== arr[i+1][0])
      {
        k=0;
        let temp = arr[i+1];
        arr[i+1] = arr[i];
        arr[i] = temp; 
      } 
      i++; k++;
    }
  }
  let flat = arr.reduce((acc, it) => [...acc, ...it], []);
	const originalRoute = [...new Set(flat)];
	return console.log (originalRoute.toString());
}
findRoute(tickets);