CREATE DATABASE college;
USE college;

CREATE TABLE student (
    id INT PRIMARY KEY, 
    name VARCHAR(50),
    age INT NOT NULL
);

-- Primary key is used to uniquely identify each record in the table

INSERT INTO student VALUES (1, "AMAN", 26); 
INSERT INTO student VALUES (2, "SHRADHA", 24);

-- antothet way to insert data into the table is by specifying the column names

Insert into student(rollno, name)
values
(101, 'John Doe'),
(102, 'Jane Smith');
(103, 'Alice Johnson');


SELECT * FROM student; -- This command is used to retrieve all the records from the student table

SHOW TABLES;  -- This command is used to show all the tables in the current database

drop table student;  -- This command is used to delete the table from the database

What is a Primary Key?
It must contain unique values and cannot contain NULL values. 

Foreign Key ?
A foreign key is a column (or set of columns) in a table that refers to the primary key in another table.

| id (PK) | name  | city_id (FK) | city   |
| ------- | ----- | ------------ | ------ |
| 101     | Karan | 1            | Pune   |
| 102     | Arjun | 2            | Mumbai |
| 103     | Ram   | 1            | Pune   |
| 104     | Shyam | 3            | Delhi  |


| id (PK) | city_name |
| ------- | --------- |
| 1       | Pune      |
| 2       | Mumbai    |
| 3       | Delhi     |

In the above example, the "city_id" column in the first table is a foreign key that references the "id" column in the second table. 
This establishes a relationship between the two tables, allowing us to retrieve related data from both tables using JOIN operations.

--- Classic example 

CREATE TABLE student (
    rollno INT PRIMARY KEY,
    name VARCHAR(50),
    marks INT NOT NULL,
    grade VARCHAR(1),
    city VARCHAR(20)
);

INSERT INTO student
(rollno, name, marks, grade, city)
VALUES
(101, 'anil', 78, 'C', 'Pune'),
(102, 'bhumika', 93, 'A', 'Mumbai'),
(103, 'chetan', 85, 'B', 'Mumbai'),
(104, 'dhruv', 96, 'A', 'Delhi'),
(105, 'emanuel', 12, 'F', 'Delhi'),
(106, 'farah', 82, 'B', 'Delhi');

-- Basic SQL Queries
select name , marks from student; -- retrieves the name and marks of all students from the student table.

-- 📌 WHERE Clause

Used to define some conditions in a query

SELECT * FROM student WHERE marks > 80;

SELECT * FROM student WHERE city = 'Mumbai';

-- AND Operator  OR Operator

-- Used to check if both conditions are true
SELECT * FROM student 
WHERE marks > 80 AND city = 'Mumbai';

-- Used to check if at least one condition is true
SELECT * FROM student 
WHERE marks > 90 OR city = 'Mumbai';

-- 📌 LIMIT Clause
Sets an upper limit on number of (tuples) rows to be returned
🔹 Example:
SELECT * FROM student LIMIT 3;

-- 📌 ORDER BY Clause
    
Used to sort data in ascending (ASC) or descending (DESC) order
-- To sort by name in ascending order
SELECT * FROM student 
ORDER BY name ASC;

-- To sort by marks in descending order and limit the results to the top 3 students
SELECT * FROM student 
ORDER BY marks DESC limit 3;

-- This query retrieves the maximum marks obtained by any student in the student table.
select max(marks) from student; 

-- This query retrieves a list of unique cities from the student table.
select city from student group by city;


-- 📌 HAVING Clause

-- Similar to WHERE i.e. applies some condition on rows
-- when we want to apply any condition after grouping

🔹 Example: 

-- Count number of students in each city where max marks cross 90

SELECT city,  COUNT(rollno), 
FROM student
GROUP BY city
HAVING MAX(marks) > 90;

-- 📌 General Order (SQL Execution Order)
SELECT column(s)
FROM table_name
WHERE condition
GROUP BY column(s)
HAVING condition
ORDER BY column(s) ASC;


-- update existing row 
update student set grade = "o" where grade = "A"; 

-- delete existing row
delete from student where marks < 50;

--  Joins
CREATE TABLE dept (
    id INT PRIMARY KEY,
    name VARCHAR(50)
);

CREATE TABLE teacher (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    dept_id INT,
    FOREIGN KEY (dept_id) REFERENCES dept(id)
);

--- 📌 Revisiting Foreign Key (FK)
📌 Revisiting Foreign Key (FK)
🔹 Table: dept
id (PK) | name
----------------
101     | Science
102     | English
103     | Hindi

Table: teacher
id (PK) | name   | dept_id (FK)
--------------------------------
101     | Adam   | 101
102     | Bob    | 103
103     | Casey  | 102
104     | Donald | 102
🔗 Relation
teacher.dept_id  →  dept.id

-- 📌 Table Related Queries

-- ALTER (to change the schema)

-- ➕ ADD Column
ALTER TABLE table_name
ADD COLUMN column_name datatype constraint;

-- ❌ DROP Column
ALTER TABLE table_name
DROP COLUMN column_name;

-- 🔄 RENAME Table
ALTER TABLE table_name
RENAME TO new_table_name;

-- Truncate Table
TRUNCATE TABLE table_name; -- This command is used to delete all the records from the

-- JOIN IN TABLES

-- 📌 INNER JOIN

-- Returns records that have matching values in both tables

-- 📌 INNER JOIN Example

-- 🔹 Table: student
student_id | name
------------------
101        | adam
102        | bob
103        | casey

-- 🔹 Table: course
student_id | course
----------------------
102        | english
105        | math
103        | science
107        | computer science

-- 🔹 Query
SELECT *
FROM student
INNER JOIN course
ON student.student_id = course.student_id;

-- 🔹 Result
student_id | name  | course
----------------------------
102        | bob   | english
103        | casey | science

