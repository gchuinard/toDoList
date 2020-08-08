// Liste des tâches, en JS.
const tasks = [
  // Chaque tâche est modélisée par un objet JS.
  {
    text: 'Faire une Todolist en JS',
    done: true
  },

  {
    text: 'Faire une Todolist en React (bientôt, peut-être)',
    done: false
  },

  {
    text: 'Coder Facebook (en mieux)',
    done: false
  },

  // {
  //   text: 'Rajouter une tâche à la liste',
  //   done: true
  // }
];

tasks.pending = function() {
  return this.filter(function(task) {
    return !task.done;
  });
};


/**
 * Todolist
 */
const app = {
  todoArea: document.querySelector('#todo'),

  init: function() {
    console.log('app.init');
    console.log(this); // this donne accès à app car on a atteri ici du fait de app.init();

    // Au reset, on vide la zone d'injection du contenu HTML.
    this.todoArea.innerHTML = '';
    this.createForm();
    this.createCounter();
    this.createList();
  },

  /**
   * Méthode de app pour créer le formulaire HTML.
   */
  createForm: function() {
    console.log('app.createForm');
    console.log(this);

    // Utilisation du DOM : sa méthode createElement génère et retourne un
    // objet JS, qui modélise (représente) un futur contenu HTML.
    const form = document.createElement('form');
    form.id = 'todo-form';
    form.addEventListener('submit', function(event) {
      // Empêcher le rechargement de la page
      event.preventDefault();
      console.log(event);
      console.log('salut');

      // // 1. créer un li (objet JS)
      // const task = document.createElement('li');
      // task.className = 'todo';
      // task.innerText = input.value;
      // // TODO: gérer le done
      // // 2. ajouter le li à la liste (ul, objet JS)
      // list.appendChild(task);

      // Approche déclarative
      const task = {
        text: input.value,
        done: false
      };
      tasks.push(task);

      // En mode bourrin, mais malin : on redessine toute l'application
      app.init();
    });

    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'todo-input';
    input.placeholder = 'Ajouter une tâche';
    // ...

    // On raccord les différents éléments JS entre eux.
    form.appendChild(input);

    // On injecte le contenu créé en JS dans la page HTML.
    app.todoArea.appendChild(form);
  },

  createCounter: function() {
    // Création d'un objet JS qui modélise le compteur de tâches en cours.
    const counter = document.createElement('div');
    counter.id = 'todo-counter';
    const nbPendingTasks = tasks.pending().length;
    counter.innerText = nbPendingTasks + ' tâches en cours';

    // Injection du compteur sous forme de contenu HTML, dans la page.
    app.todoArea.appendChild(counter);
  },

  createList: function() {
    // 1. On crée un objet JS qui modélise un futur <ul>.
    const list = document.createElement('ul');
    app.list = list;
    list.id = 'todo-list';

    // 2. On génère toutes les tâches, pour les ajouter dans la liste.
    tasks.forEach(this.generateTask);

    // 3. On injecte la liste complète dans la page HTML.
    app.todoArea.appendChild(list);
  },

  generateTask: function(taskContent) {
    const task = document.createElement('li');
    task.className = 'todo';
    if (taskContent.done === true) {
      task.className += ' todo--done';
    }

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = taskContent.done;
    checkbox.addEventListener('change', function() {
      taskContent.done = !taskContent.done;
      app.init();
    });
    task.appendChild(checkbox);

    const text = document.createElement('span');
    text.className = 'todo-text';
    text.innerText = taskContent.text;
    task.appendChild(text);

    app.list.appendChild(task);
  }
};


// Chargement du DOM
// document.addEventListener('DOMContentLoaded', app.init);
app.init();
