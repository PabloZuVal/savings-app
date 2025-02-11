import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { DepositsService } from './deposits.service';
import { CreateDepositDto } from './dto/create-deposit.dto';

@Controller('deposits')
export class DepositsController {
  constructor(private readonly depositsService: DepositsService) {}

  @Post()
  async create(@Body() createDepositDto: CreateDepositDto) {
    return this.depositsService.create(createDepositDto);
  }

  @Get(':goalId')
  async findByGoal(@Param('goalId') goalId: string) {
    return this.depositsService.findByGoal(goalId);
  }
}
