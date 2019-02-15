#!/bin/bash
#########################################################################
# File Name: w.sh
# Author: wangbin34
# mail: wangbin34@baidu.com
# Created Time: 2019-02-15 11:34:37
#########################################################################
cat ./file_list | while read line
do
    #sed -i "s/'tpl\//'static\/tpl\//g" $line
    #sed -i "s/'img\//'static\/img\//g" $line
    sed -i 's/{{/__/g' $line
    sed -i 's/}}/__/g' $line
done

