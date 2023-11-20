export function formatDate(initialDate) {
  const dateObject = new Date(initialDate);
  const options = { day: "numeric", month: "long", year: "numeric" };
  const formattedDate = dateObject.toLocaleDateString("en-US", options);
  return formattedDate;
}

export function getCurrentTimestamp() {
  const currentTime = new Date();
  const currentIsoTime = currentTime.toISOString();

  return currentIsoTime;
}
