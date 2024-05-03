import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { Product } from '@server/modules/product/domain'

@Entity()
export class Defect {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  description: string

  @Column({})
  status: string

  @Column({})
  productId: string

  @ManyToMany(() => Product, parent => parent.id)
  @JoinColumn({ name: 'productId' })
  product?: Product

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
