/**
 * Import
 */
import React from 'react';

/**
 * Local import
 */
// Composants enfants éventuels
import NewTask from 'src/components/NewTask';
import PendingTaskCount from 'src/components/PendingTaskCount';
import Tasks from 'src/components/Tasks';

// Styles et assets
import './app.sass';

// Données
import tasks from 'src/data/tasks';

console.log(tasks);

/**
 * Code
 */
// const App = () => {
const App = class extends React.Component {
  // this.state est une propriété de l'instance courante de type App qui stocke
  // des informations potentiellement amenées à évoluer dans le temps. On y met
  // ce qu'on veut.
  // État initial (au démarrage de la vie de l'élément React / instance de App) :
  state = {
    title: 'TodoList en React',
    tasks
  }

  // handleSubmit(event) {
  handleSubmit = (event) => {
    event.preventDefault(); // empêcher le refresh de la page HTML
    // 2. modifier les données de l'application (objet "tasks")
    // 3. déclencher un refresh de l'application React
    this.setState({
      tasks: [...this.state.tasks, {
        text: this.state.newTaskText,
        done: false
      }]
    });
  }

  addDummyTask = () => {
    const newTask = { text: 'lol coucou', done: true };
    const editedTasks = [...this.state.tasks, newTask];
    this.setState({ tasks: editedTasks });
  }

  handleChange = (event) => {
    const newTaskText = event.target.value;
    this.setState({
      // "newTaskText": newTaskText
      newTaskText
    });
  }

  handleTaskClick = (idClicked) => {
    // Il ne suffit pas de mettre à jour _la_ tâche qui a été cliquée :
    // c'est toute la liste des tâches (this.state.tasks) qui doit être
    // remplacée, au moins déclarativement (en interne, la mise-à-jour
    // sera optimisée par setState).

    // On applique une transformation à la liste des tâches, consistant
    // à réutiliser telles quelles toutes les tâches, SAUF celle cliquée,
    // qui doit voir sa propriété "done" inversée.
    const editedTasks = this.state.tasks.map((task) => {
      if (task.id === idClicked) {
        return { ...task, done: !task.done };
      }
      return task;
    });

    // Mise-à-jour des données et de l'UI.
    this.setState({ tasks: editedTasks });
  }

  render() {
    const pendingTaskCount = tasks.filter((task) => !task.done).length;
    return <div className="app">
      <NewTask onChange={this.handleChange} onSubmit={this.handleSubmit} />
      <PendingTaskCount count={pendingTaskCount} onClick={this.addDummyTask} />
      <Tasks tasks={this.state.tasks} onTaskClick={this.handleTaskClick} />
    </div>;
  }
};

/**
 * Export
 */
export default App;
