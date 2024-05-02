import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { DefectController } from './defect.controller'

import { UserDomainModule } from '../../../modules/user/domain'
import { DefectDomainModule } from '../domain'

@Module({
  imports: [AuthenticationDomainModule, DefectDomainModule, UserDomainModule],
  controllers: [DefectController],
  providers: [],
})
export class DefectApplicationModule {}
