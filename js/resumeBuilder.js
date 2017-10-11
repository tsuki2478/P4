/*
This is empty on purpose! Your code to build the resume will go here.
 */
//个人信息
var bio = {
    "name": "Cy Tsuki",
    "role": "Java developer||Web developer",
    "contacts": { 
        "moblie": "158-0000-0000",
        "email": "tsuki2478@outlook.com",
        "github": "tsuki2478",
        "facebook": "tsuki2478",
        "location": "中国广东省河源市"
    },
    "welcomeMessage": "Thanks for your watch!",
    "skills": [" Japanese ", " a little English ", " Java ", " Web developer"],
    "biopic": "images/11.jpg"
};
//学校
var education = {
    "schools": [{
        "name": "LCTJB",
        "location": "中国广东省河源市",
        "majors": ["ordinary"],
        "dates": "2012/07-2015/07",
        "Degree":"",        
        "url": ""
    }, {
        "name": "Web English",
        "location": "中国广东省东莞市",
        "majors": ["Web developer"],
        "dates": "2017/02-2019/02",
        "Degree":"Entry Level",        
        "url": ""
    }, {
        "name": "TRDA",
        "location": "中国广东省东莞市",
        "majors": ["Java developer"],
        "dates": "2016/10-2017/04",
        "Degree":"medium",
        "url": ""
    }],
    "onlineCourses": [{
        "title": " Front end development of webpage",
        "school": "Udacity",
        "dates": "2017",
        "Degree":"Entry Level",
        "url": "https://cn.udacity.com"
    }]
};
//工作
var work = {
    "jobs": [{
        "employer": "融裕贷",
        "title": "Java开发",
        "location": "中国广东省东莞市",
        "dates": "Six months",
        "description": "融裕贷首创专注服务五金模具实体终端专业市场的金融服务模式——P2S(Public to Sales chain)销售链金融服务模式，由市场管理方、融裕贷、融资性担保公司多方审核把关，严控项目风险，为投资人提供收益可观、风险可控的优质理财项目；并不断研究、创新服务于其他专业市场。"
    }]
};

var projects = {
    "projects": [{
        "title": "自适应页面",
        "dates": "2017/09/15-2017/09/17",
        "description": "此项目.........................................................",
        "images":  ["images/p3-1(1).jpg","images/p3-2.jpg"]
    }, {
        "title": "金融后台管理系统",
        "dates": "2017/01-2017/03",
        "description": "此项目.........................................................",
        "images": ["images/p4-1.jpg"]
    }, {
        "title": "后台管理系统报表制作",
        "dates": "2017/04-2017/05",
        "description": "此项目.........................................................",
        "images": ["images/p5-1.jpg"]
    }]
};
//个人信息
bio.display = function() {
    // 替换helper.js内容,
    var HTMLName = HTMLheaderName.replace("%data%", bio.name);
    var HTMLRole = HTMLheaderRole.replace("%data%", bio.role);

    var biomobile = HTMLmobile.replace("%data%", bio.contacts.moblie);
    var biomeail = HTMLemail.replace("%data%", bio.contacts.email);
    var biogithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var biofacebook = HTMLfacebook.replace("%data%", bio.contacts.facebook);
    var biolocation = HTMLlocation.replace("%data%", bio.contacts.location);

    var biopic = HTMLbioPic.replace("%data%", bio.biopic);
    var biowelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    //姓名和求职意向 
    $("#header").prepend(HTMLRole);
    $("#header").prepend(HTMLName);

    //联系信息
    $("#topContacts:last:last").append(biomobile);
    $("#topContacts:last:last").append(biomeail);
    $("#topContacts:last:last").append(biogithub);
    $("#topContacts:last:last").append(biofacebook);
    $("#topContacts:last:last").append(biolocation);
    //图片与介绍
    $("#header").append(biopic);
    $("#header").append(biowelcome);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (i = 0; i < bio.skills.length; i++) {
            var bioSkills = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills:last").append(bioSkills);
        }
    }
}
bio.display();

//学校
education.display = function() {
  //线下
    if (education.schools.length > 0) {
        $("#education").append(HTMLschoolStart);
        for (var i = 0; i < education.schools.length; i++) {
            var edname = HTMLschoolName.replace("%data%", education.schools[i].name);
            var edDegree =HTMLschoolDegree.replace("%data%", education.schools[i].Degree);
            var nameDegree =edname+edDegree;
            var edlocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var edmajors = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
            var eddates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            var edurl = HTMLschoolDegree.replace("%data%", education.schools[i].url);
            $(".education-entry:last").append(nameDegree);
            $(".education-entry:last").append(eddates);
            $(".education-entry:last").append(edlocation);
            $(".education-entry:last").append(edmajors);
            $(".education-entry:last").append(edurl);            
        }
    }
    // 线下
    if (education.onlineCourses.length > 0) {   
        $(".education-entry").append(HTMLonlineClasses);           
        for (var i = 0; i < education.onlineCourses.length; i++) {
            var ontitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
            var onschool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
            var titleschool =ontitle+onschool;
            var ondates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
            var onurl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);

            $(".education-entry:last").append(titleschool);
            $(".education-entry:last").append(ondates);
            $(".education-entry:last").append(onurl);
        }
    } 
}
education.display();
 
//工作
work.display = function (){
     if(work.jobs.length > 0){
         $("#workExperience").append(HTMLworkStart);
        for(var i =0; i<work.jobs.length; i++){
          var workemployer    = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
          var worktitle       = HTMLworkTitle.replace("%data%",work.jobs[i].title);
          var employertitle   = workemployer+worktitle;
          var workdates       = HTMLworkDates.replace("%data%",work.jobs[i].dates);
          var worklocation    = HTMLworkLocation.replace("%data%",work.jobs[i].location);
          var workdescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);

          $(".work-entry:last").append(employertitle);
          $(".work-entry:last").append(worklocation);
          $(".work-entry:last").append(workdates);
          $(".work-entry:last").append(workdescription);
        }
    }
}
work.display();

//项目
    projects.display=function(){
    if(projects.projects.length > 0){
        // var HTMLprojectImage = '<img src="%data%">';
     $("#projects").append(HTMLprojectStart);        
        for(var i =0; i<projects.projects.length; i++){
        var protitle       = HTMLprojectTitle.replace("%data%",projects.projects[i].title);
        var prodates       = HTMLprojectDates.replace("%data%",projects.projects[i].dates);
        var prodescription = HTMLprojectDescription.replace("%data%",projects.projects[i].description);
    
        $(".project-entry:last").append(protitle);
        $(".project-entry:last").append(prodates);
        $(".project-entry:last").append(prodescription);
        if(projects.projects[i].images.length >0){
            for(var j = 0; j<projects.projects[i].images.length; j++){
                 var propic  = HTMLprojectImage.replace("%data%",projects.projects[i].images[j]);
                   $(".project-entry:last").append(propic);            
               }
            }    
          }
      }
  }
projects.display();

// google地图
google.display =function(){
   $('#mapDiv').append(googleMap);
} 
google.display();

//名字大写化
  function inName(name) {
   name = name.trim().split(" ");
     //trim()去掉左右空格，split是将字符串分割成字符串数组，
   name[1] = name[1].toUpperCase(); 
   name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
   return name[0] + "" + name[1]
    }
$('#main').append(internationalizeButton);
