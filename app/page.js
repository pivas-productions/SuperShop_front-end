import { PopularProducts } from "@/components/main_page/popular-products";
import { MayBeInteresting } from "@/components/main_page/may-be-interesting";
import { Discounts } from "@/components/main_page/discounts";
import { NewItems } from "@/components/main_page/new-items";
import HeaderPhoto from "@/components/main_page/header-photo";

export default async function Home() {
  const items = await fetch(`${process.env.REACT_APP_API_URL}/api/items?populate=general_photos,colors_sizes&format=json`, { cache: "no-store" });
  let items_data = await items.json();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center xl:p-24">
      <HeaderPhoto />
      <section className="w-full flex flex-col gap-12  p-4 pb-12 xl:gap-32 ">
        <PopularProducts  fetch_route={process.env.REACT_APP_API_URL_CLIENT} items={items_data} />
        <Discounts  fetch_route={process.env.REACT_APP_API_URL_CLIENT} items={items_data} />
        <NewItems  fetch_route={process.env.REACT_APP_API_URL_CLIENT} items={items_data} />
        <MayBeInteresting  fetch_route={process.env.REACT_APP_API_URL_CLIENT} items={items_data} />
      </section>
    </main>
  );
}