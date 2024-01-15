const express = require('express');
const app = express();

app.use(express.json());

let ADMINS = [];
let USERS = [];
let COURSES = [];

const adminAuthentication = (req, res, next) =>{
const {username , password} =req.headers;
const admin = ADMINS.find(a => a.username == username && a.password == password);
if(admin){
  next();
}else {
  res.status(403).json({message :'admin authentication failed'});
}
};

const userAuthentication = (req, res, next) => {
  const { username, password } = req.headers;
  const user = USERS.find(u => u.username === username && u.password === password);
  if (user) {
    req.user = user;  // Add user object to the request
    next();
  } else {
    res.status(403).json({ message: 'User authentication failed' });
  }
};

// Admin routes
app.post('/admin/signup', (req, res) => {
  const admin = req.body;
  const existingadmin = ADMINS.find(a =>a.username ===admin.username);
  if(existingadmin){
    res.status(403).json({message:'admin already exist'})
  }else{
    ADMINS.push(admin);
    res.json({message:'admin created successfully'})
  }
});

app.post('/admin/login' ,adminAuthentication, (req, res) => {
  res.json({message: 'admin logged succesfully'})

});

app.post('/admin/courses',adminAuthentication, (req, res) => {

  const course = req.body;
  course.id = Date.now();
  COURSES.push(course);
  res.json({message:'course created successfully', courseId: course.id});
  //means anyhthing of content in body will go to course

});

app.put('/admin/courses/:courseId', adminAuthentication ,(req, res) => {
  const courseId = parseInt(req.params.courseId);
  const course = COURSES.find(c=> c.courseid === courseId);
  if(course){
object.assign(course ,req.body);
res.json({message:'course updated successfully'})
  }else{
    res.status(404).json({ message: 'Course not found' });
  }
});

app.get('/admin/courses', (req, res) => {
  res.json({courses : COURSES})
});

// User routes
app.post('/users/signup',  (req, res) => {
  const user = {
    username :req.body.username , 
password: req.body.password,
purchasedcourse :[]
  }

  USERS.pushed(user);
  res.json({message: 'user created successfully'});
});

app.post('/users/login',userAuthentication, (req, res) => {
 res.json({message: 'logged in successfully'})
});

app.get('/users/courses', (req, res) => {
 let filteredcourses = [];
 for (let i=0; COURSES.length> i ; i++){
  if (COURSES[i].published) {
    filteredCourses.push(COURSES[i]);
  }
 }
 res.json({ courses : filteredcourses});
});

app.post('/users/courses/:courseId', (req, res) => {
  const courseId = Number(req.params.courseId);
  const course = COURSES.find(c => c.id === courseId && c.published);
  if (course) {
    req.user.purchasedCourses.push(courseId);
    res.json({ message: 'Course purchased successfully' });
  } else {
    res.status(404).json({ message: 'Course not found or not available' });
  }
});

app.get('/users/purchasedCourses', (req, res) => {
  var purchasedCourseIds = req.user.purchasedCourses; [1, 4];
  var purchasedCourses = [];
  for (let i = 0; i<COURSES.length; i++) {
    if (purchasedCourseIds.indexOf(COURSES[i].id) !== -1) {
      purchasedCourses.push(COURSES[i]);
    }
  }

  res.json({ purchasedCourses });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
