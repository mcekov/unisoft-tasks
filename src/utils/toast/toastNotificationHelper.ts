import { ToastSeverity } from 'primevue/api';

export class toastService {
  constructor(toastInstanse, defaultLifeTime) {
    this.toastInstanse = toastInstanse;
    this.defaultLifeTime = defaultLifeTime ? defaultLifeTime : '3000';
  }
  displayInfo(title = 'Info', body = '', lifeTime = this.defaultLifeTime) {
    this.toastInstanse.add({
      severity: ToastSeverity.INFO,
      summary: title,
      detail: body,
      life: lifeTime,
    });
  }
}
