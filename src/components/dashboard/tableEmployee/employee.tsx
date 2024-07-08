import React, { useState } from 'react';
import EmployeeTable from './table';
interface Employee {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const employee: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', phone: '098-765-4321' },
    // Add more rows as needed
  ]);
  const [currentEmployee, setCurrentEmployee] = useState<Employee | null>(null);

  const handleAddEmployee = (employee: Omit<Employee, 'id'>) => {
    setEmployees([...employees, { ...employee, id: Date.now() }]);
  };

  const handleEditEmployee = (updatedEmployee: Employee) => {
    setEmployees(employees.map(emp => (emp.id === updatedEmployee.id ? updatedEmployee : emp)));
    setCurrentEmployee(null);
  };

  const handleEditClick = (employee: Employee) => {
    setCurrentEmployee(employee);
  };

  const handleDeleteClick = (employee: Employee) => {
    setEmployees(employees.filter(emp => emp.id !== employee.id));
  };

  return (
    <div>
      <EmployeeTable
        data={employees}
        onEditClick={handleEditClick}
        onDeleteClick={handleDeleteClick}
      />
    </div>
  );
};

export default employee;
