import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TelemetryService } from './telemetry.service';
import { EventPattern, Payload } from '@nestjs/microservices';
import { CreateTelemetryDto } from './dto/create-telemetry.dto';
import { UpdateTelemetryDto } from './dto/update-telemetry.dto';

@Controller('telemetry')
export class TelemetryController {
  constructor(private readonly telemetryService: TelemetryService) {}

  @Post()
  create(@Body() createTelemetryDto: CreateTelemetryDto) {
    return this.telemetryService.create(createTelemetryDto);
  }

  @Get()
  findAll() {
    return this.telemetryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.telemetryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTelemetryDto: UpdateTelemetryDto) {
    return this.telemetryService.update(+id, updateTelemetryDto);
  }
  @EventPattern('vehicles/+/telemetry')
  handleTelemetry(@Payload() data: CreateTelemetryDto) {
    this.telemetryService.create(data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.telemetryService.remove(+id);
  }
}

