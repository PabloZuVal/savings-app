import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { GoalsService } from './goals.service';
import { CreateGoalDto } from './dto/create-goal.dto';

@Controller('goals')
export class GoalsController {
  constructor(private readonly goalsService: GoalsService) {}

  @Post()
  async create(@Body() createGoalDto: CreateGoalDto) {
    return this.goalsService.create(createGoalDto);
  }

  @Get()
  async findAll() {
    return this.goalsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.goalsService.findOne(id);
  }
}
