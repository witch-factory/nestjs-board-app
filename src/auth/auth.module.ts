import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'wdv349fk*@DLs)',
      signOptions: {
        expiresIn: 3600,
      },
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AuthController],
  // JwtStrategy를 auth 모듈에서 사용하려면 provider로 등록
  providers: [AuthService, JwtStrategy],
  // 다른 모듈에서도 사용하기 위해서 export
  exports: [JwtStrategy, PassportModule],
})
export class AuthModule {}
