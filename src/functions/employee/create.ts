import type {ValidatedEventAPIGatewayProxyEvent} from '@libs/api-gateway';
// import {formatJSONResponse} from '@libs/api-gateway';
import {middyfy} from '@libs/lambda';


import {Employee} from 'src/entities/employee.entity';
import {create} from './employee-service';
import schema from './schema';
import {successResponse} from '@libs/reponse';

const createEmployee: ValidatedEventAPIGatewayProxyEvent<
  typeof schema
> = async (event) => {
    const employee: Employee = event.body as any as Employee;
    await create(employee);
    return successResponse({employee});
};

export const main = middyfy(createEmployee);