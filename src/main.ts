import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule, ObserveInstrument } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
  });

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.MQTT,
    options: { url: 'mqtt://localhost:1883' },
  });

  app.enableCors();
  await app.startAllMicroservices();
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();