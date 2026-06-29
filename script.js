        const courses = {
            ME200: {
                title: "Thermodynamics I",
                desc: "Energy, heat, and work systems."
            },
            ME270: {
                title: "Statics",
                desc: "Forces and equilibrium."
            }
        };

        function showCourse(code) {
            const course = courses[code];

            document.getElementById("title").innerText = course.title;
            document.getElementById("desc").innerText = course.desc;

            document.getElementById("popup").style.display = "block";
        }