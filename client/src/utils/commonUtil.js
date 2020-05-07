const paramSerializer = (baseEndPoint, paramObj) => {
  let finalURL = baseEndPoint;
  Object.keys(paramObj).map((item, index) => {
      finalURL += ((index === 0) ? '?' : '&') + item + '=' + paramObj[item];
  });
  return finalURL;
};

const emailRegEx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/

export {
  paramSerializer,
  emailRegEx
}