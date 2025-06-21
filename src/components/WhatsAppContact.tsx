import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MessageCircle, Phone } from "lucide-react";

const WhatsAppContact = () => {
  const phoneNumber = "+94718855719";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}`;

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="bg-card/50 backdrop-blur-sm border-border/50">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-accent flex items-center justify-center gap-2">
            <MessageCircle className="h-6 w-6" />
            Get In Touch
          </CardTitle>
          <CardDescription className="text-lg text-muted-foreground">
            Wanna connect with me!
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          {/* <p className="text-muted-foreground">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about technology and development.
          </p> */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 shadow-lg shadow-green-500/50 hover:shadow-green-500/70 transition-all duration-600 animate-pulse rounded-full"
              onClick={() => window.open(whatsappUrl, "_blank")}
            >
              <svg
                className="h-6 w-6 mr-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z" />
              </svg>
              Go to WhatsApp
            </Button>
            {/* <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span className="font-mono">{phoneNumber}</span>
            </div> */}
          </div>
          {/* <p className="text-sm text-muted-foreground mt-4">
            💬 Quick response guaranteed • 📱 Available for calls and messages
          </p> */}
        </CardContent>
      </Card>
    </div>
  );
};

export default WhatsAppContact;
