export interface IGoal {
  id: string;
  name: string;
  target_amount: number;
  deadline?: Date;
  created_at: Date;
}

export interface IDeposit {
  id: number;
  amount: number;
  goal_id: string;
  date: Date;
}
