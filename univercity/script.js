


var table=document.createElement("table")
table.setAttribute("class","table table-striped table-bordered")
table.setAttribute("id","example")
table.setAttribute("style","width:100%")
document.body.appendChild(table)

// table.innerHTML+=` <div class="pagination pagination-sm">
// <button id="previous-btn" class="page-link btn btn-primary">&laquo; Prev</button>
// <button id="next-btn" class="page-link btn btn-primary">Next &raquo;</button>
// </div>`


var dataList;
var page=0



var table=document.getElementById("example")

var previousBtn=document.querySelector("#previous-btn")
var nextBtn=document.querySelector("#next-btn")


previousBtn.addEventListener("click",event=>{

    if (page===0){
        tableData()
    }else{
        page--
        tableData()
    }
    
});


nextBtn.addEventListener("click",()=>{
    if (page===Math.round(dataList.length/25)){
        page=Math.round(dataList.length/25)
        tableData()
    }else{
        console.log("else")
        page++;
        tableData()
    }
})




function tableData(){
    table.innerHTML=`
   
                <tr>
                    <th>Name</th>
                    <th>Country Code</th>
                    <th>Country</th>
                    <th>WebPage</th>
                   
                </tr>
            `
    console.log("page",page)        
    for(let i=page*25;i<(page*25)+25;i++){

   console.log("i",i)
    table.innerHTML+=`
    
                <tr>
                    <td>${dataList[i].name}</td>
                    <td>${dataList[i].alpha_two_code}</td>
                    <td>${dataList[i].country}</td>
                    <td>${dataList[i].web_pages[0]}</td>
                  
                  
                </tr>
                
    `
    }

   
    
}


async function getAPIData(APIURL){

    let responseObj=await fetch(APIURL);
    let responseContent=await responseObj.json()
    return responseContent

}

function main(APIURL){
    getAPIData(APIURL).then(responseData=>{
        // tableData(responseData)
        dataList=responseData
        tableData()

  }).catch((error)=>console.log("Error",error))
}



let universityAPIURL="http://universities.hipolabs.com/search"
main(universityAPIURL)

// tableData('e');