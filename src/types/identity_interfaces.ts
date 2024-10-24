export interface SignInParam {
    email: string,
    password: string,
    reCaptcha: string,
    rememberMe: boolean
}

export interface SignInResponse {
    data: {
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
    },
    success?: boolean
}
