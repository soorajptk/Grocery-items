function load() {
  const xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let obj = JSON.parse(this.responseText);
      let text =
        "" +
        "<table>" +
        "<caption>" +
        "Grocery Items" +
        "</caption>" +
        "<tr>" +
        "<th>" +
        "Serial No" +
        "</th>" +
        "<th>" +
        "Name" +
        "</th>" +
        "<th>" +
        "Quantity" +
        "</th>" +
        "<th>" +
        "Unit" +
        "</th>" +
        "<th>" +
        "Departments" +
        "</th>" +
        "<th>" +
        "Notes" +
        "</th>" +
        "<th>" +
        "status" +
        "</th>" +
        "</tr>";
      for (let x in obj.array) {
        text +=
          "<tr>" +
          "<td>" +
          obj.array[x].serial_no +
          "</td>" +
          "<td>" +
          obj.array[x].name +
          "</td>" +
          "<td>" +
          obj.array[x].quantity +
          "</td>" +
          "<td>" +
          obj.array[x].unit +
          "</td>" +
          "<td>" +
          obj.array[x].department +
          "</td>" +
          "<td>" +
          obj.array[x].Notes +
          "</td>" +
          "<td>" +
          obj.array[x].status +
          "</td>" +
          "</tr>";
      }

      text +=
        "<tr>" +
        "<td>" +
        "<input id='no' type='text' placeholder='no.'>" +
        "</td>" +
        "<td>" +
        "<input id='name' type='text' placeholder='Name'>" +
        "</td>" +
        "<td>" +
        "<input id='quantity' type='text' placeholder='quantity'>" +
        "</td>" +
        "<td>" +
        "<input id='unit' type='number' placeholder='unit.'>" +
        "</td>" +
        "<td>" +
        "<input id='department' type='text' placeholder='department'>" +
        "</td>" +
        "<td>" +
        "<input id='notes' type='text' placeholder='Notes'>" +
        "</td>" +
        "<td>" +
        "<input id='check' type='checkbox'>" +
        "</td>" +
        "</tr>";
      text += "</table>";
      document.getElementById("demo").innerHTML = text;
    }
  };
  xhttp.open("GET", "word.json", true);
  xhttp.send();
}
let count=0;

function edit(obj, label) {
 
  if (obj.checked) {   
     count++;
    label.innerHTML = "<del>" + label.textContent + "</del>";
    label.style.color = "black";
  } else {
    count--;
    label.innerHTML = label.textContent;
    label.style.color = "#fff";
  }

  
  document.getElementById("deo").innerHTML=10-count;
  document.getElementById("remain").innerHTML="Remaining Items";

  
  


}













// function add() {
//   let no = document.getElementById("no").value;
//   let names = document.getElementById("name").value;
//   let quantitys = document.getElementById("quantity").value;
//   let units = document.getElementById("unit").value;
//   let departments = document.getElementById("department").value;
//   let note = document.getElementById("notes").value;
//   let txt = {
//     serial_no: `${no}`,
//     name: `${names}`,
//     quantity: `${quantitys}`,
//     unit: `${units}`,
//     department: `${departments}`,
//     Notes: `${note}`,
//   };
//   let convert = JSON.stringify(txt);
//   localStorage.setItem("myfile", convert);
//   let obj = localStorage.getItem("myfile");
//   let x = JSON.parse(obj);

//   // array.push(convert);
//   console.log(x);
// }

// function add(){

// }

function add() {
  let no = document.getElementById("no").value;
  let names = document.getElementById("name").value;
  let quantitys = document.getElementById("quantity").value;
  let units = document.getElementById("unit").value;
  let departments = document.getElementById("department").value;
  let note = document.getElementById("notes").value;
  let txt = {
    serial_no: `${no}`,
    name: `${names}`,
    quantity: `${quantitys}`,
    unit: `${units}`,
    department: `${departments}`,
    Notes: `${note}`,
    status:`<input type="checkbox">`
  };
//   let convert=JSON.stringify(txt);
//   array.push(convert);
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    let arr = this.responseText;
    let objs = JSON.parse(arr);
    objs["array"].push(txt);
    let x = JSON.stringify(objs);
    localStorage.setItem("testJSON", x);

    let y = localStorage.getItem("testJSON");
    let obj = JSON.parse(y);
    let text =
      "" +
      "<table>" +
      "<caption>" +
      "Grocery Items" +
      "</caption>" +
      "<tr>" +
      "<th>" +
      "Serial No" +
      "</th>" +
      "<th>" +
      "Name" +
      "</th>" +
      "<th>" +
      "Quantity" +
      "</th>" +
      "<th>" +
      "Unit" +
      "</th>" +
      "<th>" +
      "Departments" +
      "</th>" +
      "<th>" +
      "Notes" +
      "</th>" +
      "<th>" +
      "status" +
      "</th>" +
      "</tr>";
    for (let x in obj.array) {
      text +=
        "<tr>" +
        "<td>" +
        obj.array[x].serial_no +
        "</td>" +
        "<td>" +
        obj.array[x].name +
        "</td>" +
        "<td>" +
        obj.array[x].quantity +
        "</td>" +
        "<td>" +
        obj.array[x].unit +
        "</td>" +
        "<td>" +
        obj.array[x].department +
        "</td>" +
        "<td>" +
        obj.array[x].Notes +
        "</td>" +
        "<td>" +
        obj.array[x].status +
        "</td>" +
        "</tr>";
    }
    text +=
      "<tr>" +
      "<td>" +
      "<input id='no' type='text' placeholder='no.'>" +
      "</td>" +
      "<td>" +
      "<input id='name' type='text' placeholder='Name'>" +
      "</td>" +
      "<td>" +
      "<input id='quantity' type='text' placeholder='quantity'>" +
      "</td>" +
      "<td>" +
      "<input id='unit' type='number' placeholder='unit.'>" +
      "</td>" +
      "<td>" +
      "<input id='department' type='text' placeholder='department'>" +
      "</td>" +
      "<td>" +
      "<input id='notes' type='text' placeholder='Notes'>" +
      "</td>" +
      "<td>" +
      "<input id='check' type='checkbox'>" +
      "</td>" +
      "</tr>";
    text += "</table>";
    document.getElementById("demo").innerHTML = text;
  };

  xhttp.open("GET", "word.json", true);
  xhttp.send();
}
