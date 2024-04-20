import { ColumnNumeric } from '@server/core/database'
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { Order } from '../../../modules/order/domain'

import { Product } from '../../../modules/product/domain'

@Entity()
export class OrderProduct {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ColumnNumeric({ type: 'numeric' })
  quantity: number

  @Column({})
  orderId: string

  @ManyToOne(() => Order, parent => parent.orderProducts)
  @JoinColumn({ name: 'orderId' })
  order?: Order

  @Column({})
  productId: string

  @ManyToOne(() => Product, parent => parent.orderProducts)
  @JoinColumn({ name: 'productId' })
  product?: Product

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
