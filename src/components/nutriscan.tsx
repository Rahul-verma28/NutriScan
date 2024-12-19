import { AlertCircle, Leaf, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router";

export default function NutriScan() {
  type Ingredient = string;

  type ProductAnalysis = {
    [key in Ingredient]: [string, string];
  };

  interface ProductData {
    name: string;
    ingredients: Ingredient[];
    analysis: ProductAnalysis;
    overallRating: number;
  }

  const productData: ProductData = {
    name: "Cola Drink",
    ingredients: [
      "Carbonated Water",
      "Sugar",
      "Natural Caramel Color (Class IV)",
      "Acidity Regulators (Phosphoric Acid)",
      "Kola Concentrate",
      "Caffeine",
    ],
    analysis: {
      "Carbonated Water": [
        "Neutral",
        "Generally safe and hydrating, but can lead to bloating in some individuals.",
      ],
      Sugar: [
        "Harmful",
        "Excessive sugar consumption can lead to obesity, diabetes, and tooth decay.",
      ],
      "Natural Caramel Color (Class IV)": [
        "Neutral",
        "Generally recognized as safe, but artificial colors may have health risks.",
      ],
      "Acidity Regulators (Phosphoric Acid)": [
        "Harmful",
        "Can contribute to decreased bone density and dental erosion.",
      ],
      "Kola Concentrate": [
        "Neutral",
        "Contains some caffeine and flavoring but little nutritional value.",
      ],
      Caffeine: [
        "Neutral",
        "Can improve alertness but excessive consumption may lead to anxiety and sleep disturbances.",
      ],
    },
    overallRating: 4,
  };

  const getIngredientColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "harmful":
        return "bg-red-100 text-red-800";
      case "neutral":
        return "bg-yellow-100 text-yellow-800";
      case "beneficial":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getIngredientIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case "harmful":
        return <AlertCircle className="ml-2 text-red-500" size={16} />;
      case "neutral":
        return <Activity className="ml-2 text-yellow-500" size={16} />;
      case "beneficial":
        return <Leaf className="ml-2 text-green-500" size={16} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <header className="bg-green-600 text-white p-4">
          <h1 className="text-2xl font-bold">
            NutriScan: AI-Powered Food Label Analyzer
          </h1>
        </header>

        <main className="p-4 md:p-6">
          {/* Product Info */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{productData.name}</h2>

            {/* Ingredients List */}
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Ingredients:</h3>
              <ul className="space-y-2">
                {productData.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-center">
                    <Badge
                      className={`mr-2 ${getIngredientColor(
                        productData.analysis[ingredient][0]
                      )}`}
                    >
                      {ingredient}
                    </Badge>
                    {getIngredientIcon(productData.analysis[ingredient][0])}
                  </li>
                ))}
              </ul>
            </div>

            {/* Health Score */}
            <div className="bg-blue-50 p-4 rounded-lg flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold">Health Score</h3>
                <p className="text-sm text-gray-600">
                  Based on nutritional value
                </p>
              </div>
              <div className="text-4xl font-bold text-blue-600">
                {productData.overallRating}/10
              </div>
            </div>

            {/* Analysis */}
            <Card>
              <CardHeader>
                <CardTitle>Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {Object.entries(productData.analysis).map(
                    ([ingredient, [status, description]], index) => (
                      <li
                        key={index}
                        className="border-b pb-4 last:border-b-0 last:pb-0"
                      >
                        <h4 className="font-semibold flex items-center">
                          {ingredient}
                          <Badge
                            className={`ml-2 ${getIngredientColor(status)}`}
                          >
                            {status}
                          </Badge>
                        </h4>
                        <p className="mt-1 text-sm text-gray-600">
                          {description}
                        </p>
                      </li>
                    )
                  )}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Scan Another Product Link */}
          <div className="mt-8 text-center">
            <Link
              to="/try-nutriscan"
              className="text-green-600 hover:text-green-800 font-semibold text-lg"
            >
              Scan Another Product
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
