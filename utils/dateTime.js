export function getFormattedDateTime({ dateToFormat, type = "date" }) {
  const dateObject = new Date(dateToFormat);
  let formattedDate = null;

  if (type === "date") {
    const options = { day: "numeric", month: "long", year: "numeric" };
    formattedDate = dateObject.toLocaleDateString("en-US", options);
  }

  if (type === "datetime") {
    const options = {
      dateStyle: "long",
      timeStyle: "medium",
    };
    formattedDate = Intl.DateTimeFormat("en-US", options).format(dateObject);
  }

  return formattedDate;
}

export function getCurrentTimestamp() {
  const currentTime = new Date();
  const currentIsoTime = currentTime.toISOString();

  return currentIsoTime;
}

export function getElapsedTimeSince(startTime) {
  if (!(startTime instanceof Date)) {
    console.error(
      "getElapsedTimeSince did not receive startTime as date object"
    );
  }

  const currentDate = new Date();
  const today = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate()
  );
  const startTimeDay = new Date(
    startTime.getFullYear(),
    startTime.getMonth(),
    startTime.getDate()
  );
  const elapsedTime = currentDate - startTime;
  const oneMinute = 1000 * 60;
  const oneHour = oneMinute * 60;
  const oneDay = oneHour * 24;
  let sufix = "";

  if (elapsedTime < oneDay) {
    if (elapsedTime < oneHour && elapsedTime < oneMinute) {
      const elapsedSeconds = Math.floor(elapsedTime / 1000);

      if (elapsedSeconds === 1) {
        sufix = "second ago";
      } else {
        sufix = "seconds ago";
      }

      return `${elapsedSeconds} ${sufix}`;
    }

    if (elapsedTime < oneHour && elapsedTime >= oneMinute) {
      const elapsedMinutes = Math.floor(elapsedTime / 1000 / 60);

      if (elapsedMinutes === 1) {
        sufix = "minute ago";
      } else {
        sufix = "minutes ago";
      }

      return `${elapsedMinutes} ${sufix}`;
    }

    if (elapsedTime >= oneHour) {
      const elapsedHours = Math.floor(elapsedTime / 1000 / 60 / 60);

      if (elapsedHours === 1) {
        sufix = "hour ago";
      } else {
        sufix = "hours ago";
      }

      return `${elapsedHours} ${sufix}`;
    }
  } else {
    const elapsedDays = (today - startTimeDay) / oneDay;

    if (elapsedDays >= 1 && elapsedDays < 7) {
      if (elapsedDays === 1) {
        sufix = "day ago";
      } else if (elapsedDays < 7) {
        sufix = "days ago";
      }
      return `${elapsedDays} ${sufix}`;
    }

    if (elapsedDays >= 7) {
      const formatedStartTime = getFormattedDateTime({
        dateToFormat: startTime,
        type: "datetime",
      });

      return formatedStartTime;
    }
  }
  console.error("getElapsedTimeSince could not execute");
  return;
}
