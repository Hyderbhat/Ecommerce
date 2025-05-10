import React from 'react'
import AddToCartButton from '../components/AddToCartButton'

const SummerSpring = () => {
  const products = [
    { id: 2, img: "https://i.pinimg.com/736x/2e/61/16/2e611663a78db50d37666041eee89beb.jpg", title: "Jordan 1 Low Retro Pink Beige", price: 14999 },
    { id: 3, img: "https://i.pinimg.com/736x/fc/f0/85/fcf08585bf941641251400d5f6a16987.jpg", title: "ZARA Cropped Poplin Shirt with Pockets", price: 3490 },
    { id: 6, img: "https://i.pinimg.com/736x/79/5f/3e/795f3e9b8df5fffde4e1a0c5f84c923d.jpg", title: "Nike Dunk Low Patchwork Blue", price: 14999 },
    { id: 7, img: "https://i.pinimg.com/736x/b3/f9/f0/b3f9f0b016bf592d8b32e3f79e67a02a.jpg", title: "Embroidered Varsity Knit Cardigan", price: 2500 },
    { id: 9, img: "https://i.pinimg.com/736x/e3/ea/e0/e3eae07b39403a168714e6763ae16b18.jpg", title: "Nike Dunk Low Green White", price: 15999 },
    { id: 12, img: "https://i.pinimg.com/736x/67/5a/f2/675af2de4c0e45bf65f1c3a8dffe3a39.jpg", title: "Varsity Retro Sweatshirt", price: 1499 },
    { id: 1, img: "https://i.pinimg.com/736x/bf/36/f0/bf36f074d95011dc6b67d134704d8ea6.jpg", title: "Mushroom Graphic Ringer Tee", price: 1199 },
    { id: 13, img: "https://i.pinimg.com/736x/ff/6b/d8/ff6bd8ed37a0954ef657c03a876b0310.jpg", title: "AW Spiky Head Tee", price: 1099 },
    { id: 4, img: "https://i.pinimg.com/736x/86/dc/a8/86dca8c1bcc0ea3a02509e735f247cde.jpg", title: "Striped Collar Pullover", price: 1599 },
    { id: 10, img: "https://i.pinimg.com/736x/9e/99/58/9e99585e82fbba0e07520d735aba6928.jpg", title: "Nike Dunk Low SE ‘Pink Foam’", price: 13999 },
    { id: 5, img: "https://i.pinimg.com/736x/9e/43/0f/9e430f38925ad7bd1526935bab02a8e3.jpg", title: "Strapless Ruched White Tube Top", price: 999 },
    { id: 14, img: "https://i.pinimg.com/736x/1b/06/9a/1b069a80a64b2809a3d41690f131546e.jpg", title: "Varsity Retro Sweatshirt", price: 1499 }
  ];

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

export default SummerSpring