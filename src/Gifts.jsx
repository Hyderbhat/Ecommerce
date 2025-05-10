import React from 'react'
import AddToCartButton from './components/AddToCartButton';

const Gifts = () => {
  const products = [
    { id: 2, img: "https://i.pinimg.com/736x/b2/4a/e2/b24ae2a9c0c275340d1e26e2487eb971.jpg", title: "White Bow Hair Accessory", price: 300 },
    { id: 3, img: "https://i.pinimg.com/736x/00/30/74/003074406e5f025b25480e94855ab9c0.jpg", title: "White Cuff Bracelet", price: 1000 },
    { id: 6, img: "https://i.pinimg.com/736x/cf/02/c3/cf02c3d62a66718faafa18bf0c2bbaaf.jpg", title: "Pearl Necklace with Star Pendants", price: 800 },
    { id: 7, img: "https://i.pinimg.com/736x/33/73/97/337397b7dc7c606cbc4b4dfdf7d79d47.jpg", title: "Keychain (with Cat and Bow)", price: 250 },
    { id: 9, img: "https://i.pinimg.com/736x/9d/69/28/9d692807788b2aa749c12e32e99cc8c7.jpg", title: "Bunny Plushie", price: 1800 },
    { id: 12, img: "https://i.pinimg.com/736x/78/4e/fa/784efa272abe755a55ea8f1344e0f29a.jpg", title: "Snoopy Collage", price: 600 },
    { id: 1, img: "https://i.pinimg.com/736x/25/cb/59/25cb590f9e9d6ac517ea20df45d6ce8e.jpg", title: "Lamb Plushie ", price: 800 },
    { id: 13, img: "https://i.pinimg.com/736x/a5/63/c8/a563c80808d278e5a3e8976cc9744df5.jpg", title: "White Sunglasses", price: 15000 },
    { id: 4, img: "https://i.pinimg.com/736x/b8/6d/8e/b86d8e9a6a3ffa4d3607c96c117c3939.jpg", title: "Decorative Hair Clips", price: 250 },
    { id: 10, img: "https://i.pinimg.com/736x/b6/de/2b/b6de2bb596cbcea603cdeefe514df37c.jpg", title: "Gift Card with Bow", price: 100 },
    { id: 5, img: "https://i.pinimg.com/736x/71/1c/3e/711c3e2dce98e8be5e0e6ea0e3212461.jpg", title: "Pearl Necklace with Heart Pendant", price: 999 },
    { id: 14, img: "https://i.pinimg.com/736x/23/ac/5d/23ac5d2694c8d0596b94e6ec7fdfba84.jpg", title: "Large Cream Bow Hair Accessory", price: 800 }
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

export default Gifts