import { RootState } from "@/redux/store";

export const loadState = () => {
  try {
    const serializedState =
      localStorage.getItem("dashboardState");

    if (!serializedState) return undefined;

    return JSON.parse(serializedState);
  } catch {
    return undefined;
  }
};

export const saveState = (state: RootState) => {
  try {
    const serializedState =
      JSON.stringify(state);

    localStorage.setItem(
      "dashboardState",
      serializedState
    );
  } catch (error: unknown) {
    console.log(error);
  }
};