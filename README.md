# Getting Started with Simple Form App

This app provides the simple form with 4 required fields - First Name, Last Name, Email, Message. After form
was filled and user clicked on Submit button the new row will added to the table. Validation covers all fields
and provides next rules:
- First Name, Last Name - are required and need to have at least 1 symbol
- Email - is required and need to have value in email format
- Message - is required and need to have at least 10 symbols

If form is not valid, new row won't be added to the table and not valid fields will have red border to notify user
what fields are invalid

## How to start working with Simple Form App

1. Need to have Node JS on local machine (v. 18.x)
2. Need to install yarn
3. To clone the repo on local machine need to run next command in terminal ```git clone https://github.com/sergey0602/simple_form.git```
4. Install node_modules. In root folder need to run ```npm install``` or ```yarn```
5. Launch the application with next command ```npm start``` or ```yarn start```
6. Run tests with next command ```npm run test``` or ```yarn run test```
7. To create production build need to run ```npm run build``` or ```yarn run build```
