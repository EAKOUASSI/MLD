MRD_Link: "https://lucid.app/lucidchart/928c9f68-7c73-4a85-9088-be12c020ad18/edit?viewport_loc=-4697%2C-2838%2C11790%2C4329%2C0_0&invitationId=inv_1886a3ab-edca-4e25-95a3-bffc3c6edc91"

//Entités et Attributs :

{
    "gymnase": [
      {
        "Id_Gymnase": "",
        "Nom": "",
        "Addresse": "",
        "N°_Tel": ""
      }
    ],
    "membre": [
      {
        "Id_Membre": "",
        "Nom": "",
        "Prénom": "",
        "Addresse": "",
        "Date_Naissance": "",
        "Sexe": "M",
        "Id_Gymnase": "G1"
      }
    ],
    "Session": [
      {
        "Id_Session": "",
        "Type_Sport": "",
        "Horaire": "",
        "Id_membre": ,
        "Id_Gymnase": "",
        "Entraineur": ["T1", "T2"],
        "memberes": ["M1", "M2", "M3", "...M20"]
      }
    ],
    "Entraineur": [
      {
        "Id_Entraineur": "T1",
        "Nom": "Jane",
        "Prenom": "Smith",
        "age": 35,
        "specialté": "Yoga"
      },
      {
        "trainer_id": "",
        "Nom": "",
        "Prenom": "",
        "age": ,
        "specialté": ""
      }
    ]
  }
  


/*Relations :
Un gymnase peut avoir plusieurs sessions.
Un membre est inscrit à une seule session , mais une session peut avoir plusieurs membres.
Une session peut être dirigée par 2 entraîneurs au maximum, et un entraîneur peut diriger plusieurs sessions.*/

