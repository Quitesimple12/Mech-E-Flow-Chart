import courses from "./courseData";

const semesterGroups = {
  "Freshman Fall": [],
  "Freshman Spring": [],
  "Sophomore Fall": [],
  "Sophomore Spring": [],
  "Junior Fall": [],
  "Junior Spring": [],
  "Senior Fall": [],
  "Senior Spring": [],
};

// fill automatically from course data
Object.entries(courses).forEach(([id, course]) => {
  if (semesterGroups[course.semester]) {
    semesterGroups[course.semester].push(id);
  }
});

export default semesterGroups;