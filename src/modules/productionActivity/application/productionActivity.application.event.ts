export namespace ProductionActivityApplicationEvent {
  export namespace ProductionActivityCreated {
    export const key =
      'productionActivity.application.productionActivity.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
