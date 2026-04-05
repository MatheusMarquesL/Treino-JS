import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const api = await NestFactory.create(AppModule);

  api.enableCors({
    origin: '*',
  });
  api.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await api.listen(process.env.PORT ?? 3000);
}
bootstrap();
