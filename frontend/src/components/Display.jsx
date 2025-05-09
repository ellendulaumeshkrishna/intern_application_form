



// import React, { useEffect, useState, useMemo } from 'react';
// import AxiosInstance from './Axios';
// import userAxios from './UserAxios';
// import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';

// const MyDisplay = () => {

//     const [myData, setMyData] = useState([]);

//     const GetData = async () => {
//         try {
//             const [registerRes, preferenceRes] = await Promise.all([
//                 AxiosInstance.get('api/registerform/'),
//                 AxiosInstance.get('api/preferenceform/')
//             ]);

//             const registerData = registerRes.data;
//             const preferenceData = preferenceRes.data;

//             const merged = registerData.map(registerItem => {
//                 const preferenceItem = preferenceData.find(pref => pref.user === registerItem.user);
//                 return {
//                     ...registerItem,
//                     ...(preferenceItem || {})  // merge preference fields if exist
//                 };
//             });

//             setMyData(merged);

//         } catch (error) {
//             console.error("Error fetching the data", error);
//         }
//     };

//     useEffect(() => {
//         GetData();
//     }, []);

//     const columns = useMemo(
//         () => [
//             { accessorKey: 'name', header: 'Name', size: 150 },
//             { accessorKey: 'email', header: 'Email', size: 200,
//                 Cell: ({ cell }) => (
//                     <a href={`mailto:${cell.getValue()}`} style={{ color: '#1976d2' }}>
//                       {cell.getValue()}
//                     </a>
//                   ),
//             },
//             { accessorKey: 'phone_number', header: 'Phone Number', size: 120 },
//             { accessorKey: 'dob', header: 'Date of Birth', size: 90 },
//             { accessorKey: 'gender', header: 'Gender', size: 40 },
//             { accessorKey: 'college_name', header: 'College', size: 200 },
//             { accessorKey: 'current_degree', header: 'Degree', size: 100 },
//             { accessorKey: 'department', header: 'Department', size: 120 },
//             { accessorKey: 'cgpa', header: 'CGPA', size: 50 },
//             {
//                 accessorKey: 'resume',
//                 header: 'Resume',
//                 size: 120,
//                 Cell: ({ cell }) => {
//                     const resumeUrl = cell.getValue();
//                     const fullUrl =
//                       resumeUrl && !resumeUrl.startsWith('http') // Check if it's a relative URL
//                         ? `http://127.0.0.1:8000/api${resumeUrl}` // Add base URL for relative paths
//                         : resumeUrl; // If it's already a full URL, use it directly
          
//                     return fullUrl ? (
//                       <a href={fullUrl} target="_blank" rel="noopener noreferrer">
//                         View
//                       </a>
//                     ) : (
//                       'N/A'
//                     );
//                   }
          
//             },
//             {
//                 accessorKey: 'lor',
//                 header: 'LOR',
//                 size: 120,
//                 Cell: ({ cell }) => {
//                     const lorUrl = cell.getValue();
//                     const fullLorUrl =
//                       lorUrl && !lorUrl.startsWith('http') // Check if it's a relative URL
//                         ? `http://127.0.0.1:8000/api${lorUrl}` // Add base URL for relative paths
//                         : lorUrl; // If it's already a full URL, use it directly
          
//                     return fullLorUrl ? (
//                       <a href={fullLorUrl} target="_blank" rel="noopener noreferrer">
//                         View
//                       </a>
//                     ) : (
//                       'N/A'
//                     );
//                   }
          
//             },
//             // { accessorKey: 'special_preference', header: 'Special Preference', size: 200 },
//             { accessorKey: 'professor', header: 'Professor', size: 150 },
//             { accessorKey: 'first_choice', header: '1st Choice', size: 200 },
//             { accessorKey: 'second_choice', header: '2nd Choice', size: 200 },
//             { accessorKey: 'third_choice', header: '3rd Choice', size: 200 },
//             { accessorKey: 'own_project_idea', header: 'Own Idea', size: 250 },
//         ],
//         []
//     );

//     const table = useMaterialReactTable({
//         columns,
//         data: myData || [],
//         enableRowSelection: true, 

//     });

//     return (
//         <div>
//             <MaterialReactTable table={table} />
//         </div>
//     );
// };

// export default MyDisplay;




import React, { useEffect, useState, useMemo } from 'react';
import AxiosInstance from './Axios';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import '../App.css';  // Import your theme styles!

const MyDisplay = () => {
    const [myData, setMyData] = useState([]);

    const GetData = async () => {
        try {
            const [registerRes, preferenceRes] = await Promise.all([
                AxiosInstance.get('api/registerform/'),
                AxiosInstance.get('api/preferenceform/')
            ]);

            const registerData = registerRes.data;
            const preferenceData = preferenceRes.data;
            console.log(registerData)
            console.log(preferenceData)
            const merged = registerData.map(registerItem => {
                const preferenceItem = preferenceData.find(pref => pref.user === registerItem.user);
                return {
                    ...registerItem,
                    ...(preferenceItem || {})  // Merge preference fields if available
                };
            });

            setMyData(merged);
        } catch (error) {
            console.error("Error fetching the data", error);
        }
    };

    useEffect(() => {
        GetData();
    }, []);

    const columns = useMemo(() => [
        { accessorKey: 'name', header: 'Name', size: 150 },
        { accessorKey: 'email', header: 'Email', size: 200,
            Cell: ({ cell }) => (
                <a href={`mailto:${cell.getValue()}`} style={{ color: '#8b0000', textDecoration: 'underline' }}>
                    {cell.getValue()}
                </a>
            ),
        },
        
        
        
        { accessorKey: 'cgpa', header: 'CGPA', size: 50 },
        {
            accessorKey: 'resume',
            header: 'Resume',
            size: 120,
            Cell: ({ cell }) => {
                const resumeUrl = cell.getValue();
                const fullUrl = resumeUrl && !resumeUrl.startsWith('http')
                    ? `http://127.0.0.1:8000/api${resumeUrl}`
                    : resumeUrl;
                return fullUrl ? (
                    <a href={fullUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#8b0000', fontWeight: '600' }}>
                        View
                    </a>
                ) : 'N/A';
            }
        },
        {
            accessorKey: 'lor',
            header: 'LOR',
            size: 120,
            Cell: ({ cell }) => {
                const lorUrl = cell.getValue();
                const fullLorUrl = lorUrl && !lorUrl.startsWith('http')
                    ? `http://127.0.0.1:8000/api${lorUrl}`
                    : lorUrl;
                return fullLorUrl ? (
                    <a href={fullLorUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#8b0000', fontWeight: '600' }}>
                        View
                    </a>
                ) : 'N/A';
            }
        },
        { accessorKey: 'professor', header: 'Professor', size: 150 },
        { accessorKey: 'first_choice', header: '1st Choice', size: 200 },
        { accessorKey: 'second_choice', header: '2nd Choice', size: 200 },
        { accessorKey: 'third_choice', header: '3rd Choice', size: 200 },
        { accessorKey: 'own_project_idea', header: 'Own Idea', size: 250 },
        { accessorKey: 'college_name', header: 'College', size: 200 },
        { accessorKey: 'current_degree', header: 'Degree', size: 100 },
        { accessorKey: 'department', header: 'Department', size: 120 },
        { accessorKey: 'phone_number', header: 'Phone Number', size: 120 },
        { accessorKey: 'dob', header: 'Date of Birth', size: 90 },
        { accessorKey: 'gender', header: 'Gender', size: 40 },
    ], []);

    const table = useMaterialReactTable({
        columns,
        data: myData || [],
        enableRowSelection: true, 
        muiTableBodyRowProps: ({ row }) => ({
        sx: {
            '&.Mui-selected': {
                backgroundColor: '#fbe7e7 !important',  // soft maroon tint
            },
            '&.Mui-selected:hover': {
                backgroundColor: '#f2caca !important',  // slightly deeper maroon on hover
            },
        }
    })
    });

    return (
        <div className="myBackground"> 
            <div className="displayBox" style={{ width: '105%', maxWidth: '1400px', margin: '20px auto' }}>
                <div className="title">
                    Internship Applications Overview
                </div>
                <MaterialReactTable table={table} />
            </div>
        </div>
    );
};

export default MyDisplay;
