import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GoalsModule } from './goals/goals.module';
import { DepositsModule } from './deposits/deposits.module';
import { DatabaseModule } from './database/database.module';
import { Goal } from './goals/entities/goal.entity';
import { Deposit } from './deposits/entities/deposit.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST! || 'localhost',
      port: parseInt(process.env.POSTGRES_PORT!) || 5432,
      username: process.env.POSTGRES_USER ?? 'postgres',
      password: process.env.POSTGRES_PASSWORD! || 'postgres',
      database: process.env.POSTGRES_DB! || 'savings',
      entities: [Goal, Deposit],
      synchronize: true,
      logging: true,
    }),
    GoalsModule,
    DepositsModule,
    DatabaseModule,
  ],
})
export class AppModule {}
