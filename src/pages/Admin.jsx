import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";

const statuses = ["Fixed", "New Client", "Not Responding", "Rejected"];

const Admin = () => {
  const navigate = useNavigate();
  const [authorized, setAuthorized] = useState(false);
  const [preinscriptions, setPreinscriptions] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  // Check admin session
  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        navigate("/login");
        return;
      }

      const adminEmails = ["test@gmail.com"];
      const userEmail = session.user?.email || "";

      if (!adminEmails.includes(userEmail)) {
        await supabase.auth.signOut();
        navigate("/login");
        return;
      }

      setAuthorized(true);
      await fetchData();
    };

    checkAuth();
  }, [navigate]);

  // Fetch preinscriptions
  const fetchData = async () => {
    const { data, error } = await supabase
      .from("preinscriptions")
      .select("*")
      .order("id", { ascending: false });

    if (error) setErrorMsg(error.message);
    else {
      setPreinscriptions(data);
      setFilteredData(data);
    }

    setLoading(false);
  };

  // Handle filtering
  const handleFilterChange = (filter, dataSource) => {
    const source = dataSource || preinscriptions;
    setActiveFilter(filter);

    if (filter === "All") setFilteredData(source);
    else if (filter === "Today") {
      const today = new Date();
      const filtered = source.filter((i) => {
        if (!i.created_at) return false;
        const created = new Date(i.created_at);
        return (
          created.getFullYear() === today.getFullYear() &&
          created.getMonth() === today.getMonth() &&
          created.getDate() === today.getDate()
        );
      });
      setFilteredData(filtered);
    } else if (["Bodybuilding", "Kids", "Crossfit"].includes(filter)) {
      setFilteredData(source.filter((i) => i.offre === filter));
    } else {
      setFilteredData(source.filter((i) => i.status === filter));
    }
  };

  // Handle status update
  const handleStatusUpdate = async (id, newStatus) => {
    const { error } = await supabase
      .from("preinscriptions")
      .update({ status: newStatus })
      .eq("id", id);

    if (!error) {
      const updated = preinscriptions.map((p) =>
        p.id === id ? { ...p, status: newStatus } : p
      );
      setPreinscriptions(updated);
      handleFilterChange(activeFilter, updated);
    }
  };

  // Logout
  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  if (!authorized)
    return (
      <div className="p-8 text-center text-gray-400">Checking authorization...</div>
    );
  if (loading)
    return <div className="p-8 text-center text-white">Loading...</div>;
  if (errorMsg)
    return <div className="p-8 text-center text-red-500">{errorMsg}</div>;

  return (
    <div className="min-h-screen flex bg-black text-white">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col bg-gray-900 w-64 p-6 transition-all">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <nav className="flex flex-col gap-2">
          {["All", "Today", "Bodybuilding", "Kids", "Crossfit", ...statuses].map(
            (status) => (
              <button
                key={status}
                onClick={() => handleFilterChange(status)}
                className={`text-left px-3 py-2 rounded-md font-medium transition ${
                  activeFilter === status
                    ? "bg-red-600 text-white"
                    : "hover:bg-gray-800 text-gray-300"
                }`}
              >
                {status}
              </button>
            )
          )}
        </nav>
        <button
          onClick={handleLogout}
          className="mt-6 bg-red-600 text-white px-3 py-2 rounded w-full font-medium"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 overflow-x-auto">
        <h1 className="text-2xl font-bold mb-6">
          {activeFilter === "All"
            ? "All Preinscriptions"
            : activeFilter === "Today"
            ? "Registrations Today"
            : activeFilter}
        </h1>

        {/* Mobile Filter + Logout */}
        <div className="md:hidden mb-4">
          <select
            value={activeFilter}
            onChange={(e) => handleFilterChange(e.target.value)}
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 mb-2"
          >
            {["All", "Today", "Bodybuilding", "Kids", "Crossfit", ...statuses].map(
              (status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              )
            )}
          </select>
          <button
            onClick={handleLogout}
            className="w-full bg-red-600 text-white px-3 py-2 rounded font-medium"
          >
            Logout
          </button>
        </div>

        {filteredData.length === 0 ? (
          <p className="text-center text-gray-400 mt-10">No data found.</p>
        ) : (
          <div className="overflow-x-auto bg-gray-800 rounded-lg shadow">
            <table className="min-w-full border-collapse">
              <thead className="bg-gray-700">
                <tr>
                  <th className="py-3 px-4 text-left">Full Name</th>
                  <th className="py-3 px-4 text-left">Phone</th>
                  <th className="py-3 px-4 text-left">Email</th>
                  <th className="py-3 px-4 text-left">Adults / Kids</th>
                  <th className="py-3 px-4 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((row) => {
                  const statusValue = row.status ?? "New Client";
                  const statusClass = `status-${statusValue
                    .toLowerCase()
                    .replace(" ", "-")}`;
                  let offerDisplay = row.offre || "-";
                  if (row.section_enfant) offerDisplay += " / " + row.section_enfant;

                  return (
                    <tr
                      key={row.id}
                      className="border-b border-gray-700 hover:bg-gray-700"
                    >
                      <td className="py-3 px-4">{row.full_name}</td>
                      <td className="py-3 px-4">{row.num_tele}</td>
                      <td className="py-3 px-4">{row.email}</td>
                      <td className="py-3 px-4">{offerDisplay}</td>
                      <td className="py-3 px-4">
                        <select
                          value={statusValue}
                          onChange={(e) =>
                            handleStatusUpdate(row.id, e.target.value)
                          }
                          className={`status-select border rounded px-2 py-1 w-full ${statusClass}`}
                          style={{ width: "100%" }}
                        >
                          {statuses.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </main>

      {/* Inline CSS for status colors */}
      <style>{`
        .status-select {
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          font-size: 14px;
          cursor: pointer;
          color: white;
          background-color: #1f2937;
          border: 1px solid #374151;
        }
        .status-fixed { background-color: #065f46; }
        .status-rejected { background-color: #7f1d1d; }
        .status-new-client { background-color: #1e3a8a; }
        .status-not-responding { background-color: #78350f; }
      `}</style>
    </div>
  );
};

export default Admin;
