import React from 'react'
import AddToCartButton from '../components/AddToCartButton'


const Kicks = () => {
  const products = [
    { id: 1, img: "https://i.pinimg.com/736x/ec/e5/3c/ece53cc8dd3ff59956a5031b5b2aac37.jpg", title: "New Balance Spiky Runner", price: 6499 },
    { id: 2, img: "https://i.pinimg.com/736x/2e/61/16/2e611663a78db50d37666041eee89beb.jpg", title: "Jordan 1 Low Retro Pink Beige", price: 14999 },
    { id: 3, img: "https://i.pinimg.com/736x/e3/ea/e0/e3eae07b39403a168714e6763ae16b18.jpg", title: "Nike Dunk Low Green White", price: 15999 },
    { id: 4, img: "https://i.pinimg.com/736x/b0/03/c0/b003c0742e898a6cf7903a2c506014d9.jpg", title: "Air Jordan 1 Mid White Black", price: 16999 },
    { id: 5, img: "https://i.pinimg.com/736x/70/2f/66/702f6689af7a670237a3f13130dbeaf9.jpg", title: "Adidas Campus OG Green Stripes", price: 15999 },
    { id: 6, img: "https://i.pinimg.com/736x/79/5f/3e/795f3e9b8df5fffde4e1a0c5f84c923d.jpg", title: "Nike Dunk Low Patchwork Blue", price: 14999 },
    { id: 7, img: "https://i.pinimg.com/736x/c6/c0/90/c6c090a9d1271c2ea0c9535e5065f47d.jpg", title: "Nike Dunk Low Monochrome Pink", price: 15999 },
    { id: 8, img: "https://i.pinimg.com/736x/ba/02/8f/ba028fb5f672ee83986638e2cd74fb1c.jpg", title: "Nike Dunk Low Navy White OG", price: 14999 },
    { id: 10, img: "https://i.pinimg.com/736x/29/b9/43/29b943a3b2cebd1387cf324249182921.jpg", title: "Adidas Handball Spezial ‘Collegiate Green’", price: 10999 },
    { id: 11, img: "https://i.pinimg.com/736x/2f/ac/68/2fac68cdba233a5c2904614e29e4fbbc.jpg", title: "Nike Dunk Low ‘Racer Blue’", price: 12999 },
    { id: 9, img: "https://i.pinimg.com/736x/9e/99/58/9e99585e82fbba0e07520d735aba6928.jpg", title: "Nike Dunk Low SE ‘Pink Foam’ ", price: 13999 },
    { id: 12, img: "https://i.pinimg.com/736x/9b/9d/3c/9b9d3ca4a4426d4e215cd3f06de30577.jpg", title: "Nike Dunk Low Retro ‘Championship Navy’", price: 14999 }
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

export default Kicks