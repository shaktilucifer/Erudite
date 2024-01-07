# Erudite

Book tracking app with stats

## Tech stack
01/01/2024:
- [ ] Book name, page started, page ended, date
- [ ] Calculate page count, show page count on tooltip
- [ ] Grid layout for showing streaks

Features:
Initial features

- [ ] Add book name and page count
- [ ] Add book pages read so far along with date
- [ ] Calculate and show reading stats
- [ ] Count num books read and calculate num left for challenge
- [x] Stats like reading speed and reading density
- [x] Api to search and add books
- [ ] 
- Create an account
- Add a book name, id to your list collection
  - To be read
  - Currently reading
  - Read
- Book tracking for each of the books
  - [ ] pages read everyday
  - [ ] Enter pages read by date
  - [ ] Show entries per book e.g
      - 01/27/2022 - page num - 52
      - 01/28/2022 - page num - 130
  - [ ] Select book from api or add just any name you want and add total number of pages
  - [ ] The books added are considered custom books for your profile
  - [ ] Maybe share your books to others in future
  - [ ] Book rating
  - [ ] Edit the user entered functionalities
  - [ ] Add a grid which tracks everyday of the year and the book and amount of pages read per day shown with different colors
  - [ ] Clock to start and stop reading period, hours read, pages read
  - [ ] Sync kindle or some other e ink reader? (Moonshot)
 
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
- [x] Research graph ql

### Worklog:

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
- 01/31 - Research ideas from different book websites and their issues
- 02/01 - Added custom book detail input form
- 02/03 - Research grid based streak tracking mechanisms. calendar based or like the github contribution section ? maybe both?
- 02/04 - Read a good workflow diagram now that we have separate components
- 02/05 - Grid for book grid and block design using grid layout
- 02/07 - use comp instead
- 02/08 - Researching clean code practices
- 02/10 - Add book grid to the route
- 02/11 - Tooltip and day block interface
- 02/12 - Tooltip presentation. 
- 02/13 - Changed navbar to be proper with good UI. Moved route rendering to body tag. ui uplift for book grid. everything in working condition. 
- 02/14 - cleanup and  research
- 02/17 - clean upcss 
- 02/18 - Prettify book search bar
- 03/24 - graphql research and tried to use context
- 03/25 - Research adding redux store to maintain books state fro challenges  
- 04/11 - research memento pattern for rolling back changes 
- 04/27 - interesting ideas on different reading challenges like read 15 days in a row etc.. 
- 05/12 - Researching cool ideas related to tracking stats, be able to add books read in current year
