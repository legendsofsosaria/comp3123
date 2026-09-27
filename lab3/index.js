var http = require("http");
//TODO - Use Employee Module here
const Employee = require('./Employee')
console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    let emp = Employee.employees;

    if (req.method !== 'GET')
    {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    }
    else
    {
        // Bug found, page was always returning an error msg
        if (req.url === '/')
        {
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
            res.writeHead(200, {'Context-Type': 'application/html'});
            res.write("<h1>Welcome to Lab Exercise 03</h1>")
            res.end();
        }

        else if (req.url === '/employee')
        {
            //TODO - Display all details for employees in JSON format
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.write(JSON.stringify(emp));
            res.end();
        }

        else if (req.url === '/employee/names')
        {
            let emp_copy = [...Employee.employees];

            // Sort employees by first name
            emp_copy.sort((a, b) =>
            {
                if (a.firstName < b.firstName)
                    return -1;
                if (a.firstName > b.firstName)
                    return 1;
                return 0;
            })

            // create array of first names and last names with whitespace
            let full_names = emp_copy.map(employee => employee.firstName + " " + employee.lastName);

            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.write(JSON.stringify(full_names));
            res.end();
        }

        else if (req.url === '/employee/totalsalary')
        {
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 }

            // Loop through employees and add their salary to total
            let total = 0;
            emp.forEach(employee => {
                total += employee.Salary;
            });
            
            let total_salary = [{total_salary: "total_salary", amount: total}];

            res.writeHead(200, {'Content-Type': 'application/json'})
            res.write(JSON.stringify(total_salary));
            res.end();
        }
        else
        {
            // Page not found, return error
            res.end(`{"error": "${res.statusCode}"}`)
        }
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})