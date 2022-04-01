import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

// Data Type Object
export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  password: string;
}
