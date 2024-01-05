import logo from './logo.png';
import './App.css';

function getRecord(module, registerID) {  

  //Get the record info from where you run the widget tool.
  var record = new Promise(function(resolve, reject) {
    window.ZOHO.CRM.API.getRecord({ Entity: module, RecordID: registerID })
      .then(function (e) {
        var register = e.data[0];
       // var numberID = id[0];
        
        resolve({register: register});

      })
      .catch(function (error) {
        reject(error);
      });
  });


  return record


}

function App(data) {

  

  

  //El parametro 'data' devuelve el módulo y el id desde el cual ejecutamos el widget:

   const module= data.data.Entity;
   const registerID = data.data.EntityId  ;
    
  //Aca llamamos a las funciones de zoho para traer o enviar data. Se les pasa como parametro la info que necesitan para ejecutarse.
   
   getRecord(module, registerID).then(function (result) {
    
    //data del contrato donde estoy
    console.log("r ", result)
   
    
  })
  .catch(function (error) {
    console.error(error);
  });

  return (
    <div className="App">
      <header className="App-header">
        <p className="App-title">
          This widget was created by
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="https://daianaarena.github.io/my-portfolio/#home"
          target="_blank"
          rel="noopener noreferrer"
        >
          CONTACT ME
        </a>
      </header>
      
        <p className="App-title">
        {module}
        </p>
        <p className="App-title">
        {registerID}
        </p>
        
    </div>
  );
}

export default App;

//function App({data}) {