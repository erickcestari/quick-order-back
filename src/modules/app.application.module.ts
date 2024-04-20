import { Module } from '@nestjs/common'
import { AuthenticationApplicationModule } from './authentication/application'
import { AuthorizationApplicationModule } from './authorization/application'
import { UserApplicationModule } from './user/application'

import { OrderApplicationModule } from './order/application'

import { ProductApplicationModule } from './product/application'

import { OrderProductApplicationModule } from './orderProduct/application'

import { OperatorApplicationModule } from './operator/application'

import { ProductionActivityApplicationModule } from './productionActivity/application'

import { AiApplicationModule } from './ai/application/ai.application.module'
import { NotificationApplicationModule } from './notification/application/notification.application.module'
import { UploadApplicationModule } from './upload/application/upload.application.module'

@Module({
  imports: [
    AuthenticationApplicationModule,
    UserApplicationModule,
    AuthorizationApplicationModule,
    NotificationApplicationModule,
    AiApplicationModule,
    UploadApplicationModule,

    OrderApplicationModule,

    ProductApplicationModule,

    OrderProductApplicationModule,

    OperatorApplicationModule,

    ProductionActivityApplicationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppApplicationModule {}
