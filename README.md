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

source source_file;

sh ab_pftest.sh

>example

http://10.128.7.30:8080/python-agent-pftest/report/report_2015-06-05.html

To change report path, just modify code ab_pftest.sh