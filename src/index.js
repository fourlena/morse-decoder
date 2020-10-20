function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
    }
    
    function decode(expr) {
    let morse_dict = {
    a: '0000001011',
    b: '0011101010',
    c: '0011101110',
    d: '0000111010',
    e: '0000000010',
    f: '0010101110',
    g: '0000111110',
    h: '0010101010',
    i: '0000001010',
    j: '0010111111',
    k: '0000111011',
    l: '0010111010',
    m: '0000001111',
    n: '0000001110',
    o: '0000111111',
    p: '0010111110',
    q: '0011111011',
    r: '0000101110',
    s: '0000101010',
    t: '0000000011',
    u: '0000101011',
    v: '0010101011',
    w: '0000101111',
    x: '0011101011',
    y: '0011101111',
    z: '0011111010',
    1: '1011111111',
    2: '1010111111',
    3: '1010101111',
    4: '1010101011',
    5: '1010101010',
    6: '1110101010',
    7: '1111101010',
    8: '1111111010',
    9: '1111111110',
    0: '1111111111',
    ' ': '**********'
    }
    
    var splitedmorse = expr.match(/.{1,10}/g);
    for( var i = 0; i< splitedmorse.length; i++){
        splitedmorse[i] = getKeyByValue( morse_dict,splitedmorse[i]);  
    
    }
    return splitedmorse.join('')
    }

module.exports = {
    decode
}