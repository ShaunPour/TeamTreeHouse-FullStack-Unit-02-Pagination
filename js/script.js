/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
const showPage = (list, page) => {
   const startIndex = page * 9 - 9;
  let endIndex = page * 9;
  const students = document.querySelector('.student-list');

  students.innerHTML = '';

   for (let i = startIndex; i >= startIndex && i < endIndex; i++) {
    const student = `
    <li class="student-item cf">
      <div class="student-details">
        <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
        <h3>${list[i].name.first} ${list[i].name.last}</h3>
        <span class="email">${list[i].email}</span>
      </div>
      <div class="joined-details">
        <span class="date">Joined ${list[i].registered.date}</span>
      </div>
    </li>`;
    students.insertAdjacentHTML('beforeend', student);
  };
}

const addPagination = (list) => {
   let numOfPages = Math.ceil(list.length/9);

   const pageBtnNum = document.querySelector(".link-list");
   pageBtnNum.innerHTML = '';

   for(let i = 0; i < numOfPages; i++) {
      let list = document.createElement('li');
      let btn = document.createElement('button');
      btn.textContent = `${i+1}`;
      list.append(btn);
      pageBtnNum.append(list);
   }
}
addPagination(data);

showPage(data, 1);