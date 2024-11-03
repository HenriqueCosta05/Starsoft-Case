export async function fetchData(url: string, page: number, limit: number) {
  const response = await fetch(`${url}page=${page}&limit=${limit}`);
  if (!response.ok) {
    throw new Error("Houve um erro ao processar sua solicitação");
  }
  return response.json();
}