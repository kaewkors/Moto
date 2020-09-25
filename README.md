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
// Landing
{
  
}


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

#### plan

| type | data | purpose |
| --- | --- | --- |
| SET_PLAN_NEEDS_FETCHING | bool | will load a user's plan when they log in, and stop the plan being pulled from the database while they're logged in and making changes |
| GET_PLAN | plan | retreive plan from the db and store in redux, set loading : true |
| SET_PLAN | plan | save plan to store |
| UPDATE_DAY_RECIPE | recipeId/SelectedDay | add selected recipeId/selectedDay from globalState |
| CLONE_DAY_RECIPE | column of day, uuid of recipe being cloned | clone a recipe in globalState |
| MOVE_DAY_RECIPE_LEFT | selectedDay, recipe being moved | move recipe one day left |
| MOVE_DAY_RECIPE_RIGHT | selectedDay, recipe being moved | move recipe one day right |
| REMOVE_DAY_RECIPE | recipeId/SelectedDay | remove selected recipeId/SelectDay from globalState |
| MOVE_RECIPE_CARD_DOWN | clickedRecipeId & selectedDay | increase index of recipe in plans array by one |
| MOVE_RECIPE_CARD_UP | clickedRecipeId & selectedDay | reduce index of recipe in plans array by one |
| savePlan | userId, plan | save plan to db - thunk action |
| fetchPlan | id | get plan from db - thunk action |
| createPlan | userId | create a new plan in db - thunk action |

#### loading

| type    | data    | purpose                        |
| ------- | ------- | ------------------------------ |
| LOADING | boolean | show loadng anmation for async |

#### selected day

| type      | data         | purpose                                |
| --------- | ------------ | -------------------------------------- |
| SET_DAY   | selected_day | set specific date chosen by user     |
| CLEAR_DAY |              | set selected day to Null (initialSate) |






