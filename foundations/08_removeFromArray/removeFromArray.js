<<<<<<< HEAD:04_removeFromArray/removeFromArray.js
const removeFromArray = function(allArr, ...removeArr) {
    let totalArr = [];
for (const arr of allArr){
    if (removeArr.includes(arr) ){
        continue;
    } 
      totalArr.push(arr);
}
return totalArr;
=======
const removeFromArray = function() {
>>>>>>> upstream/main:foundations/08_removeFromArray/removeFromArray.js
};

// Do not edit below this line
module.exports = removeFromArray;
