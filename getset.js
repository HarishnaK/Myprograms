var name={
    name1:"harishna",
    name2:"kathirvel",
    get fullname(){
        return `${this.name1}     
        ${this.name2}`;
    }
}
console.log(name.fullname);


var na={
    shortname:"hari",
    initial:"k",
    Set(newname){
        return newname;
        
        
    }
}
Set.newname={fullname:harishna}
console.log(na.Set);