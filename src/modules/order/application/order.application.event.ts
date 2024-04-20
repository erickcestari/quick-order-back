export namespace OrderApplicationEvent {
  export namespace OrderCreated {
    export const key = 'order.application.order.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
