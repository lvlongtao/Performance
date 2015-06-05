blueware_pid=`ps aux|grep flask_app.py|grep -v grep|awk -F ' ' '{print $2}'`
newrelic_pid=`ps aux|grep flask_newrelic_app.py|grep -v grep|awk -F ' ' '{print $2}'`
echo $blueware_pid >blueware.pid
echo $newrelic_pid >newrelic.pid
