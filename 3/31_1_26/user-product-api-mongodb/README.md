### Connect MongoDB database
    REST API    ----> mongodb native drivers --->  MongoDB server  ///inserts all data even if data has noise
    REST API    ----> mongodb ODM tool(mongoose) --->  MongoDB server

    a. Install mongoose and connect mongodb server
        function connection(){
            connect('mongodb://localhost:27017')
        }
    b. Create Schema of Resource
    c. Create Model of that Schema
    d. Perform Db operations on that Model