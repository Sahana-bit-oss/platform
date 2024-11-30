package com.elarning.elearning.service;


import com.elarning.elearning.model.Course;
import com.elarning.elearning.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

@Service
public class CourseService {
    @Autowired
    private CourseRepository courseRepository;

    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    public Course createCourse(Course course) {
        return courseRepository.save(course);
    }

    public void deleteCourse(Long id) {
        courseRepository.deleteById(id);
    }
    public Page<Course> getCoursesWithPagination(Pageable pageable) {
        return courseRepository.findAll(pageable);
    }
}
