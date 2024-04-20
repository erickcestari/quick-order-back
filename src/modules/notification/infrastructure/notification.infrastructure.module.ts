import { Module } from '@nestjs/common'
import { SocketModule } from '@server/libraries/socket'
import { AuthorizationDomainModule } from '@server/modules/authorization/domain'
import { NotificationDomainModule } from '../domain'

import { NotificationOrderSubscriber } from './subscribers/notification.order.subscriber'

import { NotificationProductSubscriber } from './subscribers/notification.product.subscriber'

import { NotificationOrderProductSubscriber } from './subscribers/notification.orderProduct.subscriber'

import { NotificationOperatorSubscriber } from './subscribers/notification.operator.subscriber'

import { NotificationProductionActivitySubscriber } from './subscribers/notification.productionActivity.subscriber'

@Module({
  imports: [AuthorizationDomainModule, NotificationDomainModule, SocketModule],
  providers: [
    NotificationOrderSubscriber,

    NotificationProductSubscriber,

    NotificationOrderProductSubscriber,

    NotificationOperatorSubscriber,

    NotificationProductionActivitySubscriber,
  ],
  exports: [],
})
export class NotificationInfrastructureModule {}
