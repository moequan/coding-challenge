const initialState = {
  subscription: {
    duration: 12,
    gigabytes: 5,
    upfrontPayment: false
  },
  info: {
    lastName: "",
    firstName: "",
    email: "",
    address: ""
  },
  card: {
    number: "",
    expiration: "",
    security: ""
  },
  confirmation: {
    terms: false
  },
  currentStep: 1,
  amountOfSteps: 5
};

const stepReducer = (state = initialState, action) => {
  if (action.type === "HANDLE_NEXT") {
    if (state.currentStep !== state.amountOfSteps) {
      state.currentStep++;
      return Object.assign({}, state);
    }
  }

  if (action.type === "HANDLE_PREVIOUS") {
    if (state.currentStep > 1) {
      state.currentStep--;
      return Object.assign({}, state);
    }
  }

  if (action.type === "HANDLE_DURATION") {
    state.subscription.duration = action.payload;
    return Object.assign({}, state);
  }
  if (action.type === "HANDLE_GIGABYTE") {
    state.subscription.gigabyte = action.payload;
    return Object.assign({}, state);
  }
  if (action.type === "HANDLE_PAYMENT") {
    state.subscription.payment = action.payload;
    return Object.assign({}, state);
  }

  return state;
};

export default stepReducer;