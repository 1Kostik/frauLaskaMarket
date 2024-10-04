export interface IAuthState {
  token: string | null;
  username: string | null;
  isLoading: boolean;
  isAuthenticated: boolean,
  error: string | null;
}
