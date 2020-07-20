import * as $ from "jquery";
/**
 * @name App
 * @author Adrar-Juil. 2020
 * @version 1.0.0
 * @abstract entry point of the current app
 */

class App {
  constructor() {
    console.log("app is running");
  }
}
//app launcher
$(document).ready(() => {
  new App(); //crée une instance de la classe App quand le doc est chargé
});
