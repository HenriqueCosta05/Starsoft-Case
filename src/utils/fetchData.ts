export async function fetchData (url: string, page: number, limit: number) {
    return await fetch(url + new URLSearchParams({
    page: page,
    limit: limit,
}).toString()).then((response) => {
    return response.json();
})

}