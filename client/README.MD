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

### User Management

- Create, read, update, delete users
- User information:
  - Full name
  - Email
  - Mobile
  - Department (IT, IELTS, Spoken, Employee)
  - Address

### Meal Register

- Select date
- Display all users with checkboxes next to their names
- Submit meal for multiple/all checked users
- Find specific user and set meal by searching

### Meal Rate Set

- Select a month
- Set the rate
- Permission switch to allow all users to view the monthly meal rate
- Set meal rate based on the sum of expenses within a specified date range
- Admin calculates and sets the meal rate

### Accounts

- List of all users
  - User name
  - Mobile number
  - Current balance
  - Total payments
  - User search option
- Add a new payment for a user with a date and amount
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

### Meal Booking

- Reserve meals for the next day until 6 PM
- Contact admin in case of late booking
- Display contact number
- Allow advance booking for several days
- List and cancel bookings for the next day before 6 PM
- Contact admin to cancel after 6 PM
- Receive notifications for daily bookings

### Payment History

- View payment history

### Meal List

- View a list of meals
- Search by month

### User Settings

- Update personal information

### ইন্টারফেস

- Mobile number, password দিয়ে লগিন করবে
- User role যদি admin হয় অটো admin dashboard e redirect করবে, নাহয় মোবাইল এপ ইন্টারফেস ই থাকবে।
- পাসওয়ার্ড রিসেটের জন্য মোবাইল ও ইমেল দিয়ে রিকুয়েস্ট করতে পারবে। ইমেইলে একটি temporary পাসওয়ার্ড যাবে, ইউজার পরে চেঞ্জ করে নিবে। সেম ইমেলে অন্য কোনো ইউজার কানেক্টেড থাকলে এরর দেখাবে। যদি এই নাম্বারের সাথে কোন ইমেইল কানেক্টেড না থাকে তাহলে অটো এই ইমেল ইউজার এর ইমেইল কলামে যুক্ত হয়ে যাবে। এডমিন চাইলে ইউজারের এর পাসওয়ার্ড পরিবর্তন করতে পারবে।
- মোবাইল আপ টাইপের ডিজাইন হবে
- অফলাইনে ও ব্যবহার করা যাবে ( PWA )
- লাইট ওয়েট ডিজাইন হবে
