const Student = require('../models/studentPost')
const Courses = require('../models/course')
const { getByOne, getBy_withpage, getAll_withpage, Patchdata, getBy, postdata, getAll, Deletedata} = require('../services/routes');
const User = require('../models/User');
const Student_Exma = require('../models/Student_Exma');
const Daily_Task = require('../models/Daily_Task');
const Daily_Task_Score = require('../models/Daily_Task_Score');
const Student_Class_Room = require('../models/Student_Class_Room');


//Search Student post by post name


module.exports.SearchStudentPost = async (req, res) => {
  const  search=req.query.search
  try {
    const student = await Student.find( { post_Title: { "$regex": search, "$options": "i" } });
    if (student.length==0) {
      res.json({ message: "Post Is not Found", status: false });
    } else {
      res.json({
        message: "Student Post  is found",
        student: student,
        status: true
      });

    }
  } catch (error) {
    res.json({ message: error.message, status: false });
  }
};


//postStudent
module.exports.studentpost = async (req, res) => {
  let val = req.body
  // console.log(req);
  val['studentImage'] = req.file.originalname
  const data = await postdata(Student, val)
  res.status(200).json({
    message: 'Student post is successfully',
    data: data
  })
};

//get API=---
module.exports.studentget = async (req, res) => {
  const data = await getAll_withpage(Student, req.query.page)
  res.status(200).json({
    message: 'Student All Post Is Successfully',
    data:data
  })   
};

//get by id
module.exports.studentgetbyID = async (req, res) => {
  const data=await getBy_withpage(Student,{_id:req.params.id},req.query.page)
  res.send(data)
  };


  //get By Auther
module.exports.studentgetbyAuther = async (req, res) => {
  const data=await getBy_withpage(Student,{Auther:req.params.auther},req.query.page)
  res.send(data)
  };

//get by category
module.exports.studentgetbyCategory = async (req, res) => {
  const data=await getBy_withpage(Student,{category:req.params.category},req.query.page)
  res.send(data)
  };

//patch api for post student
module.exports.StudentPostPatch = async (req, res) => {
  const data=await Patchdata(Student,{ _id: req.params.id },req.body)
  res.status(200).json({
    message:'Student post Update Is Successfully',
    data:data
  }) 
 
}

//Delete api for studentpost
module.exports.DeleteStudentpost = async (req, res) => {
  const data=await Deletedata(Student,{ _id: req.params.id })
  res.status(200).json({
    message: 'Student Post Is Deleted Successfully',
    data:data
  }) 
};

//patch for studentpost like count

module.exports.StudentPostLikeCountPatch = async (req, res, next) => {
  let {  like_Count } = req.body;
  try {
    let likeCountCheck = await Student.findOne({ _id: req.params.id })
    if(!likeCountCheck) return res.status(400).json({
      message: "No post found"
    });
    if(likeCountCheck.like_Count.includes(like_Count)){
      let index = likeCountCheck.like_Count.indexOf(like_Count)
      let data=likeCountCheck
      data.like_Count.splice(index,1)
      data.save()
      if (!data) {
        res.json({ message: "StudentPost likes count  not updated", status: false });
      } else {
        res.json({
          message: "Studentpost likes  updated successfully",
          status: true,
          student: data,
        });
      }
      
    }else{
      let data=likeCountCheck
      data.like_Count.push(like_Count)
      data.save()
      if (!data) {
        res.json({ message: "StudentPost likes count  not updated", status: false });
      } else {
        res.json({
          message: "Studentpost likes  updated successfully",
          status: true,
          student: data,
        });
      }
    }
  } catch (error) { }
}

//Students Courses...

//Post api for couse

module.exports.Coursestudentpost= async (req, res) => {
  const data= await postdata(Courses,req.body)
  res.status(200).json({
    message: 'Student Courses Is Successfully',
    data:data
  })    
  };

// module.exports.Coursestudentpos = async (req, res) => {
//   let val = req.body
//   // console.log(req);
//   val['studentImage'] = req.file.originalname
//   const data = await postdata(Courses, val)
//   res.status(200).json({
//     message: 'Student post is successfully',
//     data: data
//   })
// };



//get api for get the courses

module.exports.getcourses = async (req, res) => {

  const course = await getByOne(Courses, { id: req.params.id }) 
  res.status(200).json({
    message: 'Student Courses Is Successfully',
    course:course
  })    
 
};

//patch api for updates the course
module.exports.StudentCoursePatch = async (req, res) => {
  const data = await Patchdata(Courses, { _id: req.params.id }, req.body)
  res.status(200).json({
    message: 'Student Courses Is Updated  Successfully',
    data: data
  })    

}

//Deleted Courses
module.exports.DeleteCourse = async (req, res) => {
  const data = await Deletedata(Courses, { _id: req.params.id })
  res.status(200).json({
    message: 'Student Courses Is Deleted  Successfully',
    data: data
  }) 
 
};

//patch api for users  overview

module.exports.UserOverviewPatch = async (req, res) => {
  const data = await Patchdata(User, { _id: req.params.id }, req.body)
  res.send(data)
}


//get api user overview
module.exports.getUserOverView = async (req, res) => {
  const course = await getByOne(User, { id: req.params.id })
  res.send(course)
};


// post api for Student Exam

module.exports.studentpostExam = async (req, res) => {
  const data = await postdata(Student_Exma, req.body)
  res.send(data)
};

//get api for student Exam
module.exports.getStudentExam = async (req, res) => {
  const course = await getByOne(Student_Exma, { id: req.params.id })
  res.send(course)
};

//patch for student Exam
module.exports.StudentExampatch = async (req, res) => {
  const data = await Patchdata(Student_Exma, { _id: req.params.id }, req.body)
  res.send(data)
}


//Delete api
module.exports.DeleteStudentExam = async (req, res) => {
  const data = await Deletedata(Student_Exma, { _id: req.params.id })
  res.send(data)
};



//post api for daily Task
module.exports.studentDailyTaskPost = async (req, res) => {
  const data = await postdata(Daily_Task, req.body)
  res.send(data)
};



//get task
module.exports.getStudenDailyTasks = async (req, res) => {
  const course = await getByOne(Daily_Task, { id: req.params.id })
  res.send(course)
};


//patch api for update the daily task
module.exports.StudentDailyTaskpatch = async (req, res) => {
  const data = await Patchdata(Daily_Task, { _id: req.params.id }, req.body)
  res.send(data)
}


//Delete the task
module.exports.DeleteStudentDailyTask = async (req, res) => {
  const data = await Deletedata(Daily_Task, { _id: req.params.id })
  res.send(data)
};

//post api for score task
module.exports.studentDailyScoreTaskPost = async (req, res) => {
  const data = await postdata(Daily_Task_Score, req.body)
  res.send(data)
};

//get the score

module.exports.getStudenDailyScoreTasks = async (req, res) => {
  const course = await getByOne(Daily_Task_Score, { id: req.params.id })
  res.send(course)
};

//Update the Score
module.exports.StudentDailyScoreTaskpatch = async (req, res) => {
  const data = await Patchdata(Daily_Task_Score, { _id: req.params.id }, req.body)
  res.send(data)
}

//Delete the score
module.exports.DeleteStudentDailyScoreTask = async (req, res) => {
  const data = await Deletedata(Daily_Task_Score, { _id: req.params.id })
  res.send(data)
};


//post api for Student Classroom
module.exports.PostStudentClassRoom = async (req, res) => {
  const data = await postdata(Student_Class_Room, req.body)
  res.send(data)
}

//get api for student class room
module.exports.getStudenClassRoom = async (req, res) => {
  const course = await getByOne(Student_Class_Room, { id: req.params.id })
  res.send(course)
};


//Delete api for studnet class room
module.exports.DeleteStudentClassRoom = async (req, res) => {
  const data = await Deletedata(Student_Class_Room, { _id: req.params.id })
  res.send(data)
};

//patch api for student class room
module.exports.StudentClassRoompatch = async (req, res) => {
  const data = await Patchdata(Student_Class_Room, { _id: req.params.id }, req.body)
  res.send(data)
}



