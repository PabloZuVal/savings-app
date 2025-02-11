import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import type { Goal } from '../../goals/entities/goal.entity';
import type { IDeposit } from '../../common/interfaces';

@Entity('deposits')
export class Deposit implements IDeposit {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
  })
  amount: number;

  @Column({ type: 'uuid', name: 'goal_id' })
  goal_id: string;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'date',
  })
  date: Date;

  @ManyToOne('Goal', 'deposits')
  @JoinColumn({ name: 'goal_id' })
  goal: Goal;
}
