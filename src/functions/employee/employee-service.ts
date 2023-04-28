import {getDatabaseConnection} from '@libs/database-manager';
import {Employee} from 'src/entities/employee.entity';

const create = async (employee: Employee): Promise<Employee> => {
  const employeeRepository = await (
    await getDatabaseConnection()
  ).getRepository(Employee);
  return await employeeRepository
    .save(employee)
    .catch((e) => {
      console.debug('failed to create employee Record', e);
      throw new Error(e);
    });
};

const fetch = async (employeeId: string): Promise<Employee> => {
  const employeeRepository = await (
    await getDatabaseConnection()
  ).getRepository(Employee);
  return await employeeRepository
    .findOneBy({id: employeeId})
    .catch((e) => {
      console.debug('failed to fetch employee Record', e);
      throw new Error(e);
    });
};

const fetchAll = async (): Promise<Employee[]> => {
  const employeeRepository = await (
    await getDatabaseConnection()
  ).getRepository(Employee);
  return await employeeRepository.find().catch((e) => {
    console.debug('failed to fetch employees ', e);
    throw new Error(e);
  });
};
export {create, fetch, fetchAll};