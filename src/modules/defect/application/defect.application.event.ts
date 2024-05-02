export namespace DefectApplicationEvent {
  export namespace defectCreated {
    export const key = 'defect.application.defect.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
