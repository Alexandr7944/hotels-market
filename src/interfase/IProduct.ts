export interface IProduct {
  id: number,
  producer: string,
  brend: string,
  title: string,
  type: Array<string>,
  subtype?: Array<string>,
  packing: string,
  image: string,
  barcode: string,
  price: number,
  description: string,
};
