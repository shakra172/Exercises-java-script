const students = [
    { name: "Updishakuur", id: "CA230720", class: "CA236", facult: "IT" },
    { name: "Updinuur", id: "CA230622", class: "CA233", facult: "IT" },
    { name: "Yaasir", id: "CA230520", class: "CA235", facult: "IT" },
    { name: "Zakariya", id: "CA230814", class: "CA2311", facult: "IT" }
];

console.log("Properties and values of each person:");

for (const student of students) {
    
    for (const property in student) {
        console.log(`${property}: ${student[property]}`);
    }
    console.log("---"); 
}