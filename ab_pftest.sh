###############python 
pid=`ps aux|grep flask_app.py|grep -v grep|awk -F ' ' '{print $2}'`
echo "flask_app pid : $pid"
kill -9 $pid
python flask_app.py&
sleep 1s
python ab_pftest.py ab_pftest.conf > python.data



#############blueware
pid=`ps aux|grep flask_app.py|grep -v grep|awk -F ' ' '{print $2}'`
echo "flask_app pid : $pid"
kill -9 $pid
blueware-admin run-python flask_app.py&
sleep 1s
python ab_pftest.py ab_pftest.conf > blueware.data

##############newrelic
pid=`ps aux|grep flask_app.py|grep -v grep|awk -F ' ' '{print $2}'`
echo "flask_app pid : $pid"
kill -9 $pid
newrelic-admin run-python flask_app.py&
sleep 1s
python ab_pftest.py ab_pftest.conf > newrelic.data
#============================================
#generate report 
#report url is http://10.128.7.30:8080/python-agent-pftest/report/

python gen_report.py
today=`date +"%Y-%m-%d"`
cp report/report_$today.html report/index.html
