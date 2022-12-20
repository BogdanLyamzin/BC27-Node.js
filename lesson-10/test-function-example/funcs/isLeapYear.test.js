/*
1. Получает год в виде целого числа.
2. Возвращает true, если год высокосный, и false, если нет.
3. Выбрасывает ошибку (new Error) с правильным текстом.

2008 - true
2003 - false
1900 - false
2000 - true

41 - error 'year must be 42 or more'
2008.4 - error 'year must be integer'
() => error 'year must be exist'
'2008' - error 'yer must be integer number'
true - error 'yer must be integer number'
false - error 'yer must be integer number'
null - error 'yer must be integer number'
()=>{} - error 'yer must be integer number'
{} - error 'yer must be integer number'
[] - error 'yer must be integer number'
*/

const isLeapYear = require("./isLeapYear");

describe("test isLeapYear function", ()=> {
    test("2008 - true", ()=> {
        const result = isLeapYear(2008);
        expect(result).toBe(true);
        /*
        const expect = result => {
            retrun {
                result,
                toBe(value) {
                    return this.result === value;
                },
                toThrow(message) {

                }
            }
        }
        */
    })

    test("2003 - false", ()=> {
        expect(isLeapYear(2003)).toBe(false);
    })

    it("1900 - false", ()=> {
        expect(isLeapYear(1900)).toBe(false);
    })

    test("2000 - true", ()=> {
        expect(isLeapYear(2000)).toBe(true);
    })

    test("41 - error 'year must be 42 or more'", ()=> {
        expect(() => isLeapYear(41)).toThrow('year must be 42 or more')
    })

    test("2008.4 - error 'year must be integer'", ()=> {
        expect(() => isLeapYear(2008.4)).toThrow('year must be integer')
    })

    test("() => error 'year must be exist'", ()=> {
        expect(() => isLeapYear()).toThrow('year must be exist')
    })

    test("'2008' - error 'yer must be integer number'", ()=> {
        expect(() => isLeapYear('2008')).toThrow('yer must be integer number')
    })

    test("true - error 'yer must be integer number'", ()=> {
        expect(() => isLeapYear(true)).toThrow('yer must be integer number')
    })

    test("false - error 'yer must be integer number'", ()=> {
        expect(() => isLeapYear(false)).toThrow('yer must be integer number')
    })

    test("null - error 'yer must be integer number'", ()=> {
        expect(() => isLeapYear(null)).toThrow('yer must be integer number')
    })

    test("()=>{} - error 'yer must be integer number'", ()=> {
        expect(() => isLeapYear(()=>{})).toThrow('yer must be integer number')
    })

    test("{} - error 'yer must be integer number'", ()=> {
        expect(() => isLeapYear({})).toThrow('yer must be integer number')
    })

    test("[] - error 'yer must be integer number'", ()=> {
        expect(() => isLeapYear([])).toThrow('yer must be integer number')
    })
})