function date() {
  let d = document.getElementById("calendar");
  let date = new Date(d.value);
  console.log(date.toString());
  let dateOut = document.getElementById("dateOut");
  dateOut.innerText = date.toString();
}
