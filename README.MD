# Meal Management System

This is a Meal Management System with two types of users: Admin and User.

## Admin Dashboard

### Dashboard

- Total cash
- Due cash
- Extra cash
- This month total expense
- Total user
- This month current meal rate
- This year average meal rate

### User Management `(Mockup: API, Controller: UserController)` `✔`

- Create, read, update, delete users
- User information:
  - Full name
  - Email
  - Mobile
  - Department (IT, IELTS, Spoken, Employee)
  - Address

### Meal Register `(Mockup: API, Controller: MealController)` `✔`

- Select date
- Display all users with checkboxes next to their names
- Submit meal for multiple/all checked users
- Find specific users and set meal for them by searching

### Meal Rate Set

- Select a month
- Set the rate
- Permission switch to allow all users to view the monthly meal rate
- Set meal rate based on the sum of expenses within a specified date range
- Admin calculates and sets the meal rate

### Accounts

- List of all users `(Mockup: API, Controller: UserController)` `✔`
  - User name
  - Mobile number
  - Current balance
  - Total payments
  - User search option
- Add a new payment for a user with a date and amount `(Mockup: API, Controller: PaymentController)` `✔`
- Record daily market expenses
  - Date
  - Item name
  - Amount spent
  - Separate expense tracking for each day
- Monthly household bill and expenses summary

## User Dashboard

- Log in to the app
- Home page displays:
  - Total cash
  - Total due
  - Total meals this month
  - Last month's meal rate (if approved by the admin)

### Meal Booking `(Mockup: API, Controller: MealController)` `✔`

- Reserve meals for the next day until 6 PM
- Contact admin in case of late booking
- Display contact number
- Allow advance booking for several days
- List and cancel bookings for the next day before 6 PM
- Contact admin to cancel after 6 PM
- Receive notifications for daily bookings

### Payment History `(Mockup: API, Controller: PaymentController)` `✔`

- View payment history

### Meal List `(Mockup: API, Controller: MealController)` `✔`

- View a list of meals
- Search by month

### User Settings `(Mockup: API, Controller: UserController)` `✔`

- Update personal information

### ইন্টারফেস

- Mobile number, password দিয়ে লগিন করবে
- User role যদি admin হয় অটো admin dashboard e redirect করবে, নাহয় মোবাইল এপ ইন্টারফেস ই থাকবে।
- পাসওয়ার্ড রিসেটের জন্য মোবাইল ও ইমেল দিয়ে রিকুয়েস্ট করতে পারবে। ইমেইলে একটি temporary পাসওয়ার্ড যাবে, ইউজার পরে চেঞ্জ করে নিবে। সেম ইমেলে অন্য কোনো ইউজার কানেক্টেড থাকলে এরর দেখাবে। যদি এই নাম্বারের সাথে কোন ইমেইল কানেক্টেড না থাকে তাহলে অটো এই ইমেল ইউজার এর ইমেইল কলামে যুক্ত হয়ে যাবে। এডমিন চাইলে ইউজারের এর পাসওয়ার্ড পরিবর্তন করতে পারবে।
- মোবাইল আপ টাইপের ডিজাইন হবে
- অফলাইনে ও ব্যবহার করা যাবে ( PWA )
- লাইট ওয়েট ডিজাইন হবে

<!-- ==================================================================================================================================================== -->

## DB Shcemas `(All models are ready)` `✔`

### Users Table

| Field      | Data Type                                          | Constraints                 |
| ---------- | -------------------------------------------------- | --------------------------- |
| id         | BIGINT, UNSIGNED, NOT NULL, AUTO_INCREMENT         | PRIMARY KEY                 |
| full_name  | VARCHAR(200) NOT NULL                              |                             |
| user_role  | VARCHAR(15)                                        |                             |
| photo      | VARCHAR(50)                                        |                             |
| email      | VARCHAR(100)                                       |                             |
| password   | VARCHAR(50) NOT NULL                               |                             |
| mobile     | VARCHAR(20) NOT NULL                               |                             |
| department | ENUM("IT", "IELTS", "SPOKEN", "EMPLOYEE") NOT NULL |                             |
| address    | VARCHAR(45) NOT NULL                               |                             |
| status     | TINYINT                                            | DEFAULT 1                   |
| created_at | TIMESTAMP                                          | DEFAULT CURRENT_TIMESTAMP   |
| updated_at | VARCHAR(45)                                        | DEFAULT 'CURRENT_TIMESTAMP' |

### User Meals Table

| Field      | Data Type                       | Constraints |
| ---------- | ------------------------------- | ----------- |
| id         | BIGINT NOT NULL, AUTO_INCREMENT | PRIMARY KEY |
| users_id   | BIGINT, UNSIGNED, NOT NULL      |             |
| qty        | INT, UNSIGNED                   | DEFAULT 1   |
| date       | DATE                            |             |
| status     | TINYINT                         | DEFAULT 1   |
| created_at | TIMESTAMP                       |             |
| updated_at | TIMESTAMP                       |             |
| creator    | BIGINT                          |             |

### User Payments Table

| Field        | Data Type                       | Constraints |
| ------------ | ------------------------------- | ----------- |
| id           | BIGINT NOT NULL, AUTO_INCREMENT | PRIMARY KEY |
| users_id     | BIGINT, UNSIGNED, NOT NULL      |             |
| month        | DATE                            |             |
| payment_date | DATE                            |             |
| amount       | INT                             |             |
| status       | TINYINT                         | DEFAULT 1   |
| created_at   | TIMESTAMP                       |             |
| updated_at   | TIMESTAMP                       |             |
| creator      | BIGINT                          |             |

### Account Logs Table

| Field       | Data Type                                  | Constraints |
| ----------- | ------------------------------------------ | ----------- |
| id          | BIGINT, UNSIGNED, NOT NULL, AUTO_INCREMENT | PRIMARY KEY |
| amount      | FLOAT NOT NULL                             |             |
| is_expense  | TINYINT NOT NULL                           |             |
| is_income   | TINYINT NOT NULL                           |             |
| income_date | DATE NOT NULL                              |             |
| category    | BIGINT NOT NULL                            |             |
| status      | TINYINT                                    | DEFAULT 1   |
| created_at  | TIMESTAMP                                  |             |
| updated_at  | TIMESTAMP                                  |             |
| creator     | BIGINT                                     |             |

### Daily Bajars Table

| Field      | Data Type                       | Constraints |
| ---------- | ------------------------------- | ----------- |
| id         | BIGINT NOT NULL, AUTO_INCREMENT | PRIMARY KEY |
| title      | TEXT                            |             |
| qty        | FLOAT                           |             |
| unit       | VARCHAR(10)                     |             |
| price      | FLOAT                           |             |
| total      | FLOAT                           |             |
| bajar_date | DATE                            |             |
| status     | TINYINT                         | DEFAULT 1   |
| created_at | TIMESTAMP                       |             |
| updated_at | TIMESTAMP                       |             |
| creator    | BIGINT                          |             |

### Monthly Meal Rates Table

| Field            | Data Type                       | Constraints |
| ---------------- | ------------------------------- | ----------- |
| id               | BIGINT NOT NULL, AUTO_INCREMENT | PRIMARY KEY |
| month            | DATE                            |             |
| meal_rate        | FLOAT                           |             |
| is_visible       | TINYINT                         |             |
| month_start_date | DATE                            |             |
| month_end_date   | DATE                            |             |
| status           | TINYINT                         | DEFAULT 1   |
| created_at       | TIMESTAMP                       |             |
| updated_at       | TIMESTAMP                       |             |
| creator          | BIGINT                          |             |

### Settings Table

| Field                        | Data Type                       | Constraints |
| ---------------------------- | ------------------------------- | ----------- |
| id                           | BIGINT NOT NULL, AUTO_INCREMENT | PRIMARY KEY |
| shut_down_app                | TINYINT                         |             |
| shut_down_reason             | TEXT                            |             |
| contact_name                 | VARCHAR(45)                     |             |
| contact_number               | VARCHAR(20)                     |             |
| meat_set_last_time           | TIME                            |             |
| meal_set_alert_time          | TIME                            |             |
| alert_text_for_all           | TEXT                            |             |
| today_meal_coocking_end_time | TIME                            |             |

### Meal Menus Table

| Field       | Data Type                       | Constraints |
| ----------- | ------------------------------- | ----------- |
| id          | BIGINT NOT NULL, AUTO_INCREMENT | PRIMARY KEY |
| meal_date   | DATE                            |             |
| description | TEXT                            |             |
| receipy     | TEXT                            |             |
| status      | TINYINT                         | DEFAULT 1   |
| created_at  | TIMESTAMP                       |             |
| updated_at  | TIMESTAMP                       |             |
| creator     | BIGINT                          |             |
