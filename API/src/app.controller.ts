// auth.controller.ts
import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';

@Controller('auth')
export class AppController {
  @Get('login')
  @UseGuards(AuthGuard('azure-ad'))
  login(@Req() req: Request, @Res() reply: Response) {
    console.log('signed-in user:', req['user']);
    reply.status(200).send({ message: 'access token validated successfully' });
  }
}
