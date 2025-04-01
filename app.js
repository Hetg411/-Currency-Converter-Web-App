let base_url="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
// let base_url="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/inr.json";
let from=document.getElementById("one");
let fro=document.getElementById("two");
let selects=document.querySelector(".drop ");
let bt=document.querySelector("button");



    for(let code in countryList){
        let option=document.createElement("option");
        option.innerText=code;
        option.value=code;
        from.append(option);
        if(code==="USD" ){
            option.selected="USD";
        }
    }
    from.addEventListener("change",(evt)=>{
        updateflag(evt.target);
    })
    for(let code in countryList){
        let option=document.createElement("option");
        option.innerText=code;
        option.value=code;
        fro.append(option);
        if(code==="INR" ){
            option.selected="INR";
        }
    }
    fro.addEventListener("change",(evt)=>{
        updateflag2(evt.target);
    })

    function updateflag(element){
     let code=element.value;
     let codeword=countryList[code];
      let news=`https://flagsapi.com/${codeword}/flat/64.png`;
     let im=document.querySelector("#img1");
     im.src=news;

    }
    function updateflag2(element){
        let code=element.value;
        let codeword=countryList[code];
         let news=`https://flagsapi.com/${codeword}/flat/64.png`;
        let im=document.querySelector("#img2");
        im.src=news;
   
       }

bt.addEventListener("click", async (evt)=>{
    evt.preventDefault();
    let ip=document.querySelector("input");
    if(ip.value==" " || ip.value<1){
        ip.value=1;
    }
    let url=`${base_url}/${from.value.toLowerCase()}.json`;
    let respone=await fetch(url);
    let data=await respone.json();
     console.log(data);
    let first=from.value.toLowerCase();
    console.log(first);
    let sec=fro.value.toLowerCase()
    console.log(sec);
     let rate=data[first][sec];
    console.log(rate);
    updatemassage(rate);

    
})
let msg=document.querySelector(".massage");
function updatemassage(rate){
    let ip=document.querySelector("input");
    let ans=ip.value*rate;
   msg.innerText=`${ip.value} ${from.value} = ${ans} ${fro.value} `;
}


