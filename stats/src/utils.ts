export const dateStringToDate = (date: string): Date => {
  const dateParts = date
    .split("/")
    .map((datePart: string): number => parseInt(datePart));

  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
