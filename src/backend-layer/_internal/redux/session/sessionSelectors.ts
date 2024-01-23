import { AppState } from "../../store";

export const selectSessionStatus = (state: AppState) =>
  state.session.sessionStatus;
