import React from 'react';
import AdminSidebar from '../../../Components/AdminSidebar/AdminSidebar';
import AdminHeader from '../../../Components/AdminHeader/AdminHeader';
import { PieChart } from '@mui/x-charts/PieChart';
import { useState, useEffect } from 'react';
import axios from 'axios'

// ... (previous imports and code)

const AdminHome = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const booksResponse = await axios.get('http://localhost:5000/book/bookcount');
        const complaintsResponse = await axios.get('http://localhost:5000/complaint/complaintcount');
        const partnersResponse = await axios.get('http://localhost:5000/partner/getpartnercount');
        const usersResponse = await axios.get('http://localhost:5000/user/usercount');

        setChartData([
          { name: 'Books', value: booksResponse.data.count },
          { name: 'Complaints', value: complaintsResponse.data.length },
          { name: 'Partners', value: partnersResponse.data.length },
          { name: 'Users', value: usersResponse.data.count },
        ]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const chartColors = ['#02B2AF', '#2E96FF', '#B800D8', '#60009B'];

  return (
    <>
      <AdminHeader />
      <AdminSidebar />
      <div className='singlepage'>
        <div className='singlepagecontainer' style={{ backgroundColor: 'black' }}>
          <div className='chart' style={{ marginLeft: 500, marginTop: 200, display: 'flex', justifyContent: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', marginRight: '100px', textAlign:"left" }}>
              {chartData.map((data, index) => (
                <div key={index} style={{ marginBottom: '10px' }}>
                  <div style={{ width: '10px', height: '10px', backgroundColor: chartColors[index], marginRight: '5px' }}></div>
                  <h3 style={{ color: 'white' }}>{data.name}</h3>
                </div>
              ))}
            </div>
            <PieChart
              series={[
                {
                  data: chartData,
                  innerRadius: 30,
                  outerRadius: 100,
                  paddingAngle: 5,
                  cornerRadius: 5,
                  startAngle: -90,
                  endAngle: 180,
                  cx: 150,
                  cy: 150,
                  colors: chartColors, // Apply the colors directly to the series
                  labelKey: 'name',
                  colorKey: 'value',
                },
              ]}
              height={503}
              width={500}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHome;

