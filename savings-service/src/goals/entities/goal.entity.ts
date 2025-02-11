import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import type { Deposit } from '../../deposits/entities/deposit.entity';
import type { IGoal } from '../../common/interfaces';

@Entity('goals')
export class Goal implements IGoal {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    name: 'target_amount',
  })
  target_amount: number;

  @Column({ type: 'date', nullable: true })
  deadline: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'created_at',
  })
  created_at: Date;

  @OneToMany('Deposit', 'goal')
  deposits: Deposit[];
}
