export const centsToDollars = (cents) => {
    if (cents === 0)
    {
        return ' $0 ';
    }
    let dollars = Math.floor(cents/100);
    dollars = dollars.toLocaleString("en-US", {
        style:"currency",
        currency:"USD",
        maximumFractionDigits:0,
        minimumFractionDigits:0,
    });
    return dollars;
}

export const getTotalCostOfItems = (items) => {
    return items.reduce((previousValue, item) => {
        return previousValue + (item.qty * item.product.price);
    }, 0);
}