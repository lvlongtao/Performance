#/**********************************************************
# Author        : lvlongtao
# Email         : lvlongtao@oneapm.com
# Last modified : 2015-06-04 12:59
# Filename      : ab_pftest.py
# Description   : blueware vs newrelic perform test.. 
#* *******************************************************/
#encode=utf8

import ConfigParser
import os
import sys
import commands
import re

class ConfigReader:

    def __init__(self, confname):
        self.confname = confname
        self.cf = ConfigParser.ConfigParser()
        self.cf.read(self.confname)
        self.table_num = 0
        self.url = ''
        self.clist = []
        self.nlist = []

    def parser(self):
        section = "base"
        self.url = self.cf.get(section, "url")
        self.CMODE = self.cf.get(section, "CMODE")
        self.clist = set(self.cf.get(section, "clist").split(','))
        self.nlist = set(self.cf.get(section, "nlist").split(','))


class DoTest:

    def __init__(self, cfr):
        self.conf = cfr
        self.result = {}

    def one_test(self, cnum, nnum):
        cmd = 'ab -c %d -n %d %s' %(cnum, nnum, self.conf.url)
        status,output = commands.getstatusoutput(cmd)
        ab_result = {'tpr' : 0, 'rps': 0}
        if status == 0:
            #get 'Requests per second' and 'Time per request'
            tpr_pattern = "Time per request\:       \d+.\d+"
            rps_pattern = "Requests per second:    \d+.\d+"
            try:
                m = re.search(tpr_pattern, output).group()
                tpr = m.split(':')[1].strip()
            except:
                print 're error in %s' %(tpr_pattern)
            try:
                m = re.search(rps_pattern, output).group()
                rps = m.split(':')[1].strip()
            except:
                print 're error in %s' %(rps_pattern)
            ab_result['tpr'] = tpr
            ab_result['rps'] = rps
        return ab_result

    def all_test(self):
        if self.conf.CMODE == 'on':
            clist = self.conf.clist
        else:
            clist = range(1, 100)
        """
        cmds = ['python flask_app.py',
                'blueware-admin run-python flask_app.py',
                'newrelic-admin run-python flask_app.py'
                ]
        for cmd in cmds:
            status,output = commands.getstatusoutput("ps aux|grep flask_app.py|grep -v grep|awk -F ' ' '{print $2}'")
            if output:
                pid = output
                os.system('kill -9 %s'%pid)
            #os.system(cmd)
        """
        for num in clist:
            num = int(num)
            one_result = self.one_test(num, num*10)
            #print num
            #print one_result
            self.result[num] = one_result
        return self.result

if __name__ == '__main__':
    cfr = ConfigReader(sys.argv[1])
    cfr.parser()
    abtest = DoTest(cfr)
    #print abtest.one_test(1, 10)
    print abtest.all_test()
