package org.fastcampus.student_management.domain;

import java.util.List;

/*
* 해당 클래스는 1급 컬렉션이다.
* 1급 컬렉션이란,
* - 컬렉션을 랩핑하는 클래스를 별도로 만드는 설계 패턴이다.
* - 해당 클래스 내부에는 하나의 컬렉션만 인스턴스 변수로 가진다.
*
* 이와 같이 설계하는 이유는,
* - 서비스 내부의 비즈니스 로직을 캡슐화 하기 위해서
* - 컬렉션에 대한 외부 조작을 제한하여 불변성을 보장한다.
* - 테스트가 용이해지고, 관련 로직을 한 곳에 집중시켜 유지보수성, 코드의 재사용성을 높일 수 있다.
*
* 하지만 항상 그렇듯 상황에 따라 적절하게 사용해야한다.
* - 클래스 수 증가는 복잡성과 관리의 부담을 높이고
* - 컬렉션의 상태를 변경할 때마다 새로운 객체를 생성해야 하므로 비용이 증가할 수도 있다.
* 때문에 적절한 상황에서 적절히 활용하는 것이 중요하다.
* */
public class CourseList {

    private final List<Course> courses;

    public CourseList(List<Course> courses) {
        this.courses = courses;
    }

    public void changeAllCoursesFee(int fee) {
        for (Course course : courses) {
            if (course.isSameDay(DayOfWeek.SATURDAY) || course.isSameDay(DayOfWeek.SUNDAY)) {
                course.changeFee((int) (fee * 1.5));
            }
            course.changeFee(fee);
        }
    }
}
