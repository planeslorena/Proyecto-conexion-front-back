import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeliculasController } from './controllers/peliculas.controller';
import { PeliculasService } from './services/peliculas.service';
import { LoginController } from './controllers/login.controller';
import { LoginService } from './services/login.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtMiddlewareGuard } from './services/Jwtguard.service';

@Module({
  imports: [
    JwtModule.register({
      secret:
        'hjfdsalhfdsahfjkdsakreaurceukfbukalsfyuej43243545y47988367+++fdsfjhdsifyhujdshfjkdsahfjkdskgfhjdsgfygsuyejkgfhdjgfsgejfgdjhsdgfhjsekfyhdbsyfjegfjdysgfjyefgydegfhjseyrfeyr63254342343',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AppController, PeliculasController, LoginController],
  providers: [AppService, PeliculasService, LoginService, JwtMiddlewareGuard],
})
export class AppModule {}
