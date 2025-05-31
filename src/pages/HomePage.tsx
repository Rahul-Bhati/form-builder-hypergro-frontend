import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import {
  Plus,
  FileText,
  Eye,
  Share2,
  Layers,
  Zap,
  Shield,
  Smartphone,
  BarChart3 } from
"lucide-react";

const HomePage = () => {
  const navigate = useNavigate();

  const features = [
  {
    icon: FileText,
    title: "Drag & Drop Builder",
    description: "Visually create forms with an intuitive drag and drop interface"
  },
  {
    icon: Layers,
    title: "Multi-Step Forms",
    description: "Create complex forms with multiple steps and progress tracking"
  },
  {
    icon: Eye,
    title: "Real-time Preview",
    description: "See how your form looks on desktop, tablet, and mobile devices"
  },
  {
    icon: Shield,
    title: "Built-in Validation",
    description: "Add validation rules for email, phone, patterns, and more"
  },
  {
    icon: Share2,
    title: "Easy Sharing",
    description: "Generate shareable links for your forms instantly"
  },
  {
    icon: Zap,
    title: "Auto-save",
    description: "Never lose your work with automatic form saving"
  }];


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100" data-id="0hk8he2al" data-path="src/pages/HomePage.tsx">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50" data-id="kwtjqoivm" data-path="src/pages/HomePage.tsx">
        <div className="container mx-auto px-4 py-4" data-id="rkkf4ngwz" data-path="src/pages/HomePage.tsx">
          <div className="flex justify-between items-center" data-id="i9n32121z" data-path="src/pages/HomePage.tsx">
            <div className="flex items-center space-x-2" data-id="x8y9r1iyi" data-path="src/pages/HomePage.tsx">
            <img src="./logo.png" alt="" className="h-10 w-10 text-blue-600"/>
              <h1 className="text-2xl font-bold text-gray-900" data-id="50cyji69i" data-path="src/pages/HomePage.tsx">FormCraft</h1>
            </div>
            <nav className="flex items-center space-x-4" data-id="cty3a3x1u" data-path="src/pages/HomePage.tsx">
              <Button variant="ghost" onClick={() => navigate('/form-builder')} data-id="g7xmrg4sn" data-path="src/pages/HomePage.tsx">Builder</Button>
              <Button onClick={() => navigate('/form-builder')} className="bg-blue-600 hover:bg-blue-700" data-id="lh18wkoka" data-path="src/pages/HomePage.tsx">
                Get Started
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16" data-id="sdpah7xlr" data-path="src/pages/HomePage.tsx">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16" data-id="05qh1nydm" data-path="src/pages/HomePage.tsx">

          <Badge variant="secondary" className="mb-4" data-id="qdiyfuh0n" data-path="src/pages/HomePage.tsx">
            SDE Intern Frontend Assignment
          </Badge>
          <h2 className="text-5xl font-bold text-gray-900 mb-6" data-id="cs2xaeluo" data-path="src/pages/HomePage.tsx">
            Build Beautiful Forms
            <span className="text-blue-600" data-id="x85kgor14" data-path="src/pages/HomePage.tsx"> Effortlessly</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed" data-id="iocb0qm5y" data-path="src/pages/HomePage.tsx">
            Create professional forms with our intuitive drag-and-drop builder. 
            Support for multi-step forms, real-time validation, and responsive design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-id="1xr0190wa" data-path="src/pages/HomePage.tsx">
            <Button
              size="lg"
              onClick={() => navigate('/form-builder')}
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3" data-id="fhn33mim6" data-path="src/pages/HomePage.tsx">

              <Plus className="h-5 w-5 mr-2" data-id="ii2hscw00" data-path="src/pages/HomePage.tsx" />
              Create New Form
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate('/form-builder')}
              className="text-lg px-8 py-3" data-id="tqe7h42k1" data-path="src/pages/HomePage.tsx">

              <Eye className="h-5 w-5 mr-2" data-id="fiyfw3rav" data-path="src/pages/HomePage.tsx" />
              Try Demo
            </Button>
          </div>
        </motion.section>

        {/* Features Grid */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16" data-id="8yuat4gsf" data-path="src/pages/HomePage.tsx">

          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12" data-id="fya39mo37" data-path="src/pages/HomePage.tsx">
            Everything You Need to Build Great Forms
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-id="b8hy2g4b9" data-path="src/pages/HomePage.tsx">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }} data-id="gmm32exr1" data-path="src/pages/HomePage.tsx">

                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 bg-white/60 backdrop-blur-sm" data-id="jftb2tz8a" data-path="src/pages/HomePage.tsx">
                    <CardHeader data-id="wyxtlmju4" data-path="src/pages/HomePage.tsx">
                      <div className="flex items-center space-x-3" data-id="ovqs3i3x0" data-path="src/pages/HomePage.tsx">
                        <div className="p-2 bg-blue-100 rounded-lg" data-id="26gk5jzgm" data-path="src/pages/HomePage.tsx">
                          <Icon className="h-6 w-6 text-blue-600" data-id="9ko4t7145" data-path="src/pages/HomePage.tsx" />
                        </div>
                        <CardTitle className="text-lg" data-id="iz7ktu6va" data-path="src/pages/HomePage.tsx">{feature.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent data-id="il5hz3gts" data-path="src/pages/HomePage.tsx">
                      <p className="text-gray-600" data-id="ae7hukzlw" data-path="src/pages/HomePage.tsx">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>);

            })}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white" data-id="qdzrc0gaf" data-path="src/pages/HomePage.tsx">

          <h3 className="text-3xl font-bold mb-4" data-id="5is0mj455" data-path="src/pages/HomePage.tsx">
            Ready to Start Building?
          </h3>
          <p className="text-xl text-blue-100 mb-8" data-id="u1erdv4lw" data-path="src/pages/HomePage.tsx">
            Join thousands of users creating beautiful, functional forms
          </p>
          <Button
            size="lg"
            onClick={() => navigate('/form-builder')}
            className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3" data-id="4sou6su1p" data-path="src/pages/HomePage.tsx">

            Start Building Now
          </Button>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200 py-8" data-id="63qwl09wl" data-path="src/pages/HomePage.tsx">
        <div className="container mx-auto px-4" data-id="46gkcj5py" data-path="src/pages/HomePage.tsx">
          <div className="flex flex-col md:flex-row justify-between items-center" data-id="1j9j11liz" data-path="src/pages/HomePage.tsx">
            <div className="flex items-center space-x-2 mb-4 md:mb-0" data-id="af0tgcp3s" data-path="src/pages/HomePage.tsx">
              <img src="./logo.png" alt="" className="h-10 w-10 text-blue-600"/>
              <span className="text-lg font-semibold text-gray-900" data-id="aodt1a7nx" data-path="src/pages/HomePage.tsx">FormCraft</span>
            </div>
            <p className="text-gray-500 text-center md:text-right" data-id="8280k35rm" data-path="src/pages/HomePage.tsx">
              © {new Date().getFullYear()} FormCraft. Built for SDE Intern Assignment.
            </p>
          </div>
        </div>
      </footer>
    </div>);

};

export default HomePage;