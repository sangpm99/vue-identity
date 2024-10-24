export interface SuccessResponse<user = undefined> {
    data: user,
    success: boolean
}

export interface ErrorResponse {
    status: number,
    data: {
        message?: string,
        errors?: undefined
    }
}
