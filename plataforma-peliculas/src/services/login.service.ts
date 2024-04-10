import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class LoginService {
  salt: string = '$2a$08$W59jWcwio1TiLx4A8iRyTO';
  joseHash: string;
  constructor(private jwtService: JwtService) {
    this.genSalt();
  }

  async genSalt() {
    this.joseHash = await bcrypt.hash('jose', this.salt);
  }

  async validateUser(username: string, password: string): Promise<any> {
    //obtener de la base de datos el usuario jose
    if (username === 'jose') {
      const passEncriptado = await bcrypt.hash(password, this.salt);
      if (this.joseHash == passEncriptado) {
        // retorno el objeto usuario
        return {
          username: username,
          role: 'ADMIN',
          nombre: 'Jose Eyler',
        };
      }
      return null;
    }
    return null;
  }

  login(user: any) {
    const payload = { usuario: user };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
