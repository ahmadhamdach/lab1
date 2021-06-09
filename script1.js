




let b=prompt('enter ur string');

var p = -1, i, j,s=-1;

if(b.length==0 || b.length==1){
    alert('no');
}else{
    
    for(i = 0; i < b.length; i++)
    { if (b[i]=='_'){ s=1;
        for(j = i + 1; j < b.length; j++)
        {
            if (b[i] == b[j])
            {
                p = 1;
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






