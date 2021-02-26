//"USA, BRA, UAE, JPN, PHL"
const arr = [["JPN", "PHL"], ["BRA", "UAE"], ["USA", "BRA"], ["UAE", "JPN"]];

const findRoute = (tickets) =>{ 
  const source = tickets.map(ticket => ticket[0]);
  const destination = tickets.map(ticket => ticket[1]);
  let index, first;
  let route = [];
  while (source.length){
    first = source.filter(x => !(destination.includes(x)));
    const aranan = tickets.filter ((ticket) =>  ticket.includes(first[0]));
    route.push(aranan[0]);
    index = source.indexOf(first.toString());
    source.splice(index, 1);
    destination.splice(index, 1);
    tickets.splice(index, 1);
  }

  let flat = route.reduce((acc, it) => [...acc, ...it], []);
  const originalRoute = [...new Set(flat)];
  return console.log (originalRoute.toString());
}

findRoute(arr);
