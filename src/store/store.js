import { createStore } from "redux";
import stepReducer from "../reducers/stepReducer";

const store = createStore(stepReducer);

export default store;
