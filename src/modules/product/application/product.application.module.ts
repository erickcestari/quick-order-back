import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { ProductDomainModule } from '../domain'
import { ProductController } from './product.controller'

@Module({
  imports: [AuthenticationDomainModule, ProductDomainModule],
  controllers: [ProductController],
  providers: [],
})
export class ProductApplicationModule {}
