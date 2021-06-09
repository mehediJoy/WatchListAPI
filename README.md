# WatchListAPI #
A API that can Store a list of Movies and Series which USER can Add , Update and Delete. 

This project is a REST API with Authentication and Authorization.

### Technologies Used ###
* NodeJs
* MongoDB

### Installation ###
```console
npm install
```
Add environmental variables in *src/config/.env*
Format:
```env
PORT=           #Define a port here
MONGODB=""      #Add your MongoDB link
JWT_SECRET=""   #Add a unique secret key for web tokens
```

### Running Project ##
* #### Development ####
```console
npm run dev
```
* #### Production ####
```console
npm start
```
### API Documentation ###
![API List](https://i.ibb.co/YySqXfw/watchlistapi.png)


#### User Registration and Collect Authorization Token ####
* *http://localhost:3000/auth/register*
--> Register a user.
* *http://localhost:3000/auth/login*
--> Login and collect token.

User can then use this token to further reach other endpoints.

##### Movies #####
* *http://localhost:3000/movies/* 
--> Gets all document.

* *http://localhost:3000/movies/:id* 
--> Gets a uniques document.

* *http://localhost:3000/movies/save*
--> Save a single document.

* *http://localhost:3000/movies/update/:id*
--> Updates a single document.

* *http://localhost:3000/movies/delete/:id*
--> Deletes a single doucment.

**id: Unique ID of Document in MongoDB**

##### Series #####
* *http://localhost:3000/series/* 
--> Gets all document.

* *http://localhost:3000/series/:id* 
--> Gets a uniques document.

* *http://localhost:3000/series/save*
--> Save a single document.

* *http://localhost:3000/series/update/:id*
--> Updates a single document.

* *http://localhost:3000/series/delete/:id*
--> Deletes a single doucment.

**id: Unique ID of Document in MongoDB**

Thank You!