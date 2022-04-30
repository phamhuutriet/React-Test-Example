export default (count = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      console.log("incremented");
      return count + 1;
    case "DECREMENT":
      return count - 1;
    default:
      return count;
  }
};
