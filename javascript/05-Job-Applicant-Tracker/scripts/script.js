
const applicants = [
    {
      id: 1,
      name: "Alice",
      role: "Frontend Developer",
      experience: 3,
      status: "Shortlisted"
    },
    {
      id: 2,
      name: "Bob",
      role: "Backend Developer",
      experience: 2,
      status: "Rejected"
    },
    {
      id: 3,
      name: "Charlie",
      role: "Frontend Developer",
      experience: 4,
      status: "Pending"
    }
  ];
  
 


  const display = document.querySelector("#applicant-list");
  
  





    
  function renderApplicants (category){
    if (category === "All") {
        display.innerHTML= `<h3>All Candidates</h3>`
        const renderd_applicants = applicants.map(p => {
        const {id, name, role, experience, status} = p;
        
        const newElement = document.createElement('p');
        newElement.innerHTML=(`${name}--Role: ${role}--Status: ${status}--Experience in years: ${experience} <button id = "sht${id}">Shortlist</button>
    <button id = "rej${id}">Reject</button>
    <button id = "del${id}">Delete</button>`)
      
       
      
      
        display.appendChild(newElement)
         document.getElementById(`sht${id}`).addEventListener("click",function(){appplicants = applicants.map(p =>
         {if (p.id === id) {p.status = "Shortlisted"
          renderApplicants("All")
         }
          }
         )})
        
         document.getElementById(`rej${id}`).addEventListener("click",function(){appplicants = applicants.map(p =>
          {if (p.id === id) {p.status = "Rejected"
           renderApplicants("All")
          }
           }
          )})

          document.getElementById(`del${id}`).addEventListener("click",function(){
            let u = applicants.find(p => p.id === id);
              applicants.splice(applicants.indexOf(u),1);
              renderApplicants("All")
          })


        return [id, name, role, experience, status]
    });}

    else {
        display.innerHTML= `<h3>${category} Candidates</h3>`
        const renderd_applicants = applicants.filter(p => p["status"] === category).map(p => {
            const {id, name, role, experience, status} = p;
            
            const newElement = document.createElement('p');
            newElement.innerHTML=(`${name}--Role: ${role}--Status: ${status}--Experience in years: ${experience} <button id = "sht${id}">Shortlist</button>
    <button id = "rej${id}">Reject</button>
    <button id = "del${id}">Delete</button>`)
          
            display.appendChild(newElement)

            document.getElementById(`sht${id}`).addEventListener("click",function(){appplicants = applicants.map(p =>
              {if (p.id === id) {p.status = "Shortlisted"
               renderApplicants(category)
              }
               }
              )})

              document.getElementById(`rej${id}`).addEventListener("click",function(){appplicants = applicants.map(p =>
                {if (p.id === id) {p.status = "Rejected"
                 renderApplicants(category)
                }
                 }
                )})

                document.getElementById(`del${id}`).addEventListener("click",function(){
                  let u = applicants.find(p => p.id === id);
                    applicants.splice(applicants.indexOf(u),1);
                    renderApplicants(category)
                })


            return [id, name, role, experience, status]
        });
    } crunch ()   
  }      
renderApplicants ("All")
 function crunch () {
    const stats =document.querySelector(".stats")
    let statdataavg = applicants.reduce((acc,ind) => {
        
      acc = acc + ind["experience"];
      
      return acc
      
    },0);
    
    const statuses =applicants.map(p => p.status)
    .reduce((acc,ind) => { 
      acc[ind] =(acc[ind] || 0) + 1;
      return acc
    },{}); 
    
    const {Pending, Rejected, Shortlisted} = statuses;
    stats.innerHTML = `<h3>Stats</h3>
    <p>Total Applicants: ${applicants.length}</p>
    <p>Average Experience: ${Math.round(statdataavg / applicants.length)}</p>
    <p>Pending: ${Pending || 0}</p>
    <p>Rejected: ${Rejected || 0}</p>
    <p>Shortlisted: ${Shortlisted|| 0}</p>
    `
    
 }

let form = document.querySelector("#applicant-form")
form.addEventListener("submit", function(){
    event.preventDefault();
    let name = document.querySelector("#name").value;
    let role = document.querySelector("#role").value;
    let experience = Number(document.querySelector("#experience").value)
    
    
    
    applicants.push({id: applicants.length + 1,
        name: name,
        role: role,
        experience: experience,
        status: "Pending"})
    
crunch ();
renderApplicants("All")
    
    
}) 