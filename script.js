let text =document.querySelector(".text")
let btn =document.querySelector(".btn")

let wrong =document.querySelector(".wrong")

let reslut =document.querySelector(".reslut")


let binray =[128,64,32,16,8,4,2,1]

let btn_2=document.querySelector(".btn-2")

btn_2.addEventListener("click",()=>{
    location.reload()
})




btn.addEventListener("click",()=>{


    if(isNaN(text.value) ===false){
        //is number
        let v =text.value
        let arr =v.split("")

        let Array=[]

        let bin =0
        arr.map((e,i)=>{

            let number =parseInt(e)

            if(parseInt(e)===1 || parseInt(e)===0){
                //check numbe ris 1 or 0
            Array.push(number)
            wrong.style.cssText="display:none;"
            reslut.style.cssText="display:block"



            }else{
                wrong.style.cssText="display:block;"
                reslut.style.cssText="display:none;"


                Array.push(0)


            }
        })

        Array.map((e,i)=>{
            if(e===1){
            bin+=binray[i]
            }else{

            }


        })
        reslut.textContent=`the binray is ${bin}`



    }else{
        //is not number
        console.log("not number")
    }



})








