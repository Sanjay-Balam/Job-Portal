import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/Notfound';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProSidebarProvider } from 'react-pro-sidebar';
import LogIn from './pages/Login';
import UserDashboard from './pages/user/userDashboard';
import AdminDashboard from './pages/admin/AdminDashboard'
import UserRoute from './components/UserRoter';
import AdminRoute from './components/AdminRoute';
import Layout from './pages/global/Layout';
import UserJobsHistory from './pages/user/UserJobsHistory';
import UserInfoDashboard from './pages/user/UserInfoDashboard';
import AdminInfoDashboard from './pages/admin/AdminInfoDashboard';
import SingleJob from './pages/SingleJob';
import DashJobs from './pages/admin/DashJobs';
import CreateNewJob from './pages/CreateNewJob';
import Signnup from './pages/Signnup';

//HOC
const UserDashboardHOC = Layout(UserDashboard);
const UserJobsHistoryHOC = Layout(UserJobsHistory);
const UserInfoDashboardHOC = Layout(UserInfoDashboard);
const AdminDashboardHOC = Layout(AdminDashboard);
const AdminInfoDashboardHOC = Layout(AdminInfoDashboard);
const DashJobsHOC = Layout(DashJobs);


const App = () => {

    return (
        <>
            <ToastContainer />
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <ProSidebarProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<LogIn />}/>
                            <Route path='/signup' element={<Signnup />}/>
                            <Route path='/Home' element={<Home />} />
                            <Route path='/search/location/:location' element={<Home />} />
                            <Route path='/search/:keyword' element={<Home />} />
                            <Route path='/login' element={<LogIn />} />
                            <Route path='/job/:id' element={<SingleJob />} />
                            <Route path='/user/dashboard' element={<UserRoute>< UserDashboardHOC /></UserRoute>} />
                            <Route path='/user/jobs' element={<UserRoute>< UserJobsHistoryHOC /></UserRoute>} />
                            <Route path='/user/info' element={<UserRoute>< UserInfoDashboardHOC /></UserRoute>} />
                            <Route path='/admin/info' element={<UserRoute>< AdminInfoDashboardHOC /></UserRoute>} />
                            <Route path='/admin/dashboard' element={<AdminRoute>< AdminDashboardHOC /></AdminRoute>} />
                            <Route path='/admin/jobs' element={<AdminRoute>< DashJobsHOC /></AdminRoute>} />
                            <Route path='admin/job/create' element={<AdminRoute><CreateNewJob/></AdminRoute>}/>
                            <Route path='*' element={<NotFound />} />
                        </Routes>
                    </BrowserRouter>
                </ProSidebarProvider>
            </ThemeProvider>
        </>
    )
}

export default App