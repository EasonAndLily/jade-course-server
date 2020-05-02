import courseController from './course/course_controller.js';

class Router {
  constructor(app) {
    app.use('/courses', courseController);
  }
}

export default Router;
