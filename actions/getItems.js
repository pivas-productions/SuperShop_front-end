
const FETCH_ITEMS_LIMIT = 5;

export default async function getItems({ pageParam = 1, route }) {

  const res = await fetch(
    route + `&page=${pageParam}&limit=${FETCH_ITEMS_LIMIT}`
    , {
      cache: 'no-store'
  }
  );
  return res.json();
}