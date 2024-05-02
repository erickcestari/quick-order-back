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
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { Order } from '@server/modules/order/domain'
import { RequestHelper } from '../../../helpers/request'
import { DefectDomainFacade } from '../domain'
import { DefectApplicationEvent } from './defect.application.event'
import { DefectCreateDto, DefectUpdateDto } from './defect.dto'

@Controller('/v1/defects')
export class DefectController {
  constructor(
    private eventService: EventService,
    private defectDomainFacade: DefectDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.defectDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: DefectCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.defectDomainFacade.create(body)

    await this.eventService.emit<DefectApplicationEvent.defectCreated.Payload>(
      DefectApplicationEvent.defectCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:defectId')
  async findOne(@Param('defectId') defectId: string, @Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.defectDomainFacade.findOneByIdOrFail(
      defectId,
      queryOptions,
    )

    return item
  }

  @Patch('/:defectId')
  async update(
    @Param('defectId') defectId: string,
    @Body() body: DefectUpdateDto,
  ) {
    const item = await this.defectDomainFacade.findOneByIdOrFail(defectId)

    const itemUpdated = await this.defectDomainFacade.update(
      item,
      body as Partial<Order>,
    )
    return itemUpdated
  }

  @Delete('/:defectId')
  async delete(@Param('defectId') defectId: string) {
    const item = await this.defectDomainFacade.findOneByIdOrFail(defectId)

    await this.defectDomainFacade.delete(item)

    return item
  }
}
