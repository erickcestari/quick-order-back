import { Request } from 'express'

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common'
import { EventService } from '@server/libraries/event'
import { Order, OrderDomainFacade } from '@server/modules/order/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { OrderApplicationEvent } from './order.application.event'
import { OrderCreateDto, OrderUpdateDto } from './order.dto'

@Controller('/v1/orders')
export class OrderController {
  constructor(
    private eventService: EventService,
    private orderDomainFacade: OrderDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.orderDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: OrderCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.orderDomainFacade.create(body)

    await this.eventService.emit<OrderApplicationEvent.OrderCreated.Payload>(
      OrderApplicationEvent.OrderCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:orderId')
  async findOne(@Param('orderId') orderId: string, @Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.orderDomainFacade.findOneByIdOrFail(
      orderId,
      queryOptions,
    )

    return item
  }

  @Patch('/:orderId')
  async update(
    @Param('orderId') orderId: string,
    @Body() body: OrderUpdateDto,
  ) {
    const item = await this.orderDomainFacade.findOneByIdOrFail(orderId)

    const itemUpdated = await this.orderDomainFacade.update(
      item,
      body as Partial<Order>,
    )
    return itemUpdated
  }

  @Delete('/:orderId')
  async delete(@Param('orderId') orderId: string) {
    const item = await this.orderDomainFacade.findOneByIdOrFail(orderId)

    await this.orderDomainFacade.delete(item)

    return item
  }
}
