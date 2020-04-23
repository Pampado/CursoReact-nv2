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

<<<<<<< HEAD
  @ManyToOne(() => Categories, category => category.transaction, {
    eager: true,
  })
=======
  @ManyToOne(() => Categories)
>>>>>>> 14a38b9d68e6616c16f66da9ada3f5126f03cd6e
  @JoinColumn({ name: 'category_id' })
  category: Categories

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default Transaction
