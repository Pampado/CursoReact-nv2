import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm'

import Categories from './Category'

@Entity('transactions')
class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  title: string

  @Column()
  type: 'income' | 'outcome'

  @Column()
  value: number

  @Column()
  category_id: string

  @ManyToOne(() => Categories, category => category.transaction, {
    eager: true,
  })
  @JoinColumn({ name: 'category_id' })
  category: Categories

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default Transaction
