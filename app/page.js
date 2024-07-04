
import { PopularProducts } from "@/components/main_page/popular-products";
import { MayBeInteresting } from "@/components/main_page/may-be-interesting";
import { Stocks } from "@/components/main_page/stocks";
import { NewItems } from "@/components/main_page/new-items";
import HeaderPhoto from "@/components/main_page/header-photo";
import { SwiperSlider } from "@/components/main_page/swiper-slider";

export default async function Home() {
  const items = await fetch(`${process.env.REACT_APP_API_URL}/api/items?format=json`, { cache: "no-store" });
  let items_data = await items.json();
  items_data = items_data.results;
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">


      <HeaderPhoto />
      <section className="flex flex-col gap-48">
        <PopularProducts items={items_data} />
        <Stocks items={items_data} />
        <NewItems items={items_data} />
        <MayBeInteresting items={items_data} />
      </section>
      <div className='w-1/2 mx-auto'>
        <SwiperSlider />
      </div>
    </main>
  );
}