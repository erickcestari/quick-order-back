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
import { Operator, OperatorDomainFacade } from '@server/modules/operator/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { OperatorApplicationEvent } from './operator.application.event'
import { OperatorCreateDto, OperatorUpdateDto } from './operator.dto'

@Controller('/v1/operators')
export class OperatorController {
  constructor(
    private eventService: EventService,
    private operatorDomainFacade: OperatorDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.operatorDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: OperatorCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.operatorDomainFacade.create(body)

    await this.eventService.emit<OperatorApplicationEvent.OperatorCreated.Payload>(
      OperatorApplicationEvent.OperatorCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:operatorId')
  async findOne(
    @Param('operatorId') operatorId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.operatorDomainFacade.findOneByIdOrFail(
      operatorId,
      queryOptions,
    )

    return item
  }

  @Patch('/:operatorId')
  async update(
    @Param('operatorId') operatorId: string,
    @Body() body: OperatorUpdateDto,
  ) {
    const item = await this.operatorDomainFacade.findOneByIdOrFail(operatorId)

    const itemUpdated = await this.operatorDomainFacade.update(
      item,
      body as Partial<Operator>,
    )
    return itemUpdated
  }

  @Delete('/:operatorId')
  async delete(@Param('operatorId') operatorId: string) {
    const item = await this.operatorDomainFacade.findOneByIdOrFail(operatorId)

    await this.operatorDomainFacade.delete(item)

    return item
  }
}
