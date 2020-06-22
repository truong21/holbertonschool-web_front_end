function createClassRoom(numbersOfStudents) {
  function studentSeat(seat) {
    return () => {return seat};
  const students = [];
  for (let i = 0; i < numberOfStudents; i++) {
    students[i] = studentSeat(i + 1);
  }
  return students;
}

const classRoom = createClassRoom(10);
