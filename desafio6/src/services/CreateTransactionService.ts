import { getCustomRepository, getRepository } from 'typeorm'

import Category from '../models/Category'
import Transaction from '../models/Transaction'
import TransactionRepository from '../repositories/TransactionsRepository'
import AppError from '../errors/AppError'

interface Request {
  title: string
  type: 'income' | 'outcome'
  value: number
  category: string
}

class CreateTransactionService {
  public async execute({
    title,
    type,
    value,
    category,
  }: Request): Promise<Transaction> {
    const transactionRepository = getCustomRepository(TransactionRepository)

    if (type === 'outcome') {
      const balance = await transactionRepository.getBalance()

      if (balance.total < value) {
        throw new AppError('Insuficient balance for this transaction.')
      }
    }

    const categoriesRepository = getRepository(Category)

    let transactionCategoryMatch = await categoriesRepository.findOne({
      where: { title: category },
    })

    if (!transactionCategoryMatch) {
      transactionCategoryMatch = categoriesRepository.create({
        title: category,
      })

      await categoriesRepository.save(transactionCategoryMatch)
    }

    const transaction = transactionRepository.create({
      title,
      type,
      value,
      category_id: transactionCategoryMatch.id,
    })

    await transactionRepository.save(transaction)

    return transaction
  }
}

export default CreateTransactionService
