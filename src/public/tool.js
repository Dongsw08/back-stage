export const objToArr = function(arr){
     return arr.map(obj => {
        let _arr = [];
        for(let i in obj){
            _arr.push(obj[i]);
        }
        return _arr;
    })
}