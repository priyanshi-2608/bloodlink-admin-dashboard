import Navbar from "./components/Navbar";
import WelcomeSection from "./components/WelcomeSection";
import DashboardStats from "./components/DashboardStats";
import RecentRequests from "./components/RecentRequest";
import UserManagement from "./components/UserManagement";

function App() {
  return (
    <>
      <Navbar />

      <main className="container py-4 py-lg-5">
        <WelcomeSection />

        <DashboardStats />

        <RecentRequests />

        <UserManagement />
      </main>

      <footer className="border-top bg-white py-4 mt-4">
        <div className="container text-center">
          <p className="text-muted small mb-0">
            &copy; 2026 BloodLink. Admin Portal.{" "}
            <i className="bi bi-heart-fill text-danger"></i>
          </p>
        </div>
      </footer>
    </>
  );

}

export default App;