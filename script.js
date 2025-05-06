const inval = document.querySelector("#inval");
const length = 8;
const butt = document.querySelector("button")
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456778910";
const symbol = "{}[[]()?>:<@!#$%^&&(&^*()_++";
const banned = document.querySelector("#banned")
const spane = document.querySelector("#spane")
const high = document.querySelector("#high")
banned.addEventListener("mouseenter",()=>{
   spane.style.display = "block"
   
   
})
banned.addEventListener("click",()=>{
     high.style.display = "block"
})
banned.addEventListener("mouseleave",()=>{
   spane.style.display = "none"
   
})

banned.addEventListener("click",()=>{
    cpypass()
   
})
banned.addEventListener("click",()=>{
     butt.style.display = "none"
})

butt.addEventListener("click",()=>{    
 return creatpass()
})

const allchars = uppercase +lowercase+ number +symbol;

function creatpass(){
    let pass ="";
    pass += uppercase[Math.floor(Math.random() * uppercase.length)];
    pass += lowercase[Math.floor(Math.random() * lowercase.length)];
    pass += number[Math.floor(Math.random() * number.length)];
    pass += symbol[Math.floor(Math.random() * symbol.length)];
    
    while (length > pass.length) {
        pass += allchars[Math.floor(Math.random() * allchars.length)];

    };
    inval.value = pass;

}
function cpypass(){
    inval.select()
    document.execCommand("copy")
}
