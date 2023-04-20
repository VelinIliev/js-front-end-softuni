function main() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';
    const loadCourse = document.getElementById("load-course");
    const list = document.getElementById("list");
    const addCourseBtn = document.getElementById('add-course');
    const editCourseBtn = document.getElementById('edit-course');
    const courseTitle = document.getElementById("course-name");
    const courseType = document.getElementById('course-type');
    const courseDescr = document.getElementById("description");
    const courseTeacherName = document.getElementById("teacher-name");


    loadCourse.addEventListener("click", getData)
    addCourseBtn.addEventListener("click", sendData)

    function getData() {
        fetch(BASE_URL)
        .then(response => response.json())
        .then(data => displayCourses(data))
        .catch(error => console.log(error))
    }

    function displayCourses(data) {
        list.innerHTML = ''
        Object.values(data).forEach(el => {
            // console.log(el.title);
            // console.log(el.type);
            // console.log(el.description);
            // console.log(el.teacher);
            // console.log(el._id);

            let divEl = document.createElement("DIV");
            divEl.className = 'container';
            divEl.id = el._id
            list.appendChild(divEl);

            let titleEl = document.createElement("H2");
            titleEl.textContent = el.title;
            divEl.appendChild(titleEl);

            let teacherEl = document.createElement("H3");
            teacherEl.textContent = el.teacher;
            divEl.appendChild(teacherEl);

            let typeEl = document.createElement("H3");
            typeEl.textContent = el.type;
            divEl.appendChild(typeEl);

            let descrEl = document.createElement("H4");
            descrEl.textContent = el.description
            divEl.appendChild(descrEl);

            let editBtn = document.createElement("BUTTON");
            editBtn.className = 'edit-btn';
            editBtn.textContent = "Edit Course";
            divEl.appendChild(editBtn);

            let finishBtn = document.createElement("BUTTON");
            finishBtn.className = 'finish-btn';
            finishBtn.textContent = "Finish Course";
            divEl.appendChild(finishBtn);
            

            editBtn.addEventListener("click", editCourse);
            finishBtn.addEventListener("click", finishCourse);
        });
        
    }
    function editCourse(e) {
        let currentCourse = e.currentTarget.parentNode;
        let courseId = currentCourse.id
        courseTitle.value = currentCourse.querySelector("h2").textContent;
        courseType.value = currentCourse.querySelector("h3:nth-child(3)").textContent;
        courseDescr.value = currentCourse.querySelector("h4").textContent;
        courseTeacherName.value = currentCourse.querySelector("h3:nth-child(2)").textContent;

        editCourseBtn.disabled = false;
        addCourseBtn.disabled = true;
        editCourseBtn.addEventListener("click", (e) => {
            e.preventDefault()
            editData(courseId);
            console.log(courseId);
        })
    }
    function finishCourse(e) {
        e.preventDefault();
        let currentCourse = e.currentTarget.parentNode;
        let courseId = currentCourse.id;
        // console.log(courseId);
        fetch(BASE_URL + courseId, {
            method: 'DELETE',
            })
        .then(res => res.json()) 
        .then(data => getData())
    }

    function sendData(e) {
        e.preventDefault()
        if (courseType.value === "Long" || courseType.value === "Medium" || courseType.value === "Short" ){
            fetch(BASE_URL, {
                method: "POST",
                body: JSON.stringify({
                    "title": courseTitle.value,
                    "type": courseType.value,
                    "description": courseDescr.value,
                    "teacher": courseTeacherName.value,
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(data => getData())
            .catch((error) => console.log(error))
        }
        courseTitle.value = '';
        courseType.value = '';
        courseDescr.value = '';
        courseTeacherName.value = '';
        
    }
    function editData(courseId) {
        fetch(BASE_URL + courseId, {
            method: "PATCH",
            body: JSON.stringify({
                "title": courseTitle.value,
                "type": courseType.value,
                "description": courseDescr.value,
                "teacher": courseTeacherName.value,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(data => {
            clear()
            getData()
        })
        .catch((error) => console.log(error))    
    }
    function clear(params) {
        courseTitle.value = '';
        courseType.value = '';
        courseDescr.value = '';
        courseTeacherName.value = '';

        editCourseBtn.disabled = true;
        addCourseBtn.disabled = false;
    }
}

main()