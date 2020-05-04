import courseController from './course/course_controller.js';
import lessionController from './lession/lession-controller.js';

class Router {
  constructor(app) {
    app.use('/courses', courseController);
    app.use('/lessions', lessionController);
  }
}

export default Router;
