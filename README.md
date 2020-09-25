# Moto Web App

This is a functional prototype. 

## Client-side details

### Global state

```js
{
selectedDate:"",
numberOfGuests: 0,
hours:0,
}
```

###### Local states

### Landing Page Component
```js
// Setting up Criteria for booking on Landing Page
{
userCriteria:{
 selectedDate: "",
 numberOfGuests: 0,
 hours:0
}
}
```

### Booking Page Component
```js

// Booking Component
{
  name: '',
  image: '',
  method: '',
}

```
```js

// Register
{
  username: '',
  password: '',
  confirm_password: '',
}

// SignIn
{
  username: '',
  password: ''
}
```

### Actions

#### selected day

| type      | data         | purpose                                |
| --------- | ------------ | -------------------------------------- |
| SET_DAY   | selected_day | set specific date chosen by user     |
| CLEAR_DAY |              | set selected day to Null (initialSate) |






