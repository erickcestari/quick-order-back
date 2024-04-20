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
  ProductionActivity,
  ProductionActivityDomainFacade,
} from '@server/modules/productionActivity/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { ProductionActivityApplicationEvent } from './productionActivity.application.event'
import {
  ProductionActivityCreateDto,
  ProductionActivityUpdateDto,
} from './productionActivity.dto'

@Controller('/v1/productionActivitys')
export class ProductionActivityController {
  constructor(
    private eventService: EventService,
    private productionActivityDomainFacade: ProductionActivityDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items =
      await this.productionActivityDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(
    @Body() body: ProductionActivityCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.productionActivityDomainFacade.create(body)

    await this.eventService.emit<ProductionActivityApplicationEvent.ProductionActivityCreated.Payload>(
      ProductionActivityApplicationEvent.ProductionActivityCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:productionActivityId')
  async findOne(
    @Param('productionActivityId') productionActivityId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.productionActivityDomainFacade.findOneByIdOrFail(
      productionActivityId,
      queryOptions,
    )

    return item
  }

  @Patch('/:productionActivityId')
  async update(
    @Param('productionActivityId') productionActivityId: string,
    @Body() body: ProductionActivityUpdateDto,
  ) {
    const item =
      await this.productionActivityDomainFacade.findOneByIdOrFail(
        productionActivityId,
      )

    const itemUpdated = await this.productionActivityDomainFacade.update(
      item,
      body as Partial<ProductionActivity>,
    )
    return itemUpdated
  }

  @Delete('/:productionActivityId')
  async delete(@Param('productionActivityId') productionActivityId: string) {
    const item =
      await this.productionActivityDomainFacade.findOneByIdOrFail(
        productionActivityId,
      )

    await this.productionActivityDomainFacade.delete(item)

    return item
  }
}
