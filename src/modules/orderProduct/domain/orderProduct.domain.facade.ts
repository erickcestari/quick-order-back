import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { OrderProduct } from './orderProduct.model'

import { Order } from '../../order/domain'

import { Product } from '../../product/domain'

@Injectable()
export class OrderProductDomainFacade {
  constructor(
    @InjectRepository(OrderProduct)
    private repository: Repository<OrderProduct>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<OrderProduct>): Promise<OrderProduct> {
    return this.repository.save(values)
  }

  async update(
    item: OrderProduct,
    values: Partial<OrderProduct>,
  ): Promise<OrderProduct> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: OrderProduct): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<OrderProduct> = {},
  ): Promise<OrderProduct[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<OrderProduct> = {},
  ): Promise<OrderProduct> {
    if (!id) {
      this.databaseHelper.invalidQueryWhere('id')
    }

    const queryOptionsEnsured = {
      includes: queryOptions?.includes,
      filters: {
        id: id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    const item = await query.getOne()

    if (!item) {
      this.databaseHelper.notFoundByQuery(queryOptionsEnsured.filters)
    }

    return item
  }

  async findManyByOrder(
    item: Order,
    queryOptions: RequestHelper.QueryOptions<OrderProduct> = {},
  ): Promise<OrderProduct[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('order')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        orderId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }

  async findManyByProduct(
    item: Product,
    queryOptions: RequestHelper.QueryOptions<OrderProduct> = {},
  ): Promise<OrderProduct[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('product')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        productId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }
}
