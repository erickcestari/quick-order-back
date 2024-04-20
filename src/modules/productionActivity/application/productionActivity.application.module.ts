import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { ProductionActivityDomainModule } from '../domain'
import { ProductionActivityController } from './productionActivity.controller'

import { OrderDomainModule } from '../../../modules/order/domain'

import { ProductionActivityByOrderController } from './productionActivityByOrder.controller'

import { OperatorDomainModule } from '../../../modules/operator/domain'

import { ProductionActivityByOperatorController } from './productionActivityByOperator.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    ProductionActivityDomainModule,

    OrderDomainModule,

    OperatorDomainModule,
  ],
  controllers: [
    ProductionActivityController,

    ProductionActivityByOrderController,

    ProductionActivityByOperatorController,
  ],
  providers: [],
})
export class ProductionActivityApplicationModule {}
