# Teacher Schedule Kata

General notes:

- Timestamps are stored as a datetime string with the Time Zone Identifier separately, because this is how users enter these dates into the system.
- List of time zones: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones

## Part 1: Occasional lessons with student Time zones

The student Markus want's a lesson on Friday, the 12th of May at 18:00 local time.

| Student | Date Time           | Duration   | Time zone identifier |
| ------- | ------------------- | ---------- | -------------------- |
| Markus  | 2023-05-12T18:00:00 | 60 minutes | Africa/Cairo         |

There are already other scheduled lessons for these students and teachers

| Student | Date Time           | Duration   | Teacher | Time zone identifier |
| ------- | ------------------- | ---------- | ------- | -------------------- |
| Alex    | 2023-05-12T17:00:00 | 30 minutes | Gustavo | Africa/Cairo         |
| Blake   | 2023-05-12T19:00:00 | 30 minutes | Gustavo | Africa/Cairo         |

Implement a function called `teacherIsAvailable(teacherName, startTime, duration)` that returns a boolean whether the teacher is available during the requested time.

```
teacherIsAvailable(Gustavo, 2023-05-12T18:00:00+01:00, 60 minutes) // true
```

Adding this lesson for the student Charlie who is in Florida, the function should return false

| Student | Date Time           | Duration   | Teacher | Time zone identifier |
| ------- | ------------------- | ---------- | ------- | -------------------- |
| Charlie | 2023-05-12T12:30:00 | 60 minutes | Gustavo | America/New_York     |

## Part 2: Present teachers scheduled lessons on the local Time zone of the user

As a student I want to see the scheduled lessons of a teacher, so I can request a new lesson in an available time-slot.

Given these lessons for Gustavo, who is located in Canberra in Australia:

| Student | Date Time           | Duration   | Time zone identifier |
| ------- | ------------------- | ---------- | -------------------- |
| Alex    | 2023-05-12T17:00:00 | 30 minutes | Australia/Sydney     |
| Blake   | 2023-05-12T19:00:00 | 30 minutes | Australia/Sydney     |
| Charlie | 2023-05-12T12:30:00 | 60 minutes | Australia/Sydney     |

Return the time of these lessons in the student Markus' local time, who is on Tenerife in Spain.

## Part 3: Recurring lessons

Given that Markus wants to schedule a recurring lesson every week like this:

| Start date          | Duration   | Time zone identifier |
| ------------------- | ---------- | -------------------- |
| 2023-05-12T17:00:00 | 30 minutes | Africa/Cairo         |

Implement a function `teacherIsAvailableForRecurringLesson(teacherName, startTime, duration)` that returns a boolean.

Using these scheduled sessions for the teacher:

| Student | Date Time           | Duration   | Time zone identifier |
| ------- | ------------------- | ---------- | -------------------- |
| Alex    | 2023-05-19T17:00:00 | 30 minutes | Africa/Cairo         |

this should return `false` because there is a conflict.

### Also consider Daylight Savings Time Changes!

| Date Time           | Time zone identifier |
| ------------------- | -------------------- |
| 2023-10-27T17:00:00 | Europe/Madrid        |

Using these scheduled sessions for the teacher:

| Student | Date Time           | Duration   | Time zone identifier |
| ------- | ------------------- | ---------- | -------------------- |
| Alex    | 2023-10-27T16:00:00 | 30 minutes | Atlantic/Reykjavik   |
| Alex    | 2023-11-03T16:00:00 | 30 minutes | Atlantic/Reykjavik   |

the function should return `false` because there is now a conflict for the second entry.

> Instructor Notes: `Atlantic/Reykjavik` has no DST, but `Europe/Madrid` has.
