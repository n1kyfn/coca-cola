export const env = import.meta.env

export const CONFIG = {
    SERVER: env.APP_API_URL
} as const

export const BASE_URL = CONFIG.SERVER