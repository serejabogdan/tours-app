function dateCopy(date) {
  const newDate = new Date();

  newDate.setDate(date.getDate());
  newDate.setMonth(date.getMonth());
  newDate.setFullYear(date.getFullYear());
  return newDate;
}

export function dateOffsetByDays(date, days) {
  const newDate = dateCopy(date);
  return new Date(newDate.setDate(newDate.getDate() + days));
}

export function dateOffsetByMonths(date, months) {
  const newDate = dateCopy(date);

  return new Date(newDate.setMonth(newDate.getMonth() + months));
}
