let a,b,c,d;
a=10;
b=20;
c=30;
d=a+b+c;
console.log(a==b);
console.log(a==10);
console.log(a=="10")// in this case the string is converted into number due to type coercion
console.log(a-b!=d)
console.log(a==="10")// in this it will return false because due to strictly equlaity 
console.log(a+b+c<=d)


