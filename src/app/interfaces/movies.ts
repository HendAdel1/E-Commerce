export interface Movies {
  id: number,
  title: string,
  description: string,
  price: number,
  pricebefore: number
  discountPercentage: number,
  rating: number,
  stock: number,
  brand: string,
  category: string,
  thumbnail: string,
  images: string[],
  createdAt:string

  //optional "?" ممكن ابعته و ممكن لا
  //createdAt?:string

}
