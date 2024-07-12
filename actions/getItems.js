
const FETCH_ITEMS_LIMIT = 5;

export default async function getItems({ pageParam = 1, catalog_slug, route }) {
  let url;

  if(catalog_slug === "allitems")
    url = `${route}/api/items?page=${pageParam}&limit=${FETCH_ITEMS_LIMIT}&populate=general_photos&format=json`
  else
    url = `${route}/api/categories/${catalog_slug}/items?page=${pageParam}&limit=${FETCH_ITEMS_LIMIT}&populate=general_photos&format=json`
  console.log(url, 'url in getItems')
  const res = await fetch(
    url

  );
  return res.json();
}