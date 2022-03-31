import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';

// Service will handle all the business logic
@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  signin() {
    return { msg: 'Signed in' };
  }
  async signup(dto: AuthDto) {
    // Generate password hash
    const hash = await argon.hash(dto.password);
    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        hash,
      },
      // Select the fields to be returned otherwise
      // all fields shall be returned
      select: {
        email: true,
        createdAt: true,
      },
    });
    return user;
  }
}
