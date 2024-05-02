import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { DefectDomainFacade } from './defect.domain.facade'
import { Defect } from './defect.model'

@Module({
  imports: [TypeOrmModule.forFeature([Defect]), DatabaseHelperModule],
  providers: [DefectDomainFacade, DefectDomainFacade],
  exports: [DefectDomainFacade],
})
export class DefectDomainModule {}
