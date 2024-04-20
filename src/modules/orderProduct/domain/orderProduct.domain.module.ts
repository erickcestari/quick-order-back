import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { OrderProductDomainFacade } from './orderProduct.domain.facade'
import { OrderProduct } from './orderProduct.model'

@Module({
  imports: [TypeOrmModule.forFeature([OrderProduct]), DatabaseHelperModule],
  providers: [OrderProductDomainFacade, OrderProductDomainFacade],
  exports: [OrderProductDomainFacade],
})
export class OrderProductDomainModule {}
