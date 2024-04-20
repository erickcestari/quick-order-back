import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { OrderProductDomainFacade } from '@server/modules/orderProduct/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { OrderProductApplicationEvent } from './orderProduct.application.event'
import { OrderProductCreateDto } from './orderProduct.dto'

import { OrderDomainFacade } from '../../order/domain'

@Controller('/v1/orders')
export class OrderProductByOrderController {
  constructor(
    private orderDomainFacade: OrderDomainFacade,

    private orderProductDomainFacade: OrderProductDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/order/:orderId/orderProducts')
  async findManyOrderId(
    @Param('orderId') orderId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.orderDomainFacade.findOneByIdOrFail(orderId)

    const items = await this.orderProductDomainFacade.findManyByOrder(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/order/:orderId/orderProducts')
  async createByOrderId(
    @Param('orderId') orderId: string,
    @Body() body: OrderProductCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, orderId }

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
