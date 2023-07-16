class User {
  constructor(name, surname, YearHappy) {
    this.name = name;
    this.surname = surname;
    this.birthYear = YearHappy;
  }

  get age() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.YearHappy;
  }

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
}

class Student extends User {
  constructor(name, surname, YearHappy) {
    super(name, surname, YearHappy);
    this.marks = [];
    this.attendance = [];
  }

  present() {
    this.attendance.push(true);
  }

  absent() {
    this.attendance.push(false);
  }

  setMark(mark) {
    this.marks.push(mark);
  }

  get mediumMark() {
    if (this.marks.length === 0) {
      return 0;
    }
    const sum = this.marks.reduce((acc, mark) => acc + mark, 0);
    return sum / this.marks.length;
  }

  get mediumVisit() {
    if (this.attendance.length === 0) {
      return 0;
    }
    const presentCount = this.attendance.filter((status) => status).length;
    return presentCount / this.attendance.length;
  }

  get summary() {
    const averageMark = this.mediumMark;
    const averageVisit = this.mediumVisit;

    if (averageMark > 9 && averageVisit > 0.9) {
      return `Середня оцінка: ${averageMark.toFixed(
        2
      )}. Середнє відвідування: ${averageVisit.toFixed(
        2
      )}. Молодець! Так тримати!`;
    } else if (averageMark > 9 || averageVisit > 0.9) {
      return `Середня оцінка: ${averageMark.toFixed(
        2
      )}. Середнє відвідування: ${averageVisit.toFixed(
        2
      )}. Норм. Але можна постаратись і краще.`;
    } else {
      return `Середня оцінка: ${averageMark.toFixed(
        2
      )}. Середнє відвідування: ${averageVisit.toFixed(
        2
      )}. Погано! Так ти нічому не навчишся.`;
    }
  }
}

class Teacher extends User {
  constructor(name, surname, YearHappy) {
    super(name, surname, YearHappy);
    this.groups = [];
  }

  addGroup(group) {
    this.groups.push(group);
  }

  changeStatus(group) {
    const targetGroup = this.groups.find((g) => g.name === group.name);
    if (targetGroup) {
      targetGroup.active = group.active;
    }
  }

  get activeGroups() {
    return this.groups.filter((group) => group.active);
  }
}

const student = new Student("Andrew", "Anton", 1990);
student.present();
student.setMark(5);
student.setMark(2);
student.absent();
console.log(student.mediumMark);
console.log(student.mediumVisit);
console.log(student.summary);

const teacher = new Teacher("Alex", "Veronica", 1970);
const group1 = { name: "Group a", active: true };
const group2 = { name: "Group b", active: false };
teacher.addGroup(group1);
teacher.addGroup(group2);
console.log(teacher.groups);
group2.active = true;
teacher.changeStatus(group2);
console.log(teacher.activeGroups);
