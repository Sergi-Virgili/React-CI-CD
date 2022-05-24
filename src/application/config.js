export const config = {
  //   basename: "React-CI-CD",
  basename: process.env.REACT_APP_SERVER_BASENAME
    ? process.env.REACT_APP_SERVER_BASENAME
    : "",
};
