/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reverse = 0;
    let XCopy = x
    x = Math.abs(x)
    while(x>0){
        let findLast = x%10
        reverse = reverse*10 + findLast
        x = Math.floor(x/10)
    }
    const limit = Math.pow(2,31);
    if(reverse<-limit || reverse>limit) return 0

    return XCopy>0?reverse:-reverse

};