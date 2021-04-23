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
