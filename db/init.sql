CREATE TABLE departments
    (
         mode           char(10),
         dept_id        char(10),
         dept_name      char(100)
    );

CREATE TABLE courses
    (
         dept           char(20),
         course_order   int,
         course_num     char(8),
         course_title   char(200),
         course_unit    char(16),
         course_type    char(20),
         course_req     json,
         course_grade   char(5),
         course_desc    char(1500)
    );

CREATE TABLE lectures
    (
         dept           char(10),
         course_num     char(16),
         course_id      char(9),
         term           char(4),     
         lec_name       char(16),
         lec_status     char(32),
         lec_capacity   json,
         lec_w_status   char(32),
         lec_w_capacity json,
         lec_day        char(16),
         lec_time_s     char(16),
         lec_time_e     char(16),
         lec_location   char(64),
         lec_inst       char(64)

    );

CREATE TABLE discussions
    (
         lec_id         char(9),
         course_id      char(9),
         term           char(4),     
         dis_name       char(16),
         dis_status     char(32),
         dis_capacity   json,
         dis_w_status   char(32),
         dis_w_capacity json,
         dis_day        char(8),
         dis_time_s     char(16),
         dis_time_e     char(16),
         dis_location   char(64),
         dis_inst       char(64)
    );
    