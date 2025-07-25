import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { PiChartLineUp } from "react-icons/pi";
import { PiChartLineDown } from "react-icons/pi";
import { GoFileSymlinkFile } from "react-icons/go";
import { FaFilePdf } from "react-icons/fa";
import { BsFiletypeDocx } from "react-icons/bs";
import { CiStar } from "react-icons/ci";
import { AiFillStar } from "react-icons/ai";

Chart.register(...registerables);

const Dashboard = () => {

  const [fillstar1, setFillstar1] = useState(false)
  const [fillstar2, setFillstar2] = useState(false)
  const [fillstar3, setFillstar3] = useState(false)
  const [fillstar4, setFillstar4] = useState(false)

  const data1 = {
    labels: [],
    datasets: [{
      data: [32, 68],
      backgroundColor: ['#3872FA', '#F1F1F1'],
    }]
  };

  const options1 = {
    cutout: "80%",
  };

  const config1 = {
    type: 'doughnut',
    data: data1,
  };

  const data2 = {
    labels: [],
    datasets: [{
      data: [48, 68],
      backgroundColor: ['#3872FA', '#F1F1F1'],
    }]
  };

  const options2 = {
    cutout: "80%",
  };

  const config2 = {
    type: 'doughnut',
    data: data2,
  };

  const data3 = {
    labels: [],
    datasets: [{
      data: [89, 11],
      backgroundColor: ['#EE0000', '#F1F1F1'],
    }]
  };

  const options3 = {
    cutout: "80%",
  };

  const config3 = {
    type: 'doughnut',
    data: data3,
  };



  const data4 = {
    labels: [],
    datasets: [{
      data: [78, 22],
      backgroundColor: ['#0070F3', '#F1F1F1'],
    }]
  };

  const options4 = {
    cutout: "80%",
  };

  const config4 = {
    type: 'doughnut',
    data: data3,
  };

  const labels = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const data = {
    labels: labels,
    datasets: [{
      data: [65, 59, 80, 81, 56, 55, 40, 50, 37, 43, 62, 70],
      backgroundColor: ["Blue", "SkyBlue"],
    }]
  };

  const config = {
    type: 'bar',
    data: data,
  };

  return (
    <>
      <div className="container mt-10">
        <div className="row">
          <div className="col-lg-4">
            <div className="shadow-sm card">
              <div className="my-4 row ms-3">
                <div className="mt-3 leading-7 col-lg-7">
                  <p className='text-[#818181]'>Total Images</p>
                  <p className='font-bold'>36,476 GB</p>
                  <p className='flex text-success'><PiChartLineUp />
                    +32.40% &nbsp; <span className='text-[#818181]'>last month</span></p>
                </div>
                <div className="col-lg-5" style={{ height: '115px' }}>
                  <Doughnut config={config1} data={data1} options={options1} />
                  <span className='absolute bottom-10 left-14'>32%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="shadow-sm card">
              <div className="my-4 row ms-3">
                <div className="mt-3 leading-7 col-lg-7">
                  <p className='text-[#818181]'>Total Videos</p>
                  <p className='font-bold'>53,406 GB</p>
                  <p className='flex text-danger'><PiChartLineDown />
                    -18.45% &nbsp; <span className='text-[#818181]'>last month</span></p>
                </div>
                <div className="col-lg-5" style={{ height: '115px' }}>
                  <Doughnut config={config2} data={data2} options={options2} />
                  <span className='absolute bottom-10 left-14'>48%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="shadow-sm card">
              <div className="my-4 row ms-3">
                <div className="mt-3 leading-7 col-lg-7">
                  <p className='text-[#818181]'>Total Documents</p>
                  <p className='font-bold'>90,875 GB</p>
                  <p className='flex text-success'><PiChartLineUp /> +20.34% <span className='text-[#818181]'>last month</span></p>
                </div>
                <div className="col-lg-5" style={{ height: '115px' }}>
                  <Doughnut config={config3} data={data3} options={options3} />
                  <span className='absolute bottom-10 left-14'>89%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-8">
            <div className="card">
              <div className="row p-5">
                <div className="col-lg-12">
                  <p className='text-[#818181] text-lg'>Total Storage used</p>
                  <div className='d-flex'>
                    <p className='font-bold text-2xl'>105,000 GB</p>
                    <p className='flex text-success ms-5 mt-1'><PiChartLineUp />
                      +32.40% &nbsp; <span className='text-[#818181]'>last year</span></p>
                  </div>
                </div>

                <div className="col-lg-12">
                  <Bar data={data} config={config} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card p-10">
              <div className='ml-5' style={{ width: "310px" }}>
                <Doughnut config={config4} data={data4} options={options4} />
              </div>
              <div className='relative bottom-44 left-40'>
                <span className='fw-bold text-4xl'>78 GB</span> <br />
                <span className='fw-bold text-sm'>Used of 100</span>
              </div>

              <ul class="list-group list-group-flush">
                <li class="list-group-item font-bold flex"> <span className="bg-[#BFDBFE] h-2 w-2 mt-1.5 rounded absolute left-0"></span> Available storage <span className='absolute right-0 text-[#818181]'>22%</span></li>
                <li class="list-group-item font-bold flex"> <span className="bg-[#0070F3] h-2 w-2 mt-1.5 rounded absolute left-0"></span> Total used storage <span className='absolute right-0 text-[#818181]'>78%</span></li>
              </ul>
            </div>
          </div>
        </div>


        <div className="row mt-5">
          <div className="col-lg-12">
            <h1 className='font-bold text-xl'>Quick Access</h1>
            <div className="row mt-10">
              <div className="col-lg-4">
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <GoFileSymlinkFile className='size-14 text-[#F9C10A]' />
                  <p>Employee Sheet</p>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <FaFilePdf className='size-14 text-[#DC0A20]' />
                  <p>Employee Sheet</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <BsFiletypeDocx className='size-14 text-[#0263D1]' />
                  <p>Employee Sheet</p>
                </div>
              </div>
            </div>

            <h1 className='font-bold text-xl mt-10'>Recent Files</h1>
            <div className="row mt-2">
              <div className="col-lg-3">
                <div className="card p-3">
                  <div className="row">
                    <div className="col-lg-10">
                      <GoFileSymlinkFile className='text-[#F9C10A] size-8' />
                    </div>
                    <div className="col-lg-2">
                      { fillstar1 ?
                      <AiFillStar onClick={()=> setFillstar1(!fillstar1)} className='size-6 cursor-pointer text-[#F9C10A]' />
                      
                      : 
                      <CiStar onClick={()=> setFillstar1(!fillstar1)} className='size-6 cursor-pointer' />
                    }
                    </div>
                  </div>

                  <div className="row mt-4">
                    <div className="col-lg-12">
                      <p className='text-[#737373] font-bold'>Employee Sheets</p>
                      <p className='text-[#B3B3B3]'>2.4 GB &bull; 135 files</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="card p-3">
                  <div className="row">
                    <div className="col-lg-10">
                      <GoFileSymlinkFile className='text-[#F9C10A] size-8' />
                    </div>
                    <div className="col-lg-2">
                    <div className="col-lg-2">
                      { fillstar2 ?
                      <AiFillStar onClick={()=> setFillstar2(!fillstar2)} className='size-6 cursor-pointer text-[#F9C10A]' />
                      
                      : 
                      <CiStar onClick={()=> setFillstar2(!fillstar2)} className='size-6 cursor-pointer' />
                    }
                    </div>
                    </div>
                  </div>

                  <div className="row mt-4">
                    <div className="col-lg-12">
                      <p className='text-[#737373] font-bold'>Personal Assets</p>
                      <p className='text-[#B3B3B3]'>2.4 GB &bull; 135 files</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card p-3">
                  <div className="row">
                    <div className="col-lg-10">
                      <GoFileSymlinkFile className='text-[#F9C10A] size-8' />
                    </div>
                    <div className="col-lg-2">
                    <div className="col-lg-2">
                      { fillstar3 ?
                      <AiFillStar onClick={()=> setFillstar3(!fillstar3)} className='size-6 cursor-pointer text-[#F9C10A]' />
                      
                      : 
                      <CiStar onClick={()=> setFillstar3(!fillstar3)} className='size-6 cursor-pointer' />
                    }
                    </div>
                    </div>
                  </div>

                  <div className="row mt-4">
                    <div className="col-lg-12">
                      <p className='text-[#737373] font-bold'>Data & Prints</p>
                      <p className='text-[#B3B3B3]'>2.4 GB &bull; 135 files</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
            <div className="card p-3">
              <div className="row">
                <div className="col-lg-10">
                  <GoFileSymlinkFile className='text-[#F9C10A] size-8' />
                </div>
                <div className="col-lg-2">
                <div className="col-lg-2">
                      { fillstar4 ?
                      <AiFillStar onClick={()=> setFillstar4(!fillstar4)} className='size-6 cursor-pointer text-[#F9C10A]' />
                      
                          : 
                          <CiStar onClick={()=> setFillstar4(!fillstar4)} className='size-6 cursor-pointer' />
                    }
                    </div>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-lg-12">
                  <p className='text-[#737373] font-bold'>Employee Sheets</p>
                  <p className='text-[#B3B3B3]'>2.4 GB &bull; 135 files</p>
                </div>
              </div>
            </div>
          </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Dashboard;
