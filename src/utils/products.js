const products = [
    {
      id: 30,
      name: "PlayStation 5",
      stock: 3,
      cost: 220000,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 2000,
      image: [
        "https://arsonyb2c.vtexassets.com/arquivos/ids/356995/PlayStation-5-DualShock.jpg?v=637586444113030000"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 1,
      brandId: 95,
      packingId: null,
      category: {
        name: "Consolas",
        id: 1
      },
      brand: {
        id: 95,
        name: "PlayStation"
      },
      reviews: []
    },
    {
      id: 29,
      name: "Nintendo Switch",
      stock: 10,
      cost: 180000,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 1000,
      image: [
        "https://assets.nintendo.com/image/upload/b_white,c_pad,f_auto,h_382,q_auto,w_573/ncom/es_LA/hardware/switch/nintendo-switch-neon-new-package/gallery/image03?v=2021112013"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 1,
      brandId: 95,
      packingId: null,
      category: {
        name: "Consolas",
        id: 1
      },
      brand: {
        id: 95,
        name: "Nintendo"
      },
      reviews: [
        {
          "comment": "Excelente rendimiento",
          "rating": "5"
        }
      ]
    },
    {
      id: 76,
      name: "Samsung Galaxy S21",
      stock: 2,
      cost: 190000,
      description: "Lorem",
      capacity: 1000,
      image: [
        "https://jfccelulares.com.ar/wp-content/uploads/2021/10/Samsung-81181084-ar-galaxy-s21-5g-g991-sm-g991bzalaro-368338802Download-Source.png"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.030Z",
      categoryId: 9,
      brandId: 10,
      packingId: null,
      category: {
        name: "Celulares",
        id: 9
      },
      brand: {
        id: 10,
        name: "Samsung"
      },
      reviews: []
    },
    {
      id: 170,
      name: "Motorola Moto G20",
      stock: 20,
      cost: 60000,
      description: "Lorem",
      capacity: 1500,
      image: [
        "https://www.motorola.com.ar/arquivos/Moto-G20-pdp-kv-render-3-1cnaarq31.png"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.032Z",
      categoryId: 9,
      brandId: 10,
      packingId: null,
      category: {
        name: "Celulares",
        id: 9
      },
      brand: {
        id: 10,
        name: "Motorola"
      },
      reviews: []
    },
    {
      id: 233,
      name: "Celular Samsung A21S",
      stock: 60,
      cost: 22000,
      description: "Lorem",
      capacity: 1500,
      image: [
        "https://images.samsung.com/is/image/samsung/es-galaxy-a21s-sm-a217fzwoeub-thumb-330x330-262755627?$480_480_PNG$"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.031Z",
      categoryId: 9,
      brandId: 10,
      packingId: null,
      category: {
        name: "Celulares",
        id: 9
      },
      brand: {
        id: 10,
        name: "Samsung"
      },
      reviews: []
    },
    {
      id: 139,
      name: "Celular LG K61",
      stock: 50,
      cost: 21900,
      description: "Lorem",
      capacity: 0,
      image: [
        "https://www.lg.com/cac/images/MC/k61/K61-gallery/d1.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.030Z",
      categoryId: 9,
      brandId: 16,
      packingId: null,
      category: {
        name: "Celulares",
        id: 9
      },
      brand: {
        id: 16,
        name: "LG"
      },
      reviews: []
    },
    {
      id: 68,
      name: "Celular Motorola Moto E20",
      stock: 42,
      cost: 21990,
      description: "El nuevo moto E20 tiene todo lo que querés y necesitás en un celular. Máximo rendimiento, el mejor diseño y materiales de primera calidad que convierten a este smartphone en una opción ideal si tenés que comprarte uno nuevo o hacer un buen regalo.",
      capacity: 0,
      image: [
        "https://images.fravega.com/f500/7f0f4eba12879630070dc7b640be83b1.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.032Z",
      categoryId: 9,
      brandId: 16,
      packingId: null,
      category: {
        name: "Celulares",
        id: 9
      },
      brand: {
        id: 16,
        name: "Motorola"
      },
      reviews: []
    },
    {
      id: 222,
      name: "Parlante Sony XB23",
      stock: 20,
      cost: 11999,
      description: "Lorem",
      capacity: 0,
      image: [
        "https://www.sony.com.ar/image/0e4847162d4e2e4e4440e650208b794b?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.032Z",
      categoryId: 5,
      brandId: 16,
      packingId: null,
      category: {
        name: "Parlantes",
        id: 5
      },
      brand: {
        id: 16,
        name: "Sony"
      },
      reviews: []
    },
    {
      id: 135,
      name: "Parlante LG PL5",
      stock: 63,
      cost: 16000,
      description: "Lorem",
      capacity: 0,
      image: [
        "https://d34zlyc2cp9zm7.cloudfront.net/products/b0700dafaba93dd6a9adc549bfdc9b179f4a1d40f767a4d96f99981dcd887ccc.jpg_500"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.032Z",
      categoryId: 5,
      brandId: 16,
      packingId: null,
      category: {
        name: "Parlantes",
        id: 5
      },
      brand: {
        id: 16,
        name: "LG"
      },
      reviews: []
    },
    {
      id: 31,
      name: "Parlante JBL Flip 5",
      stock: 10,
      cost: 18999,
      description: "Suena mejor que nunca. Siente tu música. Los nuevos drivers de estilo competición del JBL Flip 5 ofrecen un alto rendimiento. Disfruta de unos increíbles bajos en un formato muy compacto.",
      capacity: 0,
      image: [
        "https://www.authogar.com/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/f/l/flip_5-2.png"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T11:08:17.792Z",
      categoryId: 5,
      brandId: 17,
      packingId: null,
      category: {
        name: "Parlantes",
        id: 5
      },
      brand: {
        id: 17,
        name: "JBL"
      },
      reviews: []
    }
  ];

  module.exports = {
    products,
  }