const getStoreDoctor = () =>{
       const storedoctor = localStorage.getItem('store-doctor')
       if(storedoctor){
              return JSON.parse(storedoctor)
       }
       return [];
}

const saveDoctors = id =>{
       let storedoctors = getStoreDoctor();
       const exists = storedoctors.find((doctorId) => doctorId === id);
       if(!exists){
              storedoctors.push(id);
              localStorage.setItem('store-doctor', JSON.stringify(storedoctors))
       }

}

export {getStoreDoctor, saveDoctors}



