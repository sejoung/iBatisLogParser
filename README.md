iBatisLogParser
================

myBatisLogParser -> ibatis로 변경

Before :
 Copy & Paste iBatis log ;
 ```java
  [DEBUG][2017/07/20 10:05:05] c.i.c.l.j.JakartaCommonsLoggingImpl [debug:27] {pstm-100007} Executing Statement: SELECT TEST1, TEST2 FROM DUAL WHERE COL1 = ? AND COL2 = ?
  [DEBUG][2017/07/20 10:05:05] c.i.c.l.j.JakartaCommonsLoggingImpl [debug:27] {pstm-100007} Parameters: [CW, 9999]
```

After :
```sql 
SELECT TEST1, TEST2 FROM DUAL WHERE COL1 = 'CW' AND COL2 = '9999'
````
