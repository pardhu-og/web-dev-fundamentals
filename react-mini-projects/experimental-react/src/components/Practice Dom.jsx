export function Bookcard ({title, author}){
        return (
            <div style={{width: "200px", 
                        backgroundColor: "lightgrey",
                        marginBottom: "20px",
                        marginTop: "20px",
                        padding: "0.7rem",
                        textAlign: "center",
                        margin:"auto"
                        }}>
            <h3>{title}</h3>
            <h4>{author}</h4>
        </div>
        )
}