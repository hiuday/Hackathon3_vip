const students = JSON.parse(localStorage.getItem("students")) || [];
const emails = JSON.parse(localStorage.getItem("emails")) || [];
const telphones = JSON.parse(localStorage.getItem("telphone")) || [];
const addresss = JSON.parse(localStorage.getItem("addresss")) || [];
const genders = JSON.parse(localStorage.getItem("genders")) || [];
renderstudents(students);

function handleAdd() {
  // b1 : lấy thông tin từ local , trả về mảng
  const students = JSON.parse(localStorage.getItem("students")) || [];
  const emails = JSON.parse(localStorage.getItem("emails")) || [];
  const telphones = JSON.parse(localStorage.getItem("telphone")) || [];
  const addresss = JSON.parse(localStorage.getItem("addresss")) || [];
  const genders = JSON.parse(localStorage.getItem("genders")) || [];

  //   b2: lấy thông tin từ input
  const studentsElement = document.getElementById("inputAdd1");
  const emailElement = document.getElementById("inputAdd2");
  const telphoneElement = document.getElementById("inputAdd3");
  const addressElement = document.getElementById("inputAdd4");
  const genderElement = document.getElementById("inputAdd5");
  const studentname = studentsElement.value;
  const emailname = emailElement.value;
  const telphonename = telphoneElement.value;
  const addressname = addressElement.value;
  const gendername = genderElement.value;

  //   Xoa input
  studentsElement.value = "";
  emailElement.value = "";
  telphoneElement.value = "";

  addressElement.value = "";
  genderElement.value = "";

  //   b3: lưu thông tin vào mảng
  const student = {
    name: studentname,
  };
  const email = {
    email: emailname,
  };
  const telphone = {
    tel: telphonename,
  };
  const address = {
    address: addressname,
  };
  const gender = {
    gender: gendername,
  };

  students.push(student);
  emails.push(email);
  telphones.push(telphone);
  addresss.push(address);
  genders.push(gender);

  //   b4: lưu thông tin vào localstore
  localStorage.setItem("students", JSON.stringify(students));
  localStorage.setItem("emails", JSON.stringify(emails));
  localStorage.setItem("telphone", JSON.stringify(telphones));
  localStorage.setItem("addresss", JSON.stringify(addresss));
  localStorage.setItem("genders", JSON.stringify(genders));
  renderstudents(students);
}
function renderstudents(data) {
  console.log(data);
  const listStudentsElement = document.querySelector("#list_student_2");
  let listStudentsContent = "";
  data.forEach(students, (index) => {
    console.log(students, index);
    listStudentsContent += `<table id="list_student_2">
    <tr>
      <td>#</td>
      <td>${students}</td>
      <td>${emails}</td>
      <td>${telphones}</td>
      <td>${addresss}</td>

      <td>${genders}</td>
      <td>hanh dong</td>
      <td><button>sap xep alpha</button></td>
    </tr>
  `;
  });
  listStudentsElement.innerHTML = listStudentsContent;
}
//check cac o input 
function isValidEmail(emails) {
  const studentEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return studentEmail.test(emails);
}

function isValidPhoneNumber(telphones) {
  const studentPhone = /(09|03|07|08|05)+([0-9]{8})\b/;
  return studentPhone.test(telphones);
}

if (studentname === "") {
  alert("Họ và tên không được để trống");
  return;
}

if (!isValidEmail(studentEmail)) {
  alert("Email không đúng định dạng");
  return;
}

if (!isValidPhoneNumber(studentPhone)) {
  alert("Số điện thoại không đúng định dạng");
  return;
}

if (studentAddress === "") {
  alert("Quê quán không được để trống");
  return;
}
// search ten hoc vien
function handleSearch(valueSearch) {
  const students = getDataFromLocalStorage("students") || [];
  const dataFilter = [];

  students.forEach((student) => {
    if (students.name.toLowerCase().includes(valueSearch.toLowerCase())) {
      dataFilter.push(student);
    }
  });
  renderstudents(dataFilter);
}
