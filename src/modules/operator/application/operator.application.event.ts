export namespace OperatorApplicationEvent {
  export namespace OperatorCreated {
    export const key = 'operator.application.operator.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
