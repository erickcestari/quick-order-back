import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { OperatorDomainFacade } from './operator.domain.facade'
import { Operator } from './operator.model'

@Module({
  imports: [TypeOrmModule.forFeature([Operator]), DatabaseHelperModule],
  providers: [OperatorDomainFacade, OperatorDomainFacade],
  exports: [OperatorDomainFacade],
})
export class OperatorDomainModule {}
