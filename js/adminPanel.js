const teacherName = document.getElementById("teacherName");
const teacherLastNAme = document.getElementById("teacherLastNAme");
const teacherHourlySalary = document.getElementById("teacherHourlySalary");
const teacherWorkTime = document.getElementById("teacherWorkTime");
const teachersBlock = document.getElementById("teachers-block");
document.addEventListener("DOMContentLoaded", function () {
    fetchData()
})

function fetchData() {
    fetch('http://localhost:8080/teachers')
        .then(response => response.json())
        .then(data => {

                data.forEach(element => {
                        console.log(element);
                        const teacherBlock = document.createElement("div");
                        teacherBlock.setAttribute("id", "teachersCard");


                        const teacherName = document.createElement("p");
                        teacherName.setAttribute("id", "teacherName");
                        teacherName.innerHTML = `<div> Name: ${element.name},</div>`


                        const teacherLastName = document.createElement("p");
                        teacherLastName.setAttribute("id", "teacher-last-name");
                        teacherLastName.innerHTML = `<div> Last Name: ${element.lastName}, </div>`;

                        const teacherHourlySalary = document.createElement("p");
                        teacherHourlySalary.setAttribute("id", "teacher-hourly-salary");
                        teacherHourlySalary.innerHTML = `<div> Teacherhourly salary: ${element.teacherHourlySalary}, </div>`;

                        const teacherStudent = document.createElement("p");
                        teacherStudent.setAttribute("id", "teacher-student");
                        teacherStudent.innerHTML = `<div> Student: ${element.students.length}, </div>`;


                        teacherBlock.appendChild(teacherHourlySalary)
                        teacherBlock.appendChild(teacherName)
                        teacherBlock.appendChild(teacherLastName)
                       teacherBlock.appendChild(teacherStudent)
                        teachersBlock.appendChild(teacherBlock)
                    }
                )
            }
        )
}


