function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (!this.marks) {
        return 0;
    }
    if (marks.length > 0) {
        this.marks.push(...marks);
    }
}

Student.prototype.getAverage = function () {
    let sum = 0;
    if (!this.marks || this.marks.length === 0) {
        return 0;
    }
    for (let mark of this.marks) {
        sum += mark;
    }
    return sum / this.marks.length;

}

Student.prototype.exclude = function (reason) {
    this.excluded = reason;
    delete this.marks;
    delete this.subject;
}
