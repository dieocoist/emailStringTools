# Email String Tools
this is a small priject i have been working on for people working with emails
its only two functions right now wich are maskEmail and validateEmail 

both functions are fairly simple to instal and use let me start with the first on

### Mask Emails

this function helps you locate and mask any email in any text big or small

```javascript
console.log(emailTools.maskEmails('this email will be masked testEmail@gmail.com'));
//returns this email will be masked te*****il@gm****com
```

there doesnt even need an email for the function to work

```javascript
console.log(emailTools.maskEmails('There is no email in this text'));
//returns There is no email in this text
```

### Validate Email

this function will return a boolean of true when given an email

```javascript
console.log(emailTools.validateEmail('testEmail@gmail.com'));
//returns True
```
note: the entire text needs to be the email wich means it wont identify spaces or anything like that so be carefull

## Instalation

i dont know what your supposed to do so figure it out :)

## License
[MIT](https://choosealicense.com/licenses/mit/)


Thank you for checking out my project :) 
