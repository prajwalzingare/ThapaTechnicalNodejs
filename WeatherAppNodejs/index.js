/* this are dummy file cant include in node js link it gives you a problem */
console.log("creating Weather app using node js");
//get id
const curDate = document.getElementById("date");
let weathercon = document.getElementsByClassName("weathercon"); //check that.
const tempStatus = "Clouds";
// function
const getCurrentDay = () => {
  let currentTime = new Date();
  let weekDay = currentTime.toLocaleString("en-US", { weekday: "long" });
  return `${weekDay}`;
};
const getCurrentTime = () => {
  let time = new Date();
  let min = time.toLocaleString("en-US", { minute: "numeric", hour12: false });
  let hours = time.toLocaleString("en-GB", { hour: "numeric", hour24: true });
  let month = time.toLocaleString("en-IN", { month: "short" });
  let date = time.getDate();
  let period = "AM";
  hours > 11.59 ? ((period = "PM"), (hours = hours - 12)) : period;
  return `${month} ${date} | ${hours}:${min} ${period}`;
};
curDate.innerHTML = getCurrentDay() + " | " + getCurrentTime();
