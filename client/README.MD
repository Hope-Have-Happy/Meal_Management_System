# Meal Management System

## User Types

1. **Admin**
2. **User**

## Admin Pages

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

## User Functionalities

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
