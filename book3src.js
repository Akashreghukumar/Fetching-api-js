// let form=document.getElementById("data")

// api=fetch('https://reqres.in/api/users?page=2').then((res)=>{
// data=res.json();
// console.log(data)

// })
// .then((data)=>{
//     console.log(data)
//     form.innerHTML=data
    
// })

function getuser(){
    // fetch('https://reqres.in/api/users?page=2')
    fetch('https://api2.binance.com/api/v3/ticker/24hr')
   
    .then((res)=>{
       return res.json();
    })
    .then((data)=>{
        // let output='<h2>users details</h2>';
        console.log(data)
        //console.log(data.data[0].email)
        const h=data.map(user=>{
            return `
           
            <p>Currency Name: <input type="text" value="${user.symbol}"></p>
            <p>Ask Price: <input type="text" value="${user.askPrice}"></p>
            <p>Volume: <input type="text" value="${user.volume}"></p>
            <p>Average Price: <input type="text" value="${user.weightedAvgPrice}"></p>
            
            
            
            <br>
            
            
            `
        })
   
       
        document.getElementById("data").innerHTML=h;
        // document.getElementById("data").innerHTML=output;
    })

   
}


getuser();


