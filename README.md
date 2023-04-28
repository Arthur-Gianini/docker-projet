# Bonjour 👋

# <p align="center">Projet Docker -> MERN Stack</p>
  
Ce projet est un simple Stack MERN qui sert d'entrainement et de rendu pour le cours de Docker 🐳


----------


## 🛠️ Tech Stack
- ⚛[React](https://reactjs.org/)
- ✖[Express.js](https://expressjs.com/fr/)
- 🟢[Node.js](https://nodejs.org/en)
- 🍃[MongoDB](https://www.mongodb.com/fr-fr)



## 🔧 Mise en route    

Tout est mis en place pour un fonctionnement on the go, sauf bien sûr l'accès en base de données.

### Cloner

La toute première étape est de cloner le projet avec le bouton vert "<> Code" et avec le lien HTTPS obtenu faire un :
```bash
git clone https://github.com/Arthur-Gianini/docker-projet.git
```

### Connection à la BD

Ensuite nous devons créer un fichier .env à la racine du projet avec le contenu suivant :

```Dotenv
DB = mongodb+srv://<username>:<password>@cluster0.o2yktuk.mongodb.net/?retryWrites=true&w=majority
MONGO_INITDB_ROOT_USERNAME=<username>
MONGO_INITDB_ROOT_PASSWORD=<password>
```
en remplaçant les "\<username>" et "\<password>" par le login fourni dans le mail.

Pour vérifier son fonctionnement, passer à la partie suivante ⬇

### Tester le docker

Afin de tester le stack dockerisé, il suffit de faire la commande suivante à la racine du projet
   
```bash
docker-compose up
```
Cela va build tous les dockers et les connecter ensemble, il sera possible de voir donc les logs et si la base de données est bien connectée.




----------
Fait avec [Readmi Editor](https://readmi.xyz/editor) 🍰
