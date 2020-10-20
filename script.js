function replace(id,e) {document.getElementById("view").innerHTML = e;return};
function p(e) {return console.log(e);}; function print(e) {p(e);};


function openFile(filePath) {
  var result = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", filePath, false);
  xmlhttp.send();
  if (xmlhttp.status==200) {
    result = xmlhttp.responseText;
  }
  return result;
};

replace("view",openFile("/Files/Pages/gameIndex.html"))