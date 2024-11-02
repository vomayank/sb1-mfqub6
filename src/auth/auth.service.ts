import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IAuthService, IAuthPayload } from './interfaces/auth.interface';

@Injectable()
export class AuthService implements IAuthService {
  constructor(private readonly jwtService: JwtService) {}

  async validateUser(email: string, password: string): Promise<any> {
    // Implement user validation logic
    return null;
  }

  async login(user: any): Promise<{ access_token: string }> {
    const payload: IAuthPayload = { userId: user.id, email: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}