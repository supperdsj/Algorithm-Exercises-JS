#矩形判断
难度：3
##描述
给出平面上4条线段，判断这4条线段是否恰好围成一个面积大于0的矩形。
##输入
输入第一行是一个整数T(1<=T<=100)，代表测试数据的数量。

每组数据包含4行，每行包含4个整数x1, y1, x2, y2 (-100000 <= x1, y1, x2, y2 <= 100000)；其中(x1, y1), (x2,y2)代表一条线段的两个端点。
##输出
每组数据输出一行YES或者NO，表示输入的4条线段是否恰好围成矩形。
##样例输入
3  
0 0 0 1  
1 0 1 1  
0 1 1 1  
1 0 0 0  
0 1 2 3  
1 0 3 2  
3 2 2 3  
1 0 0 1  
0 1 1 0  
1 0 2 0  
2 0 1 1  
1 1 0 1  
##样例输出
YES  
YES  
NO  
##来源
http://acm.nyist.net/JudgeOnline/problem.php