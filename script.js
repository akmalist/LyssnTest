
//fetch data from json file
fetch('data.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log(err);
  });

//append fetched data to html 
function appendData(data) {
  let mainContainer = document.getElementById("main");
  for (let i = 0; i < data.length; i++) {
    let div = document.createElement("div");
    //convert first letter to to upper case
    let firstName =  data[i].fname.charAt(0).toUpperCase() + data[i].fname.slice(1);
    let lastName = data[i].lname.charAt(0).toUpperCase() + data[i].lname.slice(1);
    //display converted data 
    div.innerHTML= lastName + ', ' + firstName ;
    mainContainer.appendChild(div);
  }
}



 