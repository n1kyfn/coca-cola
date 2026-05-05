import { zoneOptions } from "shared/types/types"
import z from "zod"

export const spaceSchema = z.object({
    title: z.string().min(1, "Поле обязательное"),
    zoneType: z.enum(zoneOptions),
    pricePerHour: z.number(),
    capacity: z.number(),
    rating: z.number(),
    description: z.string().min(1, "Поле обязательное"),
})

export type TSpaceSchema = z.infer<typeof spaceSchema>