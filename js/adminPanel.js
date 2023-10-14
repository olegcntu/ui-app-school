const teachersBlock = document.getElementById("teachers-block");
const addTeacher = document.getElementById("add-teacher")

const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const closeButton = document.getElementById("close-button");
const createTeacher = document.getElementById("create-teacher");
const name = document.getElementById("name");
const lastName = document.getElementById("last-name");
const hourlySalary = document.getElementById("hourly-salary");
const responseService = document.getElementById("responseService")

function openModal() {
    modal.style.display = 'block';
    teachersBlock.classList.add('blur');
}

function closeModal() {
    modal.style.display = 'none';
    teachersBlock.classList.remove('blur');
}

addTeacher.addEventListener('click', openModal)
closeButton.addEventListener('click', closeModal)
createTeacher.addEventListener('click', () => {
    const addName = name.value
    const addLastName = lastName.value
    const addHourlySalary = hourlySalary.value

    const data = {
        name: addName,
        lastName: addLastName,
        teacherHourlySalary: addHourlySalary
    }
    console.log(data)

    const option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    fetch('http://localhost:8080/add-teacher', option)
        .then(response => response.json())
        .then(data => {
             console.log(data)

            if(data.successful === true){
                responseService.innerHTML= data.message
                setTimeout(()=>{
                    responseService.innerHTML= data.message
                    location.reload()
                },2000)
            }else{
                   responseService.innerHTML= data.errors
            }
            // closeModal()
        })

})

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
                        teacherBlock.setAttribute("class", "teachersCard");
                        teacherBlock.setAttribute("id", element.id);
                        teacherBlock.addEventListener('click', function (){
                            console.log(element.id)
                        })


                        const teacherName = document.createElement("p");
                        teacherName.innerHTML =
                            `<div class="flex">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMA
                                AAsTAAALEwEAmpwYAAAA70lEQVR4nO3UQUrDQBSH8R8umqVdWrrWK+hJxEPYHsNuRPFAurR1ZfEAuinVlUUUXVYG
                                JiCCdNJObCn54A8heeGbl8wbGjaUAn2M8BETrnvxWS10Mcb8j9zHmqwUC6Q/5Vk77ydIy5zmFN9VEA9zit8riENt
                                NuYVs5aO37biH/fWtauLOKMpc9ySme4CeS0nV0krfsph3HAht/Fe9k4b/pUdHGGAGzzjK2aKa5zhMNauTAcXeKkw
                                x2FR59hbRtjGFT6XOKfLhHcvsZsqPcDTCsLfecR+ivgho7TMOEU8rUE8SRGfYJZR+orjFHHDdvENyZP0ibBvoI8A
                                AAAASUVORK5CYII=">
                                Name: <span class="elementColor">${element.name}</span>;
                            </div>`;


                        const teacherLastName = document.createElement("p");
                        teacherLastName.innerHTML =
                            `<div class="flex"> 
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMA
                                AAsTAAALEwEAmpwYAAAA70lEQVR4nO3UQUrDQBSH8R8umqVdWrrWK+hJxEPYHsNuRPFAurR1ZfEAuinVlUUUXVYG
                                JiCCdNJObCn54A8heeGbl8wbGjaUAn2M8BETrnvxWS10Mcb8j9zHmqwUC6Q/5Vk77ydIy5zmFN9VEA9zit8riENt
                                NuYVs5aO37biH/fWtauLOKMpc9ySme4CeS0nV0krfsph3HAht/Fe9k4b/pUdHGGAGzzjK2aKa5zhMNauTAcXeKkw
                                x2FR59hbRtjGFT6XOKfLhHcvsZsqPcDTCsLfecR+ivgho7TMOEU8rUE8SRGfYJZR+orjFHHDdvENyZP0ibBvoI8A
                                AAAASUVORK5CYII=">
                                Last Name: <span class="elementColor">${element.lastName}</span>; 
                            </div>`;

                        const teacherHourlySalary = document.createElement("p");
                        teacherHourlySalary.innerHTML =
                            `<div class="flex"> 
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMA
                                AAsTAAALEwEAmpwYAAABXUlEQVR4nO2VvUoDQRSFPyPZSvBNbCzFFxDF4E9S6QvYKL6EmjSW6cO2Vr6AYBdbTfAP
                                fADBjaL4t7JwB5aQO5vZmcJiD1xY7px7Dntn5g5UqPAPEAEtIAYGwKvEQHJN4QTFJnAPpAVxB2yEMJwFOlMYjkcb
                                qPkYd0qYmjj2aW9qCQMbp+FqGhXsaT/H7Vt4t64HrmUROxTOTG4f9y38bRfjWBF5EMNlIAFGwKrUXCs1PRfjoSJy
                                JetLwJPkPoBn4FOpye751EgUkS9gUThZmxeAA9lLrdVJCONUptUpsALMC38OeAxhPFRExtv6DuxJTTdEq2NF5EzW
                                d4AX4A3Yldx5iMPVVES+gbUcz1ynbD7/KDVbLsaRDPxJQr/ARY57KTltgNRdjM1f+I7MdUqiXSBsiyM8UANOSr5M
                                Xs+iQaNgSOT3tHR7NdRl4GfX40bm9Ei+e3J6nQ9ShQqExh+aOg83z4misAAAAABJRU5ErkJggg=="> 
                                Hourly salary: <span class="elementColor">${element.teacherHourlySalary}</span>; 
                            </div>`;

                        const teacherStudent = document.createElement("p");
                        teacherStudent.innerHTML =
                            `<div class="flex">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMA
                                AAsTAAALEwEAmpwYAAACAUlEQVR4nO2Vz0sVURTHP5BGQqIRtKiFixaKEAjRpgzahP4BLjQ3thJBCXuLFvYLQtu4
                                sk2li0AqkUJBDAoUXbp4RIWkEEgIhvZDX4uoBF8cOAPD5cyd+94UbTxwNvd8z/cz986ZO7Af/zmuAwXgAzACHCmh
                                9yTwHNgEPgM30hqOAhPAd6Do5BJwMAB6QmFu/zrQmNT01GiIZ1cA+L6nf9pqkKP85WnaA7oDwK88HltWw7mU3Q6o
                                rgK4AuSBH8AnoC/mcwh4meDx0wK3eaDvgANApcf0I9CjXsd0MF3Newvc7gFfVU1vyqlINqt2zKitWuDOALOFALAM
                                l8Rlo7ZsgS1hlA2qWQkAz6q2xaidtsDXPGYXVfMiAHxPtR3O+iIJMekxux3wOqKUIZUYdtaPJ4HlM7gEPARmEnaR
                                CwBHg3jXWQ+KSqcpuiplyHY9ULmAmlT7xKl1pEEF8sBpGtUTsXYSzyHV1ALbxs33DDjvAsW4Xy9zy/Rx7GpdM+pr
                                Ckx7uCIwrjcgdfpx+8TyxK1qXG/UZU3iAvA7YBZyIp4KEO7pK4jCrUfxKMCrCLwW8dcU0RxwJmZ+ytDIWhRngfkU
                                z520YXPnQP7JG4bRht5+VfzFOAzcAb4EHOE3YBCozgqt0X9vscTMa2/ZcasMaJQ3s4DfZgC/yQIuZACXNLn7wb+K
                                P6SLmEc84zRuAAAAAElFTkSuQmCC">
                                Student: <span class="elementColor">${element.students.length}</span>; 
                            </div>`;

                        const teacherWorkTime = document.createElement("p");
                        teacherWorkTime.innerHTML =
                            `<div class="flex">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMA
                                AAsTAAALEwEAmpwYAAABIElEQVR4nO2WT07CUBDGf5dgIf/COeQEJkq8BopwFncaCQuX7hFuQo2noLCjDeYl08QY
                                +95M20dY8CXfpk3ml/k6b17hojNUH3gC1kAC7MWJPJsAvSaBHeAVyIBjwDnwAQzqQu+BXQnkGhiWvEuBUVXoTDoo
                                666Qr/tplU7zQKwhcAFXd971xGsFF7G3NeCFopgF7PymOTJZBHAmSZZqqixkBR+BRx94FRG89IG/I4ITHzj9Z0mE
                                pAWnFvDwVOAvQyGrN00Nl9VLH3gSETz2gXuGBWLxIbRAnOYRwC8oL/6/013HW+AKpW4aitxdi3da6O+9ndeEun+0
                                ShpVjN3Fe0tNtYBnmUxNl++Wb6pRV662T9lCO/FGlsOD5shcxKn1A1aanROKFzpxAAAAAElFTkSuQmCC" 
                                class="svg">
                                Work time: <span class="elementColor">${element.workTime}</span>; 
                            </div>`;

                        const teacherEarned = document.createElement("p");
                        teacherEarned.innerHTML=
                            `<div class="flex">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMA
                                AAsTAAALEwEAmpwYAAABSklEQVR4nO3WvUoDQRSG4dc0QWOIYOUF2AS09Qq0UAtvQbCwEixNCrs0UQjkFsQUYqu2
                                IhZGVND40whphEis/CGdysAElmXPZnY5o00+OCycHfZhZ3aZgWHkLANN4NNel/gj9CeiVnzDlwJ84Rt+F2DT95rm
                                f73xAvAdAS/6AkeB3IAxE8AmMBPqF4HtpLMyAmwAHeAYyArjTP8kMAPXwA7QCvRuXVHzsANhTdNUxRWuKaI9YMoF
                                nRU+orT1Zdd6YHYV0X7dAJk49FwJ2rJ/Qsn1tztTgsft8/KB3iOwBhQk/EMBLlm8HHHvQYLvPKxxsF4keM8z3JDg
                                ec/wugRn7HT4QFvAJDE5UgbvgTEcUlVE3yJ2LTGrSugzME2CzCnBZrtMlLywUdSBfeAJ6Nox5szVFg6Dr6RII4Rf
                                xRwG+geHwxB8mgYeBu38AnAJhBhjKVpfAAAAAElFTkSuQmCC">
                                Earned: <span class="elementColor">${element.workTime * element.teacherHourlySalary} </span>;
                            </div>`;

                        teacherBlock.appendChild(teacherName);
                        teacherBlock.appendChild(teacherLastName);
                        teacherBlock.appendChild(teacherHourlySalary);
                        teacherBlock.appendChild(teacherStudent);
                        teacherBlock.appendChild(teacherWorkTime);
                        teacherBlock.appendChild(teacherEarned);
                        teachersBlock.appendChild(teacherBlock);

                    }
                )
            }
        )
}


