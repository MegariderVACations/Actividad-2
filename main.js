const {app, BrowserWindow, ipcMain} = require('electron');
const path = require('path')



  function buscarUsuario(usuario){
    let arr = ["Esdras", "Andre","Gonzales","Erwind","Alex"];
    for(i=0; i < arr.length; i++ ){
        if(arr[i]== usuario){
            return true
        }
    }
}

let ventana;

function createWindow(){
    const ventana = new BrowserWindow({
        width: 400,
        height: 300,
        webPreferences:{
            preload: path.join(app.getAppPath(),'preload.js')
        }
    });
    ventana.loadFile('index.html')

}

ipcMain.on('registroValido',function(event,args){
    console.log(args)
})

app.whenReady().then(createWindow)
