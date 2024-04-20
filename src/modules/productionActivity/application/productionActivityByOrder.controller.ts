import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { ProductionActivityDomainFacade } from '@server/modules/productionActivity/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { ProductionActivityApplicationEvent } from './productionActivity.application.event'
import { ProductionActivityCreateDto } from './productionActivity.dto'

import { OrderDomainFacade } from '../../order/domain'

@Controller('/v1/orders')
export class ProductionActivityByOrderController {
  constructor(
    private orderDomainFacade: OrderDomainFacade,

    private productionActivityDomainFacade: ProductionActivityDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/order/:orderId/productionActivitys')
  async findManyOrderId(
    @Param('orderId') orderId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.orderDomainFacade.findOneByIdOrFail(orderId)

    const items = await this.productionActivityDomainFacade.findManyByOrder(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/order/:orderId/productionActivitys')
  async createByOrderId(
    @Param('orderId') orderId: string,
    @Body() body: ProductionActivityCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, orderId }

    const item = await this.productionActivityDomainFacade.create(valuesUpdated)

    await this.eventService.emit<ProductionActivityApplicationEvent.ProductionActivityCreated.Payload>(
      ProductionActivityApplicationEvent.ProductionActivityCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
