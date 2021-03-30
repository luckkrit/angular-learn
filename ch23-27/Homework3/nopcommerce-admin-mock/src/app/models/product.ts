export class Product {
  constructor(
    public id: number,
    public productName: string,
    public picture: string,
    public sku: string,
    public price: number,
    public quantity: number
  ) {}
}
