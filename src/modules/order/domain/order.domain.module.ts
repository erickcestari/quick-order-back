import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { OrderDomainFacade } from './order.domain.facade'
import { Order } from './order.model'

@Module({
  imports: [TypeOrmModule.forFeature([Order]), DatabaseHelperModule],
  providers: [OrderDomainFacade, OrderDomainFacade],
  exports: [OrderDomainFacade],
})
export class OrderDomainModule {}
