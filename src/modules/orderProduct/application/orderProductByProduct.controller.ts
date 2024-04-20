import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { OrderProductDomainFacade } from '@server/modules/orderProduct/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { OrderProductApplicationEvent } from './orderProduct.application.event'
import { OrderProductCreateDto } from './orderProduct.dto'

import { ProductDomainFacade } from '../../product/domain'

@Controller('/v1/products')
export class OrderProductByProductController {
  constructor(
    private productDomainFacade: ProductDomainFacade,

    private orderProductDomainFacade: OrderProductDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/product/:productId/orderProducts')
  async findManyProductId(
    @Param('productId') productId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.productDomainFacade.findOneByIdOrFail(productId)

    const items = await this.orderProductDomainFacade.findManyByProduct(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/product/:productId/orderProducts')
  async createByProductId(
    @Param('productId') productId: string,
    @Body() body: OrderProductCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, productId }

    const item = await this.orderProductDomainFacade.create(valuesUpdated)

    await this.eventService.emit<OrderProductApplicationEvent.OrderProductCreated.Payload>(
      OrderProductApplicationEvent.OrderProductCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
