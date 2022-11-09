import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true
  }));
  console.log('ENVIRONMENT');
  console.log(JSON.stringify(process.env));
  await app.listen(parseInt(process.env.PORT) || 3000);
}
bootstrap();
