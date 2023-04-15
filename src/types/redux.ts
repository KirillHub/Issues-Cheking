export interface BaseState {
  loading: boolean;
  error?: string;
}

export interface RootState {
  userLink: BaseState;
}
