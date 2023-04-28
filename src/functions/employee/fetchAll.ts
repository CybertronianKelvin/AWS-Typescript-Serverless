import {Employee} from 'src/entities/employee.entity';
import {fetchAll} from './employee-service';
import {successResponse} from '@libs/reponse';

const fetchAllEmployee = async () => {
  const employees: Employee[] = await fetchAll();
  return successResponse({employees});
};

export const main = fetchAllEmployee;