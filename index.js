const express = require('express');
const path = require('path')
const recipesRouter = require('./routers/recipes')

const app = express();

app.use((req, res, next) => {
  const { method, path } = req;
  console.log(
  `New request to: ${method} ${path} at ${new Date().toISOString()}`
  );
  next();
});


app.use('/api/v1/recipes', recipesRouter);

const port = 8081;

app.listen(port, () => {
  console.log(`Server is up on port ${port}.`);
});



/**
HTTP Method	PATH		
			
GET	/api/v1/recipe	Read information about all the recipes	
GET	/api/v1/recipe/1	Read information about the recipe with ID of `1`	
POST	/api/v1/createRecipe	Create a new recipe	
PUT	/api/v1/recipes/1	Update the existing recipe with ID of `1` with all new content	
DELETE	/api/v1/recipes/1	Delete the recipes with id	

**/







