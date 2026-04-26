import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ProgressProvider } from "./contexts/ProgressContext";
import Home from "./pages/Home";
import DayDetail from "./pages/DayDetail";
import MateriList from "./pages/MateriList";
import TopicView from "./pages/TopicView";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/materi" component={MateriList} />
      <Route path="/materi/:day" component={DayDetail} />
      <Route path="/topik" component={TopicView} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <ProgressProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </ProgressProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
