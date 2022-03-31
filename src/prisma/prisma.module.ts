import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

/*
Global decorator makes Prisma module globally available.
However, the same module (Prisma) must be imported into app.module
*/
@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
