#!/bin/bash -x

for i in app{1..2} db; do vagrant ssh $i -c 'sudo /etc/init.d/network restart'; done
