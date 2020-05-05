const paramSerializer = (baseEndPoint, paramObj) => {
  let finalURL = baseEndPoint;
  Object.keys(paramObj).map((item, index) => {
      finalURL += ((index === 0) ? '?' : '&') + item + '=' + paramObj[item];
  });
  return finalURL;
};


export {
  paramSerializer
}