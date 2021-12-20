

function getuser(){
    fetch('https://reqres.in/api/users?page=2')
   
    .then((res)=>{
       return res.json();
    })
    .then((data)=>{
        // let output='<h2>users details</h2>';
        console.log(data)
        console.log(data.data[0].email)
        const h=data.data.map(user=>{
            return `
            <p>ID: <input type="text" value="${user.id}"></p>
            
            <p>First Name: <input type="text" value="${user.first_name}"></p>
            
            <p>Last Name: <input type="text" value="${user.last_name}"></p>
            
            <p>Email:<input type="text" value="${user.email}"></p>
            
            <br>
            
            
            `
        })
   
       
        document.getElementById("data").innerHTML=h;
        // document.getElementById("data").innerHTML=output;
    })

   
}


getuser();


