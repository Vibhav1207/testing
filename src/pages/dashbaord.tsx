import React, { useState } from 'react';
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

const Dashboard = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [storageUsed] = useState(4); // Mock storage usage in GB
  const storageLimit = 5; // Mock storage limit in GB

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if(file) setSelectedFile(file);
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#000", color: "#fff" }}>
      <Navbar />
      <main style={{ padding: "2rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "2rem", marginBottom: "2rem" }}>Dashboard</h1>
          
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "2rem" }}>
            {/* File Upload Section */}
            <div style={{ 
              padding: "2rem",
              border: "1px solid rgba(59, 130, 246, 0.3)",
              borderRadius: "0.5rem",
              backgroundColor: "rgba(0, 0, 0, 0.3)"
            }}>
              <h2 style={{ marginBottom: "1rem" }}>File Upload</h2>
              <div style={{
                border: "2px dashed rgba(59, 130, 246, 0.3)",
                padding: "2rem",
                textAlign: "center",
                borderRadius: "0.5rem"
              }}>
                <input
                  type="file"
                  onChange={handleFileSelect}
                  style={{ display: "none" }}
                  id="fileInput"
                />
                <label 
                  htmlFor="fileInput"
                  style={{ 
                    cursor: "pointer",
                    display: "block",
                    padding: "1rem"
                  }}
                >
                  {selectedFile ? selectedFile.name : "Drop files here or click to upload"}
                </label>
              </div>
            </div>

            {/* Storage Info */}
            <div>
              <div style={{ 
                padding: "1.5rem",
                border: "1px solid rgba(59, 130, 246, 0.3)",
                borderRadius: "0.5rem",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                marginBottom: "1rem"
              }}>
                <h3>Storage Usage</h3>
                <p>{storageUsed}GB of {storageLimit}GB used</p>
                <div style={{ 
                  width: "100%",
                  height: "8px",
                  backgroundColor: "rgba(59, 130, 246, 0.2)",
                  borderRadius: "4px",
                  overflow: "hidden",
                  marginTop: "0.5rem"
                }}>
                  <div style={{
                    width: `${(storageUsed/storageLimit) * 100}%`,
                    height: "100%",
                    backgroundColor: "rgb(59, 130, 246)",
                    transition: "width 0.3s ease"
                  }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
