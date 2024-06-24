const studentForm=document.getElementById("studentForm");
const studentsContainer=document.querySelector(".students");
const nameInput=studentForm["name"];
const ageInput=studentForm["age"];
const rollInput=studentForm["roll"];


const students=[
    
    
    
];
const addStudent=(  name,age,roll)=>{
  student.push({

    name:name,
    age:age,
    roll:roll,
  })  

return{name,age,roll };

};
const createStudentElement=( {name, age, roll})=>{
    //create Elements

    const studentDiv=document.createElement('div');
    const studentName=document.createElement('h2');
    const studentAge=document.createElement('p');
    const studentRoll=document.createElement('p');
//Fill content
    studentName.innerText="Student name: "+ name;
    studentAge.innerText="Student name: "+ age;
    studentRoll.innerText="Student name: "+ roll;

//Add to the DOM
    studentDiv.append(studentName, studentAge,studentRoll);
    studentsContainer.appendChild(studentDiv);
};
students.forEach(createStudentElement);
studentForm.onsubmit=(e) => {
e.preventDefault();


newStudent =addStudent(

    nameInput.value,
    ageInput.value,
    rollInput.value,
);
createStudentElement(newStudent)
nameInput.value="";
ageInput.value="";

rollInput.value="";
};
