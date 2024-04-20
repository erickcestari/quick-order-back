import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { ProductionActivity } from './productionActivity.model'

import { Order } from '../../order/domain'

import { Operator } from '../../operator/domain'

@Injectable()
export class ProductionActivityDomainFacade {
  constructor(
    @InjectRepository(ProductionActivity)
    private repository: Repository<ProductionActivity>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(
    values: Partial<ProductionActivity>,
  ): Promise<ProductionActivity> {
    return this.repository.save(values)
  }

  async update(
    item: ProductionActivity,
    values: Partial<ProductionActivity>,
  ): Promise<ProductionActivity> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: ProductionActivity): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<ProductionActivity> = {},
  ): Promise<ProductionActivity[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<ProductionActivity> = {},
  ): Promise<ProductionActivity> {
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
    queryOptions: RequestHelper.QueryOptions<ProductionActivity> = {},
  ): Promise<ProductionActivity[]> {
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

  async findManyByOperator(
    item: Operator,
    queryOptions: RequestHelper.QueryOptions<ProductionActivity> = {},
  ): Promise<ProductionActivity[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('operator')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        operatorId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }
}
