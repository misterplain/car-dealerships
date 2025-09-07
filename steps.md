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