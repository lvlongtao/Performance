>requirement:

flask

tornado.template

apache ab

blueware-admin

newrelic-admin

>steps

pip install newrelic

pip install -i http://pypi.oneapm.com/simple/ -U --force-reinstall blueware

pip install flask

pip install tornado

pip install django==1.5

pip install django-xadmin

source source_file;

sh ab_pftest.sh

>example

http://10.128.7.30:8080/python-agent-pftest/report/report_2015-06-05.html

To change report path, just modify code ab_pftest.sh

>python performance analyse

blueware-admin run-program python -m cProfile -o profile.log  -s cumulative flask_app_cprofile.py 

ab -c 10 -n 100 htpp://127.0.0.1:5000/

Ctrl+C

python my_stats.py

cat profile.txt
