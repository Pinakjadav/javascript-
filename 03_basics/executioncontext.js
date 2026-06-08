/* 
    {}    >> this is global execution context 
          >> js is single threded 
          >>   functional execution context 
          >>  eval execution context


             {}     >> memeory creation fase / creation fase >> this is use for memory allocation
                    >> execution fase  >> this executes the plan...


1) global execution
        this
2) memory fase
    val1    > undefined
    val2    > undefined
    addnum  > defination
    result1 > undefined
    result2 > undefined
3) execution fase
    val1    > 10
    val2    > 2
    addNum >   { new variable environment
                        +
                        execution thread }    
                                |
                                                                [DELETEEEEE]
                             
                        |                          |   
                memory phase               execution context 
                val1 >> undefined               num1 > 10
                val2 >> undefined               num2 > 5
                total >> undefined              total > 15 { this will return to the global execution fase }




















                */
