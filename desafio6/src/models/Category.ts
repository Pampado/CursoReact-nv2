import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
<<<<<<< HEAD
  OneToMany,
} from 'typeorm'

import Transaction from './Transaction'

=======
} from 'typeorm'

>>>>>>> 14a38b9d68e6616c16f66da9ada3f5126f03cd6e
@Entity('categories')
class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string

<<<<<<< HEAD
  @OneToMany(() => Transaction, transaction => transaction.category)
  transaction: Transaction

=======
>>>>>>> 14a38b9d68e6616c16f66da9ada3f5126f03cd6e
  @Column()
  title: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default Category
