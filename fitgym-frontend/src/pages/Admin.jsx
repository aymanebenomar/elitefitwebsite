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
      const { data: { session } } = await supabase.auth.getSession();

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
    return <div style={{ padding: '2rem', textAlign: 'center', color: '#9ca3af' }}>Checking authorization...</div>;
  if (loading) return <div style={{ padding: '2rem', textAlign: 'center', color: 'white' }}>Loading...</div>;
  if (errorMsg) return <div style={{ padding: '2rem', textAlign: 'center', color: '#ef4444' }}>{errorMsg}</div>;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', backgroundColor: 'black', color: 'white' }}>
      {/* Add CSS styles */}
      <style>
        {`
          .status-select {
            padding: 0.25rem 0.5rem;
            border-radius: 0.25rem;
            border: 1px solid #374151;
            font-size: 14px;
            cursor: pointer;
            background-color: #1f2937;
            color: white;
          }
          .status-fixed {
            background-color: #065f46;
            color: white;
          }
          .status-rejected {
            background-color: #7f1d1d;
            color: white;
          }
          .status-new-client {
            background-color: #1e3a8a;
            color: white;
          }
          .status-not-responding {
            background-color: #78350f;
            color: white;
          }
        `}
      </style>

      {/* Sidebar */}
      <aside style={{ width: '16rem', backgroundColor: '#111827', padding: '1.5rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Dashboard</h2>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {["All", "Today", "Bodybuilding", "Kids", "Crossfit", ...statuses].map((status) => (
            <button
              key={status}
              onClick={() => handleFilterChange(status)}
              style={{
                textAlign: 'left',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                fontWeight: '500',
                transition: 'all 0.2s',
                backgroundColor: activeFilter === status ? '#dc2626' : 'transparent',
                color: activeFilter === status ? 'white' : '#d1d5db',
                border: 'none',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                if (activeFilter !== status) {
                  e.target.style.backgroundColor = '#374151';
                }
              }}
              onMouseOut={(e) => {
                if (activeFilter !== status) {
                  e.target.style.backgroundColor = 'transparent';
                }
              }}
            >
              {status}
            </button>
          ))}
        </nav>
        <button
          onClick={handleLogout}
          style={{
            marginTop: '2rem',
            backgroundColor: '#dc2626',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '0.5rem',
            width: '100%',
            border: 'none',
            cursor: 'pointer',
            fontWeight: '500'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#b91c1c'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#dc2626'}
        >
          Logout
        </button>
      </aside>

      {/* Main content */}
      <main style={{ flex: 1, padding: '2.5rem' }}>
        <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '2rem' }}>
          {activeFilter === "All"
            ? "All Preinscriptions"
            : activeFilter === "Today"
            ? "Registrations Today"
            : activeFilter}
        </h1>

        {filteredData.length === 0 ? (
          <p style={{ color: '#9ca3af', textAlign: 'center', fontSize: '1.125rem', marginTop: '2.5rem' }}>No data found.</p>
        ) : (
          <div style={{ overflowX: 'auto', borderRadius: '0.5rem', backgroundColor: '#111827' }}>
            <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead style={{ backgroundColor: '#1f2937' }}>
                <tr>
                  <th style={{ padding: '0.75rem 1.5rem', textAlign: 'left', fontWeight: '500', borderBottom: '1px solid #374151' }}>Full Name</th>
                  <th style={{ padding: '0.75rem 1.5rem', textAlign: 'left', fontWeight: '500', borderBottom: '1px solid #374151' }}>Phone</th>
                  <th style={{ padding: '0.75rem 1.5rem', textAlign: 'left', fontWeight: '500', borderBottom: '1px solid #374151' }}>Email</th>
                  <th style={{ padding: '0.75rem 1.5rem', textAlign: 'left', fontWeight: '500', borderBottom: '1px solid #374151' }}>Offer</th>
                  <th style={{ padding: '0.75rem 1.5rem', textAlign: 'left', fontWeight: '500', borderBottom: '1px solid #374151' }}>Consent</th>
                  <th style={{ padding: '0.75rem 1.5rem', textAlign: 'left', fontWeight: '500', borderBottom: '1px solid #374151' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((row) => {
                  const statusValue = row.status ?? "New Client";
                  const statusClass = `status-${statusValue.toLowerCase().replace(' ', '-')}`;
                  
                  return (
                    <tr key={row.id} style={{ borderBottom: '1px solid #374151' }}>
                      <td style={{ padding: '1rem 1.5rem' }}>{row.full_name}</td>
                      <td style={{ padding: '1rem 1.5rem' }}>{row.num_tele}</td>
                      <td style={{ padding: '1rem 1.5rem' }}>{row.email}</td>
                      <td style={{ padding: '1rem 1.5rem' }}>{row.offre}</td>
                      <td style={{ padding: '1rem 1.5rem' }}>{row.consent ? "✅" : "❌"}</td>
                      <td style={{ padding: '1rem 1.5rem' }}>
                        <select
                          value={statusValue}
                          onChange={(e) => handleStatusUpdate(row.id, e.target.value)}
                          className={`status-select ${statusClass}`}
                        >
                          {statuses.map((s) => (
                            <option key={s} value={s}>{s}</option>
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
    </div>
  );
};

export default Admin;