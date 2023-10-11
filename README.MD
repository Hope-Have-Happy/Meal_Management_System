# Meal Management System

## User Types

1. **Admin**
2. **User**

## Admin Pages & Functionalities

### Dashboard

- Total cash
- Due cash
- Extra cash
- This month total expense
- Total user
- This month current meal rate
- This year average meal rate

### User Management (CRUD Operations)

- User Information:
  - Full name
  - Email
  - Mobile
	- Photo (It should be stored in file system)
  - Department
    - IT
    - IELTS
    - Spoken
    - Employee
  - Address

### Meal Register

- Select date
- Display all users with a checkbox next to their names
- Submitting with multiple/all checkboxes checked records the meal
- Search to set meal manually

### Meal Rate Set

- Select month
- Set amount
- Permission switch to allow all users to view the monthly meal rate
- Automatic calculation of meal rate by considering expenses and empty bills within specified dates
- Admin calculates and sets the meal rate

### Accounts

- List of all users
  - User name
  - Mobile number
  - Remaining balance
  - Amount paid
  - Search option for users
- Button to add a new payment
  - Date
  - Amount

### Daily Expense

- Records daily expenses, including
  - Date
  - Product name
  - Quantity
  - Total cost
- Separated daily expense accounts

### Monthly Bill and Expense Summary

## User Pages & Functionalities

### User Dashboard

1. User logs in to the app.
2. Home page displays:
   - Total cash
   - Total due
   - Total meals this month
   - Last month's meal rate (upon admin approval)
3. Meal Booking
   - Can book meals daily until 6 PM
   - If late, contact admin
   - Display phone number
   - Option for advance booking
   - List of bookings
     - Can delete future day's bookings until 6 PM
     - Must contact admin for cancellations
   - Receive notifications for booking, up to 5 bookings per day
4. Payment History
5. View meal history
   - Search by month
6. User settings
   - Update personal information
7. Interface
   - Log in with mobile number and password
   - Auto-redirect admin role to admin dashboard
   - Request password reset via mobile and email
   - Receive a temporary password via email, which can be changed later
   - Display error if the email is already connected to another user
   - Admin can change a user's password
   - Mobile app design
   - Can be used offline (PWA)
   - Lightweight design

## DB Shcemas

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
