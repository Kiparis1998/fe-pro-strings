/**
 * Мы передаем строку и должны заменить любую z или v вне зависимости от регистра
 * на символ звездочки *
 * @param {string} string
 * @returns {string}
 */
export const replaceZAndVFromString = (string) => {
    let result = '';
    
    for (let letter of string) {
        if (letter.toLowerCase().includes('z') || (letter.toLowerCase().includes('v'))) {
            result = `${result}${'*'}`;
        } else {
            result = `${result}${letter}`;
        }
    }

    return result;
};

/**
 * Функция должна принять 3 аргумента и все строки. Мы передаем строку,
 * вторая строка это искомое слово, третья это то слово, на которое мы должны
 * заменить. Смотрите использование в файле check.js рядом. Должно вернуть строку
 * 1 аргумента с замененным словом(2 аргумент) на слово(3 аргумент)
 * @param {string} string
 * @param {string} word
 * @param {string} newWord
 * @returns {string}
 */
export const changeWord = (string, word, newWord) => {
    let i = 0;

    while (true) {
        let lengthOfWord = word.length;
        i = string.indexOf(word, i);
        if (i === -1) break;
        string = `${string.slice(0, i)}${newWord}${string.slice(i + lengthOfWord)}`;
        i += lengthOfWord;
    }

    return string;
};

/**
 * Должна вернуть строку(1 аргумент) на обрезанную по длине(2 аргумент, число)
 * @param {string} string
 * @param {number} length
 * @returns {string}
 */
export const truncate = (string, length) => {
    string = string.slice(0, length);
    return string;
};

/**
 * Принимает строку в первом аргументе, и символ во втором
 * И должно вернуть количество этих символов в этой строке
 * Попробуйте реализовать просто через цикл for и с проверкой
 * посимвольно. Кстати, проверка регистронезависимая. Если у нас
 * строка 'I am ivan' и хочу найти количество символов i то будет
 * их 2, и если I то тоже 2
 * @param {string} string
 * @param {string} symbol
 * @returns {number}
 */
export const quantityOfSymbols = (string, symbol) => {
    let result = 0;

    for (let letter of string) {
        if (letter.toLowerCase().includes(symbol.toLowerCase())) {
            result++;
        }
    }

    return result;
};

/**
 * Принимает строку в первом аргументе, и символ во втором
 * И должно вернуть количество этих символов в этой строке
 * Попробуйте реализовать через метод indexOf. Напомню, в
 * нем есть второй аргумент, который говорит, от какой позиции
 * делать поиск. Я хочу, чтобы вы сделали бесконечный цикл
 * while и искали символы этим методом, и сделали break когда позиций
 * больше нет. Так будет более оптимально, меньше проходов цикла.
 * Кстати, проверка регистронезависимая. Если у нас
 * строка 'I am ivan' и хочу найти количество символов i то будет
 * их 2, и если I то тоже 2
 * @param {string} string
 * @param {string} symbol
 * @returns {number}
 */
export const quantityOfSymbolsWithIndexOf = (string, symbol) => {

    let result = 0;
    let position = 0;

    while (true) {
        let foundPosition = string.toLowerCase().indexOf(symbol.toLowerCase(), position);

        if (foundPosition !== -1) {
            result++;
        } else if (foundPosition === -1) break;

        position = foundPosition + 1;
    }

    return result;
};


