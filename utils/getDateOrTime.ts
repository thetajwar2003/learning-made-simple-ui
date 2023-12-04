export function displayDateOrTime(ms: string) {
  const inputDate = new Date(parseInt(ms, 10));
  const today = new Date();

  const isToday = inputDate.toDateString() === today.toDateString();
  const displayDate = isToday
    ? inputDate.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
    : inputDate.toLocaleDateString();

  return displayDate;
}
