function triangle(s1,s2,s3){

    if( s1===s2 && s2===s3 ){
        console.log('Equilateral Triangle')
    }
    else if( s1===s2 || s2===s3 || s1===s3 ){
        console.log( 'Isosceles Triangle')
    }
    else {
        console.log('scalene Triangle')
    }

}

triangle(9,8,8) 
