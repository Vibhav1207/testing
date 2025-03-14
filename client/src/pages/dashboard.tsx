import { useEffect } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { useAuth } from "@/lib/auth";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Calendar } from "@/components/ui/calendar";
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FileIcon, UploadIcon, LockIcon } from "lucide-react";

export default function Dashboard() {
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
            Please log in to access the Dashboard
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* File Upload & Encryption Card */}
            <Card className="bg-black/30 border-blue-500/30 backdrop-blur-lg hover:border-blue-500/60 transition-all duration-300">
              <CardHeader>
                <CardTitle>File Upload & Encryption</CardTitle>
                <CardDescription>Upload and secure your files</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Input
                    type="file"
                    className="bg-black/50 border-blue-500/30 focus:border-blue-500"
                  />
                  <Calendar
                    mode="single"
                    className="rounded-md border border-blue-500/30"
                  />
                  <Button className="w-full bg-blue-500 hover:bg-blue-600">
                    <UploadIcon className="mr-2 h-4 w-4" />
                    Upload & Encrypt
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Storage Overview Card */}
            <Card className="bg-black/30 border-blue-500/30 backdrop-blur-lg hover:border-blue-500/60 transition-all duration-300">
              <CardHeader>
                <CardTitle>Storage Overview</CardTitle>
                <CardDescription>4GB used of 5GB</CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={80} className="h-2 bg-blue-500/20" />
              </CardContent>
            </Card>

            {/* User Subscription Plan Card */}
            <Card className="bg-black/30 border-blue-500/30 backdrop-blur-lg hover:border-blue-500/60 transition-all duration-300">
              <CardHeader>
                <CardTitle>Current Plan</CardTitle>
                <CardDescription>Free Plan - 5GB Storage</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-blue-500 hover:bg-blue-600">
                  Upgrade Plan
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity Card */}
            <Card className="bg-black/30 border-blue-500/30 backdrop-blur-lg hover:border-blue-500/60 transition-all duration-300">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your recently uploaded files</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "Document1.pdf",
                      date: "2024-03-14",
                      unlock: "2 days",
                    },
                    {
                      name: "Image1.jpg",
                      date: "2024-03-13",
                      unlock: "1 week",
                    },
                  ].map((file, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-3 rounded-lg bg-black/20 border border-blue-500/20"
                    >
                      <div className="flex items-center">
                        <FileIcon className="h-5 w-5 text-blue-500 mr-3" />
                        <div>
                          <p className="font-medium">{file.name}</p>
                          <p className="text-sm text-white/60">{file.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30">
                        <LockIcon className="h-4 w-4 mr-2" />
                        {file.unlock}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
