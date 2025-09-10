test commit for github/ibm workspace integrations

-clone repository
https://github.com/ibm-developer-skills-network/xrwvm-fullstack_developer_capstone

-go into server to set up django environment
cd 14-car-dealerships/server
pip install virtualenv
virtualenv djangoenv
source djangoenv/bin/activate
python3 -m pip install -U -r requirements.txt

-to recognize static files within djangoproj.settings.py
        'DIRS': [
            os.path.join(BASE_DIR,'frontend/static')
        ],

        STATICFILES_DIRS = [
            os.path.join(BASE_DIR,'frontend/static')
        ]

-make migrations
python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py runserver

-CORS - allowed hosts and origins

-add bootstrap to aboutus page, modify a bit the style, add about to urls in djangoproj/url
    path('about/', TemplateView.as_view(template_name="About.html")),

MODULE 2 - USER MANAGEMENT

create superuser
patrick - obrienp2321@gmail.com - misterplain
python3 manage.py createsuperuser
python3 manage.py runserver

access via http://localhost:8000/admin

cd/server/frontend - to install and work on frontend
npm install
npm run build

add build to djangoproj/settings
 'DIRS': [
            os.path.join(BASE_DIR, 'frontend/static'),
            os.path.join(BASE_DIR, 'frontend/build'),
            os.path.join(BASE_DIR, 'frontend/build/static'),
        ],
same with static files

STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'frontend/static'),
    os.path.join(BASE_DIR, 'frontend/build'),
    os.path.join(BASE_DIR, 'frontend/build/static'),
]

djangoapp/url
    path(route='login', view=views.login_user, name='login'),

djangoproj/url
 path('login/', TemplateView.as_view(template_name="index.html")),


cd /home/project/xrwvm-fullstack_developer_capstone/server/frontend
npm run build

when creating and updating the server/database, you need to build and compose with each change
docker build . -t nodeapp
docker-compose up