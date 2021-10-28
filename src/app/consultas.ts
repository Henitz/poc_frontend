import { Medicos } from 'src/app/medicos';
import { Pacientes } from './pacientes';
export class Consultas {
  id!: number;
  data!: string;
  medico = new Medicos();
  paciente = new Pacientes();
}
