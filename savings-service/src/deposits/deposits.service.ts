import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Deposit } from './entities/deposit.entity';
import { CreateDepositDto } from './dto/create-deposit.dto';
import { Goal } from '../goals/entities/goal.entity';

@Injectable()
export class DepositsService {
  constructor(
    @InjectRepository(Deposit)
    private depositRepository: Repository<Deposit>,
    @InjectRepository(Goal)
    private goalRepository: Repository<Goal>,
  ) {}

  async create(createDepositDto: CreateDepositDto) {
    const goal = await this.goalRepository.findOne({
      where: { id: createDepositDto.goalId },
    });

    if (!goal) {
      throw new NotFoundException(
        `Goal with ID ${createDepositDto.goalId} not found`,
      );
    }

    const deposit = this.depositRepository.create({
      amount: createDepositDto.amount,
      goal_id: createDepositDto.goalId,
    });

    return await this.depositRepository.save(deposit);
  }

  async findByGoal(goalId: string) {
    const deposits = await this.depositRepository.find({
      where: { goal_id: goalId },
      relations: ['goal'],
    });

    if (!deposits.length) {
      throw new NotFoundException(
        `No deposits found for goal with ID ${goalId}`,
      );
    }

    return deposits;
  }
}
