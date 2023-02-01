import { useMemo } from "react";

export const usePosts = (sort, posts) => {
    const sortedPosts = useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        } else {
            return posts;
        }
    }, [sort, posts])

    return sortedPosts 
}

export const useSortedAndSearchedPosts = (sort, query, posts) => {
    const sortedPosts = usePosts(sort, posts)

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(p => p.title.toLowerCase().includes(query.toLowerCase()))
      }, [query, sortedPosts])
    
    return sortedAndSearchedPosts
}
