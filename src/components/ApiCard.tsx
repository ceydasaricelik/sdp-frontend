import { CheckCircle2, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ApiCardProps {
  response: {
    status: number;
    data?: any;
    error?: string;
  };
}

const ApiCard = ({ response }: ApiCardProps) => {
  const isSuccess = response.status >= 200 && response.status < 300;

  return (
    <Card
      data-testid="response-card"
      className={`shadow-card border-2 transition-all ${
        isSuccess
          ? "border-success/30 bg-success/5"
          : "border-destructive/30 bg-destructive/5"
      }`}
    >
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          {isSuccess ? (
            <>
              <CheckCircle2 className="w-6 h-6 text-success" />
              <span className="text-success">✅ Test Passed</span>
            </>
          ) : (
            <>
              <XCircle className="w-6 h-6 text-destructive" />
              <span className="text-destructive">❌ Test Failed</span>
            </>
          )}
          <span className="ml-auto text-sm font-mono text-muted-foreground">
            Status: {response.status}
          </span>
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {response.error ? (
          <div
            data-testid="error-message"
            className="p-4 bg-destructive/10 border border-destructive/30 rounded-lg"
          >
            <p className="font-semibold text-destructive mb-2">Error Message:</p>
            <code className="text-sm text-foreground">{response.error}</code>
          </div>
        ) : (
          <div className="space-y-2">
            <p className="font-semibold text-success">Response Data:</p>
            <pre className="p-4 bg-muted/30 rounded-lg overflow-x-auto text-xs font-mono text-foreground">
              {JSON.stringify(response.data, null, 2)}
            </pre>
          </div>
        )}

        <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2 border-t border-border">
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${isSuccess ? "bg-success" : "bg-destructive"}`}></span>
            {isSuccess ? "Success" : "Error"}
          </div>
          <span>•</span>
          <span>HTTP {response.status}</span>
          <span>•</span>
          <span>{new Date().toLocaleTimeString()}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ApiCard;
