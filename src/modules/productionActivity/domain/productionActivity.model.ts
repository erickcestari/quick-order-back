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

import { Operator } from '../../../modules/operator/domain'

@Entity()
export class ProductionActivity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  activityType: string

  @Column({})
  timestamp: string

  @Column({})
  orderId: string

  @ManyToOne(() => Order, parent => parent.productionActivitys)
  @JoinColumn({ name: 'orderId' })
  order?: Order

  @Column({})
  operatorId: string

  @ManyToOne(() => Operator, parent => parent.productionActivitys)
  @JoinColumn({ name: 'operatorId' })
  operator?: Operator

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
