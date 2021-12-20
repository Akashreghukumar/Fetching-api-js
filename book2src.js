

function getuniversity(){
    //fetch('https://reqres.in/api/users?page=2')
    fetch('	http://universities.hipolabs.com/search?country=United+Kingdom')
   
    .then((res)=>{
       return res.json();
    })
    .then((data)=>{
        // let output='<h2>users details</h2>';
        console.log(data)
        // console.log(data[0])

        // console.log(data.data[0].email)
        const h=data.map(user=>{
            return `
            <p>Name: <input type="text" value="${user.name}"></p>
            
            <p>Country: <input type="text" value="${user.country}"></p>
            
            <p>Web Page: <input type="text" value="${user.web_pages}"></p>
            
            
            
            <br>
            
            
            `
        })
   
       
        document.getElementById("data").innerHTML=h;
        // document.getElementById("data").innerHTML=output;
    })

   
}


getuniversity();


