import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Leaf, Upload, BarChart2, Heart, ShieldCheck, Zap } from "lucide-react";
import { Link } from "react-router";
import Navbar from "./header";

// Define types for props
interface FeatureCardProps {
  icon: React.ReactNode; // Accepts any valid React node (e.g., JSX, components)
  title: string;
  description: string;
}

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-20 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
            Decode Your Food with AI
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            NutriScan is your AI-powered food label analyzer. Upload images of
            ingredient and nutrition labels to make informed decisions about
            your diet.
          </p>
          <Link to="/try-nutriscan">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Try NutriScan Now
            </Button>
          </Link>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Upload className="h-10 w-10 text-green-600" />}
                title="Easy Image Upload"
                description="Simply upload photos of ingredient and nutrition labels for instant analysis."
              />
              <FeatureCard
                icon={<Zap className="h-10 w-10 text-yellow-500" />}
                title="Health Score"
                description="Get a clear health score out of 100 for easy product comparison."
              />
              <FeatureCard
                icon={<Heart className="h-10 w-10 text-red-500" />}
                title="Personalized Recommendations"
                description="Receive tailored advice based on your dietary needs and restrictions."
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="bg-green-100 text-green-800 text-xl font-semibold mr-2 px-2.5 py-0.5 rounded-full">
                      1
                    </span>
                    Take Photos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Snap clear pictures of the ingredient list and nutrition facts
                  label on your food product.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="bg-green-100 text-green-800 text-xl font-semibold mr-2 px-2.5 py-0.5 rounded-full">
                      2
                    </span>
                    Upload Images
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Upload the photos to NutriScan's web app for AI-powered
                  analysis.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="bg-green-100 text-green-800 text-xl font-semibold mr-2 px-2.5 py-0.5 rounded-full">
                      3
                    </span>
                    Get Instant Insights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  View detailed nutritional information, health impact, and
                  personalized recommendations.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
              Why Choose NutriScan?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <BenefitCard
                icon={<BarChart2 className="h-8 w-8 text-blue-500" />}
                title="Data-Driven Decisions"
                description="Make informed choices about your diet based on comprehensive nutritional data extracted from product labels."
              />
              <BenefitCard
                icon={<ShieldCheck className="h-8 w-8 text-green-500" />}
                title="Allergen Alerts"
                description="Quickly identify potential allergens and dietary restrictions from ingredient lists."
              />
              <BenefitCard
                icon={<Leaf className="h-8 w-8 text-green-600" />}
                title="Healthier Lifestyle"
                description="Encourage better eating habits with personalized recommendations based on actual product information."
              />
              <BenefitCard
                icon={<Zap className="h-8 w-8 text-yellow-500" />}
                title="Time-Saving"
                description="Get instant nutritional insights without manual research or data entry - just upload and analyze."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="try-it-now" className="py-20 bg-green-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Start Making Healthier Choices Today
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Join thousands of users who have transformed their shopping and
              eating habits with NutriScan.
            </p>
            <Link to="/try-nutriscan">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-green-600 hover:bg-green-50"
              >
                Try NutriScan Now
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Leaf className="h-8 w-8 text-green-400 mr-2" />
              <span className="text-2xl font-bold">NutriScan</span>
            </div>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <a href="#" className="hover:text-green-400">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400">
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="mt-8 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} NutriScan. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          {icon}
          <span className="ml-2">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}

function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0">{icon}</div>
      <div className="ml-4">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <p className="mt-1 text-gray-500">{description}</p>
      </div>
    </div>
  );
}
