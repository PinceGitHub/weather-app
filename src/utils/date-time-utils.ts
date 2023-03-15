const dateTimeObject = (dateTime: string) => {
  const dayList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday ",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const today = new Date(dateTime);
  const day = today.getDay();
  const date = today.getDate();
  let hour = today.getHours();
  const minute = today.getMinutes();
  const second = today.getSeconds();
  const month = today.getMonth();
  let prepand = hour >= 12 ? "PM" : "AM";

  hour = hour >= 12 ? hour - 12 : hour;

  if (hour === 0 && prepand === "PM") {
    if (minute === 0 && second === 0) {
      hour = 12;
      prepand = "Noon";
    } else {
      hour = 12;
      prepand = "PM";
    }
  }
  if (hour === 0 && prepand === "AM") {
    if (minute === 0 && second === 0) {
      hour = 12;
      prepand = "Midnight";
    } else {
      hour = 12;
      prepand = "AM";
    }
  }

  return {
    current_month: monthList[month],
    current_day: dayList[day],
    current_date: date,
    current_time: `${hour} ${prepand}`,
  };
};

export default dateTimeObject;
