JSON.parse(localStorage.getItem("studentsData"))


let whatsappURL =
"https://wa.me/94787457959?text=" + message;

window.open(whatsappURL,"_blank");

}
function registerStudent(event){

event.preventDefault()

let name=document.getElementById("name").value
let school=document.getElementById("school").value
let grade=document.getElementById("grade").value
let phone=document.getElementById("phone").value

let student={

name:name,
school:school,
grade:grade,
phone:phone

}

let students=JSON.parse(localStorage.getItem("students")) || []

students.push(student)

localStorage.setItem("students",JSON.stringify(students))


    // localStorage එකට save කරලා දාන්න
    localStorage.setItem("students", JSON.stringify(students))

    alert("Student registered successfully!")
    event.target.reset()
}
const form = document.getElementById('activity-form');
const response = document.getElementById('response');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // Page reload epa karanawa

  const answer = document.getElementById('answer').value.trim().toLowerCase();

  // Correct answer check
  if(answer === "information and communication technology") {
    response.textContent = "Correct! 👍";
    response.style.color = "green";
  } else {
    response.textContent = "Try again! ❌";
    response.style.color = "red";
  }
});
localStorage.setItem("studentsData", JSON.stringify(students));