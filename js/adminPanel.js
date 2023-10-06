const teacherName = document.getElementById("teacherName");
const teacherLastNAme = document.getElementById("teacherLastNAme");
const teacherHourlySalary = document.getElementById("teacherHourlySalary");
const teacherWorkTime = document.getElementById("teacherWorkTime");
document.addEventListener("DOMContentLoaded", function (){
    fetchData()
})

function  fetchData(){
    fetch('http://localhost:8080/teachers')
        .then(response => response.json())
        .then(data =>
            data.forEach( element => {

                }

            )
        )
}

