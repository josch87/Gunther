export default function logActivity({ action, data }) {
  const date = new Date();
  const currentUtcDateTime = date.toISOString();

  console.log("logActivity: ", {
    action: action,
    date: currentUtcDateTime,
    data: data,
  });

  /*   const [activityLog, setActivityLog] = useLocalStorageState("activityLog", {
    default: [],
  }); */
}
