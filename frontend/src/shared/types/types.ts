
export const zoneOptions = ["open-space", "meeting-room", "private-office"] as const
export type TZone = (typeof zoneOptions)[number]

export interface InfiniteQueryReponse {
    limit: number;
    page: number;
    total: number;
}