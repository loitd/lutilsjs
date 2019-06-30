var test = require("./index");
// let woeid = test.getLocationId('hà nội');
// let wea1 = test.getWeatherFromWoeid(1236594);

// 
test.getWeatherFromLocation('Paris ', version=2).then((wea)=>{
    test.print(wea); 
}).catch((e) => {
    test.print(e);
})


// destructuring
// var {print, getLocationId} = require('./index');
// print("John");

// await 
test.print(test.toSlug("Có phải em là mùa thu Hà Nội, thủa phòng sương ta vẫn bế em về."));


test.reverseGeocoder(105.8544441, 21.0294498);