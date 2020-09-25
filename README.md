# Moto Web App

## Client-side details

### Global state

```js
{
  auth:
  message: "...",
  plans: [{},{}]
  recipes: [{},{}],
  selectedDay: integer,
  selectedRecipe: id
  planNeedsFetching: bool
  shoppingList: [{},{}]
}
```

### Local states

```js
// AddIngredients
{
  ingredients: [
      {name:"", unit:""}
  ]
}

// AddRecipe
{
  name: '',
  image: '',
  method: '',
}

// Landing
{
  componentView: "Sign in"
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
| SET_DAY   | selected_day | set specific day to add recipe to      |
| CLEAR_DAY |              | set selected day to Null (initialSate) |

#### recipes

| type | data | purpose |
| --- | --- | --- |
| saveRecipe | recipe | save the recipe to DB and then return all recipes and store in redux - thunk action |
| fetchRecipes | recipes | retreive recipes from db and store in redux - thunk action |
| SET_RECIPES | recipe | save recipes to store |

#### recipe

| type | data | purpose |
| --- | --- | --- |
| fetchSelectedRecipe | recipeId | retreive recipe from db and store in redux - thunk action |
| SET_SELECTED_RECIPE | recipeId | save recipe to store |

#### shopping list

| type     | data         | purpose                                    |
| -------- | ------------ | ------------------------------------------ |
| GET_LIST | planId       | retreive recipe from db and store in redux |
| SET_LIST | shoppingList | save recipe to store                       |

