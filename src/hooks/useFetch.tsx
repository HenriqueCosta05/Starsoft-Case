import { useQuery } from "@tanstack/react-query";

export function useFetch<T>(url: string) {
    const { status, data, error } = useQuery({
        queryKey: ['items'],
        queryFn: () => fetch(url).then(res => res.json() as T)
    });
}