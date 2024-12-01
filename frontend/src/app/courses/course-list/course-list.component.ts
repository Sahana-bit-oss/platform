import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses = [
    { 
      id: 1, 
      name: 'Angular', 
      duration: '4 weeks', 
      videoUrl: 'https://www.example.com/angular.mp4' 
    },
    { 
      id: 2, 
      name: 'R Programming', 
      duration: '6 weeks', 
      videoUrl: 'https://www.example.com/r-programming.mp4' 
    },
    { 
      id: 3, 
      name: 'ReactJS', 
      duration: '5 weeks', 
      videoUrl: 'https://www.example.com/reactjs.mp4' 
    },
    { 
      id: 4, 
      name: 'Java Basics', 
      duration: '3 weeks', 
      videoUrl: 'https://www.example.com/java-basics.mp4' 
    },
    { 
      id: 5, 
      name: 'Java Advanced', 
      duration: '4 weeks', 
      videoUrl: 'https://www.example.com/java-advanced.mp4' 
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
