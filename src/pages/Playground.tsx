import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Send, Sparkles, XCircle } from "lucide-react";
import ApiCard from "@/components/ApiCard";
import { useToast } from "@/hooks/use-toast";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api/v1";

interface ApiResponse {
  status: number;
  data?: any;
  error?: string;
}

const Playground = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<ApiResponse | null>(null);

  const handleSendRequest = async () => {
    setLoading(true);
    setResponse(null);

    try {
      const res = await fetch(`${API_BASE_URL}/users`);
      const data = await res.json();

      setResponse({
        status: res.status,
        data: res.ok ? data : undefined,
        error: !res.ok ? `${res.status} ${res.statusText}` : undefined,
      });

      if (res.ok) {
        toast({
          title: "Success! ✅",
          description: "Request completed successfully",
        });
      } else {
        toast({
          title: "Error ❌",
          description: `Server returned ${res.status} status`,
          variant: "destructive",
        });
      }
    } catch (error) {
      setResponse({
        status: 500,
        error: "500 Internal Server Error - Failed to connect to backend",
      });

      toast({
        title: "Connection Error ❌",
        description: "Could not reach the backend server",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleTriggerError = async () => {
    setLoading(true);
    setResponse(null);

    try {
      const res = await fetch(`${API_BASE_URL}/error`);
      const data = await res.json().catch(() => ({}));

      setResponse({
        status: res.status,
        data: res.ok ? data : undefined,
        error: !res.ok ? "HTTP 500 - Internal Server Error" : undefined,
      });

      toast({
        title: "Error ❌",
        description: "Server returned 500 status",
        variant: "destructive",
      });
    } catch (error) {
      setResponse({
        status: 500,
        error: "HTTP 500 - Internal Server Error",
      });

      toast({
        title: "Connection Error ❌",
        description: "Could not reach the backend server",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-main p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="font-semibold text-foreground">SDP Playground</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-soft space-y-6">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Test Your API</h2>
            <p className="text-muted-foreground">
              Send requests to your Rails backend and see responses in real-time
            </p>
          </div>

          {/* API Details */}
          <div className="space-y-3">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex flex-col p-4 bg-muted/30 rounded-lg space-y-3">
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                    Happy Path
                  </p>
                  <code className="text-foreground font-mono text-sm">
                    GET /api/v1/users
                  </code>
                </div>
                <Button
                  data-testid="send-request"
                  onClick={handleSendRequest}
                  disabled={loading}
                  className="gap-2 shadow-soft"
                >
                  <Send className="w-4 h-4" />
                  {loading ? "Sending..." : "Send Request"}
                </Button>
              </div>

              <div className="flex flex-col p-4 bg-muted/30 rounded-lg space-y-3">
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                    Negative Path
                  </p>
                  <code className="text-foreground font-mono text-sm">
                    GET /api/v1/error
                  </code>
                </div>
                <Button
                  data-testid="trigger-error"
                  onClick={handleTriggerError}
                  disabled={loading}
                  variant="destructive"
                  className="gap-2 shadow-soft"
                >
                  <XCircle className="w-4 h-4" />
                  {loading ? "Triggering..." : "Trigger Error"}
                </Button>
              </div>
            </div>

            <div className="text-xs text-muted-foreground">
              Base URL: <code className="text-foreground">{API_BASE_URL}</code>
            </div>
          </div>

          {/* Response Card */}
          {response && <ApiCard response={response} />}

          {/* Test Scenarios Info */}
          {!response && (
            <div className="grid md:grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-success/10 border border-success/30 rounded-lg">
                <h3 className="font-semibold text-success mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-success"></span>
                  Happy Path (200 OK)
                </h3>
                <p className="text-sm text-muted-foreground">
                  Successful request returns user data with green indicator
                </p>
              </div>

              <div className="p-4 bg-destructive/10 border border-destructive/30 rounded-lg">
                <h3 className="font-semibold text-destructive mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-destructive"></span>
                  Negative Path (500 Error)
                </h3>
                <p className="text-sm text-muted-foreground">
                  Failed request shows error message with red indicator
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Playground;
