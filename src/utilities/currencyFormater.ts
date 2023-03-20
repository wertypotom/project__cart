const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  style: 'currency',
  currency: 'USD',
});

export default (price: number) => CURRENCY_FORMATTER.format(price);
