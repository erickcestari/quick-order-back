import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { OrderDomainModule } from '../domain'
import { OrderController } from './order.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { OrderByUserController } from './orderByUser.controller'

@Module({
  imports: [AuthenticationDomainModule, OrderDomainModule, UserDomainModule],
  controllers: [OrderController, OrderByUserController],
  providers: [],
})
export class OrderApplicationModule {}
