# JestAPITest
This is an API test done using jest to validate the username, date of birth and password of new and existing users

It allows users to be added to a database with the following details:
userName: A string, 5 to 16 characters in length, Name must be unique in Database.
DOB: A date. User should be more than 18 years old.
Email: A string in the ccc@yyyy.com format.
Email must be unique in Database.
Password: A string, 5 to 16 characters in lenghth, possessing 2 nnumbers and one upper case character.

INSTALLATION
To use this API, clone the repository and install the dependencies using npm:

git clone https://github.com/ehizojie7/JestAPITest.git
cd apiTestApp
npm install

USAGE
In order to use this Api, import the insert_user function and the other neccessary functions from the api.js file and call it with the required parameters.

API DOCUMENTATION
The insert_user function takes four parameters:
1. userName: A string, 5 to 16 characters in length, Name must be unique in Database.
2. DOB: A date. User should be more than 18 years old.
3. Email: A string in the ccc@yyyy.com format.
4. Email must be unique in Database.
5. Password: A string, 5 to 16 characters in lenghth, possessing 2 nnumbers and one upper case character.

The function returns an object with two properties:
Result: An enum value indicating whether the user was inserted or not.
USER_ALREADY_REGISTERED: User akready exists in the database.
INVALID_NAME: The name is not between 5 to 16 characters or it is not unique in the databse
INVLALID_DOB: The date of birth provided is not valid. The user should be more than 18 years old.
INVALID_EMAIL: The email provided is not in the correct format, or it is not unique in the database.
INVALID_PASSWORD: The password provided is not between 5 to 16 characters, or it oes not contain 2 numbers and one upper case character.

TESTING
In order to run the test for this API, use the following command:
npm test
This will run a suite of tests that cover the different scenerios for adding users to the database.
If all tests pass, you can be confident that the API is working correctly.
