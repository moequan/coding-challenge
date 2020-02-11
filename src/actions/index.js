export const handleNext = payload => {
  return {
    type: "HANDLE_NEXT",
    payload
  };
};

export const handlePrevious = payload => {
  return {
    type: "HANDLE_PREVIOUS",
    payload
  };
};
export const handleDuration = payload => {
  return { 
    type: "HANDLE_DURATION",
     payload };
};
export const handleGigabyte = payload => {
    return { 
      type: "HANDLE_GIGABYTE",
       payload };
  };
  export const handlePayment = payload => {
    return { 
      type: "HANDLE_PAYMENT",
       payload };
  };
