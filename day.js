var daysUntillBirthday = 45;

for(var i=daysUntillBirthday;i>=0;i--){
    if(i>=30){
        console.log(i + ' days untill my Birthday. So sad!!!');
    }else if(i<30 && i>0){
        console.log('Only '+ i +' days untill my brithday!! So close!!');
    }else{
        console.log('Bahhhhhhhhh!!!! Its my birthday!!!!')
    }
}