import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { ProductionActivityDomainFacade } from '@server/modules/productionActivity/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { ProductionActivityApplicationEvent } from './productionActivity.application.event'
import { ProductionActivityCreateDto } from './productionActivity.dto'

import { OperatorDomainFacade } from '../../operator/domain'

@Controller('/v1/operators')
export class ProductionActivityByOperatorController {
  constructor(
    private operatorDomainFacade: OperatorDomainFacade,

    private productionActivityDomainFacade: ProductionActivityDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/operator/:operatorId/productionActivitys')
  async findManyOperatorId(
    @Param('operatorId') operatorId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.operatorDomainFacade.findOneByIdOrFail(operatorId)

    const items = await this.productionActivityDomainFacade.findManyByOperator(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/operator/:operatorId/productionActivitys')
  async createByOperatorId(
    @Param('operatorId') operatorId: string,
    @Body() body: ProductionActivityCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, operatorId }

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
