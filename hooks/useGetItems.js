"use client";
import { useInfiniteQuery } from "@tanstack/react-query";
import getItems from "@/actions/getItems";

export default function useGetItems(initialData, catalog_slug, route) {
  return useInfiniteQuery({
    queryKey: ["items", catalog_slug],
    queryFn: ({ pageParam = 1 }) => {
      return getItems({ pageParam, catalog_slug, route });
    },
    initialData: { pages: [initialData], pageParams: [1] },
    initialPageParam: 1,
    getNextPageParam(lastPage, allPages) {
      return lastPage.length === 0 ? undefined : allPages.length + 1;
    },
    select: (data) => {
      return {
        pages: data.pages.flat(),
        pageParams: data.pageParams
      };
    },
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    enabled: !!catalog_slug,
  });
}
