import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from './../../prisma/prisma.service';

@Injectable() // Because we neet to inject ConfigService
export class JwtStrategy extends PassportStrategy(
  Strategy,
  'jwt', // This the name for this statregy - By default it's name is jwt
) {
  constructor(config: ConfigService, private prisma: PrismaService) {
    // We don't put private, because super() called before anything, and since we put private it means that it would make  this out side of controller (config:ConfigController) so we can use it later. But because we use prisma in validate(), so we have to make it private.
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.get<string>('JWT_SECRETE'),
    });
  }

  // This method executed when the AuthGuard('jwt') called this startegy
  async validate(payload: { sub: string; email: string }) {
    //console.log(payload);

    // This payload is encapsulated the hashed object which means that
    // payload: { "sub": 1, "email": "hamada@example.com", "iat": 12613213, "ext": 213216 }

    const user = await this.prisma.user.findUnique({
      where: { id: parseInt(payload.sub) },
    });
    // This put the payload in request object (Ex. we access the user info in getMe())
    delete user.hash;
    return user;

    // U need to know that id no user founded, it will return null, and this will return unauthorized
  }
}
