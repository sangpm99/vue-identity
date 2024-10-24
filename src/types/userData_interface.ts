export interface UserData {
    id: string,
    fullName: string | null,
    avatar: string | null,
    department: string | null,
    address: string | null,
    userName: string,
    email: string,
    emailConfirmed: boolean,
    phoneNumber: string | null,
    phoneNumberConfirmed: boolean,
    twoFactorEnabled: boolean,
    roles: string[],
    permissions: string[],
    token: string,
    expiration: string
}
