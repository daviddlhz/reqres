export interface IAuthDto {
    email: string,
    password: string,
    token: string
}

export type UserCredentials = Omit<IAuthDto, 'token'>;