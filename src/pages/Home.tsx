import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-main flex items-center justify-center p-6">
      <div className="max-w-2xl w-full text-center space-y-8 animate-in fade-in duration-700">
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-8 h-8 text-primary" />
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              SDP API Lab
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            Test and explore your Rails endpoints 💫
          </p>
        </div>

        <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-soft space-y-6">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
              Base URL
            </p>
            <code className="block bg-muted/50 text-foreground px-4 py-3 rounded-lg font-mono text-sm">
              http://localhost:3000
            </code>
          </div>

          <div className="space-y-3">
            <p className="text-muted-foreground">
              Test your API endpoints with beautiful success and error handling
            </p>
            <div className="flex gap-2 justify-center">
              <div className="flex items-center gap-1 text-sm text-success">
                <span className="w-2 h-2 rounded-full bg-success"></span>
                Happy Path
              </div>
              <span className="text-muted-foreground">•</span>
              <div className="flex items-center gap-1 text-sm text-destructive">
                <span className="w-2 h-2 rounded-full bg-destructive"></span>
                Negative Path
              </div>
            </div>
          </div>

          <Button
            data-testid="open-playground"
            size="lg"
            className="w-full md:w-auto px-12 shadow-soft hover:shadow-lg transition-all"
            onClick={() => navigate("/playground")}
          >
            Open Playground
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
          <span>React + Vite</span>
          <span>•</span>
          <span>TypeScript</span>
          <span>•</span>
          <span>Tailwind CSS</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
