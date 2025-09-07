Estimated time needed: 9-11 hours

A national car dealership with local branches spread across the United States recently conducted a market survey. One of the suggestions that emerged from the survey was that customers would find it beneficial if they could access a central database of dealership reviews across the country.

You are a new hire at the company. You are assigned the task of building a website that allows new and existing customers to look up different branches by state and look at customer reviews of the various branches. Customers should be able to create an account and add their review for any of the branches. The management hopes this will bring transparency to the system and also increase the trust customers have in the dealership.

After thorough research and brainstorming, the team developed use cases for anonymous, authorized, and admin users.

Use cases for anonymous users:
View the Contact Us page.
View the About Us page.
View the list of dealerships.
Filter the list of dealerships by state:
Select Show all or a specific state from the State dropdown on the dealership page.
View all states if nothing is selected in the dropdown.
View a table of dealerships for the selected state when the form is submitted.
Click on a dealership to view the reviews for that dealership on the details page with each review displayed on a bootstrap card.
Log in using their credentials.
Use cases for authorized users:
In addition to the above, authorized users should be able to write a review for any dealership on the dealership's page. In order to enable authorized users to write their reviews:

A Review button should be provided against each dealer listed in the dealership table.
Clicking on the Review button should take the user to the review page.
Filling the form on the review page and submitting it should add the review.
1
2
3
4
5
6
7
8
9
10
11
12
        {
            "user_id": 1, => from Django
            "name": "Berkly Shepley", => from Django
            "dealership": 15, => from the form
            "review": "Total grid-enabled service-desk", => form textbox
            "time": "", => current time
            "purchase": true, => form checkbox
            "purchase_date": "07/11/2020", => form calendar (bootstrap)
            "car_make": "Audi", => from django dropdown
            "car_model": "A6", => from django dropdown
            "car_year": 2010 => form django dropdown
        }

Copied!

Wrap Toggled!
On submission, the user should be taken back to the dealership detail page with the submitted review featured at the top of the reviews list, sorted on time.
Use cases for admin users:
Log in to the admin site with a predefined username and password.
Add new make, model, and other attributes.
Your organization has assigned you as the Lead Full-Stack Software Developer on this project. Your job is to develop this portal as part of your Capstone project by following best practices for Full-Stack software development.

Review Criteria – 50 marks total
The capstone project is divided into five modules. Each module has a quiz followed by a final submission that is graded by your peers in this course. The grading is divided as follows:

Module 1 Checklist (7 points)
Module 2 Checklist (8 points)
Module 3 Checklist (17 points)
Module 4 Checklist (9 points)
Module 5 Checklist (9 points)
Next Steps
Be sure to read the capstone overview before starting with the step-by-step instructions.

Architecture Overview
The final project for this course has several steps that you must complete. The high-level step list given below will help you with an overview of the complete project. The project is divided into smaller labs with detailed instructions for each step. You must complete all labs to complete the project successfully.

Project breakdown
Fork the GitHub repo containing the project template. The main web application is a predefined Django application. You will need to add some new features, and then build and run your project implementation.

Fork the repository in your account.
Clone the repository in the Cloud IDE environment.
Create static pages to finish the user stories.
Run the application locally.
Add user management to the Django application.

Implement user management using the Django user authentication system and create a REACT frontend.
Implement backend services.

Create Node.js server to manage dealers and reviews using MongoDB and dockerize it.
Deploy sentiment analyzer on Code Engine.
Create Django models and views to manage car model and car make.
Create Django proxy services and views to integrate dealers and reviews together.
Add dynamic pages with Django templates.

Create a page that displays all the dealers.
Create a page that displays reviews for a selected dealer.
Create a page that lets the end user add a review for a selected dealer.
Implement CI/CD, and then run and test your application

Set up continuous integration and delivery for code linting.
Run your application on Cloud IDE.
Test the updated application locally.
Deploy the application on Kubernetes.
Solution architecture
The solution will consist of multiple technologies

The user interacts with the "Dealerships Website", a Django website, through a web browser.

The Django application provides the following microservices for the end user:

get_cars/ - To get the list of cars from
get_dealers/ - To get the list of dealers
get_dealers/:state - To get dealers by state
dealer/:id - To get dealer by id
review/dealer/:id - To get reviews specific to a dealer
add_review/ - To post review about a dealer
The Django application uses SQLite database to store the Car Make and the Car Model data.

The "Dealerships and Reviews Service" is an Express Mongo service running in a Docker container. It provides the following services::

/fetchDealers - To fetch the dealers
/fetchDealer/:id - To fetch the dealer by id
fetchReviews - To fetch all the reviews
fetchReview/dealer/:id - To fetch reviews for a dealer by id
/insertReview - To insert a review
"Dealerships Website" interacts with the "Dealership and Reviews Service" through the "Django Proxy Service" contained within the Django Application.

The "Sentiment Analyzer Service" is deployed on IBM Cloud Code Engine, it provides the following service:

/analyze/:text - To analyze the sentiment of the text passed. It returns positive, negative or neutral.
The "Dealerships Website" consumes the "Sentiment Analyzer Service" to analyze the sentiments of the reviews through the Django Proxy contained within the Django application.