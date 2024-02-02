export interface SessionStateInterface {
  token: string;
  sessionStatus: SessionStatusEnum;
  userId: string;
}

export enum SessionStatusEnum {
  NotStarted = "NotStarted",
  Checking = "Checking",
  NotLoggedIn = "NotLoggedIn",
  Ready = "Ready",
  WrongCredentials = "WrongCredentials",
}
