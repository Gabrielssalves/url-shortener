import { Expose } from 'class-transformer'

export class CreateUrlPayload {
    @Expose()
    url: string
}