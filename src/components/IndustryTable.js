export async function getRowData(stockHistory) {
  // if (stocks == []) return []; // error checking??
  let rows = [];
  let temp = {};
  let elementArray = [];
  let arrayLength = stockHistory.length;
  let objectLength = Object.keys(stockHistory[0]).length;

  stockHistory.forEach((element) => {
    elementArray.push(element.title.slice(8));
  });

  for (let i = 1; i < objectLength; i++) {
    temp = {};
    let industryName = Object.keys(stockHistory[0])[i];
    temp.industry = industryName;

    for (let x = 0; x < arrayLength; x++) {
      temp[`${elementArray[x]}`] = stockHistory[x][`${industryName}`];
    }
    rows.push(temp);
  }
  return rows;
}

export async function getColumnData(stockHistory) {
  // if (stocks == []) return []; // error checking??
  let columns = [{ headerName: `Industry`, field: `industry` }];

  stockHistory.forEach((element) => {
    let coloumn = element.title.slice(8);
    columns.push({ headerName: coloumn, field: coloumn });
  });
  return columns;
}
