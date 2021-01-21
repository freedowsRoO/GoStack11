import { Router } from 'express';
import appointmentsRouter from './appointments.routes';

const routes = Router();

// Sistem routes
routes.use('/appointments', appointmentsRouter);

export default routes;
