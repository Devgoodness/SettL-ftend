import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import loginReducer from "../features/loginSlice";
import registerReducer from "../features/registerSlice";
import forgotPasswordReducer from "../features/forgotPasswordSlice";
import utilityReducer from "../features/utilitySlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    login: loginReducer,
    register: registerReducer,
    forgotPassword: forgotPasswordReducer,
    utility: utilityReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these field paths in all actions
        ignoredActionPaths: ["payload.subtitle.$$typeof"],
      },
    }),
});
