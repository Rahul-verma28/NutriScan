import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Upload, Image as ImageIcon, AlertTriangle } from "lucide-react";
import { useState } from "react";
import { useDropzone, Accept } from "react-dropzone";
import { Link } from "react-router";

export default function ImageUploadPage() {
  const [ingredientImage, setIngredientImage] = useState<File | null>(null);
  const [nutritionImage, setNutritionImage] = useState<File | null>(null);

  const onDropIngredients = (acceptedFiles: File[]) => {
    setIngredientImage(acceptedFiles[0] || null);
  };

  const onDropNutrition = (acceptedFiles: File[]) => {
    setNutritionImage(acceptedFiles[0] || null);
  };

  const {
    getRootProps: getIngredientsRootProps,
    getInputProps: getIngredientsInputProps,
  } = useDropzone({
    onDrop: onDropIngredients,
    accept: { "image/*": [] } as Accept, // Fixed type
    multiple: false,
  });

  const {
    getRootProps: getNutritionRootProps,
    getInputProps: getNutritionInputProps,
  } = useDropzone({
    onDrop: onDropNutrition,
    accept: { "image/*": [] } as Accept, // Fixed type
    multiple: false,
  });

  const handleAnalyze = () => {
    // Here you would typically send the images to your backend for processing
    console.log("Analyzing images...");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="text-md font-bold text-gray-600 hover:text-black">
          ⬅️ Back
        </Link>
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Upload Food Label Images
        </h1>

        <div className="grid gap-8 md:grid-cols-2">
          <UploadCard
            title="Ingredient List"
            description="Upload a clear image of the ingredient list"
            image={ingredientImage}
            getRootProps={getIngredientsRootProps}
            getInputProps={getIngredientsInputProps}
          />

          <UploadCard
            title="Nutrition Facts"
            description="Upload a clear image of the nutrition facts label"
            image={nutritionImage}
            getRootProps={getNutritionRootProps}
            getInputProps={getNutritionInputProps}
          />
        </div>

        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2" />
                Guidelines for Best Results
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Ensure the entire label is visible in the image</li>
                <li>Use good lighting to avoid shadows and glare</li>
                <li>Keep the camera steady and focused on the label</li>
                <li>Avoid angles that might distort the text</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <Link to="/insights">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700"
              onClick={handleAnalyze}
              disabled={!ingredientImage || !nutritionImage}
            >
              Analyze Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function UploadCard({
  title,
  description,
  image,
  getRootProps,
  getInputProps,
}: {
  title: string;
  description: string;
  image: File | null;
  getRootProps: () => any;
  getInputProps: () => any;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div
          {...getRootProps()}
          className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-green-500 transition-colors"
        >
          <input {...getInputProps()} />
          {image ? (
            <div className="flex flex-col items-center">
              <ImageIcon className="h-12 w-12 text-green-500 mb-2" />
              <p className="text-sm text-gray-600">{image.name}</p>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <Upload className="h-12 w-12 text-gray-400 mb-2" />
              <p className="text-sm text-gray-600">
                Drag & drop or click to select
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
