import { isEqual } from 'date-fns';
import Appointment from '../models/Appointment.model';

class AppointmentRepository {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  public findByName(name: string): Appointment | null {
    const updateVariables = this.appointments.filter(appointment =>
      appointment.provider.includes(name),
    );
    return updateVariables || null;
  }

  public findByDate(date: Date): Appointment | null {
    const findAppointment = this.appointments.find(appointment =>
      isEqual(date, appointment.date),
    );

    return findAppointment || null;
  }

  public create(provider: string, date: Date): Appointment {
    const appointment = new Appointment(provider, date);

    this.appointments.push(appointment);

    return appointment;
  }
}

export default AppointmentRepository;
