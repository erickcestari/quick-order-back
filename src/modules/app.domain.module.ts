import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from './authentication/domain'
import { AuthorizationDomainModule } from './authorization/domain'

import { UserDomainModule } from './user/domain'

import { NotificationDomainModule } from './notification/domain'

import { OrderDomainModule } from './order/domain'

import { ProductDomainModule } from './product/domain'

import { OrderProductDomainModule } from './orderProduct/domain'

import { OperatorDomainModule } from './operator/domain'

import { ProductionActivityDomainModule } from './productionActivity/domain'

@Module({
  imports: [
    AuthenticationDomainModule,
    AuthorizationDomainModule,
    UserDomainModule,
    NotificationDomainModule,

    OrderDomainModule,

    ProductDomainModule,

    OrderProductDomainModule,

    OperatorDomainModule,

    ProductionActivityDomainModule,
  ],
  controllers: [],
  providers: [],
})
export class AppDomainModule {}
