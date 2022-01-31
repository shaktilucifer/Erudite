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

01/27/2022

- Create an account
- Add a book name, id to your list collection
  - To be read
  - Currently reading
  - Read
- Book tracking for each of the books
  - pages read everyday
  - Enter pages read by date
  - Show entries per book e.g
    - 01/27/2022 - page num - 52
    - 01/28/2022 - page num - 130
  - select book from api or add just any name you want and add total number of pages
  - The books added are considered custom books for your profile
  - Maybe share your books to others in future
  - book rating
  - Edit the user entered functionalities

Input for getting pages read by date
Ex: 01/01/2022 - 228 pages
01/02/2022 - 348 pages etc...

- Search by ISBN number and choose books that match the page.
- Need to add time take in minutes or hours to get granularity in stats
- daily reading journal sort like form

### Book Challenges:

- [ ] Add a collection with a list of books
- [ ] Finish reading the book should check it off the list. Example: 50 best sci fi books of all time
- [x] how many books to read this year? Added template with ReadingChallenge.tsx
- [ ] popsugar challenge or the likes?
- [ ] Custom challenge adding the books that you would like. including custom books. custom books won't be taken into acccount for communit challenges maybe?
- [ ] Add read only display of books read so far and percentage with progress bar
- [x] Header with Reading challenges, books to read and other navigation links
- [ ] To be read randomizer . list of tbr and it randomizes and gives you a pick
Worklog:

- 01/06 - Added Input form for getting user input
- 01/07 - Added some api and book search bar
- 01/08 - Add hook for api calls and add typescript, eslint support
- 01/09 - Add constants file and spend time on wireframes and different workflows
- 01/10 - Display books searched using api as a list and add loading indicator
- 01/11 - Exploring the api for faster info gathering
- 01/12 - Exploring usages with bulk download of data
- 01/13 - Trying out different types of databases to store bulk data
- 01/28 - Research different routes and paths.
- 01/29 - Added config for routes 
- 01/30 - Added navbar and moved routes to separate directory
  TODO:
  - basic form elements without UI .
  - Check graph ql, relational db and nosql
