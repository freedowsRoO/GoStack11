import { Router } from 'express';
import { startOfHour, parseISO, isEqual } from 'date-fns';
import AppointmentRepository from '../repositories/Appointments.repo';
import Appointment from '../models/Appointment.model';

const appointmentsRouter = Router();
const AppointmentsRepository = new AppointmentRepository();

appointmentsRouter.post('/', (request, response) => {
  const { provider, date } = request.body;

  const parsedDate = startOfHour(parseISO(date));

  const findAppointmentInSameDate = AppointmentsRepository.findByDate(
    parsedDate,
  );

  if (findAppointmentInSameDate) {
    return response
      .status(400)
      .json({ message: 'This appointmente is already booked' });
  }

  const appointment = AppointmentsRepository.create(provider, parsedDate);

  return response.json(appointment);
});

appointmentsRouter.get('/find', (request, response) => {
  const { provider } = request.body;
  const appointment = AppointmentsRepository.findByName(provider);

  const array = [];

  array.push({
    name: appointment.provider != null ? appointment.provider : 'null',
  });

  return response.json({ updateVariables: array });
});

export default appointmentsRouter;
