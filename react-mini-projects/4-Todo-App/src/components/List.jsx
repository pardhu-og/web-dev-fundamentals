
function List({tasks, delFunc, donFunc}){


    return (
        <div>
            <h2>Your tasks are</h2>
            {tasks.map(p => p.stat ?  <p key = {p.id}><span style={{textDecoration: "line-through"}}>{p.task}</span>
            <button onClick={()=>donFunc(p.id)}>Done</button><button onClick={()=>delFunc(p.id)}>Del</button></p>
            : 
            <p id = {p.id}
            key = {p.id}>{p.task}
            <button onClick={()=>donFunc(p.id)}>Done</button>
            <button onClick={()=>delFunc(p.id)}>Del</button></p>
            )}
        </div>
    )
    
}

export default List;

