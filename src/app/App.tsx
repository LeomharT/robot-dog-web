import { ThemeProvider } from '@/components/ui/theme-provider';
import { TooltipProvider } from '@/components/ui/tooltip';
import AppContent from './AppContent';
import AppHeader from './AppHeader';

export default function App() {
  return (
    <ThemeProvider defaultTheme='light'>
      <TooltipProvider>
        <div className='h-dvh overflow-hidden'>
          <AppHeader />
          <AppContent />
        </div>
      </TooltipProvider>
    </ThemeProvider>
  );
}
