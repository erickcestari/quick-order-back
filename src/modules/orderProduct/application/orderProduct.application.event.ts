export namespace OrderProductApplicationEvent {
  export namespace OrderProductCreated {
    export const key = 'orderProduct.application.orderProduct.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
