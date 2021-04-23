import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Log {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  date: Date

  @Column()
  money: number
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  currency: string

  @Column()
  balance: string

  @Column()
  locked: string

  @Column()
  avg_buy_price: string

  @Column()
  avg_buy_price_modified: boolean

  @Column()
  unit_currency: string
}
