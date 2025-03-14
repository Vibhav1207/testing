import React from 'react';
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

const Files = () => {
  // Mock files data
  const files = [
    { id: 1, name: "Document.pdf", type: "PDF", size: "2.5MB", uploadDate: "2024-03-14", unlockDate: "2024-03-15" },
    { id: 2, name: "Image.jpg", type: "Image", size: "1.2MB", uploadDate: "2024-03-13", unlockDate: "2024-03-20" },
    { id: 3, name: "Data.xlsx", type: "Spreadsheet", size: "0.8MB", uploadDate: "2024-03-12", unlockDate: "2024-03-16" }
  ];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#000", color: "#fff" }}>
      <Navbar />
      <main style={{ padding: "2rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "2rem", marginBottom: "2rem" }}>My Files</h1>
          
          <div style={{ 
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            border: "1px solid rgba(59, 130, 246, 0.3)",
            borderRadius: "0.5rem",
            overflow: "hidden"
          }}>
            <div style={{ 
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
              padding: "1rem",
              borderBottom: "1px solid rgba(59, 130, 246, 0.3)",
              fontWeight: "bold"
            }}>
              <div>Name</div>
              <div>Type</div>
              <div>Size</div>
              <div>Upload Date</div>
              <div>Unlock Date</div>
            </div>
            
            {files.map(file => (
              <div key={file.id} style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
                padding: "1rem",
                borderBottom: "1px solid rgba(59, 130, 246, 0.1)",
                alignItems: "center",
                transition: "background-color 0.2s ease",
                cursor: "pointer",
                ":hover": {
                  backgroundColor: "rgba(59, 130, 246, 0.1)"
                }
              }}>
                <div>{file.name}</div>
                <div>{file.type}</div>
                <div>{file.size}</div>
                <div>{file.uploadDate}</div>
                <div>{file.unlockDate}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Files;
