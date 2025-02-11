import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Goal } from './entities/goal.entity';
import { CreateGoalDto } from './dto/create-goal.dto';

@Injectable()
export class GoalsService {
  constructor(
    @InjectRepository(Goal)
    private goalRepository: Repository<Goal>,
  ) {}

  async create(createGoalDto: CreateGoalDto) {
    const goal = this.goalRepository.create({
      name: createGoalDto.name,
      target_amount: createGoalDto.targetAmount,
      deadline: createGoalDto.deadline,
    });

    return await this.goalRepository.save(goal);
  }

  async findAll() {
    return await this.goalRepository.find();
  }

  async findOne(id: string) {
    const goal = await this.goalRepository.findOne({ where: { id } });
    if (!goal) {
      throw new NotFoundException(`Goal with ID ${id} not found`);
    }
    return goal;
  }
}
