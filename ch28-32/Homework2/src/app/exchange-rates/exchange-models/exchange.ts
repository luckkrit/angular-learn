export class Exchange {
  constructor(
    public currencyCode: string,
    public currencyName: string,
    public spot: number = 0
  ) {}
}
