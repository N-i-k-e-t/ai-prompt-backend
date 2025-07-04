import Sidebar from './Sidebar';
import Topbar from './Topbar';  // Assuming you have a Topbar component

export default function AdminLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <Topbar />
        {children}
      </div>
    </div>
  );
}
