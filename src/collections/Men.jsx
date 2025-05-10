import React from 'react'
import AddToCartButton from '../components/AddToCartButton'

const Men = () => {
  const products = [
    {id: 1, img: "https://i.pinimg.com/736x/ff/6b/d8/ff6bd8ed37a0954ef657c03a876b0310.jpg", title: "AW Spiky Head Tee", price: 1099 },
    {id: 2, img: "https://i.pinimg.com/736x/1b/06/9a/1b069a80a64b2809a3d41690f131546e.jpg", title: "Varsity Retro Sweatshirt", price: 1499 },
    {id: 3, img: "https://i.pinimg.com/736x/86/dc/a8/86dca8c1bcc0ea3a02509e735f247cde.jpg", title: "Nike Waffle Collor Pullover", price: 1599 },
    {id: 4, img: "https://i.pinimg.com/736x/0b/4d/57/0b4d570faafa4bb4a16733819a383cc7.jpg", title: "Harking Polo Sweatshirt", price: 1699 },
    {id: 5, img: "https://i.pinimg.com/736x/c0/ef/70/c0ef7067d94118e5520134cf40da63da.jpg", title: "Zip Neck Colorblock", price: 1599 },
    {id: 6, img: "https://i.pinimg.com/736x/47/75/87/477587590bfddddb5ff17717dfa9ea60.jpg", title: "Retro Dual Tone Polo", price: 1499 },
    {id: 7, img: "https://i.pinimg.com/736x/9a/9d/90/9a9d906942a90952e77a89f4fb28a526.jpg", title: "Hip Hop Street Style Shirt", price: 1599 },
    {id: 8, img: "https://i.pinimg.com/736x/08/5b/66/085b66a53986e14cdf8e51caffa59e31.jpg", title: "Streetwear Pullover", price: 1499 },
    {id: 9, img: "https://i.pinimg.com/736x/46/19/d5/4619d561a1dd5c99cc4694188e3c45db.jpg", title: "Lacoste Men's Sweater", price: 1399 },
    {id: 10, img: "https://i.pinimg.com/736x/07/ee/8c/07ee8c8417d29fdd55c8190a89649070.jpg", title: "Men Full Sleeve Printed Sweatshirt ", price: 1499 },
    {id: 11, img: "https://i.pinimg.com/736x/58/7e/c1/587ec1be41a7bccd09f5da8b7ce79fe1.jpg", title: "Retro Patchwork Tee", price: 1299 },
    {id: 12, img: "https://i.pinimg.com/736x/7d/51/53/7d51533667224629a71af07fd67303d7.jpg", title: "Oversized Crewneck Sweatshirt", price: 1599 }
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

export default Men