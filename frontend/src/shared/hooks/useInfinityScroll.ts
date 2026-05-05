import { useEffect, useRef } from 'react';

interface InfiniteScrollProps {
    onIntersect: () => void;
    hasNextPage: boolean;
    isFetching: boolean;
}

export const useInfiniteScroll = ({ onIntersect, hasNextPage, isFetching }: InfiniteScrollProps) => {
    const observerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const trigger = observerRef.current;
        if (!trigger || !hasNextPage || isFetching) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    onIntersect();
                }
            },
            { rootMargin: '200px' }
        );

        observer.observe(trigger);
        return () => observer.disconnect();
    }, [onIntersect, hasNextPage, isFetching]);

    return observerRef;
};
