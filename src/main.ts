import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors();

  // add a global prefix
  app.setGlobalPrefix('api');

  const PORT = process.env.PORT ?? 3000;
  await app.listen(PORT);
}
bootstrap();
