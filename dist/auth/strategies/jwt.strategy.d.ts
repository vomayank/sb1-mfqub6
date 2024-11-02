import { Strategy } from 'passport-jwt';
import { IAuthPayload } from '../interfaces/auth.interface';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: IAuthPayload): Promise<{
        userId: string;
        email: string;
    }>;
}
export {};
