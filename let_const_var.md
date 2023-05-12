subject | #const | #let | #var 
--- | --- | --- | --- 
Function Scope | X(NO) | X(NO) | Y{YES}
Block Scope | Y{YES} | Y{YES} | X(NO) 
Hoisted | X(NO) | X(NO) | Y{YES} 
Temporal Dead Zone | Y{YES} | Y{YES} | X(NO) 
Can be re-assigned | X(NO) | Y{YES} | Y{YES}
Can be re-declered | X(NO) | X(NO) | Y{YES} 
Must be initialized | Y{YES} | X(NO) | X(NO) 
