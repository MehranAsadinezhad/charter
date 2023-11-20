export function separate(Number) {
  Number += "";
  Number = Number.replace(",", "");
  let x = Number.split(".");
  let y = x[0];
  let z = x.length > 1 ? "." + x[1] : "";
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(y)) 
  y = y.replace(rgx, "$1" + "," + "$2");
  return y + z;
}

  // const todayFa = {
  //   day: getDateFormat(new Date(date), { day: "2-digit" }),
  //   month: getDateFormat(new Date(date), { month: "numeric" }),
  //   monthTitle: getDateFormat(new Date(date), { month: "long" }),
  //   year: getDateFormat(new Date(date), { year: "numeric" }),
  //   dayWeek: getDateFormat(new Date(date), { weekday: "long" }),
  // };

export function getDateFormat(uDate,option){
  let date = new Intl.DateTimeFormat('fa-IR', option).format(uDate);
  return date;
} 