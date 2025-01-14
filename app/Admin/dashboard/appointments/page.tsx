'use client'

import { Box } from '@chakra-ui/react';
import AppointmentTable from '../../views/admin/dataTables/components/AppointmentTable';

import React from 'react';

const AppointmentsPage = () => {
  const apiUrl = 'http://localhost:8080/rdv/allRdv';

  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <AppointmentTable apiUrl={apiUrl} tableData={[]} />
    </Box>
  );
};

export default AppointmentsPage;
