import { Medicos } from 'src/app/medicos';
import { Pacientes } from './pacientes';
import { Remedios } from './remedios';
export class Consultas {
  id!: number;
  data!: string;
  medico = new Medicos();
  paciente = new Pacientes();
  //remedios = new List<Remedios>();
  remedios!: Remedios[];
}
