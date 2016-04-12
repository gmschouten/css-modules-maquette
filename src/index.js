import styles from './app.css';
import * as maquette from 'maquette';

var h = maquette.h;
var projector = maquette.createProjector();

function renderMaquette() {
  return h(`div.${styles.testClass}`, {
    classes: {
      [styles.dark]: true,
      [styles.big]: true
    }
  }, ['testing div']);
}

document.addEventListener('DOMContentLoaded', function () {
  projector.append(document.body, renderMaquette);
});
