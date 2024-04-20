import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { OperatorDomainModule } from '../domain'
import { OperatorController } from './operator.controller'

@Module({
  imports: [AuthenticationDomainModule, OperatorDomainModule],
  controllers: [OperatorController],
  providers: [],
})
export class OperatorApplicationModule {}
