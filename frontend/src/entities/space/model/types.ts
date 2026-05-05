import type { InfiniteQueryReponse, TZone } from "shared/types/types";

export interface ISpace {
    id: number;
    title: string;
    zoneType: TZone;
    pricePerHour: number;
    capacity: number;
    rating: number;
    description: string;
    images?: string[];
    createdAt: string;
    updatedAt: string;
}

export type TSpaceDTO = Omit<ISpace, "id" | "createdAt" | "updatedAt" | "images">

export interface ISpaceResponse extends InfiniteQueryReponse {
    data: ISpace[]
}