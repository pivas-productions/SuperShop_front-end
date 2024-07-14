import FavoriteTabs from '@/components/favorite/favorite-tabs';
import React from 'react'

export default async function FavoritePage() {
    const items = await fetch(`${process.env.REACT_APP_API_URL}/api/items?populate=general_photos&format=json`, { cache: "no-store" });
    let items_data = await items.json();
  return (
    <main className="min-h-screen pt-16">
    <FavoriteTabs/>
    
    </main>
  )
}
