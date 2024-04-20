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

import { User } from '../../../modules/user/domain'

import { OrderProduct } from '../../../modules/orderProduct/domain'

import { ProductionActivity } from '../../../modules/productionActivity/domain'

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  status: string

  @ColumnNumeric({ nullable: true, type: 'numeric' })
  totalPrice?: number

  @Column({})
  userId: string

  @ManyToOne(() => User, parent => parent.orders)
  @JoinColumn({ name: 'userId' })
  user?: User

  @OneToMany(() => OrderProduct, child => child.order)
  orderProducts?: OrderProduct[]

  @OneToMany(() => ProductionActivity, child => child.order)
  productionActivitys?: ProductionActivity[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
