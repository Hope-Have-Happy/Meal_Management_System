Meal Management System:

1. Two types of user

   1. Admin
   2. User

2. Admin pages

   1. Dashboard
      1. Total cash
      2. Due cash
      3. Extra cash
      4. This month total expense
      5. Total user
      6. This month current meal rate
      7. This year average meal rate
   2. User management, create, read, update, delete(done)
      1. User information:
         1. Full name
         2. Email
         3. Mobile
         4. Department
            1. IT
            2. IELTS
            3. Spoken
            4. Employee
         5. Address
   3. Meal register
      1. Select the date
      2. Show all users, there will be a checkbox with the name
      3. Multiple / If you submit by checking all, the match will be submitted
      4. Matches can also be set by searching
   4. Meal rate set(done)
      1. Select the month
      2. amount set
      3. If a permission switch is active, all users will be able to see the month's match rate
      4. To set the match rate
         1. Date to date will insert
         2. Mill rate auto will come along with all the expenses including the chef’s bill within the specified date.
         3. Admin will set match rate considering all expenses
   5. Accounts
      1. A list of all users will be displayed
         1. username
         2. Mobile number
         3. How much money is left?
         4. It will show how much money has been paid
         5. User will have option to search
         6. New payments can be added with the click of a button
            1. date
            2. quantity
      2. There will be a record of how much is spent in the market every day.
         1. the date
         2. product name
         3. quantity
         4. How much money was spent?
         5. Daily expense account will be added separately
      3. Aunt's bills and expenses will come up every month

3. User functionalities
   1. You must log in to visit the app.
   2. There will be some information at a glance on the home page
      1. Total Cash
      2. Total Due
      3. Total mill this month
      4. Admin can see last month match rate if approved (confusion)
   3. Meal booking
      1. You can book the next day's meal every day till 6 pm
      2. After that, contact the admin contact
      3. Numbers will show
      4. Anyone can book a meal for a few days in advance if they want
      5. The booking list will show
         1. You can delete the next day's booking by 6 pm
         2. Then contact the admin to cancel
      6. Notification for booking can be given at 5 pm every day.
   4. Payment history will be displayed
   5. You can see the match list
      1. You can search by month
   6. User settings
      1. You can update your information
   7. interface
      1. Login with mobile number, password
      2. If user role is admin then auto admin dashboard will redirect, otherwise mobile app interface will remain.
      3. You can request for password reset by mobile and email. A temporary password will be sent to the email, the user can change it later. If another user is connected to the same email, the error will appear. If there is no email connected with this number then this email will be automatically added to the user's email column. Admin can change user's password.
      4. Mobile app type design will be
      5. Can be used offline as well ( PWA )
      6. Light weight design

---

---

DB EER

---

DB Schema definitions

`users`
`id`
BIGINT, UNSIGNED, NOT, NULL, AUTO_INCREMENT
`full_name`
VARCHAR(200), NOT, NULL
`user_role`
VARCHAR(15), NULL
`photo`
VARCHAR(50), NULL
`email`
VARCHAR(100), NULL
`password`
VARCHAR(50), NOT, NULL
`mobile`
VARCHAR(20), NOT, NULL
`department`
ENUM("IT",, "IELTS",, "SPOKEN",, "EMPLOYEE"), NOT, NULL
`address`
VARCHAR(45), NOT, NULL
`status`
TINYINT, NULL, DEFAULT, 1
`created_at`
TIMESTAMP, NULL, DEFAULT, CURRENT_TIMESTAMP
`updated_at`
VARCHAR(45), NULL, DEFAULT, 'CURRENT_TIMESTAMP'
UNIQUE
INDEX, `id_UNIQUE`, (`id`, ASC), VISIBLE
PRIMARY
KEY, (`id`)
,
`user_meals`
`id`
BIGINT, NOT, NULL, AUTO_INCREMENT
`users_id`
BIGINT, UNSIGNED, NOT, NULL
`qty`
INT, UNSIGNED, NULL, DEFAULT, 1
`date`
DATE, NULL
`status`
TINYINT, NULL, DEFAULT, 1
`created_at`
TIMESTAMP, NULL
`updated_at`
TIMESTAMP, NULL
`creator`
BIGINT, NULL
PRIMARY
KEY, (`id`)
INDEX
`fk_user_meals_users1_idx`, (`users_id`, ASC), VISIBLE
CONSTRAINT
`fk_user_meals_users1` , , , , FOREIGN, KEY, (`users_id`) , , , , REFERENCES, `meal_management`.`users`, (`id`) , , , , ON, DELETE, NO, ACTION , , , , ON, UPDATE, NO, ACTION
,
`user_payments`
`id`
BIGINT, NOT, NULL, AUTO_INCREMENT
`users_id`
BIGINT, UNSIGNED, NOT, NULL
`month`
DATE, NULL
`payment_date`
DATE, NULL
`amount`
INT, NULL
`status`
TINYINT, NULL, DEFAULT, 1
`created_at`
TIMESTAMP, NULL
`updated_at`
TIMESTAMP, NULL
`creator`
BIGINT, NULL
PRIMARY
KEY, (`id`)
INDEX
`fk_user_payments_users1_idx`, (`users_id`, ASC), VISIBLE
CONSTRAINT
`fk_user_payments_users1` , , , , FOREIGN, KEY, (`users_id`) , , , , REFERENCES, `meal_management`.`users`, (`id`) , , , , ON, DELETE, NO, ACTION , , , , ON, UPDATE, NO, ACTION
,
`account_logs`
`id`
BIGINT, UNSIGNED, NOT, NULL, AUTO_INCREMENT
`amount`
FLOAT, NOT, NULL
`is_expense`
TINYINT, NOT, NULL
`is_income`
TINYINT, NOT, NULL
`income_date`
DATE, NOT, NULL
`category`
BIGINT, NOT, NULL
`status`
TINYINT, NULL, DEFAULT, 1
`created_at`
TIMESTAMP, NULL
`updated_at`
TIMESTAMP, NULL
`creator`
BIGINT, NULL
PRIMARY
KEY, (`id`)
,
`daily_bajars`
`id`
BIGINT, NOT, NULL, AUTO_INCREMENT
`title`
TEXT, NULL
`qty`
FLOAT, NULL
`unit`
VARCHAR(10), NULL
`price`
FLOAT, NULL
`total`
FLOAT, NULL
`bajar_date`
DATE, NULL
`status`
TINYINT, NULL, DEFAULT, 1
`created_at`
TIMESTAMP, NULL
`updated_at`
TIMESTAMP, NULL
`creator`
BIGINT, NULL
PRIMARY
KEY, (`id`)
,
`monthly_meal_rates`
`id`
BIGINT, NOT, NULL, AUTO_INCREMENT
`month`
DATE, NULL
`meal_rate`
FLOAT, NULL
`is_visible`
TINYINT, NULL
`month_start_date`
DATE, NULL
`month_end_date`
DATE, NULL
`status`
TINYINT, NULL, DEFAULT, 1
`created_at`
TIMESTAMP, NULL
`updated_at`
TIMESTAMP, NULL
`creator`
BIGINT, NULL
PRIMARY
KEY, (`id`)
,

`settings`
`id`
BIGINT, NOT, NULL, AUTO_INCREMENT
`shut_down_app`
TINYINT, NULL
`shut_down_reason`
TEXT, NULL
`contact_name`
VARCHAR(45), NULL
`contact_number`
VARCHAR(20), NULL
`meat_set_last_time`
TIME, NULL
`meal_set_alert_time`
TIME, NULL
`alert_text_for_all`
TEXT, NULL
`today_meal_coocking_end_time`
TIME, NULL
PRIMARY
KEY, (`id`)
,
`meal_menus`
`id`
BIGINT, NOT, NULL, AUTO_INCREMENT
`meal_date`
DATE, NULL
`description`
TEXT, NULL
`receipy`
TEXT, NULL
`status`
TINYINT, NULL, DEFAULT, 1
`created_at`
TIMESTAMP, NULL
`updated_at`
TIMESTAMP, NULL
`creator`
BIGINT, NULL
PRIMARY
KEY, (`id`)
