import React from 'react'
import AddToCartButton from '../components/AddToCartButton'

const Women = () => {
  const products = [
    {id: 1, img: "https://i.pinimg.com/736x/bf/36/f0/bf36f074d95011dc6b67d134704d8ea6.jpg", title: "Mushroom Graphic Ringer Tee", price: 1199 },
    {id: 2, img: "https://i.pinimg.com/736x/24/41/3b/24413bb89acc4c691d9388aa1673c672.jpg", title: "Korean-style Knit Vest with Neck Layering Shirt", price: 1800 },
    {id: 3, img: "https://i.pinimg.com/736x/fc/f0/85/fcf08585bf941641251400d5f6a16987.jpg", title: "ZARA Cropped Poplin Shirt with Pockets", price: 3490 },
    {id: 4, img: "https://i.pinimg.com/736x/b3/f9/f0/b3f9f0b016bf592d8b32e3f79e67a02a.jpg", title: "Embroidered Varsity Knit Cardigan", price: 2500 },
    {id: 5, img: "https://i.pinimg.com/736x/9e/43/0f/9e430f38925ad7bd1526935bab02a8e3.jpg", title: "Strapless Ruched White Tube Top", price: 999 },
    {id: 6, img: "https://i.pinimg.com/736x/e3/5b/77/e35b77a1b4b53dba54323328ec94484a.jpg", title: "Oversized White Sweater", price: 14699 },
    {id: 7, img: "https://i.pinimg.com/736x/64/46/55/6446552595e928f0d79ad32bc3addcca.jpg", title: "Corset Puff Sleeve Top (White)", price: 1500 },
    {id: 8, img: "https://i.pinimg.com/736x/b7/b5/19/b7b519e3d95593b5820931521256c895.jpg", title: "ANGELS Varsity Bomber Jacket", price: 3500 },
    {id: 9, img: "https://i.pinimg.com/736x/15/2e/48/152e48978f1737957d38421e77c93a17.jpg", title: "Blue Women's Denim Shorts", price: 1599 },
    {id: 10, img: "https://i.pinimg.com/736x/67/5a/f2/675af2de4c0e45bf65f1c3a8dffe3a39.jpg", title: "Varsity Retro Sweatshirt", price: 1499 },
    {id: 11, img: "https://i.pinimg.com/736x/9d/a9/ad/9da9ad320f64a3b38588974e924cc236.jpg", title: "Nora Barth Woman Top", price: 1299 },
    {id: 12, img: "https://i.pinimg.com/736x/65/11/e7/6511e7e6c8bd403b815824abeba9f9ab.jpg", title: "Colorblock Crew Sweatshirt", price: 1599 }
  ]

  return (
    <section className="pt-40 bg-gray-800 grid grid-cols-2 lg:grid-cols-4 gap-2 px-2">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white h-[450px] w-full overflow-hidden py-1"
        >
          <div className="pl-2">
            <span className="bg-gray-200 text-[10px] py-[2px] px-[4px] rounded font-mono text-gray-800">
              Hyshops
            </span>
          </div>
          <div className="relative group h-[80%]">
            <img
              src={product.img}
              alt={product.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-end justify-center pb-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
              <div className="h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
                <AddToCartButton product={product} />
              </div>
            </div>
          </div>
          <div className="px-3 pt-1">
            <p className="text-sm font-bold">{product.title}</p>
            <p className="text-xs text-gray-700">{product.price}</p>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Women