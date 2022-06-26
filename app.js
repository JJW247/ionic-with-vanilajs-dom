const courseNameInput = document.querySelector('#input-course-name');
const courseRatingInput = document.querySelector('#input-course-rating');
const addBtn = document.querySelector('#btn-add');
const courseList = document.querySelector('#course-list');
const ionAppContainer = document.querySelector('ion-app');

addBtn.addEventListener('click', () => {
  const enteredCourseName = courseNameInput.value;
  const enteredCourseRating = courseRatingInput.value;

  if (
    enteredCourseName.trim().length <= 0 ||
    enteredCourseRating.trim().length <= 0 ||
    enteredCourseRating < 1 ||
    enteredCourseRating > 5
  ) {
    const alertCtrl = document.createElement('ion-alert');
    alertCtrl.header = 'Invalid Input';
    alertCtrl.message = 'Please enter a valid course name and rating';
    alertCtrl.buttons = ['Okay'];
    ionAppContainer.appendChild(alertCtrl);
    alertCtrl.present();
    return;
  }

  const newItem = document.createElement('ion-item');
  newItem.innerHTML = `<strong>${enteredCourseName}:</strong> ${enteredCourseRating}/5`;

  courseList.appendChild(newItem);

  courseNameInput.value = '';
  courseRatingInput.value = '';
});
