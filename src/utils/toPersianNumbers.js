const farsiDigits = ["۰" , "۱" , "۲" , "۳" , "۴" , "۵" , "۶" , "۷" , "۸" , "۹"];

export function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g , ",");
};

export function toPersianNumbers(n) {
    return n.toString().replace(/\d/g , (x) => farsiDigits[parseInt(x)]);
};

function toPersianNumbersWithComma(n) {
    const numberWithComma = numberWithCommas(n);
    const persianNumber = toPersianNumbers(numberWithComma);
    return persianNumber;
};

export default toPersianNumbersWithComma;

