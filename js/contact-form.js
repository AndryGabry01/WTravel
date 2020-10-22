/*
 *   Copyright (c) 2020 WertyNetworks - Andrea Gabriele
 *   All rights reserved.

 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at

 *   http://www.apache.org/licenses/LICENSE-2.0

 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */

 /* Funzione Per il controllo dell informazioni inserite all' interno del form */
formChecker = function(){
    const CorrectColor = "#829CBC"; // Colore Campo valido
    const ErrorColor = "red"; // Colore Campo Errato
    var error = 0; // Counter di errori
    var nomeeCognomeFormat =/^[a-zA-Z]/; //RegEx Per controllo del nome e del cognome
    //RegEx Per controllo della eMail
    var mailFormat =/^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;


    /* Check Nome */
    var doc = document.getElementById('nome'); 
    if(doc.value.match(nomeeCognomeFormat)){
        doc.style.borderColor = CorrectColor;
    }else{
        doc.style.borderColor = ErrorColor;
        error+=1;
    }

    /* Check Cognome */
    doc = document.getElementById('cognome');
    if(doc.value.match(nomeeCognomeFormat)){
        doc.style.borderColor = CorrectColor;
    }else{
        doc.style.borderColor = ErrorColor;
        error+=1;
    }


    /* Check eMail */
    doc = document.getElementById('mail');
    if(doc.value.match(mailFormat)){
        doc.style.borderColor = CorrectColor;
    }else{
        doc.style.borderColor = ErrorColor;
        error+=1;
    }

    /* Check Selectbox */
    doc = document.getElementById('motivo');
    if (doc.options[doc.selectedIndex].value === ""){
        doc.style.borderColor = ErrorColor;
        error+=1;
    }else{
        doc.style.borderColor = CorrectColor;
    }

    /* Check TexArea */
    doc = document.getElementById('messaggio');
    if (doc.value === "" || doc.value === " " || doc.value === null){
        doc.style.borderColor = ErrorColor;
        error+=1;
    }else{
        doc.style.borderColor = CorrectColor;
    }

    /* Send Form */
    doc = document.getElementById('contactForm');
    if(error === 0){
        doc.submit();
    }
}