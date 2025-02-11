import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepositsController } from './deposits.controller';
import { DepositsService } from './deposits.service';
import { Deposit } from './entities/deposit.entity';
import { Goal } from '../goals/entities/goal.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Deposit, Goal])],
  controllers: [DepositsController],
  providers: [DepositsService],
  exports: [TypeOrmModule],
})
export class DepositsModule {}
