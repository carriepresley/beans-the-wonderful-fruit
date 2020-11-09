const {shopForBeans, soakTheBeans, cookTheBeans} = require('./library.js');

async function makeBeans() {
    var type = await shopForBeans();
    var isSoft = await soakTheBeans(type);
    var dinner = await cookTheBeans(isSoft);

   console.log(dinner);

}

makeBeans();