export const isValidEmail = (email) => {
    var patt = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return patt.test(String(email).toLowerCase());
}

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