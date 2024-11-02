import { JwtService } from '@nestjs/jwt';
import { IAuthService } from './interfaces/auth.interface';
export declare class AuthService implements IAuthService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    validateUser(email: string, password: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
