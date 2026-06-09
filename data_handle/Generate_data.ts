import { faker } from '@faker-js/faker';

export type Employee = {
  firstName: string;
  lastName: string;
  email: string;
};

export function generateEmployee(): Employee {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = faker.internet.email({ firstName, lastName });
  return { firstName, lastName, email };
}

export function generateEmployees(count = 5): Employee[] {
  return Array.from({ length: count }, () => generateEmployee());
}

console.log(generateEmployees())




















// import { faker } from '@faker-js/faker';

// export interface Employee {
// 	firstName: string;
// 	lastName: string;
// 	email: string;
// }

// export function generateEmployee(): Employee {
// 	const firstName = faker.person.firstName();
// 	const lastName = faker.person.lastName();
// 	const email = faker.internet.email({ firstName, lastName });

// 	return {
// 		firstName,
// 		lastName,
// 		email,
// 	};
// }

// export function generateEmployees(n = 2): Employee[] {
// 	return Array.from({ length: n }, () => generateEmployee());
// }

