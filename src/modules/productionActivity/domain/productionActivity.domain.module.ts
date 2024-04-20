import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { ProductionActivityDomainFacade } from './productionActivity.domain.facade'
import { ProductionActivity } from './productionActivity.model'

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductionActivity]),
    DatabaseHelperModule,
  ],
  providers: [ProductionActivityDomainFacade, ProductionActivityDomainFacade],
  exports: [ProductionActivityDomainFacade],
})
export class ProductionActivityDomainModule {}
