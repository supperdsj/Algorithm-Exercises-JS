#Delete it
难度：2
##描述
克林在打一行字母时总是会打多一个字符，比如想打”july”时会打成”juuly”,这样他需要删掉其中一个’u’。
克林想知道他可以删掉哪个位置的字符就可以变成他真正想打的一行字母。
##输入
每个测试
输入两行，两个字符串（全是小写字母）
串长为 1 到 1000000
第一个串长度刚好比第二个的长度大一
##输出
每个测试数据：
第一行输出可以删除的位置个数 P
如果P > 0 第二行输出可以删除的位置（小到大，空格隔开，位置从1开始算）
##样例输入
juuly  
july   
abc  
zz  
aa  
a  
##样例输出
2  
2 3  
0  
2  
1 2  
##来源
http://acm.nyist.net/JudgeOnline/problem.php