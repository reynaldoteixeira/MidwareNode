# MidwareNode
 
This is a simple Middleware project made with Node.js, which the purpose is take values ​​in json from API 1 (represent by "db_one.json") and send to API 2 (represents by "db_two.json").

To simulate our API's we use json-server package to maintain them avaiable in localhost and two files that's represent the respective data.

# How to run
- Clone the project 
- On terminal run: 
	yarn install
- You must open two terminals (inside of project) for json-server works and don't close:
	Terminal 1 - Run: 
		json-server --watch db_one.json 
	Terminal 2 - Run: 
		json-server --watch --port 3333 db_two.json 
- Open another terminal and run: 
	node main.js
	
Then, you can open "db_two.json" and see inputed values from db_one.json.
