/*
Consegna

Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito23

*/

/*
Passaggi

1)Chiedere all'utente il nome e salvarlo  
2)Collegare il nome all'utente id per renderlo visibile 
3)Chiedere all'utente il cognome e salvarlo 
4)Collegare il cognome all'utente id per renderlo visibile 
5)Chiedere all'utente il suo colore preferito e salvarlo 
6)Collegare il cognome all'utente id per renderlo visibile 

*/

//Variabili

const name = prompt ("Come ti chiami ?");


const lastname = prompt ("Qual è il tuo cognome");


const favoriteColor = prompt ("Qual è il tuo colore preferito");

const u_info = `
${name}   ${lastname}   ${favoriteColor}
`;

document.getElementById("user_info").innerHTML = u_info;



