import Image from "next/image"
import Link from "next/link"
import HomeCatImage from "../../public/images/homeCatImage.png"
import CategoryCatImage from "../../public/images/categoryCatImage.png"
import PopularCatImage from "../../public/images/popularCatImage.png"
import { Category } from "../entities/category"
import getCategoriesData from "../services/api"

export default async function Home() {
  const categories = await getCategoriesData()

  return (
    <main className="flex flex-col">
      <div className="flex justify-center h-[300px]">
        <Image src={HomeCatImage} alt="HomeCatImage" className="w-full h-full object-cover" />
      </div>
      <div className="flex gap-4 py-8">
        {categories.map((category: Category) => (
          <div key={category.id} className="flex flex-col items-center border border-gray-300 rounded-md p-4 shadow">
            <Link href="/">{category.name}</Link>
            <Image src={CategoryCatImage} alt="CategoryCatImage" />
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        <div className='flex font-bold'>추천 상품</div>
        <div className="flex gap-4">
          <div className="flex flex-col items-center border border-gray-300 rounded-md p-4 shadow">
            <Image src={PopularCatImage} alt="PopularCatImage" />
            <div>인기상품1</div>
          </div>
          <div className="flex flex-col items-center border border-gray-300 rounded-md p-4 shadow">
            <Image src={PopularCatImage} alt="PopularCatImage" />
            <div>인기상품2</div>
          </div>
          <div className="flex flex-col items-center border border-gray-300 rounded-md p-4 shadow">
            <Image src={PopularCatImage} alt="PopularCatImage" />
            <div>인기상품3</div>
          </div>
        </div>
      </div>
    </main>
  );
}