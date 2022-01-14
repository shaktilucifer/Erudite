# Erudite
Book tracking app with stats 

## Tech stack
01/01/2022 Nodejs and React 

Features:
Initial features
- Add book name and page count 
- Add book pages read so far along with date
- Calculate and show reading stats
- Count num books read and calculate num left for challenge 
- Stats like reading speed and reading density
- Api to search and add books

Input for getting pages read by date 
Ex: 01/01/2022 - 228 pages
    01/02/2022 - 348 pages etc...
    
-  Search by ISBN number and choose books that match the page. 
- Need to add time take in minutes or hours to get granularity in stats
- daily reading journal sort like form

Worklog:
01/06 - Added Input form for getting user input
01/07 - Added some api and book search bar 
01/08 - Add hook for api calls and add typescript, eslint support
01/09 - Add constants file and spend time on wireframes and different workflows
01/10 - Display books searched using api as a list and add loading indicator
01/11 - Exploring the api for faster info gathering
01/12 - Exploring usages with bulk download of data
01/13 - Trying out different types of databases to store bulk data 
TODO:
-- cut down books shown in UI or use pagination
-- Try bulk download
-- Check graph ql, relational db and nosql