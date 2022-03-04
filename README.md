# Form-Validation-Javascript
Simple a user signup page using HTML and Javascript and implementing form validation for username, password and confirm password.


Problem Description: 

Form validation is a way for you to tell the user what kind of input is required in each field and allows you to notify the user when the input is incorrect. There are many ways to do form validation (via HTML, client-side scripting or server-side scripting). In this project, I use Javascript and write a plugin that displays information/error messages next to input fields.

The validation rules are as follows:
•	The email field should be a valid email address (abc@def.xyz). A valid email consists of an email prefix and an email domain with two parts. <prefix>@<domain_part1>.<domain_part2>
•	The password field should contain at least six characters, one uppercase letter, one number and one special character (!,@,#,$,%,^,&,*,+).
•	Password and confirm password fields should match

Notes:
  
When the field is currently being edited (focus event), a notification element will appear below the input field and will display information message (i.e. password should include at least six characters etc). When the field loses focus (blur event), information message will be hidden.

When the form is submitted, if there is any problem with any input field, that element will be highlighted (change class to “error”) and an error message will be shown right below the corresponding input element (i.e. You should enter at least six characters, passwords do not match etc). When passwords do not match, highlight both password fields and show error message below confirm password field.

When user starts editing any highlighted field, remove “error” class. 








