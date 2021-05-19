FROM python:3.6

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN pip install -r requirements.txt

CMD ["uwsgi", "src/app.ini"]