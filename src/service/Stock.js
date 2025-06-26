
export class Stock {
  constructor({
    symbol,
    name,
    price,
    change,
    changePercent,
    volume,
    marketCap,
    peRatio,
    dividendYield,
    high52Week,
    low52Week
  }) {
    this.symbol = symbol;
    this.name = name;
    this.price = price;
    this.change = change;
    this.changePercent = changePercent;
    this.volume = volume;
    this.marketCap = marketCap;
    this.peRatio = peRatio;
    this.dividendYield = dividendYield;
    this.high52Week = high52Week;
    this.low52Week = low52Week;
  }

  get isPositive() {
    return this.change >= 0;
  }

  get formattedPrice() {
    return `$${this.price.toFixed(2)}`;
  }

  get formattedChange() {
    const sign = this.change >= 0 ? '+' : '';
    return `${sign}${this.change.toFixed(2)}`;
  }

  get formattedChangePercent() {
    const sign = this.changePercent >= 0 ? '+' : '';
    return `${sign}${this.changePercent.toFixed(2)}%`;
  }
}

export default Stock;

