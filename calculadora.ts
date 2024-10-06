type operations = "multypli" | "add" | "divide";

const multiplicate = (a:number,b:number,op: operations): number =>{
    if(op === "multypli") return a * b;
    if(op === "add") return a+b;
    if(op === "divide"){
        if(b === 0) 
            throw new Error("Can\t by divide 0");
        return a/b;
    }

    throw new Error ("Operation is not valid");
        
}

console.log(multiplicate(5,4,"add"));
