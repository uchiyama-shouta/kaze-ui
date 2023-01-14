export const now = () => {
  const date = new Date();
  const time = Intl.DateTimeFormat("ja-JP", { timeStyle: "medium" }).format(
    date,
  );
  return time;
};
