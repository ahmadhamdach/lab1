

var repeat=(r)=>{
    let f=prompt('enter ur character count '+(r+1));
    
    let b=prompt('enter ur string');
    if(b.length!=f){
        alert('u should enter ur right count character');
    return;
    }else{
    var test;
    // var ii=0;
    // var ib=1;
    var p = -1, i, j,s=0;
    
    if(b.length==0 || b.length==1){
        alert('no');
    }else{
        
        for(i = 0; i < b.length; i++)
        { if (b[i]=='_'){ s=1;
            for(j = i + 1; j < b.length; j++)
            {
                if (b[i] == b[j])
                {
                    p = i;
                    break;
                }
            }
            if (p != -1)
                break;
        } 
     }
        if (p == -1 && s==0)
        alert("No");
    else
        alert('yes');
         
        
    
    }
    
    }
    }
    
    let r1=prompt('enter ur turn count');
    for (let q = 0; q <= r1; q++) {
        repeat(q);
        
    }
    