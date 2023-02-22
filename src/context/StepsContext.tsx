// import { createContext, useReducer } from "react";
// import { StepAction, StepList, stepsReducer } from "./stepsreducer";

// type StepReducer = (state: StepList, action: StepAction) => StepList;

// type SteplistContextType = {
//   current_step: number;
// };

// type SteplistDispatchContextType = {
//   dispatch: (arg: StepAction) => void;
// };

// const initialSteplistContext = {
//   current_step: 0,
// };

// const initialSteplistDispatchContext = {
//   dispatch: () => console.log("Hello World"),
// };

// export const SteplistContext = createContext<SteplistContextType>(
//   initialSteplistContext
// );
// export const SteplistDispatchContext =
//   createContext<SteplistDispatchContextType>(initialSteplistDispatchContext);

// export function SteplistProvider({ children }: { children: React.ReactNode }) {
//   const [state, dispatch] = useReducer<StepReducer>(
//     stepsReducer,
//     initialSteplistContext
//   );
//   return (
//     <SteplistContext.Provider value={state}>
//       <SteplistDispatchContext.Provider value={dispatch}>
//         {children}
//       </SteplistDispatchContext.Provider>
//     </SteplistContext.Provider>
//   );
// }
