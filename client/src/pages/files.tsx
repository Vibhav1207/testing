import { useEffect } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { useAuth } from "@/lib/auth";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FileIcon, LockIcon, UnlockIcon } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

// Mock data until backend is implemented
const mockFiles = [
  {
    id: 1,
    name: "Project_Docs.pdf",
    type: "PDF",
    dateUploaded: "March 14, 2025",
    unlockTime: "2 Days, 4 Hours",
    status: "locked"
  },
  {
    id: 2,
    name: "Vacation_Photos.zip",
    type: "ZIP",
    dateUploaded: "March 13, 2025",
    unlockTime: "5 Days",
    status: "locked"
  },
  {
    id: 3,
    name: "Resume_Final.docx",
    type: "DOCX",
    dateUploaded: "March 12, 2025",
    unlockTime: "Unlocked",
    status: "unlocked"
  },
  {
    id: 4,
    name: "Meeting_Notes.txt",
    type: "TXT",
    dateUploaded: "March 11, 2025",
    unlockTime: "1 Week",
    status: "locked"
  },
  {
    id: 5,
    name: "Presentation.pptx",
    type: "PPTX",
    dateUploaded: "March 10, 2025",
    unlockTime: "Unlocked",
    status: "unlocked"
  }
];

export default function Files() {
  const { isAuthenticated } = useAuth();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
      setLocation("/login");
    }
  }, [isAuthenticated, setLocation]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-white">
            Please log in to access your files
          </h1>
          <Button
            onClick={() => setLocation("/login")}
            className="bg-blue-500 hover:bg-blue-600 shadow-[0_0_20px_rgba(59,130,246,0.5)]"
          >
            Login
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="relative pt-20 px-4">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#080808_1px,transparent_1px),linear-gradient(to_bottom,#080808_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* Neon Side Effects */}
        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-50" />
        <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-50" />

        <div className="max-w-7xl mx-auto py-8 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-bold mb-2">My Files</h1>
            <p className="text-white/60">Manage your encrypted files</p>
          </motion.div>

          <div className="rounded-xl bg-black/30 border border-blue-500/30 backdrop-blur-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="border-blue-500/30 hover:bg-blue-500/5">
                  <TableHead className="text-white">File Name</TableHead>
                  <TableHead className="text-white">Type</TableHead>
                  <TableHead className="text-white">Date Uploaded</TableHead>
                  <TableHead className="text-white">Unlock Time</TableHead>
                  <TableHead className="text-white">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockFiles.map((file) => (
                  <motion.tr
                    key={file.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="border-blue-500/30 hover:bg-blue-500/5 transition-all cursor-pointer group"
                  >
                    <TableCell className="font-medium text-white">
                      <div className="flex items-center">
                        <FileIcon className="h-4 w-4 text-blue-500 mr-2" />
                        {file.name}
                      </div>
                    </TableCell>
                    <TableCell className="text-white/60">{file.type}</TableCell>
                    <TableCell className="text-white/60">{file.dateUploaded}</TableCell>
                    <TableCell className="text-white/60">{file.unlockTime}</TableCell>
                    <TableCell>
                      <div className={`inline-flex items-center px-2 py-1 rounded-full ${
                        file.status === 'locked' 
                          ? 'bg-blue-500/20 border border-blue-500/30 text-blue-400'
                          : 'bg-green-500/20 border border-green-500/30 text-green-400'
                      }`}>
                        {file.status === 'locked' ? (
                          <LockIcon className="h-3 w-3 mr-1" />
                        ) : (
                          <UnlockIcon className="h-3 w-3 mr-1" />
                        )}
                        {file.status.charAt(0).toUpperCase() + file.status.slice(1)}
                      </div>
                    </TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
