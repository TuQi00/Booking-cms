"use client"
import React, { useState } from 'react';
import ServiceTable from './table';
interface Service {
  id: number;
  name: string;
  type: string;
  duration: string;
  price: string;
  description: string;
}
const service: React.FC = () => {
  const [services, setServices] = useState<Service[]>([
    { id: 1, name: 'Service A', type: 'Type 1', duration: '30 mins', price: '$50', description: 'Description A' },
    { id: 2, name: 'Service B', type: 'Type 2', duration: '1 hour', price: '$100', description: 'Description B' },
    // Add more rows as needed
  ]);
  const [currentService, setCurrentService] = useState<Service | null>(null);

  const handleAddService = (service: Omit<Service, 'id'>) => {
    setServices([...services, { ...service, id: Date.now() }]);
  };

  const handleEditService = (updatedService: Service) => {
    setServices(services.map(service => (service.id === updatedService.id ? updatedService : service)));
    setCurrentService(null);
  };

  const handleEditClick = (service: Service) => {
    setCurrentService(service);
  };

  const handleDeleteClick = (service: Service) => {
    setServices(services.filter(s => s.id !== service.id));
  };

  return (
    <div>
      <ServiceTable
        data={services}
        onEditClick={handleEditClick}
        onDeleteClick={handleDeleteClick}
      />
    </div>
  );
};

export default service;
