function bodyLoad(){
  let dt = new Date();
  document.querySelector("pre").innerHTML =
    `Page loaded on ${dt.toLocaleString("default")}`;

}
function fnLoad(){
  let http= new XMLHttpRequest();
  http.open("GET", "../data/log.txt", true);
  http.send();
  http.onreadystatechange=function(){
    if(http.readyState===4){
      document.getElementById("g").innerHTML=http.responseText;
    }
  };
}
