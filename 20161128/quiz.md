#移位密码
难度：0
##描述
移位密码是最简单的一类代替密码，具体算法就是将字母表的字母右移k个位置（k<26），并对字母表长度作模运算。
现给你一串密文，全部由大写字母组成。已知加密过程为：将每个字母按照字母表的顺序右移k位。
加密函数：E(m)=(m+k)%q.
请破译出明文！
##输入
每组数据包含一个字符串和一个整数k（k<26），中间用空格隔开，字符串全部由大写字母组成，长度小于50，k表示向右移动的位数.
##输出
输出每组密文所对应的明文，每组输出占一行。
##样例输入
JMPWFZPV 1
##样例输出
ILOVEYOU
##来源
http://acm.nyist.net/JudgeOnline/problem.php