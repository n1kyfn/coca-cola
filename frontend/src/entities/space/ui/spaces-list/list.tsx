import { useGetSpacesInfiniteQuery } from "entities/space/api/spacesApi";
import { ITEMS_LIMIT } from "shared/config/consts";
import { useInfiniteScroll } from "shared/hooks/useInfinityScroll";
import Loader from "widgets/loader";
import SpaceCard from "../space-card/card";

export default function SpacesList() {
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage
    } = useGetSpacesInfiniteQuery({ limit: ITEMS_LIMIT });

    const observerRef = useInfiniteScroll({
        onIntersect: fetchNextPage,
        hasNextPage: !!hasNextPage,
        isFetching: isFetchingNextPage,
    });

    const spacesData = data?.pages

    return (
        <div>
            {spacesData?.map((spaces) =>
                spaces.data.map((space) => (
                    <SpaceCard space={space} key={space.id} />
                ))
            )}

            <div ref={observerRef} style={{ height: 10 }}>
                {isFetchingNextPage && <Loader />}
            </div>
        </div>
    );
}
