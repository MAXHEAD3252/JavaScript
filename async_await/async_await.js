// async / await 

function makeAPIRequest(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            //resolve the promise 
            let isfetched = false;
            let user = {
                name: 'akshat',
                city : 'pune'
            }
            if(isfetched){
                res(user)
            }else{
                rej("error")
            }
        },5000)
    })
}

async function getuser(){

    try {
        const res = await makeAPIRequest()
        console.log(res)    
    }catch(error){
        console.log(error);
    }
    
}

getuser();