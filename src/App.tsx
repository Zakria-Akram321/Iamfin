import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import MatchedDeposit from "./pages/MatchedDesposits/MatchedDeposit";
import Withdrawals from "./pages/Withdrawals";
import Dashboard from "./pages/dashboard/Dashboard";
import Reports from "./pages/ReportsPage/Reports";
import UnmatchedDeposit from "./pages/UnmatchedDeposits/UnmatchedDeposit";
import MatchedDeposits from "./pages/MatchedDesposits/MatchedDeposit";
import WithDrawal from "./pages/Withdrawals/index";
import Profile from "./pages/ProfilesPage/Profile";
import Bank from "./pages/Banks/Bank";
import Fee from "./pages/FeePage/Fee";
import UserRights from "./pages/UserRights/UserRights";
import Settings from "./pages/Settings/Settings";
import Archive from "./pages/Archive/Archive";
import MatchwithClientMain from "./components/UnmatchedDeposits/MatchWithClient/MatchwithClientMain";
// import BankData from "./pages/dashboard/components/BanksData";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={"/dashboard"} />} />
          <Route path="/sign-in" element={<Auth />} />
          <Route path="matched-deposit" element={<MatchedDeposit />} />
          <Route path="withdrawals" element={<Withdrawals />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/unmatched" element={<UnmatchedDeposit />} />
          <Route path="/matched" element={<MatchedDeposits />} />
          <Route path="/withdraw" element={<WithDrawal />} />
          <Route path="/profiles" element={<Profile />} />
          <Route path="/banks" element={<Bank />} />
          <Route path="/fees" element={<Fee />} />
          <Route path="/userrights" element={<UserRights />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/match-with-client" element={<MatchwithClientMain />} />
          <Route path="/*" element={<Navigate to={"/dashboard"} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
