class animal 
{
    constructor(name)
    {
        this.name = name
        console.log('obj is created');
        
    }
    eats()
    {
        console.log('eating');
        
    }
    jumps()
    {
        console.log('jumping');
        
    }
}

class lions extends animal
{
    
}

// let a = new animal();
 let a = new animal("bunny");
console.log(a);
