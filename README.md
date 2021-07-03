# Week 3 Assignment: Life Tracker

Submitted by: Sydney Varner

Deployed Application: N/A

## Application Features

### Core Features

- [* ] **The Nav Bar:** Implement customized views for users who are logged in vs not logged in.
  - [ *] If the user is logged in, it should display a **Sign Out** button. 
  - [ *] If no user is logged in, it should display **Login** and **Register** buttons
  - [ *] Display a logo on the far left side, and contain links to the individual detailed activity page. 
- [* ] **The Landing Page:** Display a large hero image and a brief blurb on what this application is about
- [ *] **Login Page:** A form that allows users to login with email and password.
- [ ] **Registration Page:** A form that allows the user to sign up with their email, password, username, first name, and last name.
- [ ] When a user first authenticates, they should be redirected to an authenticated view (i.e the detailed activity page). When they sign out, all frontend data should be reset.
- [ ] Users have access to an overview Activity page that show one summary statistic about each of the 3 types of activity tracked.
- [* ] The API should have a `security` middleware that only allows authenticated users to access resources and only allows users to access resources about themselves. 
- [ ] Users should have the ability to track at least **1** types of activities (i.e Nutrition, Exercise, Sleep, etc.). Each activity should be tracked on separate pages.
- [ ] Deployed website with Heroku & Surge. 

**Detailed Activity Page:**
- [ ] The detailed activity page should display a feed of all previous tracked activities.
- [ ] The detailed activity should contain a form to contain relevant information. (i.e if tracking nutrition this form allows the user to capture calories, timestamp, image, category, etc.) 
- [ *] The activity tracked should be given a unique id for easy lookup.
  `TODO://` Add link to table schema in the link code below. Your file should end in `.sql` and show your schema for the detailed activities table. (🚫 Remove this paragraph after adding schema link)
  * [Table Schema](**Add link on github to schema) 

### Stretch Features

Implement any of the following features to improve the application:
- [ ] Each model (`nutrition`, `exercise`, and `sleep`) should also implement a `fetchById` method that queries the database for a record by its id and only serves it to users who own that resource. Create a new dynamic route on the frontend that displays detail about a single record. For instance, `nutrition/detail/:id` should show a page with all the information about a single nutrition item.
- [ ] Provide a dropdown that allows users to filter activity based on a certain attribute of any activity item.
- [ ] Calculate aggregate statistics based on time periods - such as daily, weekly, monthly aggregates.
- [ ] Create a page that shows all other users that use the life tracker application and allow users to follow each other.

### Walkthrough Video

`TODO://` Add the embedded URL code to your animated app walkthrough below, `ADD_EMBEDDED_CODE_HERE`. Make sure the video or gif actually renders and animates when viewing this README. 

A GIF of my site's basic functionality including the working sign in form/page:
![](https://i.imgur.com/qLRgJbJ.gif)

A GIF of my registration page (it is not correctly connected to my database at the moment):
![](https://i.imgur.com/I9k2K9p.gif)

A GIF my working exercise entry (as displayed through Insomnia):
![](https://i.imgur.com/O56Um99.gif)

A GIF displaying the security middleware being used in my code that only allows registered users to create an entry along with the created IDs for my entries:
![](https://i.imgur.com/jlk5mPe.gif)



### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

Yes, the topics in the labs did prepare me to complete the assignment. I'm not very satisfied with my current product. I ran into a lot of issues mostly because I felt as though I only had an overview of most of the concepts/technologies we were using to complete the assignment. But, I did find the lab's videos very helpful, and I used them to complete most aspects of both my API and my UI.

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
I would have most likely calmed myself down better early on. This was a pretty stressful assignment, but I definitely let that distract me from doing the basic planning steps. This would be writing out all my steps and planning out what I would accomplish each day. I also would have spent time after work to make progress with the assignment.

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

Although, I was not as confident in what I completed I still showed my peers my site, and I explained my steps. I was also honest about my struggles. Others seemed to be impressed with the general look of the site, which was nice to hear!

### Open-source libraries used

N/A

### Shout out

Give a shout out to somebody from your cohort that especially helped you during your project. This can be a fellow peer, instructor, TA, mentor, etc.

Shout out to my capstone pod members, those I worked with in the randomly created groups throught the week, the instructors, and the TAs!
