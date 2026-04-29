
//normal asynchronous program
function getData(dataId)
{
     setTimeout(()=>{
        console.log("data",dataId);
        },2000)
}

getData(1);

//problem 
getData(1);
getData(2);
getData(3);
//when we call three function one by one ,i want to execute this like first 2 min then execute 1 fun,2 min complete
//then run second fun ,....but all three functions run after two minutes.  

//solution :callback hell

function getData2(dataId,getNextData)
{
        setTimeout(()=>{
                console.log("data",dataId);
                if(getNextData)
                {
                        getNextData();
                }
        },2000);
}

getData2(1,()=>{
        getData2(2,()=>
        {
                getData2(3);
        })
})
//all three dataId run with 2 minutes gap

//problem this nested callback is not understandable or complex 

//solution :promises

//PROMISES

let promise = new Promise((resolve,reject)=>{
        console.log("i am a promise");
        resolve("success");
        
});


function getData3(dataId)
{
       return new Promise((resolve,reject)=>{
          setTimeout(()=>{
                console.log("data",dataId);
                resolve("success");
          },5000);
       });
}