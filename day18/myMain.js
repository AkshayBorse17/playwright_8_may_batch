//importing module
const {url,login,config,CommonHelper}=require("./myModule")


console.log(url)

login()

console.log(config)

let helper=new CommonHelper()
helper.run()