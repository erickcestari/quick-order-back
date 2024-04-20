import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { OrderProductDomainModule } from '../domain'
import { OrderProductController } from './orderProduct.controller'

import { OrderDomainModule } from '../../../modules/order/domain'

import { OrderProductByOrderController } from './orderProductByOrder.controller'

import { ProductDomainModule } from '../../../modules/product/domain'

import { OrderProductByProductController } from './orderProductByProduct.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    OrderProductDomainModule,

    OrderDomainModule,

    ProductDomainModule,
  ],
  controllers: [
    OrderProductController,

    OrderProductByOrderController,

    OrderProductByProductController,
  ],
  providers: [],
})
export class OrderProductApplicationModule {}
