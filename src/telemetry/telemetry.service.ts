import { Injectable } from '@nestjs/common';
import { CreateTelemetryDto } from './dto/create-telemetry.dto';
import { UpdateTelemetryDto } from './dto/update-telemetry.dto';

@Injectable()
export class TelemetryService {
  private readings: CreateTelemetryDto[] = [];

  create(createTelemetryDto: CreateTelemetryDto) {
    this.readings.push(createTelemetryDto);
    if (this.readings.length > 500) this.readings.shift();
    return createTelemetryDto;
  }

  findAll() {
    return this.readings;
  }

  findOne(id: number) {
    return `This action returns a #${id} telemetry`;
  }

  update(id: number, updateTelemetryDto: UpdateTelemetryDto) {
    return `This action updates a #${id} telemetry`;
  }

  remove(id: number) {
    return `This action removes a #${id} telemetry`;
  }
}