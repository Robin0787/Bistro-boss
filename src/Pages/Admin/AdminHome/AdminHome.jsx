import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { FaBoxOpen, FaBoxes, FaUsers, FaWallet } from 'react-icons/fa';
import { Bar, BarChart, CartesianGrid, Cell, Legend, Pie, PieChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { authContext } from '../../../AuthProvider/Provider';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';


const AdminHome = () => {
    const { user } = useContext(authContext);
    const [axiosSecure] = useAxiosSecure();
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure('/admin-stats');
            return res.data;
        }
    });
    const { data: chartData = [] } = useQuery({
        queryKey: ['chart-data'],
        queryFn: async () => {
            const res = await axiosSecure('/chart-data');
            return res.data;
        }
    });
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    return (
        <section className='bg-white min-h-screen p-4 sm:p-5 md:p-10 space-y-5'>
            <article className='text-black'>
                <h2 className="text-xl">Hi, {user?.displayName}</h2>
            </article>
            <article className='text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5'>
                <div className='flex p-5 md:px-10 rounded-md bg-gradient-to-r from-pink-800  to-pink-300 justify-center items-center gap-5'>
                    <div className='sm:w-1/3'>
                        <FaWallet size={50} />
                    </div>
                    <div className='sm:w-2/3 text-center'>
                        <h2 className="text-4xl font-bold">{stats?.revenue}</h2>
                        <h2 className="text-lg font-semibold">Revenue</h2>
                    </div>
                </div>
                <div className='flex p-5 md:px-10 rounded-md bg-gradient-to-r from-indigo-800  to-indigo-300 justify-center items-center gap-5'>
                    <div className='sm:w-1/3'>
                        <FaUsers size={60} />
                    </div>
                    <div className='sm:w-2/3 text-center'>
                        <h2 className="text-4xl font-bold">{stats?.users}</h2>
                        <h2 className="text-lg font-semibold">Customers</h2>
                    </div>
                </div>
                <div className='flex p-5 md:px-10 rounded-md bg-gradient-to-r from-green-800  to-green-300 justify-center items-center gap-5'>
                    <div className='sm:w-1/3'>
                        <FaBoxes size={60} />
                    </div>
                    <div className='sm:w-2/3 text-center'>
                        <h2 className="text-4xl font-bold">{stats?.products}</h2>
                        <h2 className="text-lg font-semibold">Products</h2>
                    </div>
                </div>
                <div className='flex p-5 md:px-10 rounded-md bg-gradient-to-r from-orange-800  to-orange-300 justify-center items-center gap-5'>
                    <div className='sm:w-1/3'>
                        <FaBoxOpen size={60} />
                    </div>
                    <div className='sm:w-2/3 text-center'>
                        <h2 className="text-4xl font-bold">{stats?.orders}</h2>
                        <h2 className="text-lg font-semibold">Orders</h2>
                    </div>
                </div>
            </article>
            <article className='lg:flex justify-between items-center gap-10 py-10 lg:py-20'>
                <div className='lg:w-1/2 h-60 lg:h-72 w-full relative right-5 mx-auto'>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            width={500}
                            height={400}
                            data={chartData}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="category" />
                            <YAxis />
                            <Bar dataKey="ordered" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                                {chartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className='lg:w-1/2 h-72 w-full mx-auto mt-10 lg:-mt-5'>
                    <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={400} height={400}>
                        <Legend ></Legend>
                        <Pie
                            data={chartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={100}
                            fill="#8884d8"
                            dataKey="ordered"
                        >
                            {chartData.map((entry, index) => (
                                <Cell name={entry.category} key={`cell-${index}`} fill={colors[index % colors.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                    </ResponsiveContainer>
                </div>
            </article>
        </section>
    );
};

export default AdminHome;