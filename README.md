# Student-Tracker
This app will act as a student-data tracker. The purpose of the app is to integrate, and get comfortable with all components of the RESTful app implementation. This repository includes a REST-Client under **"student-Tracker-frontend"** and a REST-service under **"student-tracker-backend"**. React was the framework which was used in the frontend and the backend was written using JavaSpringBoot framework. the database and the front client is then compiled and hosted on render.com, however the backend is hosted on the Railway.app to improve efficiency and speed.


# User workflow
A user will click on the **ADD STUDENT** in order to make a new student, and after fillin in the form will press the **ADD**  button in order to submit the form. the data will then send into the back end and proccessed, while simultaneously the user will be redirected to the main page again and the new student will be displayed.
The user can then view each student's name, email, password, and also click on the :


- **View Button** : after clicked a modal will be displayed on the page showing the student's information, along side a representation of their person model with a rectangular shape. 
 
- **Edit Button** : after clicked user will be redirected to a new page, which then he/she can update the information of the student chosen.
 
- **Remove Button** : after clicked the user will delete the chosen student from the table and all the information related to the student.
<br>

### A Demo video for the User Workflow

https://github.com/peyz21/Student-Tracker/assets/64120482/e56eb261-31b4-4a91-b5a8-7e516be60a46


### Dataflow Display

![dataflow](https://github.com/peyz21/Student-Tracker/assets/64120482/2d49b6ad-6d63-4589-a2e4-edf651ccf5d0)

The data inputted from user will move to the API service, and the to the database to be stored in the **"students"** datatable and when requested it will be passed through server back to the WebApp and displayed on the homepage of the web application. The data is transformed in the format of JSON file. 


### WebApp Link
The website can be accessed through the link below: 
https://student-tracker-front.onrender.com
