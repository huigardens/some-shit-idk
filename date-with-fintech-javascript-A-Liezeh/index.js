import * as fs from 'node:fs';


let DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

let dataRead = (err, data) => {
  if (err) {
      console.error(err);
      return;
  }
  const dates = JSON.parse(data);
  // console.log(dates);
  console.log(formatDate(dates));
}


fs.readFile('data.json', 'utf8', dataRead);

let formatDate = (data) => {
  for(var attributename in data){
    for(var key in data) {
       for (var key1 in data[key]) {
           console.log(data[key][key1])
       }
    }
  }

/*  for(const place of data){
    for(const item of place.events){
      let currentDate=item.date.split("-")
      let newDate={
        year: currentDate[0],
        month: currentDate[1],
        day: currentDate[2]
        };
        item.date=newDate;
    }
  }
  */
}


// DON'T MODIFY THE CODE BELOW THIS LINE

let toExport;

try {
  toExport = [
    { name: "holidaysByYear", content: holidaysByYear, type: "function" }
  ]

} catch (error) {
  toExport = { error: error.message }
}

export { toExport };