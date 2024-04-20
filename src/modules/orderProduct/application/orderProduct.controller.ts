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
import {
  OrderProduct,
  OrderProductDomainFacade,
} from '@server/modules/orderProduct/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { OrderProductApplicationEvent } from './orderProduct.application.event'
import {
  OrderProductCreateDto,
  OrderProductUpdateDto,
} from './orderProduct.dto'

@Controller('/v1/orderProducts')
export class OrderProductController {
  constructor(
    private eventService: EventService,
    private orderProductDomainFacade: OrderProductDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.orderProductDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: OrderProductCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.orderProductDomainFacade.create(body)

    await this.eventService.emit<OrderProductApplicationEvent.OrderProductCreated.Payload>(
      OrderProductApplicationEvent.OrderProductCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:orderProductId')
  async findOne(
    @Param('orderProductId') orderProductId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.orderProductDomainFacade.findOneByIdOrFail(
      orderProductId,
      queryOptions,
    )

    return item
  }

  @Patch('/:orderProductId')
  async update(
    @Param('orderProductId') orderProductId: string,
    @Body() body: OrderProductUpdateDto,
  ) {
    const item =
      await this.orderProductDomainFacade.findOneByIdOrFail(orderProductId)

    const itemUpdated = await this.orderProductDomainFacade.update(
      item,
      body as Partial<OrderProduct>,
    )
    return itemUpdated
  }

  @Delete('/:orderProductId')
  async delete(@Param('orderProductId') orderProductId: string) {
    const item =
      await this.orderProductDomainFacade.findOneByIdOrFail(orderProductId)

    await this.orderProductDomainFacade.delete(item)

    return item
  }
}
