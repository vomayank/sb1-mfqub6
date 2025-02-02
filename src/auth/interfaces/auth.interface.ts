export interface IAuthPayload {
  userId: string;
  email: string;
}

export interface IAuthService {
  validateUser(email: string, password: string): Promise<any>;
  login(user: any): Promise<{ access_token: string }>;
}