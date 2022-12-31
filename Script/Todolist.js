let form=document.getElementById('addForm');
let ul1=document.getElementById("items");
class store
{
    static additem(item)
    {
        let itemArr=store.getItem()
        itemArr.push(item)
        localStorage.setItem("items",JSON.stringify(itemArr))

    }
    static getItem()
    {
        let itemArr;
        if(localStorage.getItem("items")==null)
        {
            itemArr=[]

        }
        else{
           itemArr= JSON.parse(localStorage.getItem("items"))
        }
        return itemArr
    }
}
class UI
{
    static additem(item)
    {
        
    let li = document.createElement('li');
    console.log(li.appendChild(document.createTextNode(`${item}`)))
    li.className="list-group-item";
    
    
    let btn=document.createElement('button');
    btn.appendChild(document.createTextNode('X'));
    btn.className="btn btn-danger btn-sm float-right delete";
    li.appendChild(btn);
    
    ul1.appendChild(li);
    }
    static showitem()
    {
        const itemArr=store.getItem()
       itemArr.forEach(item => 
    {
        UI.additem(item)
    
});    }
}

form.addEventListener('submit',function(x)
{
    x.preventDefault(); 

    let newitem = document.querySelector('#item').value;   
     
    UI.additem(newitem)
    store.additem(newitem)

    
    document.querySelector('#item').value="";
        
})




ul1.addEventListener('click',function(e)
{
   if(e.target.classList.contains('delete'))
   {
    let cnfrm=confirm("Are you sure?")
    if(cnfrm)
    {
        this.removeChild(e.target.parentElement);
    } 
   }
})
    let filter=document.getElementById('filter');
    filter.addEventListener('keyup',function(e)
{
    
    let text=e.target.value.toLowerCase();
    
    let items= document.getElementsByTagName('li')
    let arr= Array.from(items)

    for(let x=0;x<arr.length;x++)
      {
        let textname=arr[x].firstChild.textContent
        
        if(textname.toLowerCase().indexOf(text)!=-1)
        {
            arr[x].style.display="block"
        }
        else
        {
            arr[x].style.display="none"
        }
     }
    
})

document.addEventListener("DOMContentLoaded",UI.showitem)

