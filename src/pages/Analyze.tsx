import React, { useRef, useState } from 'react';
import { Camera, Upload, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';

export const AnalyzePage = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file type
      if (!file.type.startsWith('image/')) {
        setError('Please upload an image file');
        return;
      }

      // Check file size (limit to 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setError('Image size should be less than 5MB');
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setImage(event.target.result as string);
          analyzeImage(event.target.result as string);
        }
      };
      reader.onerror = () => {
        setError('Error reading the file');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleCameraClick = () => {
    cameraInputRef.current?.click();
  };

  const analyzeImage = async (imageData: string) => {
    setIsAnalyzing(true);
    setError('');

    try {
      const apiKey = import.meta.env.VITE_API_KEY;
      
      if (!apiKey) {
        throw new Error('API key not found. Please check your environment variables.');
      }

      // For demonstration, we'll simulate the API call
      // Replace this with your actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API delay
      
      // Simulated response
      const mockResult = {
        materialType: 'Plastic Container',
        isRecyclable: true,
        confidence: 0.92,
        suggestions: [
          'Clean the container before recycling',
          'Remove any labels if possible',
          'Check local recycling guidelines for specific requirements'
        ]
      };

      setResult(mockResult);
    } catch (err: any) {
      setError(err.message);
      setResult(null);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-xl shadow-lg p-6">
        {!image ? (
          <div className="text-center">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Upload Material Image</h2>
              <p className="text-gray-600">
                Take a photo or upload an image of the material you want to analyze
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <input
                ref={cameraInputRef}
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleImageUpload}
                className="hidden"
              />
              <Button onClick={handleUploadClick}>
                <Upload className="w-5 h-5" /> Upload Image
              </Button>
              <Button variant="secondary" onClick={handleCameraClick}>
                <Camera className="w-5 h-5" /> Take Photo
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-8">
              <img
                src={image}
                alt="Uploaded material"
                className="max-h-64 mx-auto rounded-lg object-contain"
              />
            </div>
            {error && (
              <div className="text-center mb-6">
                <div className="bg-red-100 text-red-800 rounded-lg p-4">
                  <p className="font-semibold">Error: {error}</p>
                </div>
              </div>
            )}
            {isAnalyzing ? (
              <div className="text-center">
                <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-emerald-600" />
                <p className="text-gray-600">Analyzing your image...</p>
              </div>
            ) : result ? (
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">
                  {result.materialType} - {result.isRecyclable ? 'Recyclable' : 'Non-Recyclable'}
                </h3>
                <div className="mb-6">
                  <div className="bg-emerald-100 text-emerald-800 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Disposal Suggestions:</h4>
                    <ul className="text-left list-disc list-inside">
                      {result.suggestions.map((suggestion: string, index: number) => (
                        <li key={index}>{suggestion}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Button onClick={() => {
                  setImage(null);
                  setResult(null);
                  setError('');
                }}>
                  Analyze Another Item
                </Button>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};