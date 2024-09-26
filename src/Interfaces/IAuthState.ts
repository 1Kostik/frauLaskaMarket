export interface IAuthState {
  token: string | null;
  username: string | null;
  isLoading: boolean;
  error: string | null;
}
