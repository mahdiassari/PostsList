const StatementHandler = (str, num) => {
  if (str && str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
};

export default StatementHandler;
