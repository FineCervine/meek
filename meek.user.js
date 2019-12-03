// ==UserScript==
// @name         meek (for eClass)
// @namespace    http://tampermonkey.net/
// @version      0.0
// @description  First time using JS. Complements the stylesheet of the same name. No bully. Yes the lines haven't been wrapped.
// @author       @FineCervine on GitHub
// @match        https://eclass.srv.ualberta.ca/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    renameSidebarCourses();
    renameCourseboxCourses();
    console.log("meek loaded");

})();

function renameSidebarCourses() {
    // creating an array of course ids from the sidebar, which is pretty reliable.
    // paste the following into console (without "//") and then copy the object of the output of course_ids, which should be an array. paste that into new_sidebar_course_names.
    // var course_nodes = document.querySelectorAll("a.list-group-item.list-group-item-action[data-parent-key=mycourses]")
    // var course_ids = [];
    // var i = 0;
    // for (i = 0; i < course_nodes.length; i++) {
    //     // course_ids.push(course_nodes[i].getAttribute("data-key"));
    //     var course_id = course_nodes[i].getAttribute("data-key");
    //     var original_name = course_nodes[i].innerText;
    //     var nameset = [course_id, original_name];
    //     course_ids.push(nameset);
    //   };

    var new_sidebar_course_names = [
    // paste id/course-name array from function above.
    ];

  // change the contents of the sidebar based off what I.D. they match
  var i = 0;
  for (i = 0; i < new_sidebar_course_names.length; i++) {
      var course_select = document.querySelector("a.list-group-item.list-group-item-action[data-key='" + new_sidebar_course_names[i][0] + "']");
      course_select.innerText = new_sidebar_course_names[i][1];
  };
};

function renameCourseboxCourses() {
  // Setting a dumb header title for course box.
  //var title = document.getElementById("instance-185462-header");
  //title.style.fontStyle = "italic";
  //title.textContent = "“On ne voit bien qu’avec le coeur. L’essentiel est invisible pour les yeux.”";
  // this block above only works on mainpage and thus locks the script on other pages. make a seperate function?
    // Setting a header title for course box.
  try {
    var title = document.getElementById("instance-185462-header");
    title.style.fontStyle = "italic";
    title.textContent = "“On ne voit bien qu’avec le coeur. L’essentiel est invisible pour les yeux.”";
  }
  catch (err) {
    // TODO: catch exception for when a page does not contain the header to change
    // the name of.
  }

  try {
    // Changing Name Text
  var username = document.getElementsByClassName("usertext mr-1");
  //var username = document.querySelectAll(".usertext");
  var new_username= "meme name here";
  var name;
  for (name of username) {
      name.innerText = new_username;
  };

  // Changing Profile Pic
  // Image is just a base64 encoded meme.
  var avatars = document.getElementsByClassName("userpicture defaultuserpic");
  var avatar = 0;
  for (avatar = 0; avatar < avatars.length; avatar++) {
      // base64 encoded image here
      avatars[avatar].src = "";
  };

  // design improvement would be to associate the course name with their course id that you can now parse really easily, make it an array within an array and assign them that way?

  var new_course_names = [
      // comma seperated list of course names here
      // "first class", "second class",
      ];

  var course_list = [];
  var course_box = document.getElementById("course_list").getElementsByClassName("box");
  var course = 0
  for (course; course < course_box.length; course++) {
      course_list.push(course_box[course].id);
  }

  var n = 0;
  for (n; n < course_list.length; n++) {
      document.getElementById(course_list[n]).getElementsByTagName('a')[0].textContent = new_course_names[n];
  };
  }
  catch (err){
      // something, just a cop out for now
  }
};
