export function formatDate({ dateToFormat, type = "date" }) {
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
