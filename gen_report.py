#/**********************************************************
# Author        : lvlongtao
# Email         : lvlongtao@oneapm.com
# Last modified : 2015-06-04 15:44
# Filename      : gen_report.py
# Description   : 
#* *******************************************************/
#encode:utf8

import sys
import time
import datetime
import json
import tornado.template
class gen_report:
    
    def __init__(self):
        self.conf = {}
        self.data = {}

    def get_oridata(self):
        python_data = eval(file('./python.data','r').read())
        blueware_data = eval(file('./blueware.data','r').read())
        newrelic_data = eval(file('./newrelic.data','r').read())
        self.data['ori'] = python_data
        self.data['blueware'] = blueware_data
        self.data['newrelic'] = newrelic_data
        self.data['x'] = range(1, len(python_data)+1)
        self.data['ori_tpr'] = []
        self.data['ori_rps'] = []
        self.data['blueware_tpr'] = []
        self.data['blueware_rps'] = []
        self.data['newrelic_tpr'] = []
        self.data['newrelic_rps'] = []
        for i in self.data['x']:
            self.data['ori_tpr'].append(float(python_data[i]['tpr']))
            self.data['ori_rps'].append(float(python_data[i]['rps']))
            self.data['blueware_tpr'].append(float(blueware_data[i]['tpr']))
            self.data['blueware_rps'].append(float(blueware_data[i]['rps']))
            self.data['newrelic_tpr'].append(float(newrelic_data[i]['tpr']))
            self.data['newrelic_rps'].append(float(newrelic_data[i]['rps']))
        
        self.data['blueware_tpr_slow'] = (sum(self.data['blueware_tpr']) - sum(self.data['ori_tpr']))*100/\
                                        sum(self.data['ori_tpr'])
        self.data['newrelic_tpr_slow'] = (sum(self.data['newrelic_tpr']) - sum(self.data['ori_tpr']))*100/\
                                        sum(self.data['ori_tpr'])

        return self.data
    
    def generate(self):
        loader = tornado.template.Loader("./")
        t = loader.load("report.html")
        self.conf = self.get_oridata()
        html = t.generate(static_url="../static",conf=self.conf)
        today = datetime.datetime.fromtimestamp(time.time()).strftime("%Y-%m-%d")
        f = open("./report/report_%s.html"%(today),"w")
        f.write(html)

if __name__ == '__main__':
    d = gen_report().get_oridata()
    gen_report().generate()
    print d




